// frontend/pages/orders/index.js
import React from 'react';
import OrderList from '../../components/OrderList';
import OrderForm from '../../components/OrderForm';

const OrdersPage = () => {
  return (
    <div>
      <h1>Orders</h1>
      <OrderList />
      <OrderForm />
    </div>
  );
};

export default OrdersPage;
