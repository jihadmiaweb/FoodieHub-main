import { motion } from "framer-motion";
import { useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { StoreContext } from "../context/StoreContext";
const FoodItem = ({ id, name, price, description, image }) => {


  const { addToCart, } = useContext(StoreContext);
  // const itemCount = cartItems[id] || 0;



  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* 🔹 Food Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* 🔹 Food Info */}
      <div className="p-5 text-left flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        {/* 🔹 Price & Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-black px-3 py-1 rounded-2xl font-bold  bg-blue-600 text-lg">${price}</span>
          <motion.button
            onClick={() => addToCart(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
          >
            Add +
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default FoodItem;
