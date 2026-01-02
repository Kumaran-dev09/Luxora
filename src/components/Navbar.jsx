import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { menuData } from "../data/menuData";

export default function Navbar() {
  const { cart } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleSearch(value) {
    setQuery(value);

    window.dispatchEvent(new CustomEvent("search", { detail: value }));

    if (!value) {
      setSuggestions([]);
      return;
    }

    const matches = menuData
      .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 5);

    setSuggestions(matches);
  }

  return (
    <nav className="nav-dark">
      <h2>Lūxora</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <a href="#contact">Book A Table</a>
      </div>

      <div className="nav-actions">
        <div className="search-wrapper">
          <div className="search-box">
            <input
              placeholder="Search food..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="search-icon-btn">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((item) => (
                <Link
                  key={item.id}
                  to="/menu"
                  onClick={() => {
                    setQuery("");
                    setSuggestions([]);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-btn">
          Cart <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}
