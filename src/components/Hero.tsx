import './Hero.css';
import heroBg from '../assets/hero-bg.png';
import heroBright from '../assets/hero-bright.png';
import heroV2 from '../assets/hero-v2.jpg';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero bright">
      <div className="hero-background">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" alt="Sunny Skyscraper Daytime" className="hero-bg-img" />
        <div className="hero-overlay-navy-day"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle-owners">오너스코리아가 제안하는</p>
          <h1 className="hero-title-owners">
            프리미엄 투자 정보
          </h1>
          <p className="hero-desc-owners">
            투명한 데이터와 전문가의 분석을 통해 검증된<br />
            실제 매장 기반의 안정적인 투자 기회를 만나보세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
