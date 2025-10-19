import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate()

  return (
    <nav className="bg-white  fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        
        {/* 🔹 Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 text-2xl w-10 h-10 flex items-center justify-center rounded-xl">
            🍴
          </div>
          <h1 className="text-xl font-bold text-indigo-600">
           FoodieHub 
          </h1>
        </div>

        {/* 🔹 Menu Items (Desktop) */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li
           className={`relative cursor-pointer hover:text-indigo-600 transition-all duration-300 ${
            active === "home" ? "text-indigo-600" : ""
          }`}
          onClick={() => setActive("home")}
          ><Link to={"/"}>Home</Link></li>


          <li 
          className={`relative cursor-pointer hover:text-indigo-600 transition-all duration-300 ${
            active === "menu" ? "text-indigo-600" : ""
          }`}
           onClick={() => setActive("menu")}
          >Menu</li>

          <li className={`relative cursor-pointer hover:text-indigo-600 transition-all duration-300 ${
            active === "app" ? "text-indigo-600" : ""
          }`}
           onClick={() => setActive("app")}
          >Mobile App</li>


          <li className={`relative cursor-pointer hover:text-indigo-600 transition-all duration-300 ${
            active === "contact" ? "text-indigo-600" : ""
          }`}
          onClick={() => setActive("contact")}
          ><Link to={"/contact"}>Contact Us</Link></li>

        </ul>

        {/* 🔹 Right Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
          <div onClick={() => navigate("/cart")} className="relative">
            <div className="w-2 h-2 rounded-full bg-[#FF6347] absolute -top-1.5 right-0"></div>
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-indigo-600" />
          </div>
          <button onClick={() => setShowLogin(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition">
            Login
          </button>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-inner py-4 px-6 space-y-4 font-medium text-gray-700">
          <a href="#" className="block hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Menu
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Mobile App
          </a>
          <a href="#" className="block hover:text-indigo-600">
            Contact Us
          </a>
          <div className="flex items-center justify-between pt-3 border-t">
            <div className="flex space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
              <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-indigo-600" />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
