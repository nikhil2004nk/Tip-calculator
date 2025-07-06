import "./Reset.css";

export default function Reset({ onReset }) {
  return (
    <div className="reset-container">
      <button className="reset-button" onClick={onReset}>
        Reset Calculator
      </button>
    </div>
  );
} 