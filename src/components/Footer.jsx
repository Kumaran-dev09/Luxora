import { useEffect, useState } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function Footer() {
  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    initScrollAnimation();
  }, []);

  function handleSubmit() {
    if (!name || !phone || !date || !time) {
      setError("Please fill all booking details");
      return;
    }

    setError("");
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

  function handleEmailSend() {
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  }

  return (
    <section id="contact" className="contact-section fade-in">
      <div className="contact-header">
        <h2>Get in Touch to Reserve Your Table</h2>
        <p>
          Whether you're planning a casual dinner or a special celebration,
          we’re here to make your experience seamless.
        </p>
      </div>

      <div className="contact-grid">
        {/* LEFT – FORM */}
        <div className="contact-form-card">
          <h3>Book a Table</h3>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

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

          <textarea placeholder="Message"></textarea>

          {error && <p className="form-error">{error}</p>}

          <button className="contact-btn" onClick={handleSubmit}>
            Book a Reservation
          </button>

          {sent && (
            <p className="message-success">✅ Message sent successfully</p>
          )}
        </div>

        {/* RIGHT – INFO */}
        <div className="contact-info-card">
          <div className="info-box">
            <h4>Stay Connected</h4>
            <div className="email-box">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="email-send-btn" onClick={handleEmailSend}>
                Send
              </button>
            </div>

            {emailError && <p className="form-error">{emailError}</p>}

            <div className="social-icons">
              <a href="https://instagram.com" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          <div className="info-box">
            <h4>Our Location</h4>
            <p>
              Lounge Restaurant
              <br />
              Coimbatore, Tamil Nadu
              <br />
              India
            </p>
          </div>

          <div className="info-box">
            <h4>Opening Hours</h4>
            <p>
              <span className="highlight">9AM – 11PM</span>
              <br />
              Everyday
            </p>
          </div>

          {/* EMAIL + SOCIAL */}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 LUXORA Restaurant. All rights reserved.</span>

        <span className="footer-dev">Developed by Kumaran</span>
      </div>
    </section>
  );
}
