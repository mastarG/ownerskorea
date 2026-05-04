import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import NowSection from '../components/NowSection';
import Marketplace from '../components/Marketplace';
import SocialProofSection from '../components/SocialProofSection';
import IntegratedValue from '../components/IntegratedValue';
import FaqSection from '../components/FaqSection';
import './InvestmentSupportPage.css';

const InvestmentSupportPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const location = useLocation();

  const heroRef = useRef<HTMLDivElement>(null);
  const bestNowRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [heroRef, socialRef, bestNowRef, valueRef, faqRef];
  const sectionNames = ['혁신 모델', '랭킹 & 후기', '최신 & 베스트', '통합 가치', '자주 묻는 질문'];

  useEffect(() => {
    // We use a broader threshold for normal scrolling
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const indicatorObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) indicatorObserver.observe(ref.current);
    });

    return () => {
      indicatorObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (location.hash === '#faq') {
      setTimeout(() => scrollToSection(4), 100);
    }
  }, [location]);

  const scrollToSection = (index: number) => {
    const ref = sectionRefs[index];
    if (ref.current) {
      // Offset for fixed navbar (approx 80px)
      const offset = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - (index === 0 ? 0 : offset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="investment-support-page is-investment-support">
      {/* Vertical Indicator */}
      <div className="investment-indicator">
        {sectionNames.map((name, idx) => (
          <div 
            key={idx} 
            className={`indicator-dot ${activeSection === idx ? 'active' : ''} ${activeSection === 0 ? 'on-dark' : ''}`}
            onClick={() => scrollToSection(idx)}
            title={name}
          />
        ))}
      </div>

      <div ref={heroRef} className="landing-section">
        <Hero />
      </div>
      
      <div ref={socialRef} className="landing-section social-proof-container">
        <SocialProofSection />
      </div>

      <div ref={bestNowRef} className="landing-section integrated-content-section">
        <NowSection />
        <Marketplace />
      </div>
      
      <div ref={valueRef} className="landing-section">
        <IntegratedValue />
      </div>
      
      <div ref={faqRef} className="landing-section">
        <FaqSection />
      </div>
    </div>
  );
};

export default InvestmentSupportPage;
