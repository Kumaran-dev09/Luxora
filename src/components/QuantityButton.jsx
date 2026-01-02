export default function QuantityButton({ qty, inc, dec }) {
  return (
    <div className="qty-control">
      <button className="qty-btn" onClick={dec} disabled={qty <= 1}>
        −
      </button>

      <span className="qty-value">{qty}</span>

      <button className="qty-btn" onClick={inc}>
        +
      </button>
    </div>
  );
}
