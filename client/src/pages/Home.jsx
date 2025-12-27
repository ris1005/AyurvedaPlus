import React, { useEffect } from "react";
import {
  Brain,
  Heart,
  ShieldCheck,
  Zap,
  Moon,
  Flame,
  Sparkles,
  Leaf
} from "lucide-react";

const Home = () => {
  // Animation Observer Logic
  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal(); // Initial check
    return () => window.removeEventListener("scroll", reveal);
  }, []);
  

  return (
    <div className="fade-in">
      

      {/* Aesthetic Hero */}
      <section className="hero-aesthetic">
        <div className="hero-content">
          <p className="hero-subtitle">✨ The Ancient Science of Wellness</p>
          <h1 className="hero-title">Ayurveda</h1>
          <p style={{color: 'white', fontWeight: '500', letterSpacing: '3px'}}>BLOOM INTO BALANCE</p>
        </div>
      </section>
      <div className="scroll-indicator">
  <span></span>
</div>
      <div className="aesthetic-section">
        
        {/* Topic 1: Philosophy - Knowledge of Life */}
<div className="split-grid reveal" style={{ alignItems: 'center', gap: '40px' }}>
  <div>
    <div className="heading-with-icon" style={{ justifyContent: 'flex-start' }}>
      <span style={{ fontSize: '2.5rem' }}>📜</span>
      <h2 style={{ fontSize: '3.5rem', margin: 0 }}>Knowledge of Life</h2>
    </div>
    
    <p style={{ fontSize: '1.2rem', color: '#444', marginTop: '30px', lineHeight: '1.8' }}>
      Originated over 5,000 years ago in India, Ayurveda is a comprehensive system of healing that has stood the test of time. 
      It is a complete system balancing body, mind, and spirit, recognizing that all aspects of wellness are interconnected. 
      By harmonizing daily routines, diet, and exercise, it creates a lifestyle of lasting vitality.
    </p>

    <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
      <span className="tag-dosha" style={{ background: '#f0f4ef', color: '#2d5a27' }}>
        5,000+ YEARS 
      </span>
      <span className="tag-dosha" style={{ background: '#fdf8f0', color: '#7d4f50' }}>
        HOLISTIC HEALING 
      </span>
    </div>
  </div>

  {/* Figma-Style Photo Stack */}
  <div className="knowledge-photo-stack">
    <div 
      className="knowledge-card card-back-left" 
      style={{ backgroundImage: `url('/images/psl.jpg')` }}
    />
    <div 
      className="knowledge-card card-back-right" 
      style={{ backgroundImage: `url('/images/psr.webp')` }}
    />
    <div 
      className="knowledge-card card-center" 
      style={{ backgroundImage: `url('/images/ps1.webp')` }}
    />
  </div>
</div>

        {/* Topic 2: The Doshas - The "Branches" */}
        <div className="reveal">
          <div className="heading-with-icon">
             <span style={{fontSize: '2.5rem'}}>🍃</span>
             <h2 className="text-center" style={{fontSize: '2.8rem', margin: '40px 0'}}>Your Energy Constitution</h2>
          </div>
          <div className="dosha-aesthetic-grid">
            <div className="aesthetic-card">
              <h3>💨 Vata</h3>
              <p><b>Air & Ether:</b> The force of movement. When balanced, you are a fountain of creativity. When dry, you drift like autumn leaves.</p>
            </div>
            <div className="aesthetic-card" style={{borderTopColor: '#7D4F50'}}>
              <h3>🔥 Pitta</h3>
              <p><b>Fire & Water:</b> The force of transformation. Your inner sun that digests food and ideas with sharp, brilliant precision.</p>
            </div>
            <div className="aesthetic-card" style={{borderTopColor: '#2D5A27'}}>
              <h3>🌱 Kapha</h3>
              <p><b>Earth & Water:</b> The force of structure. The cooling rain that provides the body with its strength, lubrication, and calm.</p>
            </div>
          </div>
        </div>
        {/* Topic: Holistic Benefits */}
<div className="reveal" style={{ marginTop: "120px" }}>
  <div className="text-center">
    <p style={{ letterSpacing: "2px", color: "#7d4f50" }}>WHY AYURVEDA?</p>
    <h2 style={{ fontSize: "3rem", marginBottom: "15px" }}>
      Holistic Benefits for <br />
      <span style={{ color: "var(--color-primary)" }}>
        Mind, Body & Spirit
      </span>
    </h2>
    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 60px",
        fontSize: "1.1rem",
        color: "#555",
        lineHeight: "1.7",
      }}
    >
      Ayurveda addresses the root cause of imbalances rather than just
      symptoms, offering comprehensive benefits that touch every aspect of
      your wellbeing.
    </p>
  </div>

  <div className="dosha-aesthetic-grid">
    <div className="aesthetic-card">
      <div className="icon-box">
    <Brain size={28} />
  </div>
      <h3>Mental Clarity</h3>
      <p>
        Enhance focus, memory, and cognitive function through herbal remedies
        and mindful practices.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Heart size={28} />
  </div>
      <h3>Heart Health</h3>
      <p>
        Support cardiovascular wellness with natural herbs, diet, and
        stress-reducing techniques.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <ShieldCheck size={28} />
  </div>
      <h3>Immune Support</h3>
      <p>
        Strengthen your body’s natural defenses with time-tested Ayurvedic
        immunity boosters.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Zap size={28} />
  </div>
      <h3>Energy & Vitality</h3>
      <p>
        Restore natural energy levels and combat fatigue through balanced
        lifestyle practices.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Moon size={28} />
  </div>
      <h3>Better Sleep</h3>
      <p>
        Achieve restful, rejuvenating sleep with calming routines and herbal
        support.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Flame size={28} />
  </div>
      <h3>Digestion</h3>
      <p>
        Optimize digestive fire (Agni) for better nutrient absorption and gut
        health.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Sparkles size={28} />
  </div>
      <h3>Skin & Beauty</h3>
      <p>
        Radiant skin and natural beauty through internal balance and herbal
        treatments.
      </p>
    </div>

    <div className="aesthetic-card">
      <div className="icon-box">
    <Leaf size={28} />
  </div>
      <h3>Stress Relief</h3>
      <p>
        Find calm and inner peace with meditation, yoga, and adaptogenic herbs.
      </p>
    </div>
  </div>
