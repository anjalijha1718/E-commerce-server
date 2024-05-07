// frontend/components/ProductForm.js
import React, { useState } from 'react';
import { createProduct } from '../utils/api';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createProduct({ name, price });
      alert('Product created successfully!');
      setName('');
      setPrice('');
    } catch (error) {
      console.error(error);
      alert('Failed to create product');
    }
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
