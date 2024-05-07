// frontend/pages/products/index.js
import React from 'react';
import ProductList from '../../components/ProductList';
import ProductForm from '../../components/ProductForm';

const ProductsPage = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList />
      <ProductForm />
    </div>
  );
};

export default ProductsPage;
