import "./BillInput.css";

export default function BillInput({ bill, onSetBill }) {
  return (
    <div className="input-group bill-input-group">
      <label className="input-label">
        <span className="label-icon">💳</span>
        How much was the bill?
      </label>
      <div className="input-wrapper">
        <span className="currency-symbol">₹</span>
        <input
          className="input-field bill-input"
          type="number"
          placeholder="0.00"
          value={bill}
          onChange={(e) => onSetBill(Number(e.target.value))}
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
} 