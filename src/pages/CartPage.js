import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-warning mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty!</p>
          <Link to="/" className="btn btn-warning">
            Go Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="list-group">
            {cart.map((item, index) => (
              <div className="list-group-item" key={index}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <span className="fw-bold text-success">{item.price}</span>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)} // Remove from cart
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-end">
            <h4>Total: ₹{calculateTotal()}</h4>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;