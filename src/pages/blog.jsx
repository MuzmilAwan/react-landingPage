import { useState } from "react";
import CheckoutModal from "../components/checkout/checkoutModel.jsx";
import useStore from "../store/userStore.js";

const PRODUCTS = [
    {
        id: 1,
        name: "Gray Headpone",
        description: "Perfect for individuals with good price",
        price: 59,
        image: "/homePage/products/product-1.webp",
    },
    {
        id: 2,
        name: "Pro Heaphone",
        description: "Advanced features for all purposes",
        price: 29,
        image: "/homePage/products/product-2.webp",
    },
    {
        id: 3,
        name: "E Watch",
        description: "Premium quality for premium people",
        price: 99,
        image: "/homePage/products/product-3.webp",
    },
    {
        id: 4,
        name: "Iphone",
        description: "A choice for smart people",
        price: 199,
        image: "/homePage/products/product-4.webp",
    },
    {
        id: 5,
        name: "Hp Laptop",
        description: "Premium quality for premium people",
        price: 249,
        image: "/homePage/products/product-5.webp",
    },
]

const formatPrice = (cents) => `$${(cents)}`;

const Blog = () => {
    const { userData } = useStore();
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="max-w-[1440px] min-w-[300px] mx-auto px-4 py-12 sm:px-6 md:px-12 lg:px-20">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
                <p className="text-gray-500 text-lg">Simple, transparent pricing for everyone</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-xl border border-gray-100" >

                        <div className="relative w-full h-44 bg-gray-50">

                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                onError={"Product image"} />

                        </div>

                        <div className="p-6 flex flex-col flex-1">

                            <h3 className="text-xl font-bold text-gray-800 mb-1">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                            <div className="flex items-center justify-between mt-auto">

                                <span className="text-2xl font-bold text-gray-900">
                                    {formatPrice(product.price)}
                                </span>

                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    disabled={!userData}
                                    className="bg-btn text-white px-5 py-2 rounded-xl font-medium text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition hover:opacity-90">
                                    Buy Now
                                </button>

                            </div>

                            {!userData && (
                                <p className="text-xs text-red-400 mt-2 text-center">Login to purchase</p>
                            )}

                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <CheckoutModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)} />)}
        </div>
    )
}

export default Blog;