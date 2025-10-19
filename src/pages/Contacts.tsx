import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";

/** 🌈 Reusable Gradient Button */
function GradientButton({ children, ...props }) {
    return (
        <button
            {...props}
            className="px-6 py-3 font-semibold rounded-lg text-white 
      bg-gradient-to-r from-blue-500 to-green-500 
      hover:from-green-500 hover:to-blue-500 
      transition-all duration-300 shadow-md w-full sm:w-auto"
        >
            {children}
        </button>
    );
}

/** ✉️ Contact Section */
export default function Contacts() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    // Show scroll-to-top button
    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 250);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${form.name}, message sent successfully!`);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4 sm:px-6 lg:px-10">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-gray-800"
            >
                Get in <span className="text-green-500">Touch</span>
            </motion.h2>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12 text-gray-700">
                <div className="flex items-center justify-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
                    <FaEnvelope className="text-blue-600 text-2xl mr-3" />
                    <span className="text-sm sm:text-base">jihadmia@example.com</span>
                </div>
                <div className="flex items-center justify-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
                    <FaPhoneAlt className="text-green-600 text-2xl mr-3" />
                    <span className="text-sm sm:text-base">+880 1234 567890</span>
                </div>
                <div className="flex items-center justify-center bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
                    <FaMapMarkerAlt className="text-rose-600 text-2xl mr-3" />
                    <span className="text-sm sm:text-base">Dhaka, Bangladesh</span>
                </div>
            </div>

            {/* Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-lg"
            >
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-gray-700 font-medium">Message</label>
                    <textarea
                        rows="4"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
                        placeholder="Write your message..."
                    ></textarea>
                </div>

                <div className="flex justify-center sm:justify-end">
                    <GradientButton type="submit">Send Message</GradientButton>
                </div>
            </motion.form>

            {/* Scroll to Top Button */}
            {showTopBtn && (
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </section>
    );
}
