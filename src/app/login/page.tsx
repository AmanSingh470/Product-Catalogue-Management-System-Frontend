"use client";

export default function LoginPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 bg-black"
            style={{
                backgroundImage: "url('/assets/images/login-bg.png')",
            }}
        >
            <div className="relative w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10">

                <div className="text-center lg:text-left text-gray-800 max-w-lg bg-black p-10">
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">
                        <span className="text-red-500">Product</span>{" "}
                        Catalogue
                    </h1>
                    <p className="text-lg lg:text-2xl text-white mt-2">
                        Management System
                    </p>
                </div>

                <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-800">
                        Welcome Back!
                    </h2>

                    <form className="mt-6 space-y-4">

                        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full outline-none bg-transparent"
                                required
                            />
                        </div>

                        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full outline-none bg-transparent"
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-red-500" />
                                Remember me
                            </label>

                            <button type="button" className="text-red-500">
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}