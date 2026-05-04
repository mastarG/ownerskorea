import './FounderSection.css';
import founderBg from '../assets/founder-bg.png';
import { ArrowRight } from 'lucide-react';

const FounderSection = () => {
  return (
    <section id="partnership" className="founder-section">
      <div className="founder-bg">
        <img src={founderBg} alt="Premium Cafe Interior" />
        <div className="founder-overlay"></div>
      </div>
      <div className="container founder-content">
        <h2 className="founder-title">
          실력은 당신이,<br />
          자본은 오너스코리아가.
        </h2>
        <p className="founder-desc">
          자본금 1,000만원 유한책임 창업.<br />
          뛰어난 실력만 준비하세요. 나머지는 오너스코리아 파트너스가 돕겠습니다.
        </p>
        <div className="founder-cta-group">
          <div className="cta-item">
            <p className="cta-label text-premium-gold mb-3">이미 매장을 운영 중이신가요?</p>
            <button className="btn-outline-v5 w-100">상가 입점제안 <ArrowRight size={20} className="ms-2" /></button>
          </div>
          <div className="cta-item">
            <p className="cta-label text-premium-gold mb-3">새로운 매장 창업을 계획하시나요?</p>
            <button className="btn-outline-v5 w-100">창업지원하기 <ArrowRight size={20} className="ms-2" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
