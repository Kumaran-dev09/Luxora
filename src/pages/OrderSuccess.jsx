import { useLocation, Link, Navigate } from "react-router-dom";

export default function OrderSuccess() {
  const { state } = useLocation();

  // 🚫 Prevent direct access
  if (!state) {
    return <Navigate to="/menu" replace />;
  }

  const { name, orderId, total, type } = state;

  return (
    <section className="order-success-section">
      <div className="order-success-card">
        {/* ✅ ICON */}
        <i className="bi bi-bag-check-fill success-icon"></i>

        <h2 className="success-title">Order Placed Successfully</h2>

        <p className="success-text">
          Thank you, <strong>{name}</strong>! Your order has been confirmed.
        </p>

        <div className="order-details">
          <p>
            <span>Order ID:</span> #{orderId}
          </p>

          <p>
            <span>Order Type:</span>{" "}
            {type === "delivery" ? "Delivery" : "Table Booking"}
          </p>

          <p className="total">
            <span>Total Paid:</span> ₹{total}
          </p>
        </div>

        <Link to="/menu" className="success-btn">
          Order More Food
        </Link>
      </div>
    </section>
  );
}
