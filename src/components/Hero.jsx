import { useEffect } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function Hero() {
  useEffect(() => {
    initScrollAnimation();
  }, []);
  return (
    <section className="hero">
      <div className="hero-content fade-up">
        <h1>An Aura of Fine Dining</h1>

        <p>
          Crafted flavors, refined ambience, unforgettable moments.
        </p>

        <div className="hero-actions">
          <a href="/menu" className="hero-btn primary">
            Order Now
          </a>

          <a href="#contact" className="hero-btn secondary">
            Book a Table
          </a>
        </div>

        <span className="hero-trust">
          🍽 Serving Coimbatore’s favorite flavors since 1950
        </span>
      </div>
    </section>
  );
}
