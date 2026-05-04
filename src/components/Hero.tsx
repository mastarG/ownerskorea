import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import heroBright from '../assets/hero-bright.png';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero bright">
      <div className="hero-background">
        <img src={heroBright} alt="Entrepreneur Success" className="hero-bg-img" />
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            세금 아껴서,<br />
            사장되자
          </h1>
          <p className="hero-subtitle">
            전문직 종사자와 직장인을 위한<br />
            가장 혁신적인 자산 확장 모델
          </p>
          <div className="hero-ok-tags">
            <span>투자 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
            <span>안전 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
            <span>소득공제 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
            <span>배당 <strong className="text-premium-gold">OK!</strong></span>
            <span className="dot">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
