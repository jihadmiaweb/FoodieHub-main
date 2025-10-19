import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      className="relative h-[40vh] max-w-7xl mx-auto px-4 md:px-8  flex bg-cover bg-center rounded-2xl overflow-hidden mt-16"
    >
      {/* 🔹 Background Image */}
      <img
        src="/banner.png"
        alt="Food Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🔹 Content */}
      <motion.div
        className="relative z-10 text-white max-w-2xl px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold my-4 leading-tight drop-shadow-lg">
          Order your <br /> favourite food here 🍔
        </h2>

        <p className="text-base md:text-lg mb-8  leading-relaxed ">
          Choose from a wide range of delicious meals <br />— freshly made and delivered fast to your doorstep!
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all"
        >
          View Menu
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Header;
