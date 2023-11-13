import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';

const Product = ({ id, name, price, addToCart }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => addToCart({ id, name, price })}>Add to Cart</button>
    </div>
  );
};

const ShoppingCart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

const MyShops = () => {
  const [cart, setCart] = useState([]);
  const [isActive, setIsActive] = useState(false)
  const [payment, setPayment] = useState({amount:0})


  const addToCart = (product) => {
    setCart([...cart, product]);
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setPayment((prevState)=>(
        {
            ...prevState,
            amount:total
        }
    ))

  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    const total = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setPayment((prevState)=>(
        {
            ...prevState,
            amount:total
        }
    ))
  };

  const products = [
    { id: 1, name: 'Product 1', price: 10.00 },
    { id: 2, name: 'Product 2', price: 15.00 },
    // Add more products as needed
  ];
const handlePayment = () =>{
    setIsActive(true)
}
const KeyId = 'rzp_test_2lMNqLM1b7QnqZ';
console.log(payment,"cart")
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
      <button onClick={()=>{handlePayment()}}>Pay Now</button>
{isActive ? 
    <Dashboard KeyId={KeyId} amount={payment?.amount}  /> 
:""}
    </div>
  );
};

export default MyShops;
