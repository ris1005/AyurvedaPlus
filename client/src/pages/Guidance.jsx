import { useState } from "react";
import api from "../services/api";
import SymptomInput from "../components/SymptomInput";
import RemedyCard from "../components/RemedyCard";
import DietCard from "../components/DietCard";
import { useRef } from "react";

const Guidance = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef(null);

  const handleSubmit = async (symptoms) => {
    if (symptoms.length === 0) {
      setError("Please enter at least one symptom.");
      setResult(null);
      return;
    }
    setLoading(true); setResult(null); setError("");
    try {
      const res = await api.post("/symptoms/check", { symptoms });
      if (res.data.message) {
        setError(res.data.message);
        setResult(null);
      } else {
        setResult(res.data);
        setTimeout(() => {
  resultRef.current?.scrollIntoView({ behavior: "smooth" });
}, 200);

      }
    } catch (err) {
      setError("Unable to connect. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Guidance.jsx
return (
  <div className="guidance-page-wrapper">
    

    {/* Use guidance-wrapper instead of container for better control */}
    <div className="guidance-wrapper">
      <div className="input-area fade-in">
        <SymptomInput onSubmit={handleSubmit} />
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "40px" }}>
          <div className="spinner"></div>
          <p style={{ color: "var(--color-primary)", fontWeight: "600" }}>
            Analyzing your Prakriti...
          </p>
        </div>
      )}

      {error && <div className="error-box">{error}</div>}

      {result && (
        <div ref={resultRef} className="fade-in">
          <section className="glass-card" style={{ marginBottom: "30px", borderLeft: "6px solid var(--color-primary)" }}>
            <h2 style={{ border: "none", marginTop: 0 }}>Dosha Analysis</h2>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {result.doshaImbalance.map(dosha => (
                <span key={dosha} className="tag-dosha">{dosha}</span>
              ))}
            </div>
          </section>

          <h2 className="section-title">Recommended Remedies</h2>
          <div className="card-grid">
            {Object.entries(result.remedies).map(([symptom, remedies]) => (
              <div key={symptom}>
                <h3 style={{ textTransform: "capitalize", color: "var(--color-accent)", marginBottom: "15px" }}>
                  For {symptom}
                </h3>
                {remedies.map(r => <RemedyCard key={r._id} remedy={r} />)}
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: "50px" }}>Dietary Path</h2>
          <div className="card-grid">
            {result.dietPlans.map(d => <DietCard key={d._id} diet={d} />)}
          </div>
          
          <footer style={{ marginTop: "40px", padding: "20px", borderTop: "1px solid #eee", fontSize: "0.9rem", color: "#888" }}>
            <p>{result.disclaimer}</p>
            <p>* Always consult a professional Ayurvedic physician (Vaidya) for clinical concerns.</p>
          </footer>
        </div>
      )}
    </div>
  </div>
);
};
export default Guidance;

