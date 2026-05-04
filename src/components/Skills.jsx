import React from 'react';

const Skills = () => {
  const skillItems = [
    <><i className="fa-brands fa-react"></i> React.js</>,
    <><i className="fa-brands fa-node-js"></i> Node.js</>,
    <><i className="fa-brands fa-python"></i> Python</>,
    <><i className="fa-solid fa-c"></i> C++</>,
    <><i className="fa-brands fa-js"></i> JavaScript</>,
    <><i className="fa-solid fa-leaf"></i> MongoDB</>,
    <><i className="fa-solid fa-database"></i> MySQL</>,
    <><i className="fa-brands fa-aws"></i> AWS Cloud</>,
    <><i className="fa-solid fa-server"></i> AWS EC2 & S3</>,
    <><i className="fa-solid fa-bolt"></i> Serverless</>,
    <><i className="fa-brands fa-docker"></i> Docker & K8s</>,
    <><i className="fa-brands fa-git-alt"></i> DevOps</>
  ];

  return (
    <section id="skills" className="skills-wrapper reveal">
      <div className="skills-banner">
        {/* Render the list twice to create a seamless infinite marquee */}
        {[...skillItems, ...skillItems].map((skill, index) => (
          <div 
            key={index} 
            className={`skill-tag brutal-border ${index % 2 === 0 ? 'bg-white' : (index % 3 === 0 ? 'bg-blue' : (index % 5 === 0 ? 'bg-pink' : 'bg-yellow'))}`}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
