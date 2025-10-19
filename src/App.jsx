import React, { useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Footer from "./component/Footer";
import LoginPopup from "./component/LoginPopup";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";


const App = () => {
  const [showLogin, setShowLogin] = useState(false); // ✅ fixed

  return (
    <>
      {showLogin && (
        <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} />
      )}

      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
