import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const OrderForm: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty. Please add some products before placing an order.');
      return;
    }

    console.log('Order Details:', {
      customer: formData,
      items: cart,
    });
    alert('Order placed successfully!');
    clearCart(); // Clear the cart after placing the order
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place an Order</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <button type="submit">Complete Order</button>
    </form>
  );
};

export default OrderForm;