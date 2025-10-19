
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const LoginPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
        >
          {/* Popup Box */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl w-[90%] max-w-md p-8 text-gray-800"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition text-2xl"
            >
              <IoClose />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
              {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
            </h2>

            {/* Form */}
            <form className="flex flex-col gap-4">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border rounded-xl px-4 py-2 outline-none focus:border-indigo-500"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="border rounded-xl px-4 py-2 outline-none focus:border-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border rounded-xl px-4 py-2 outline-none focus:border-indigo-500"
              />

              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  Remember me
                </label>
                <button className="hover:text-indigo-600">
                  Forgot Password?
                </button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium transition"
              >
                {isLogin ? "Login" : "Sign Up"}
              </motion.button>
            </form>

            {/* OR divider */}
            <div className="flex items-center my-5">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Login */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl w-full hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-2xl" /> Continue with Google
            </motion.button>

            {/* Switch Login / Signup */}
            <p className="text-sm text-center mt-5 text-gray-600">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                className="text-indigo-600 font-semibold hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;

