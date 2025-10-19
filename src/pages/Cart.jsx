import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { AiOutlineClose } from "react-icons/ai";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";




const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart, decrementFromCart, clearCart } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

  const cartFoodItems = food_list.filter((item) => cartItems[item._id]);

  const grandTotal = cartFoodItems.reduce(
    (acc, item) => acc + (cartItems[item._id] || 0) * item.price,
    0
  );

  const getTotalPrice = (itemId, price) => (cartItems[itemId] || 0) * price;

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to remove ALL items from your cart?")) {
      clearCart();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

      {cartFoodItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          <p className="text-lg">Your cart is empty 😔</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Header (Desktop Only) */}
          <div className="hidden md:grid grid-cols-6 font-medium text-gray-600 border-b pb-2 mb-3 text-sm">
            <p className="col-span-2">Item</p>
            <p>Price</p>
            <p className="text-center">Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>

          {/* Cart Items */}
          <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
            {cartFoodItems.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-2 md:grid-cols-6 items-center border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                {/* Item Info */}
                <div className="flex items-center gap-3 col-span-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover transform hover:scale-105 transition"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>

                    {/* Mobile View Price & Total */}
                    <div className="md:hidden text-sm text-gray-600 mt-1 space-y-1">
                      <p>Price: {formatCurrency(item.price)}</p>
                      <p>Total: {formatCurrency(getTotalPrice(item._id, item.price))}</p>
                    </div>
                  </div>
                </div>

                {/* Price (Desktop) */}
                <p className="hidden md:block text-gray-700">{formatCurrency(item.price)}</p>

                {/* Quantity Controls */}
                <div className="flex justify-center items-center gap-2">
                  <div className="flex gap-2 bg-black text-white py-1 px-2 rounded-md">
                    <CiCircleMinus
                      onClick={() => decrementFromCart(item._id)}
                      className="text-2xl cursor-pointer"
                    />
                    <p className="w-6 text-center">{cartItems[item._id]}</p>
                    <CiCirclePlus
                      onClick={() => addToCart(item._id)}
                      className="text-2xl cursor-pointer"
                    />
                  </div>
                </div>

                {/* Total Price (Desktop) */}
                <p className="hidden md:block text-gray-700">
                  {formatCurrency(getTotalPrice(item._id, item.price))}
                </p>

                {/* Remove Item */}
                <button
                  onClick={() => {
                    if (window.confirm(`Remove ALL ${item.name} from cart?`)) {
                      removeFromCart(item._id);
                    }
                  }}
                  className="flex justify-end md:justify-center"
                >
                  <AiOutlineClose
                    size={22}
                    className="text-red-500 cursor-pointer hover:text-red-700 transition"
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6">
            <p className="text-lg font-semibold text-gray-800">
              Grand Total: <span className="text-indigo-600">{formatCurrency(grandTotal)}</span>
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                Continue Shopping
              </button>

              <button
                onClick={handleClearCart}
                className="px-6 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50 transition"
              >
                Delete All
              </button>

              <button
                onClick={() => navigate("/place-order")}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
