import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="Premium Restaurant Background" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            세금 아껴서,<br />
            사장되자
          </h1>
          <div className="hero-ok-tags">
            <span>투자 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
            <span>소득공제 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
            <span>배당 <strong className="text-premium-gold">OK!</strong></span>
          </div>
          <p className="hero-subtitle">
            전문직 종사자와 직장인을 위한 가장 혁신적인 자산 확장 모델
          </p>
          <div className="hero-cta">
            <a href="#marketplace" className="btn-outline-v5">투자자 <ArrowRight size={20} className="ms-2" /></a>
            <a href="#partnership" className="btn-outline-v5">창업자 <ArrowRight size={20} className="ms-2" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
