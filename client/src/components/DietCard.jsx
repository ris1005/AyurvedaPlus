const DietCard = ({ diet }) => (
  <div className="glass-card" style={{ borderTop: "4px solid var(--color-secondary)" }}>
    <h4 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>Balance {diet.condition}</h4>
    <div className="diet-split">
      <div className="diet-col">
        <span className="diet-label pos">Favor</span>
        {diet.recommendedFoods.map((f, i) => <div key={i} className="diet-item">✔ {f}</div>)}
      </div>
      <div className="diet-col">
        <span className="diet-label neg">Avoid</span>
        {diet.foodsToAvoid.map((f, i) => <div key={i} className="diet-item">✘ {f}</div>)}
      </div>
    </div>
  </div>
);

export default DietCard;