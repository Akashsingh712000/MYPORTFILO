import React from 'react';

const About = () => {
  return (
    <section id="about" className="about reveal">
      <div className="section-badge bg-yellow brutal-border brutal-shadow mb-1">ABOUT ME</div>
      <div className="about-content brutal-box">
        <p>
          I am a <mark className="hl-yellow">Full Stack Developer</mark> specializing in the <mark className="hl-pink">MERN stack</mark>, driven by a passion for building complex, data-heavy web applications. My professional journey includes serving as an <mark className="hl-blue">AWS Operations Intern at Amazon</mark>, where I monitored critical EC2 and S3 infrastructure, achieved a 98% incident resolution accuracy, and utilized cloud tools to optimize logistics performance across North America.
        </p>
        <br />
        <p>
          I have independently architected and developed robust systems like the <mark className="hl-green">Urban Crust POS System</mark> (a full-scale inventory management and checkout application) and <mark className="hl-pink">Vitto</mark> (a secure backend service with OTP authentication and MongoDB integration). My experience also extends to modern AI integration, having built an <mark className="hl-yellow">AI Trip Planner</mark> leveraging natural language processing and the Gemini API.
        </p>
        <br />
        <p>
          I am also passionately expanding my cloud expertise by diving deeper into <mark className="hl-blue">AWS Cloud Architecture</mark>. Building upon my internship experience, I am actively learning about serverless computing, IAM security, and infrastructure as code to design highly available, cloud-native applications.
        </p>
        <br />
        <p>
          Currently, I am actively refining my work on the POS system and expanding my knowledge in <mark className="hl-green">advanced DevOps (Docker, Kubernetes)</mark> to build more scalable microservices. When I'm not coding or leading hackathons like <mark className="hl-yellow">Hack-32</mark>, you can find me enjoying <mark className="hl-pink">E-Sports or Basketball</mark>!
        </p>
      </div>
    </section>
  );
};

export default About;
