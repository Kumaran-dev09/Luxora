import { useContext, useState, useEffect, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { menuData } from "../data/menuData";
import CategoryFilter from "../components/CategoryFilter";
import CartPreview from "../components/CartPreview";
import { initScrollAnimation } from "../utils/scrollAnimation";

export default function Menu({ embedded = false }) {
  const { addToCart } = useContext(CartContext);
  let autoCloserTimer;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [search, setSearch] = useState("");

  /* 🔍 LISTEN SEARCH FROM NAVBAR (SAFE) */
  useEffect(() => {
    const handleSearch = (e) => {
      setSearch(e.detail?.toLowerCase() || "");
    };

    window.addEventListener("search", handleSearch);
    return () => window.removeEventListener("search", handleSearch);
  }, []);

  /* ✅ SINGLE SOURCE OF TRUTH (menuData) */
  const filteredMenu = useMemo(() => {
    let data = menuData;

    if (selectedCategory !== "All") {
      data = data.filter((item) => item.category === selectedCategory);
    }

    if (search.trim() !== "") {
      data = data.filter((item) => item.name.toLowerCase().includes(search));
    }

    return data;
  }, [selectedCategory, search]);

  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section className="menu-section fade-up">
      {!embedded && <h2 className="menu-title">Our Menu</h2>}

      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="menu-grid">
        {filteredMenu.length === 0 ? (
          <p className="empty-text">No items found.</p>
        ) : (
          filteredMenu.map((item) => (
            <div key={item.id} className="menu-card">
              {/* IMAGE — YOU WILL ADD FILE */}
              <img src={item.image} alt={item.name} className="menu-img" />

              <h5>{item.name}</h5>
              <p className="price">₹{item.price}</p>

              <button
                className="btn-add"
                onClick={() => {
                  addToCart(item);
                  setPreviewOpen(true);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🛒 SIDE CART PREVIEW */}
      <CartPreview open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </section>
  );
}
