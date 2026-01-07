
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Impact from './components/Impact';
import DonateSection from './components/DonateSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [shouldAnimateUp, setShouldAnimateUp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShouldAnimateUp(true);
      document.body.classList.remove('intro-active');
    }, 2800);

    const timer2 = setTimeout(() => {
      setIsIntroVisible(false);
    }, 4200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (isIntroVisible && !shouldAnimateUp) return;

    const handleScroll = () => {
      const sections = ['home', 'impact', 'donate', 'about'];
      const threshold = 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= threshold && rect.bottom >= threshold) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isIntroVisible, shouldAnimateUp]);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-cyan-100 selection:text-cyan-900">
      {isIntroVisible && (
        <div className={`intro-curtain ${shouldAnimateUp ? 'slide-up' : ''}`}>
          <div className="reveal-container">
            <span className="reveal-text" style={{ animationDelay: '0.2s' }}>Delivering Hope</span>
          </div>
          <div className="reveal-container">
            <span className="reveal-text" style={{ animationDelay: '0.4s' }}>in Ethiopia</span>
          </div>
          <div className="reveal-container">
            <span className="reveal-text" style={{ animationDelay: '0.6s' }}>and Beyond</span>
          </div>
        </div>
      )}

      <Header activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="impact" className="py-20 bg-soft-blue scroll-mt-20">
          <Impact />
        </section>

        <section id="donate" className="py-20 scroll-mt-20">
          <DonateSection />
        </section>

        <section id="about" className="py-20 bg-gray-50 scroll-mt-20">
          <AboutUs />
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default App;
