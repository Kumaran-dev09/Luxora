import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPreview({ open, onClose }) {
  const { cart, total } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);

  return (
    <div className={`cart-preview ${open ? "open" : ""}`}>
      {/* HEADER */}
      <div className="cart-preview-header">
        <h4>Your Cart</h4>
        <button className="cart-preview-close" onClick={onClose}>
          ×
        </button>
      </div>

      {/* BODY (SCROLLABLE) */}
      <div className="cart-preview-body">
        {cart.length === 0 ? (
          <p className="empty-text">Cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-preview-item">
                <span>{item.name}</span>
                <span>x{item.qty}</span>
              </div>
            ))}

            <div className="cart-preview-total">Total: ₹{total}</div>
          </>
        )}
      </div>

      {/* FOOTER (FIXED BOTTOM) */}
      {cart.length > 0 && (
        <div className="cart-preview-footer">
          <Link to="/cart" className="cart-view-btn" onClick={onClose}>
            Go to Cart
          </Link>
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