</div>

{/* Topic: Pillars of Ayurvedic Living */}
<div className="reveal" style={{ marginTop: "140px" }}>
  <div className="text-center">
    <h2 style={{ fontSize: "3rem", marginBottom: "15px" }}>
      The Pillars of <br />
      <span style={{ color: "var(--color-secondary)" }}>
        Ayurvedic Living
      </span>
    </h2>
    <p
      style={{
        maxWidth: "700px",
        margin: "0 auto 60px",
        fontSize: "1.1rem",
        color: "#555",
        lineHeight: "1.7",
      }}
    >
      Ayurveda offers practical wisdom for daily living. These core practices
      form the foundation of a balanced, healthy, and fulfilling life.
    </p>
  </div>

  <div className="dosha-aesthetic-grid">
    <div className="aesthetic-card">
      <h3>01. Dinacharya</h3>
      <small style={{ color: "var(--color-primary)" }}>Daily Routine</small>
      <p>
        Establish a consistent daily routine aligned with nature’s rhythms.
        Wake before sunrise, practice oil pulling, tongue scraping, and
        self-massage for optimal health.
      </p>
    </div>

    <div className="aesthetic-card">
      <h3>02. Ahara</h3>
      <small style={{ color: "var(--color-primary)" }}>Mindful Eating</small>
      <p>
        Food is medicine. Eat according to your dosha, favor fresh and seasonal
        foods, and maintain regular meal times. Proper digestion is the
        foundation of health.
      </p>
    </div>

    <div className="aesthetic-card">
      <h3>03. Pranayama</h3>
      <small style={{ color: "var(--color-primary)" }}>Breath Control</small>
      <p>
        Harness the power of breath to balance energy, calm the mind, and
        support vital life force (Prana). Regular breathing exercises enhance
        overall wellbeing.
      </p>
    </div>

    <div className="aesthetic-card">
      <h3>04. Yoga & Movement</h3>
      <small style={{ color: "var(--color-primary)" }}>Body Wisdom</small>
      <p>
        Practice gentle, dosha-appropriate yoga and movement to maintain
        flexibility, strength, and the free flow of energy throughout the
        body.
      </p>
    </div>

    <div className="aesthetic-card">
      <h3>05. Dhyana</h3>
      <small style={{ color: "var(--color-primary)" }}>Meditation</small>
      <p>
        Cultivate mental clarity and inner peace through regular meditation.
        This ancient practice reduces stress and connects you to your true
        nature.
      </p>
    </div>

    <div className="aesthetic-card">
      <h3>06. Rasayana</h3>
      <small style={{ color: "var(--color-primary)" }}>Rejuvenation</small>
      <p>
        Utilize rejuvenating herbs, treatments, and practices to promote
        longevity, vitality, and the reversal of aging’s effects on body and
        mind.
      </p>
    </div>
  </div>
