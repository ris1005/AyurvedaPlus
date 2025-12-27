import { sideEffectsData } from "../services/sideEffectsData";

import { useNavigate } from "react-router-dom";
const PostRecovery = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container fade-in">

        {/* Surgeries Heading stays at top */}
        <header style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "3rem" }}>Ayurvedic Support for Surgeries</h2>
        </header>

        {/* NEW: Side Effects Section comes here, above surgery cards */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Common Post-Surgery Side Effects & Ayurvedic Support
          </h2>

          <div className="card-grid">
            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/pain")}>
              <h3>😖 Pain & Inflammation</h3>
              <p>After surgery, pain and swelling are common due to tissue damage.</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Herbal oils, Dashmoola, gentle massage.</li>
                <li><b>Benefit:</b> Natural pain relief without gastric side effects.</li>
              </ul>
            </div>

            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/digestion")}>
              <h3>🍽️ Poor Digestion </h3>
              <p>Medicines and anesthesia weaken digestive fire (Agni).</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Ginger, cumin, light warm meals.</li>
                <li><b>Benefit:</b> Restores appetite and nutrient absorption.</li>
              </ul>
            </div>

            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/wound")}>
              <h3>🩹 Slow Wound Healing</h3>
              <p>Some patients experience delayed tissue repair.</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Jatyadi oil, turmeric, neem care.</li>
                <li><b>Benefit:</b> Supports natural skin regeneration.</li>
              </ul>
            </div>

            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/weakness")}>
              <h3>😴 Weakness & Fatigue</h3>
              <p>Loss of strength is common after illness or surgery.</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Ashwagandha, nourishing diet.</li>
                <li><b>Benefit:</b> Gradual rebuilding of stamina (Ojas).</li>
              </ul>
            </div>

            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/anxiety")}>
              <h3>😟 Anxiety & Restlessness</h3>
              <p>Emotional imbalance may occur post-treatment.</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Brahmi, Shirodhara, breathing practices.</li>
                <li><b>Benefit:</b> Calms nervous system naturally.</li>
              </ul>
            </div>

            <div className="glass-card clickable" onClick={() => navigate("/post-recovery/immunity")}>
              <h3>🛡️ Low Immunity</h3>
              <p>Body defenses may be weakened after medical procedures.</p>
              <ul className="recovery-list">
                <li><b>Ayurveda:</b> Chyawanprash, Rasayana therapy.</li>
                <li><b>Benefit:</b> Improves resistance to infections.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Surgery Cards */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Surgeries avoided or managed by Ayurveda
          </h2>
          <div className="card-grid">
          {/* Piles */}
          <div className="glass-card">
            <div className="icon-circle">🩺</div>
            <h3>Piles (Hemorrhoids)</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Hemorrhoidectomy</li>
              <li><b>Ayurvedic Approach:</b> Ksharasutra therapy, herbal medicines</li>
              <li><b>Outcome:</b> Less pain, minimal bleeding, lower recurrence</li>
            </ul>
          </div>

          {/* Fistula */}
          <div className="glass-card">
            <div className="icon-circle">🧵</div>
            <h3>Fistula-in-Ano</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Fistulectomy</li>
              <li><b>Ayurvedic Approach:</b> Medicated Ksharasutra thread</li>
              <li><b>Outcome:</b> Controlled healing with minimal tissue damage</li>
            </ul>
          </div>

          {/* Kidney Stones */}
          <div className="glass-card">
            <div className="icon-circle">🪨</div>
            <h3>Kidney Stones (Early Stage)</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Lithotripsy</li>
              <li><b>Ayurvedic Approach:</b> Herbal diuretics, diet regulation</li>
              <li><b>Outcome:</b> Stone dissolution and recurrence prevention</li>
            </ul>
          </div>

          {/* Slip Disc */}
          <div className="glass-card">
            <div className="icon-circle">🦴</div>
            <h3>Slip Disc & Sciatica</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Spinal surgery</li>
              <li><b>Ayurvedic Approach:</b> Basti therapy, oil treatments</li>
              <li><b>Outcome:</b> Pain relief and improved mobility</li>
            </ul>
          </div>

          {/* Fibroids */}
          <div className="glass-card">
            <div className="icon-circle">🌸</div>
            <h3>Uterine Fibroids (Small)</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Myomectomy / Hysterectomy</li>
              <li><b>Ayurvedic Approach:</b> Hormonal balancing herbs</li>
              <li><b>Outcome:</b> Symptom control and size management</li>
            </ul>
          </div>

          {/* Tonsillitis */}
          <div className="glass-card">
            <div className="icon-circle">😷</div>
            <h3>Chronic Tonsillitis</h3>
            <ul className="recovery-list">
              <li><b>Common Surgery:</b> Tonsillectomy</li>
              <li><b>Ayurvedic Approach:</b> Immunity boosting herbs, gargles</li>
              <li><b>Outcome:</b> Reduced infections and inflammation</li>
            </ul>
          </div>
        </div>
        </section>

        <div className="safety-alert">
          <p>
            <strong>⚠️ Medical Disclaimer:</strong>  
            Ayurvedic practices support recovery but do not replace medical care.
            Always follow your doctor’s advice for post-surgical treatment.
          </p>
        </div>

      </div>
    </div>
  );
};


export default PostRecovery;
