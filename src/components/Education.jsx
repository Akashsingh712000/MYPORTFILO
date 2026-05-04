import React from 'react';

const Education = () => {
  return (
    <section className="edu-lang-grid reveal">
      <div className="education">
        <div className="section-badge bg-yellow brutal-border brutal-shadow mb-1">
          EDUCATION
        </div>
        <div className="brutal-box">
          <h4>B.Tech in Computer Science & Engineering</h4>
          <p className="text-muted">Roorkee Institute of Technology, Roorkee</p>
          <div className="date-badge bg-blue brutal-border mt-1">Pursuing | CGPA: 7.5</div>
          
          <hr style={{ borderTop: '2px dashed #000', margin: '1.5rem 0' }} />

          <h4>Intermediate (12th)</h4>
          <p className="text-muted">Vivekanand Secondary High School, Dhanbad</p>
          <div className="date-badge bg-pink brutal-border mt-1">80%</div>

          <hr style={{ borderTop: '2px dashed #000', margin: '1.5rem 0' }} />

          <h4>Matriculation (10th)</h4>
          <p className="text-muted">School of Competition, Dhanbad</p>
          <div className="date-badge bg-green brutal-border mt-1">80%</div>
        </div>
      </div>
      
      <div className="languages">
        <div className="section-badge bg-green brutal-border brutal-shadow mb-1">
          ACHIEVEMENTS & LEADERSHIP
        </div>
        <div className="brutal-box">
          <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-trophy" style={{ color: 'var(--yellow)' }}></i> Key Achievements
          </h4>
          <div className="lang-item brutal-border" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span><strong>Hack-32 (2024)</strong></span>
            <p style={{ fontSize: '0.9rem' }}>Ranked Top 6/150+ teams – built a research grant management platform.</p>
          </div>
          <div className="lang-item brutal-border" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span><strong>HackIndia 2025</strong></span>
            <p style={{ fontSize: '0.9rem' }}>Ranked Top 10/65 teams – developed an AI-driven project under 40 hours.</p>
          </div>

          <h4 style={{ margin: '1.5rem 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-users" style={{ color: 'var(--blue)' }}></i> Leadership
          </h4>
          <div className="lang-item brutal-border" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span><strong>Head of Coding Committee</strong></span>
            <p style={{ fontSize: '0.9rem' }}>Organized Hack-32 event successfully.</p>
          </div>
          <div className="lang-item brutal-border" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
            <span><strong>Event Coordinator</strong></span>
            <p style={{ fontSize: '0.9rem' }}>Anugoonj 2024 & Job Fair Simulation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
