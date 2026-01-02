import { useEffect } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function About() {
  useEffect(() => {
    initScrollAnimation();
  }, []);
  return (
    <section className="about-dark fade-up">
      <div className="about-header">
        <span className="about-tag">ABOUT US</span>
        <h2>Serving Since 1950</h2>
      </div>

      <div className="about-content">
        {/* LEFT */}
        <div className="about-left">
          <h3>Our Story</h3>
          <p>
            LUXORA was born from a vision to redefine modern dining through
            elegance, precision, and uncompromising quality.
          </p>

          <p>
            What began as a passion for refined flavors has evolved into a
            luxurious culinary destination, where every dish is thoughtfully
            crafted and every detail is intentional.
          </p>
          <p>
            At LUXORA, we don’t just serve food — we curate experiences that
            linger long after the last bite.
          </p>
          <button className="about-btn">Learn More</button>
        </div>

        {/* CENTER IMAGE */}
        <div className="about-image">
          <img src="/assets/about-drink.png" alt="Drink splash" />
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <h3>Our Vision</h3>
          <p>
            To set a new standard in fine dining by blending timeless culinary
            techniques with contemporary innovation — creating moments of luxury
            in every visit.
          </p>

          <ul>
            <li>Premium quality ingredients</li>
            <li>Authentic taste & craftsmanship</li>
            <li>Elegant modern atmosphere</li>
          </ul>

          <button className="about-btn outline">Learn More</button>
        </div>
      </div>
    </section>
  );
}
