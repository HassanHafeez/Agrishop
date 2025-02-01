// src/pages/Cart.js

import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCard from "../components/ProductCard"; // For displaying individual products in the cart
import OrderConfirmation from "../components/OrderConfirmation"; // For displaying the ordered products
import DeliveryModal from "../components/DeliveryModal"; // Modal for delivery and payment methods

import product_1 from '../Public Asset/P1.png';
import product_2 from '../Public Asset/P2.png';

const Cart = () => {
  const [activeSection, setActiveSection] = useState("all"); // Track which section is active
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'SarSabaz Urea', price: 50, image: product_1, uniqueCode: "P1" },
    { id: 2, name: 'D A P' , price: 80, image: product_2, uniqueCode: "P2" },
    // Add more initial items as needed
  ]);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleOrder = (product) => {
    setOrderedItems([...orderedItems, product]);
    handleRemove(product.id); // Remove the product from cart after ordering
  };

  const handleProceedToPayment = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-50">
      {/* Top navigation buttons */}
      <div className="flex gap-6 mb-8 justify-center">
        <button
          className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "all" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
          onClick={() => setActiveSection("all")}
        >
          All Products
        </button>
        <button
          className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "order" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
          onClick={() => setActiveSection("order")}
        >
          Order Confirmation
        </button>
        <button
          className={`px-6 py-3 text-lg text-white font-semibold rounded-lg transition-colors duration-300 ease-in-out ${activeSection === "delivery" ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"}`}
          onClick={() => setActiveSection("delivery")}
        >
          Delivery & Payment
        </button>
      </div>

      {/* All Products Section */}
      {activeSection === "all" && (
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cartItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onRemove={handleRemove}
                onOrder={handleOrder}
              />
            ))}
          </div>
        </div>
      )}

      {/* Order Confirmation Section */}
      {activeSection === "order" && (
        <OrderConfirmation
          orderedItems={orderedItems}
          onRemoveOrder={(id) => setOrderedItems(orderedItems.filter(item => item.id !== id))}
          onProceedToPayment={handleProceedToPayment}
        />
      )}

      {/* Delivery & Payment Section */}
      {activeSection === "delivery" && (
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Delivery & Payment</h1>
          <p className="text-lg text-gray-600 mb-4">Choose a payment method to proceed:</p>
          <button
            onClick={handleProceedToPayment}
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      )}

      {/* Modal for Delivery and Payment */}
      {isModalOpen && (
        <DeliveryModal
          onClose={closeModal}
          orderedItems={orderedItems}
        />
      )}
    </div>
  );
};

export default Cart;
