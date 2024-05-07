// frontend/components/OrderForm.js
import React, { useState } from 'react';
import { createOrder } from '../utils/api';

const OrderForm = () => {
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createOrder({ product, amount });
      alert('Order created successfully!');
      setProduct('');
      setAmount('');
    } catch (error) {
      console.error(error);
      alert('Failed to create order');
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
