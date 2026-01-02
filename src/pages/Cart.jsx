import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantityButton from "../components/QuantityButton";
import EmptyCart from "../components/EmptyCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeItem, total } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="cart-page">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h4>{item.name}</h4>
              <p className="cart-price">
                ₹{item.price} × {item.qty}
              </p>
            </div>

            <div className="cart-actions">
              <QuantityButton
                qty={item.qty}
                inc={() => updateQty(item.id, item.qty + 1)}
                dec={() => updateQty(item.id, item.qty - 1)}
              />

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>

        <Link to="/checkout" className="checkout-btn">
          Proceed to Checkout
        </Link>
        <button
          className="clear-cart-btn"
          onClick={() => {
            if (window.confirm("Clear all items from cart?")) {
              clearCart();
            }
          }}
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
}
