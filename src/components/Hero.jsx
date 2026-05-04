import React, { useState } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero brutal-box">
      <div className="hero-content">
        <p className="greeting">
          Hi there! <span className="wave">👋</span>
        </p>
        <h1 className="title">I'm Akash Kumar Singh.</h1>
        <p className="subtitle">
          I'm a Results-driven <strong>Full Stack Developer</strong> specializing in the MERN stack with experience in AWS cloud and DevOps tools. Skilled in building dynamic, scalable web applications, and delivering high-performance user experiences.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="brutal-btn bg-blue">Contact Me</a>
          <a href="https://github.com/Akashsingh712000" target="_blank" rel="noreferrer" className="coffee-link">
            View GitHub <i className="fa-solid fa-arrow-trend-up"></i>
          </a>
        </div>
      </div>
      <div 
        className="hero-image" 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="image-wrapper brutal-border brutal-shadow bg-blue">
          <img
            src="/akash_avatar.png"
            alt="Akash Avatar"
            className="avatar-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderBottom: '3px solid #000' }}
          />
          <div className="badge bg-green brutal-border">MERN & AWS</div>
        </div>
        {/* Floating Elements */}
        <div 
          className="floating-icon icon-1 bg-yellow brutal-border"
          style={{ transform: `translate(${mousePos.x * 0.05}px, ${mousePos.y * 0.05}px) rotate(-15deg)` }}
        >
          <i className="fa-brands fa-aws"></i>
        </div>
        <div 
          className="floating-icon icon-2 bg-pink brutal-border"
          style={{ transform: `translate(${mousePos.x * -0.05}px, ${mousePos.y * -0.05}px) rotate(15deg)` }}
        >
          <i className="fa-brands fa-react"></i>
        </div>
        <div 
          className="floating-icon icon-3 bg-green brutal-border"
          style={{ transform: `translate(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px) rotate(-10deg)` }}
        >
          <i className="fa-brands fa-node-js"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
