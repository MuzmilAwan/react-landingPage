import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { z } from "zod";
import { signupApi } from "../services/servicesApi.js";
import useStore from "../store/userStore.js";

const signupSchema = z.object({

    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must not exceed 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

    email: z
        .string({ required_error: "Email is required" })
        .min(3, "Email must be at least 3 characters")
        .email("Please enter a valid email address")
        .max(255, "Email is too long"),

    password: z
        .string({ required_error: "Password is required" })
        .min(4, "Password must be at least 4 characters")
        .max(64, "Password must not exceed 64 characters"),

})

export default function SignUp() {

    const navigate = useNavigate();
    const { isLoading, error } = useStore();

    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({ ...prev, [name]: "" }));
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        e.stopPropagation();
        setFieldErrors({});

        const parsed = signupSchema.safeParse(formData);

        if (!parsed.success) {
            const mapped = {};
            parsed.error?.issues?.forEach(({ path, message }) => {
                if (path[0]) mapped[path[0]] = message;
            });
            setFieldErrors(mapped);
            return;
        }

        const result = await signupApi(parsed.data);

        if (result.success) {
            navigate("/explore");
        } else {
            if (Array.isArray(result.errors)) {
                const mapped = {};
                result.errors.forEach(({ field, message }) => {
                    mapped[field] = message;
                });
                setFieldErrors(mapped);
            }
        }
    }

    return (
        <div className="max-w-[1440px] min-w-[300px] mx-auto  flex items-center justify-center flex-col bg-bg-secondary overflow-hidden gap-8 md:gap-16 px-4 py-12 sm:px-6 md:px-12 md:pb-20 lg:px-20">

            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 mt-16">

                <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Already have an account?{" "}
                    <NavLink to="/login" className="hover:underline text-blue-400">Login</NavLink>
                </p>

                {error && (
                    <div className="border border-red-200  text-red-700 text-sm rounded-lg px-4 py-3 mb-4">
                        {error}
                    </div>)}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">

                    <div>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition ${fieldErrors.name ? "border-red-400" : "border-gray-300"
                                }`} />

                        {fieldErrors.name && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                {fieldErrors.name}
                            </p>)}

                    </div>

                    <div>

                        <input
                            type="text"
                            name="email"
                            placeholder="Email Address"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition ${fieldErrors.email ? "border-red-400" : "border-gray-300"}`} />

                        {fieldErrors.email && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                {fieldErrors.email}
                            </p>
                        )}

                    </div>

                    <div>

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition ${fieldErrors.password ? "border-red-400 " : "border-gray-300"}`} />

                        {fieldErrors.password && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                {fieldErrors.password}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-btn text-white py-3 rounded-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition font-medium">
                        {isLoading ? "Creating account..." : "Sign Up"}
                    </button>

                </form>
            </div>
        </div>
    );
};

