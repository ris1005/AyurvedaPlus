const RemedyCard = ({ remedy }) => (
  <div className="glass-card remedy-hover" style={{ marginBottom: "20px" }}>
    <h3 style={{ color: "var(--color-primary)", marginBottom: "5px" }}>{remedy.name}</h3>
    <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "15px", display: "flex", gap: "15px" }}>
      <span>⏳ {remedy.duration}</span>
      <span>🥄 {remedy.usage}</span>
    </div>
    <p style={{ fontWeight: "600", fontSize: "0.9rem" }}>Method:</p>
    <ol style={{ paddingLeft: "18px", fontSize: "0.95rem" }}>
      {remedy.procedure.map((step, i) => <li key={i} style={{ marginBottom: "5px" }}>{step}</li>)}
    </ol>
    {remedy.precautions && remedy.precautions.length > 0 && (
      <>
        <p style={{ fontWeight: "600", fontSize: "0.9rem", marginTop: "10px" }}>⚠ Precautions:</p>
        <ul style={{ paddingLeft: "18px", fontSize: "0.9rem" }}>
          {remedy.precautions.map((precaution, i) => (
            <li key={i} style={{ marginBottom: "5px" }}>{precaution}</li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default RemedyCard;