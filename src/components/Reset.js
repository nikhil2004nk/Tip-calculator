import "./Reset.css";

export default function Reset({ onReset }) {
  return (
    <div className="reset-container">
      <button className="reset-button" onClick={onReset}>
        <span className="reset-icon">🔄</span>
        <span className="reset-text">Reset Calculator</span>
      </button>
    </div>
  );
} 