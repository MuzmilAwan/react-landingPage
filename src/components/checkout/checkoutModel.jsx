import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "../../services/servicesApi.js";
import useStore from "../../store/userStore.js";
import {

    Elements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements

} from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CardIcons = () => (

    <div className="flex items-center gap-1">

        {/* Visa */}
        <svg viewBox="0 0 38 24" className="w-9 h-6"><rect width="38" height="24" rx="4" fill="#1A1F71" /><path d="M16 7l-2.5 10H11L8.5 9.3c-.1-.5-.3-.7-.7-.9C7.1 8.1 6.3 7.8 5.5 7.6l.1-.6h4.1c.5 0 1 .4 1.1.9l1 5.4L14 7h2zm4 0l-1.8 10h-2.4L17.6 7H20zm7.3 6.8c0-2.3-3.2-2.4-3.2-3.5 0-.3.3-.6 1-.7.3 0 1.2-.1 2.2.4l.4-1.8c-.5-.2-1.2-.4-2-.4-2.1 0-3.6 1.1-3.6 2.8 0 1.2 1.1 1.9 1.9 2.3.9.4 1.1.7 1.1 1 0 .6-.7.8-1.3.8-1.1 0-1.7-.3-2.2-.5l-.4 1.8c.5.2 1.4.5 2.4.5 2.2 0 3.7-1.1 3.7-2.7zm5.4 3.2H35l-1.7-10h-2c-.5 0-.9.3-1 .7L27.1 17h2.4l.5-1.3h2.9l.3 1.3zm-2.5-3.1l1.2-3.3.7 3.3h-1.9z" fill="#fff" /></svg>

        {/* Mastercard */}
        <svg viewBox="0 0 38 24" className="w-9 h-6"><rect width="38" height="24" rx="4" fill="#252525" /><circle cx="15" cy="12" r="7" fill="#EB001B" /><circle cx="23" cy="12" r="7" fill="#F79E1B" /><path d="M19 7.2a7 7 0 010 9.6A7 7 0 0119 7.2z" fill="#FF5F00" /></svg>

        {/* Amex */}
        <svg viewBox="0 0 38 24" className="w-9 h-6"><rect width="38" height="24" rx="4" fill="#2E77BC" /><path d="M8 15V9h6.5l.8 1 .8-1H22v.9l.5-.9h2.8l.5.9V9H29v6h-2.8l-.7-1.1-.7 1.1H10.5L10 14H9v1H8zm2.5-1.5h1l.4-1h.9l.4 1h2V10.5l1.5 3h1l1.5-3V14h1v-3.5h-1.5l-1.3 2.8-1.2-2.8H14v3.2l-.4-1H12l-.4 1h-.6zm1.3-1.5l.4-1 .4 1h-.8zm10.6 1.5h3.1v-1h-2.1v-.8h2v-.9h-2v-.8h2.1V9h-3.1V14z" fill="#fff" /></svg>

    </div>
)

