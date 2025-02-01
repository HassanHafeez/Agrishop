// src/components/DeliveryModal.js

import React from 'react';
import { FaTimes } from 'react-icons/fa';

const DeliveryModal = ({ onClose, orderedItems }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <p className="text-lg mb-4">You are about to pay for the following items:</p>
        <ul className="space-y-2">
          {orderedItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-around">
          <button className="px-6 py-2 bg-green-700 text-white rounded-full">
            Cash on Delivery
          </button>
          <button className="px-6 py-2 bg-blue-700 text-white rounded-full">
            Card Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryModal;
