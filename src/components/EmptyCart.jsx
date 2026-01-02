import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="empty-cart-section">
      <div className="empty-cart-card">
        <div className="empty-cart-icon">
          <i className="bi bi-cart-x"></i>
        </div>

        <h2>Your cart is empty</h2>

        <p>
          Looks like you haven’t added any items yet. Explore our menu and add
          something delicious 🍽️
        </p>

        <Link to="/menu" className="empty-cart-btn">
          Go to Menu
        </Link>
      </div>
    </section>
  );
}
