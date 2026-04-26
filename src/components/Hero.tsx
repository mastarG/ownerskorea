import './Hero.css';
import heroBg from '../assets/hero-bg.png';

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
            <span className="text-secondary">사장되자</span>
          </h1>
          <div className="hero-ok-tags">
            <span>투자 <strong className="text-secondary">OK!</strong></span>
            <span className="dot">•</span>
            <span>소득공제 <strong className="text-secondary">OK!</strong></span>
            <span className="dot">•</span>
            <span>배당 <strong className="text-secondary">OK!</strong></span>
          </div>
          <p className="hero-subtitle">
            전문직 종사자와 직장인을 위한 가장 혁신적인 자산 확장 모델
          </p>
          <div className="hero-cta">
            <a href="#marketplace" className="btn btn-outline-white btn-large">투자자</a>
            <a href="#partnership" className="btn btn-outline-white btn-large">창업자</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
