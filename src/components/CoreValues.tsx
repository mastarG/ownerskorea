import { Receipt, Coins, TrendingUp } from 'lucide-react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="section core-values">
      <div className="container">
        <h2 className="section-title">가장 확실한 3-Way 수익 모델</h2>
        <p className="section-subtitle">오너스코리아는 세금 절감부터 배당, 엑시트까지 완벽한 수익 구조를 제공합니다.</p>
        
        <div className="core-values-grid">
          <div className="value-card">
            <div className="value-icon-wrapper">
              <Receipt className="value-icon text-secondary" size={32} />
            </div>
            <h3 className="value-title"><span className="text-primary">[공제]</span> 벤처투자 소득공제</h3>
            <p className="value-desc">투자금액의 100% 소득공제 혜택으로 연말정산 시 즉시 환급 효과를 경험하세요.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-wrapper">
              <Coins className="value-icon text-secondary" size={32} />
            </div>
            <h3 className="value-title"><span className="text-primary">[배당]</span> 매월 안정적인 배당</h3>
            <p className="value-desc">검증된 상권에서 발생하는 우량 점포의 영업이익을 매월 안정적으로 배당받습니다.</p>
          </div>
          
          <div className="value-card">
            <div className="value-icon-wrapper">
              <TrendingUp className="value-icon text-secondary" size={32} />
            </div>
            <h3 className="value-title"><span className="text-primary">[엑시트]</span> 권리금 차익 실현</h3>
            <p className="value-desc">점포 가치 상승에 따른 성공적인 엑시트를 통해 높은 권리금 차익을 실현합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
