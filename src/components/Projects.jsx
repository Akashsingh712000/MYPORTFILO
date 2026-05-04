import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="about reveal">
      <div className="section-badge bg-pink brutal-border brutal-shadow mb-1" style={{ color: '#fff' }}>PROJECTS</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="brutal-box" style={{ marginBottom: 0 }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>AI Trip Planner</h3>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <span className="date-badge bg-blue brutal-border">React.js</span>
            <span className="date-badge bg-yellow brutal-border">TailwindCSS</span>
            <span className="date-badge bg-green brutal-border">Gemini API</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
            <li>Developed an AI-powered travel planner integrating natural language processing for personalized itineraries.</li>
            <li>Designed a responsive and modern UI for a seamless cross-device experience.</li>
          </ul>
        </div>

        <div className="brutal-box" style={{ marginBottom: 0 }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Lazarev-Inspired Website</h3>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <span className="date-badge bg-blue brutal-border">MongoDB</span>
            <span className="date-badge bg-pink brutal-border">Express</span>
            <span className="date-badge bg-yellow brutal-border">React</span>
            <span className="date-badge bg-green brutal-border">Node.js</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
            <li>Built a dynamic personal portfolio website inspired by Lazarev Agency design.</li>
            <li>Implemented interactive UI animations, reusable React components, and optimized backend APIs for scalability.</li>
          </ul>
        </div>

        <div className="brutal-box" style={{ marginBottom: 0 }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Urban Crust POS System</h3>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="date-badge bg-blue brutal-border">React</span>
            <span className="date-badge bg-yellow brutal-border">Node.js</span>
            <span className="date-badge bg-pink brutal-border">MongoDB</span>
            <span className="date-badge bg-green brutal-border">Tailwind</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
            <li>Architected a premium Point of Sale (POS) and Inventory Management interface featuring real-time inventory synchronization and automatic tax calculations.</li>
            <li>Implemented secure Role-Based Access Control (Admin, Manager, Cashier) with advanced dashboard analytics and a cohesive Light/Dark mode UI toggle.</li>
          </ul>
        </div>

        <div className="brutal-box" style={{ marginBottom: 0 }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Vitto Backend Services</h3>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="date-badge bg-yellow brutal-border">Express.js</span>
            <span className="date-badge bg-pink brutal-border">MongoDB</span>
            <span className="date-badge bg-blue brutal-border">AWS</span>
            <span className="date-badge bg-green brutal-border">Auth</span>
          </div>
          <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.6' }}>
            <li>Built a highly secure, OTP-based authentication flow and a robust full-stack sign-up system for institutional and individual applicants.</li>
            <li>Engineered optimized database connections targeting both cloud and local environments to ensure reliable lead storage and seamless data persistence.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;
