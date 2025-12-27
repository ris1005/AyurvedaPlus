import { useState } from "react";

const SymptomInput = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = () => {
    const symptoms = text
      .split(/,\s*|\n/) // Support comma or new line separation
      .map(s => s.trim().toLowerCase()) //
      .filter(Boolean); //

    if (symptoms.length === 0) { //
      setError("Please enter at least one symptom."); //
      return;
    }

    setError(""); //
    onSubmit(symptoms); //
  };

  return (
    <div className="input-card">
      <h2 className="input-title">Share your symptoms</h2>
      <p className="input-subtitle">
        Separate multiple symptoms with commas or new lines.
      </p>

      <div className="textarea-wrapper">
        <textarea
  rows="4"
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // stop new line
      handleSubmit();     // begin analysis
    }
  }}
  placeholder="e.g. knee pain, stress, acidity"
  className="premium-textarea"
/>

        <div className="input-hint">Example: dry skin, fatigue, bloating</div>
      </div>

      {error && <p className="error-text">{error}</p>}

      <div className="button-container">
        <button 
          onClick={handleSubmit} //
          className="btn-submit"
          disabled={text.trim().length === 0} //
        >
          Begin Analysis
        </button>
      </div>
    </div>
  );
};

export default SymptomInput;