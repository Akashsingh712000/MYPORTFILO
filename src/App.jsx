import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Dynamically load components using React.lazy for code splitting
const Skills = lazy(() => import('./components/Skills'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Journey = lazy(() => import('./components/Journey'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

// A fun Neo-Brutalist loading placeholder
const LoaderFallback = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center', border: '3px solid #000', backgroundColor: '#e5e5e5', margin: '2rem 0', boxShadow: '6px 6px 0px #000' }}>
    <h3 style={{ margin: 0 }}>Loading {title}... <i className="fa-solid fa-spinner fa-spin"></i></h3>
  </div>
);

function App() {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // We delay observer observation slightly to ensure dynamic components are loaded
    setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.reveal');
      hiddenElements.forEach((el) => observer.observe(el));
    }, 1000);

    // Smooth scrolling logic for anchor links
    const smoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return (
    <div className="container">
      {/* Navbar and Hero load instantly because they are above the fold */}
      <Navbar />
      <Hero />
      
      {/* Rest of the components are loaded dynamically to improve initial load time */}
      <Suspense fallback={<LoaderFallback title="Skills" />}>
        <Skills />
      </Suspense>
      
      <Suspense fallback={<LoaderFallback title="About Section" />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoaderFallback title="Projects" />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<LoaderFallback title="Journey" />}>
        <Journey />
      </Suspense>
      
      <Suspense fallback={<LoaderFallback title="Education Details" />}>
        <Education />
      </Suspense>
      
      <Suspense fallback={<LoaderFallback title="Contact Info" />}>
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
