import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, total, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [orderType, setOrderType] = useState("delivery");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  function placeOrder() {
    if (cart.length === 0) {
      setError("Your cart is empty");
      return;
    }

    if (!name || !phone) {
      setError("Please fill name and phone number");
      return;
    }

    if (orderType === "delivery" && !address) {
      setError("Please enter delivery address");
      return;
    }

    if (orderType === "table" && (!date || !time)) {
      setError("Please select date and time");
      return;
    }

    setError("");

    navigate("/order-success", {
      state: {
        name,
        orderId: Math.floor(Math.random() * 100000),
        total,
        type: orderType,
      },
    });
    clearCart();
  }

  return (
    <section className="checkout-section">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-grid">
        {/* LEFT SIDE */}
        <div className="checkout-card">
          {/* ORDER TYPE */}
          <div className="order-type">
            <label className={orderType === "delivery" ? "active" : ""}>
              <input
                type="radio"
                name="type"
                checked={orderType === "delivery"}
                onChange={() => setOrderType("delivery")}
              />
              Delivery
            </label>

            <label className={orderType === "table" ? "active" : ""}>
              <input
                type="radio"
                name="type"
                checked={orderType === "table"}
                onChange={() => setOrderType("table")}
              />
              Book Table
            </label>
          </div>

          {/* BILLING */}
          <h4>Billing Details</h4>

          <div className="form-row">
            <input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {orderType === "delivery" && (
            <input
              className="full-input"
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}

          {orderType === "table" && (
            <div className="form-row">
              <input
                type="date"
                className="date-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <select
                className="time-select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select Time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
                <option value="07:00 PM">07:00 PM</option>
                <option value="08:00 PM">08:00 PM</option>
                <option value="09:00 PM">09:00 PM</option>
              </select>
            </div>
          )}

          {/* ERROR MESSAGE */}
          {error && <p className="form-error">{error}</p>}

          <button className="place-order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-summary">
          <h4>My Orders</h4>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name}</span>
              <span>x{item.qty}</span>
            </div>
          ))}

          <div className="summary-total">Total: ₹{total}</div>
        </div>
      </div>
    </section>
  );
}
