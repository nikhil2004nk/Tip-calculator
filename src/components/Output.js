import "./Output.css";

export default function Output({ bill, tip }) {
  const total = bill + tip;
  
  return (
    <div className="output-container">
      <div className="output-card">
        <div className="output-header">
          <span className="output-icon">🎯</span>
          <h3 className="output-title">Final Amount</h3>
        </div>
        <div className="output-details">
          <div className="amount-breakdown">
            <div className="breakdown-item">
              <span className="breakdown-label">Bill:</span>
              <span className="breakdown-value">₹{bill.toFixed(2)}</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-label">Tip:</span>
              <span className="breakdown-value tip-amount">₹{tip.toFixed(2)}</span>
            </div>
            <div className="breakdown-item total-item">
              <span className="breakdown-label">Total:</span>
              <span className="breakdown-value total-amount">₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 