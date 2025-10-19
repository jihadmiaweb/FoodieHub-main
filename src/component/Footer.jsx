
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#0e0e1a] text-white overflow-hidden">
      {/* 🔹 Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C190.48 34.61 86.54 3.33 0 0v120h1200V0c-91.03 4.05-159.73 35.81-288.64 56.44C781.52 77.06 600 120 321.39 56.44z"
            className="fill-[#FF6347]"
          ></path>
        </svg>
      </div>

      {/* 🔹 Footer Content */}
      <motion.div
        className="max-w-6xl mx-auto px-6 pt-20 pb-10 flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.h2
          className="text-2xl font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
        >
          🍴 FoodieHub
        </motion.h2>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link to="" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="" className="hover:text-indigo-400 transition">Menu</Link>
          <Link to="" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-indigo-400">
            <FaFacebookF />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-indigo-400">
            <FaInstagram />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-indigo-400">
            <FaTwitter />
          </motion.a>
        </div>
      </motion.div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-800 py-5 relative z-10">
        © {new Date().getFullYear()} FoodieHub — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
