import React from 'react';
import { useCart } from '../Context/CartContextProvider'; // Correct context hook
import './Cart.css'; // CSS styles

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <div className="master-container">
      <div className="card">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="item-info">
                    <span><strong>{item.name}</strong></span>
                    <p>Price: ₹{item.price}</p>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                  </div>

                  <div className="item-actions">
                    <button
                      className="inc_desc"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <label>{item.quantity}</label>
                    <button
                      className="inc_desc"
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <button
                      className="delete-cart-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <h3>Total: ₹{totalPrice}</h3>
              <button onClick={clearCart} className="clear-cart-button">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
