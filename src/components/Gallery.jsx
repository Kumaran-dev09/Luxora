import { menuData } from "../data/menuData";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid">
        {menuData.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.name} />
            <div className="gallery-overlay">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
