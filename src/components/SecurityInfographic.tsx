import { ShieldCheck, Building2, LockKeyhole } from 'lucide-react';
import './SecurityInfographic.css';

const SecurityInfographic = () => {
  return (
    <section id="security" className="section security">
      <div className="container">
        <div className="security-header">
          <h2 className="section-title">가장 안전한 로컬 투자</h2>
          <p className="section-subtitle">
            오너스코리아는 50% 임대보증금 우선순위 상환권 구조를 통해<br className="hidden-mobile" />
            투자자의 원금을 철저하게 보호합니다.
          </p>
        </div>

        <div className="infographic-container">
          <div className="info-card">
            <div className="info-icon-wrapper">
              <Building2 className="info-icon text-primary" size={32} />
            </div>
            <h3 className="info-title">프리미엄 상권 입지</h3>
            <p className="info-desc">검증된 상권의 안정적인 매출을 기록하는 우수 매장만 선별합니다.</p>
          </div>
          
          <div className="info-connector">
            <div className="connector-line"></div>
          </div>

          <div className="info-card highlight">
            <div className="info-badge">핵심 안전장치</div>
            <div className="info-icon-wrapper gold">
              <LockKeyhole className="info-icon text-secondary" size={40} />
            </div>
            <h3 className="info-title">50% 임대보증금 우선순위 상환권</h3>
            <p className="info-desc">매장의 임대보증금에 대한 우선순위 상환 권리를 확보하여 원금 손실 위험을 최소화합니다.</p>
          </div>

          <div className="info-connector">
            <div className="connector-line"></div>
          </div>

          <div className="info-card">
            <div className="info-icon-wrapper">
              <ShieldCheck className="info-icon text-primary" size={32} />
            </div>
            <h3 className="info-title">매월 안정적 배당</h3>
            <p className="info-desc">수익금은 매월 지정된 계좌로 안전하게 정산되어 지급됩니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityInfographic;