const CheckoutForm = ({ product, onSuccess, onClose }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { userData } = useStore();

    const [clientSecret, setClientSecret] = useState("");
    const [fetchingIntent, setFetchingIntent] = useState(true);
    const [loading, setLoading] = useState(false);
    const [globalError, setGlobalError] = useState("");

    const [fieldErrors, setFieldErrors] = useState({
        cardNumber: "", cardExpiry: "", cardCvc: "",
    })

    const [billing, setBilling] = useState({
        email: userData?.email ?? "",
        name: "",
    })

    const [complete, setComplete] = useState({
        cardNumber: false, cardExpiry: false, cardCvc: false,
    })

    const ELEMENT_OPTIONS = {
        style: {
            base: { fontSize: "15px", color: "#1f2937", fontFamily: "roboto", "::placeholder": { color: "#9ca3af" }, },
            invalid: { color: "#ef4444", iconColor: "#ef4444" },
        },
    }

    useEffect(() => {

        const init = async () => {
            const result = await createPaymentIntent({
                productName: product.name,
                amount: product.price,
            });
            if (result.success) {
                setClientSecret(result.clientSecret);
            } else {
                setGlobalError("Could not initialise payment. Please try again.");
            }
            setFetchingIntent(false);
        }

        init();
    }, [product])

    const handleCardChange = (field) => (e) => {

        setComplete((p) => ({ ...p, [field]: e.complete }));
        setFieldErrors((p) => ({ ...p, [field]: e.error?.message ?? "" }));
    }

    const isFormReady =
        billing.email &&
        billing.name &&
        complete.cardNumber &&
        complete.cardExpiry &&
        complete.cardCvc;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements || !clientSecret) return;

        setLoading(true);
        setGlobalError("");

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: {
                    name: billing.name,
                    email: billing.email,
                },
            },
        })

        if (error) {
            setGlobalError(error.message);
            setLoading(false);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            onSuccess({
                productName: product.name,
                amount: product.price,
                email: billing.email,
            });
        }

        setLoading(false);
    }

    const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400";

    const stripeBoxClass = (field) =>
        `border rounded-lg px-4 py-3 transition focus-within:ring-2 focus-within:ring-purple-400 ${fieldErrors[field] ? "border-red-400" : "border-gray-200"}`

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

            <div className="border border-gray-100 rounded-xl p-5">

                <h3 className="text-sm font-semibold text-gray-700 mb-4">
                    1. Personal details
                </h3>

                <div className="space-y-3">
                    <div>

                        <label className="block text-xs text-gray-500 mb-1">Email address</label>
                        <input
                            type="text"
                            value={billing.email}
                            onChange={(e) => setBilling((p) => ({ ...p, email: e.target.value }))}
                            placeholder="you@example.com"
                            className={inputClass} />

                    </div>
                </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-5">

                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-700">
                        2. Payment details
                    </h3>
                    <CardIcons />

                </div>

                <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    We protect your payment information using encryption to provide bank level security.
                </p>

                <div className="space-y-3">

                    <div>

                        <input
                            type="text"
                            value={billing.name}
                            onChange={(e) => setBilling((p) => ({ ...p, name: e.target.value }))}
                            placeholder="Name on Card"
                            className={inputClass} />

                    </div>

                    <div>
                        <div className={stripeBoxClass("cardNumber")}>

                            {fetchingIntent ? (
                                <span className="text-gray-400 text-sm">Loading...</span>
                            ) : (
                                <CardNumberElement
                                    options={{ ...ELEMENT_OPTIONS, placeholder: "1234 1234 1234 1234", showIcon: true }}
                                    onChange={handleCardChange("cardNumber")} />)}

                        </div>

                        {fieldErrors.cardNumber && (
                            <p className="text-red-500 text-xs mt-1">{fieldErrors.cardNumber}</p>)}

                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>

                            <div className={stripeBoxClass("cardExpiry")}>

                                <CardExpiryElement
                                    options={{ ...ELEMENT_OPTIONS, placeholder: "MM / YY" }}
                                    onChange={handleCardChange("cardExpiry")} />

                            </div>

                            {fieldErrors.cardExpiry && (
                                <p className="text-red-500 text-xs mt-1">{fieldErrors.cardExpiry}</p>)}

                        </div>

                        <div>

                            <div className={stripeBoxClass("cardCvc")}>

                                <CardCvcElement
                                    options={{ ...ELEMENT_OPTIONS, placeholder: "CVC", }}
                                    onChange={handleCardChange("cardCvc")} />

                            </div>

                            {fieldErrors.cardCvc && (
                                <p className="text-red-500 text-xs mt-1">{fieldErrors.cardCvc}</p>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {globalError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                    {globalError}
                </div>
            )}

            <button
                type="submit"
                disabled={loading || fetchingIntent || !isFormReady || !stripe}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-gray-800">

                {loading
                    ? "Processing..."
                    : `Buy Product for $${(product.price)}`}

            </button>

        </form>
    );
}

const CheckoutModal = ({ product, onClose }) => {

    const [paymentDone, setPaymentDone] = useState(false);
    const [paidInfo, setPaidInfo] = useState(null);

    const handleSuccess = (info) => {
        setPaidInfo(info);
        setPaymentDone(true);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">

                {!paymentDone ? (
                    <div className="p-6">

                        <div className="flex items-start justify-between mb-5">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Complete Purchase</h2>
                                <p className="text-gray-400 text-sm">Secure payment powered by Stripe</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition cursor-pointer mt-1">

                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                        </div>

                        <div className="bg-gray-50 rounded-xl px-4 py-3 flex justify-between items-center mb-5">

                            <span className="text-gray-700 font-medium text-sm">{product.name}</span>
                            <span className="text-gray-900 font-bold">
                                ${(product.price)}
                            </span>

                        </div>

                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                product={product}
                                onSuccess={handleSuccess}
                                onClose={onClose} />
                        </Elements>

                    </div>

                ) : (

                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-1">Payment Successful!</h2>
                        <p className="text-gray-400 text-sm mb-6">Thank you for your purchase.</p>

                        <div className="bg-gray-50 rounded-xl p-4 text-left space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Product</span>
                                <span className="font-semibold text-gray-800">{paidInfo.productName}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Amount paid</span>
                                <span className="font-semibold text-gray-800">
                                    ${(product.price)} USD
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Sent to</span>
                                <span className="font-semibold text-gray-800">{paidInfo.email}</span>
                            </div>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium cursor-pointer hover:bg-gray-800 transition"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;