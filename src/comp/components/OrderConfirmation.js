// src/components/OrderConfirmation.js

import React from 'react';

const OrderConfirmation = ({ orderedItems, onRemoveOrder, onProceedToPayment }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
      {orderedItems.length === 0 ? (
        <p>No products in the order yet.</p>
      ) : (
        <div className="space-y-4">
          {orderedItems.map((product) => (
            <div key={product.id} className="flex justify-between items-center border-b py-2">
              <span>{product.name} - ${product.price}</span>
              <button
                className="px-4 py-1 bg-red-500 text-white rounded"
                onClick={() => onRemoveOrder(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="mt-6 px-6 py-2 bg-green-700 text-white rounded-full"
            onClick={onProceedToPayment}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
