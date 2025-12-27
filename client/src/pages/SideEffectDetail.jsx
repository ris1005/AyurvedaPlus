import { useParams, Link } from "react-router-dom";
import { sideEffectsData } from "../services/sideEffectsData";

const SideEffectDetail = () => {
  const { effect } = useParams();
  const data = sideEffectsData[effect];

  if (!data) return <div className="wiki-master-container"><h1>Information not found.</h1></div>;

  return (
    <div className="wiki-master-container fade-in">
      <nav className="wiki-breadcrumbs">
      <Link to="/post-recovery" className="back-link">
        <span className="arrow">←</span> Return to Post-Recovery Overview
      </Link>
      <span className="separator">|</span>
      <span className="current-page">{data.title}</span>
    </nav>

      <div className="wiki-layout">
        {/* ENHANCED INFOCARD */}
        <aside className="wiki-sidebar">
        <div className="sidebar-header">{data.title}</div>
        <table className="sidebar-info-table">
          <tbody>
            <tr><th colSpan="2" className="table-sub-head">Clinical Profile</th></tr>
            <tr><th>System</th><td>{data.system}</td></tr>
            <tr><th>Dosha</th><td>{data.dosha}</td></tr>
            <tr><th>Action</th><td>{data.actionType}</td></tr>
            <tr><th colSpan="2" className="table-sub-head">Recovery Stage</th></tr>
            <tr><th>Timeline</th><td>{data.timeline}</td></tr>
          </tbody>
        </table>
        <div className="sidebar-alert">Medical advice required for post-op use.</div>
      </aside>
        <main className="wiki-main">
          <h1 className="wiki-h1">{data.title}</h1>
          <p className="wiki-tagline">Scientific Analysis & Ayurvedic Recovery Protocol</p>
          
          {/* QUICK SUMMARY BAR */}
          

          <div className="wiki-toc">
  <div className="toc-title">Contents</div>
  <ul>
    {data.sections.map((sec, i) => (
      <li key={i}>
        <a href={`#section-${i}`}>
          <span className="toc-number">{i + 1}</span> {sec.heading}
        </a>
      </li>
    ))}
    <li>
      <a href="#protocol">
        <span className="toc-number">{data.sections.length + 1}</span> Recovery Protocol
      </a>
    </li>
    <li>
      <a href="#media">
        <span className="toc-number">{data.sections.length + 2}</span> Clinical Media
      </a>
    </li>
  </ul>
</div>

          {/* DYNAMIC SECTIONS */}
          {data.sections.map((sec, i) => (
            <section key={i} id={`section-${i}`} className="wiki-section">
              <h2 className="wiki-h2">{sec.heading}</h2>
              <p>{sec.content}</p>
              {sec.list && <ul className="wiki-list">{sec.list.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
            </section>
          ))}

          {/* WORKING PROTOCOL SECTION (Instructional Photos) */}
          <section id="protocol" className="wiki-section">
  <h2 className="wiki-h2">Recovery Protocol</h2>
  <div className="protocol-steps">
    {data.protocolSteps?.map((step, idx) => (
      <div key={idx} className="protocol-row">
        {/* The Text Instruction */}
        <div className="step-card">
          <div className="step-number">{idx + 1}</div>
          <div className="step-content">
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        </div>

        {/* The Image Gallery below the instruction */}
        <div className="step-gallery">
          {/* Example: mapping through a 'stepImages' array if you add one to your data */}
          {step.stepImages?.map((imgUrl, imgIdx) => (
            <div key={imgIdx} className="gallery-item">
              <img src={imgUrl} alt={`${step.title} visual ${imgIdx + 1}`} />
            </div>
          ))}
          
          {/* Fallback: If you only have one 'img' property, display it twice with different contexts */}
          {!step.stepImages && step.img && (
            <>
              <div className="gallery-item"><img src={step.img} alt="Primary" /></div>
              <div className="gallery-item secondary-img"><img src={data.images[0]} alt="Context" /></div>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

          {/* MEDIA GALLERY */}
          <section id="media" className="wiki-section">
            <h2 className="wiki-h2">Clinical Media & Tutorials</h2>
            <div className="wiki-video-wrapper">
              <iframe 
                src={data.video} 
                title="Instructional Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
              />
            </div>
          </section>
          <div className="wiki-summary-box">
             <p><strong>Summary:</strong> {data.summary}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SideEffectDetail;