</div>

        {/* Topic 3: Exercises - The "Flow" */}
        <div className="reveal">
          <div className="heading-with-icon" style={{marginTop: '120px', marginBottom: '40px'}}>
            <span style={{fontSize: '2.5rem'}}>🧘</span>
            <h2 style={{fontSize: '2.8rem', margin: 0}}>Daily Exercises to follow</h2>
          </div>
          <div className="image-card-grid">

  <a
    href="https://youtu.be/AbPufvvYiSw?si=CeGdhGKZ9pZOrv_C"
    target="_blank"
    rel="noopener noreferrer"
    className="image-link"
  >
    <div className="image-box">
      <img src="/images/ex1.jpg" alt="Yoga" />
      <div className="image-overlay">
        <h3>☀️ Sun Salutations</h3>
        <p>Awaken your Agni (digestive fire) at dawn.</p>
      </div>
    </div>
  </a>

  <a
    href="https://youtu.be/blbv5UTBCGg?si=2cS3J6T8ROBKmY0C"
    target="_blank"
    rel="noopener noreferrer"
    className="image-link"
  >
    <div className="image-box">
      <img src="/images/ex2.jpg" alt="Breathing" />
      <div className="image-overlay">
        <h3>🌬️ Pranayama</h3>
        <p>Clear the nadis (energy channels) with breath.</p>
      </div>
    </div>
  </a>

  <a
    href="https://youtu.be/6KtDfVy54Y4?si=bz3DuN7EotFkitQe"
    target="_blank"
    rel="noopener noreferrer"
    className="image-link"
  >
    <div className="image-box">
      <img src="/images/ex3.jpg" alt="Stretch" />
      <div className="image-overlay">
        <h3>🌿 Restorative Yoga</h3>
        <p>Ground your energy back into the earth.</p>
      </div>
    </div>
  </a>

</div>

        </div>

        {/* Final CTA Banner */}
        <div className="cta-banner reveal">
          <div style={{position: 'relative', zIndex: 2}}>
            <h2 style={{color: 'white', fontSize: '2.4rem', border: 'none', marginBottom: '8px'}}>Ready to Heal?</h2>
            <p style={{marginBottom: '28px', fontSize: '1.05rem', opacity: 0.9}}>Plant the seeds of wellness today with our personalized analysis.</p>
            <a href="/guidance" className="btn-nav btn-nav-primary" style={{padding: '14px 42px', background: 'var(--color-secondary)', color: '#000', fontSize: '1rem'}}>
              Start My Journey 🌿
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;