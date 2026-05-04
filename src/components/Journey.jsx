import React from 'react';

const Journey = () => {
  return (
    <section id="journey" className="journey reveal">
      <div className="section-title brutal-border brutal-shadow bg-white text-center">
        Experience & Journey
      </div>
      <div className="journey-grid brutal-box">
        <div className="timeline">
          <div className="timeline-header brutal-border bg-white">Professional Journey</div>
          <div className="timeline-content">
            {/* Experience Item */}
            <div className="timeline-item">
              <div className="dot bg-black"></div>
              <h4>AWS Operations Intern @ Amazon</h4>
              <span className="date">Sept 2024 - July 2025</span>
              <p>
                • Monitored AWS services (EC2, S3) for performance and uptime, achieving 98% incident resolution accuracy.<br/>
                • Managed and updated logistics data across North America, improving delivery accuracy by 15%.<br/>
                • Coordinated cross-team collaboration and utilized AWS tools to optimize system performance.
              </p>
              <span className="location">
                <i className="fa-solid fa-location-dot"></i> Amazon
              </span>
            </div>
          </div>
        </div>
        <div className="map-container brutal-border">
          <div className="map-header">
            <button className="brutal-icon-btn"><i className="fa-solid fa-plus"></i></button>
            <button className="brutal-icon-btn"><i className="fa-solid fa-minus"></i></button>
            <button className="brutal-icon-btn ms-auto"><i className="fa-solid fa-house"></i></button>
          </div>
          <div className="map-image bg-blue">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
            />
            <div className="map-pin" style={{ top: '35%', left: '20%' }}>
              <i className="fa-solid fa-location-dot fa-2x" style={{ color: 'var(--yellow)', textShadow: '2px 2px 0 #000' }}></i>
            </div>
            <div className="map-pin" style={{ top: '40%', left: '70%' }}>
              <i className="fa-solid fa-location-dot fa-2x" style={{ color: 'var(--yellow)', textShadow: '2px 2px 0 #000' }}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
