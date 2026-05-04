import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact reveal">
      <div className="section-badge bg-yellow brutal-border brutal-shadow mb-2">
        GET IN TOUCH
      </div>
      <h3 className="contact-title">Let's build something amazing together</h3>
      <p style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '500' }}>
        <i className="fa-solid fa-envelope"></i> akashsingh712000@gmail.com | <i className="fa-solid fa-phone"></i> +91-7991185195
      </p>
      <div className="social-cards">
        <a href="https://linkedin.com/in/akash-singh-308a9b255" target="_blank" rel="noreferrer" className="social-card bg-blue brutal-border brutal-shadow">
          <i className="fa-brands fa-linkedin fa-2x"></i>
          <span>LinkedIn</span>
          <div className="tape bg-yellow"></div>
        </a>
        <a href="https://github.com/Akashsingh712000" target="_blank" rel="noreferrer" className="social-card bg-yellow brutal-border brutal-shadow">
          <i className="fa-brands fa-github fa-2x"></i>
          <span>GitHub</span>
          <div className="tape bg-pink"></div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
