// frontend/components/OrderList.js
import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../utils/api';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders()
      .then((data) => setOrders(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.product} - ${order.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
