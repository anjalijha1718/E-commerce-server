// frontend/pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Ecommerce Dashboard</h1>
      <Link href="/products"><a>Manage Products</a></Link>
      <Link href="/orders"><a>Manage Orders</a></Link>
    </div>
  );
};

export default Home;
