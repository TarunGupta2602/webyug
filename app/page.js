"use client";
// pages/index.js
import { useState } from "react";
import { products } from "./data/products";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // To toggle the cart view

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const adjustQuantity = (productId, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleCheckout = () => {
    const total = cart.reduce((acc, item) => acc + (item.price / 100) * item.quantity, 0);
    alert(`Proceeding to checkout with ${cart.length} item(s) in the cart. Total: ₹${total.toFixed(2)}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <h1 className="text-4xl font-semibold text-center mb-8">Product Store</h1>

      {/* Cart Icon at the Top */}
      <div className="fixed top-4 right-4 flex items-center space-x-4 z-50">
  <button
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="relative text-2xl font-semibold bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200"
  >
    🛒
    {cart.length > 0 && (
      <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cart.length}
      </span>
    )}
  </button>
</div>


      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-8 gap-9 mt-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            {/* Image container */}
            <div className="w-full h-72 bg-gray-200 relative">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg" // Cover the image and make sure it fills the container
              />
            </div>

            {/* Product Information */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
              <p className="text-xl font-semibold text-gray-900 mt-4">₹{(product.price / 100).toFixed(2)}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal/Sidebar */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 bg-white w-96 h-full shadow-lg p-6 overflow-y-auto z-50 transition-transform transform translate-x-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-xl font-bold text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
          </div>

          {cart.length > 0 ? (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center">
                    {/* Product Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-0 text-red-500 hover:text-red-700"
                    >
                      ❌
                    </button>
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={() => adjustQuantity(item.id, "decrease")}
                      disabled={item.quantity <= 1}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-200 disabled:opacity-50"
                    >
                      -
                    </button>
                    <span className="mx-4 text-lg text-black font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => adjustQuantity(item.id, "increase")}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">₹{((item.price / 100) * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <div className="text-center mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Checkout ({cart.length} item{cart.length > 1 ? "s" : ""})
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
