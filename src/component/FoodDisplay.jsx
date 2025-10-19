import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { motion } from "framer-motion";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <section className="py-20 bg-gray-50 text-center">
      {/* 🔹 Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-10 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Top Dishes Near You 🍽️
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Discover the most popular meals loved by foodies around you.
        </p>
      </motion.div>

      {/* 🔹 Food List Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {food_list.map((item, index) => {
          if(category === "All" || category === item.category){
            return <FoodItem
                   key={index}
                   id={item._id}
                   name={item.name}
                   description={item.description}
                   price={item.price}
                   image={item.image}
                   />
                  }
                }
                )
                }
      </div>
    </section>
  );
};

export default FoodDisplay;
