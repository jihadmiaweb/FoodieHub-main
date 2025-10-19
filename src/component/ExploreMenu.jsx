import { motion } from "framer-motion";
import { menu_list } from "../data/data";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section className="py-20 bg-gray-50 text-center">
      {/* 🔹 Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-10 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Explore Our Menu 🍱
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Choose from a diverse menu featuring mouth-watering dishes crafted
          with love and fresh ingredients.
        </p>
      </motion.div>

      {/* 🔹 Menu Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6">
        {menu_list.map((item, index) => (
          <motion.div
            onClick={() => setCategory(prev => prev === item.menu_image ? "All" : item.menu_name)}
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center cursor-pointer group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-full border-4 ${category === item.menu_name ? "border-[#FF6347]" : "border-indigo-100"} mb-4`}>
              <motion.img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-700 font-semibold group-hover:text-indigo-600 transition-colors">
              {item.menu_name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
