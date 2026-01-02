import { useEffect } from "react";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function Services() {
  const services = [
    {
      title: "Fast Door Delivery",
      desc: "Hot and fresh food delivered quickly to your doorstep with real-time order tracking.",
      img: "/assets/services/delivery.jpg",
      icon: "🚚",
    },
    {
      title: "Fresh Ingredients",
      desc: "We use hand-picked, high-quality ingredients to ensure great taste and hygiene.",
      img: "/assets/services/ingredients.jpg",
      icon: "🥗",
    },
    {
      title: "Best Quality Food",
      desc: "Prepared by experienced chefs following authentic recipes and modern techniques.",
      img: "/assets/services/quality.jpg",
      icon: "⭐",
    },
    {
      title: "Online Table Booking",
      desc: "Reserve your table easily online for a smooth and hassle-free dining experience.",
      img: "/assets/services/booking.jpg",
      icon: "📅",
    },
  ];
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <span>OUR SERVICES</span>
        <h2>Fresh & Premium Experience</h2>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card fade-left">
            <img src={s.img} alt={s.title} />

            <div className="service-content">
              <div className="service-icon">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
