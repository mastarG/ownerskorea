import { useState } from 'react';
import { Receipt, Coins, TrendingUp, ShieldCheck, ArrowRight, ArrowLeft, Calculator } from 'lucide-react';
import TaxCalculatorModal from './TaxCalculatorModal';
import './IntegratedValue.css';

const IntegratedValue = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  return (
    <section className="section integrated-value">
      <div className="container">
        <div className="integrated-header">
          <div>
            <h2 className="section-title text-left">가장 안전하고 확실한 투자수익 모델</h2>
            <p className="section-subtitle text-left" style={{ marginBottom: 0 }}>
              오너스코리아는 50% 우선순위 상환권으로 원금을 보호하고,<br className="hidden-mobile" />
              세금 절감부터 배당, 엑시트까지 완벽한 수익 구조를 제공합니다.
            </p>
          </div>
          <button 
            className="btn btn-outline flip-btn" 
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {isFlipped ? (
              <><ArrowLeft size={18} className="mr-2" /> 모델 구조 보기</>
            ) : (
              <>수익 시뮬레이션 <ArrowRight size={18} className="ml-2" /></>
            )}
          </button>
        </div>

        <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
          <div className="flipper">
            
            {/* FRONT SIDE: 4 Blocks */}
            <div className="face front">
              <div className="value-blocks">
                <div className="value-block">
                  <div className="value-icon">
                    <Coins size={32} className="text-secondary" />
                  </div>
                  <div className="value-content">
                    <h3><span className="text-primary">[배당]</span> 매월 안정적인 배당</h3>
                    <p>검증된 상권에서 발생하는 우량 점포의 영업이익을 매월 안정적으로 배당받습니다.</p>
                  </div>
                </div>
                
                <div className="value-block">
                  <div className="value-icon">
                    <Receipt size={32} className="text-secondary" />
                  </div>
                  <div className="value-content">
                    <h3><span className="text-primary">[공제]</span> 벤처투자 소득공제</h3>
                    <p>투자금액의 100% 소득공제 혜택으로 연말정산 시 즉시 환급 효과를 경험하세요.</p>
                  </div>
                </div>

                <div className="value-block">
                  <div className="value-icon">
                    <TrendingUp size={32} className="text-secondary" />
                  </div>
                  <div className="value-content">
                    <h3><span className="text-primary">[엑시트]</span> 성공적인 엑시트</h3>
                    <p>점포 가치 상승에 따른 성공적인 엑시트를 통해 차익을 실현합니다.</p>
                  </div>
                </div>

                <div className="value-block">
                  <div className="value-icon">
                    <ShieldCheck size={32} className="text-secondary" />
                  </div>
                  <div className="value-content">
                    <h3><span className="text-primary">[투자보호]</span> 50% 우선순위 상환권</h3>
                    <p>매장의 임대보증금에 대한 1순위 상환 권리를 확보하여 원금 손실 위험을 최소화합니다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BACK SIDE: Simulation */}
            <div className="face back">
              <div className="simulation-card">
                <div className="sim-header">
                  <h3>투자 수익 시뮬레이션 <span className="sim-badge">(3,000만 원 투자 시)</span></h3>
                </div>
                
                <div className="sim-content">
                  <div className="sim-text-side">
                    <div className="sim-highlight-box">
                      <h4>실질 ROI <span className="text-secondary">158% ~ 185%</span> 달성</h4>
                      <p>소득공제 환급금, 운영 배당, 원금 및 권리금 엑시트 합산 3년 누적 총 수익률</p>
                    </div>
                    
                    <div className="sim-highlight-box mt-4">
                      <h4>세금 낼 돈이 투자금이 되는 구조</h4>
                      <p>3,000만 원 투자 시 소득세율 45% 구간 기준 1,485만 원 즉시 환급, <strong>실질 투자 부담금은 1,515만 원 수준</strong></p>
                    </div>
                  </div>
                  
                  <div className="sim-table-side">
                    <table className="sim-table">
                      <thead>
                        <tr>
                          <th>구분</th>
                          <th>금액 (35~48% 세율 기준)</th>
                          <th>비고</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>초기 투자금</td>
                          <td className="text-right">- 3,000만 원</td>
                          <td>출자금</td>
                        </tr>
                        <tr>
                          <td>소득공제 환급금</td>
                          <td className="text-right text-success">+ 1,155 ~ 1,485만 원</td>
                          <td>투자 직후 환급</td>
                        </tr>
                        <tr>
                          <td>운영 기간 배당</td>
                          <td className="text-right text-success">+ 300 ~ 500만 원</td>
                          <td>3년 누적</td>
                        </tr>
                        <tr>
                          <td>엑시트 회수금</td>
                          <td className="text-right text-success">+ 3,300 ~ 3,800만 원</td>
                          <td>원금 + 권리금 차익</td>
                        </tr>
                        <tr className="sim-total-row">
                          <td>최종 회수 총액</td>
                          <td className="text-right">4,755 ~ 5,785만 원</td>
                          <td>실질 3년 누적 수익</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <button 
                      className="btn btn-primary w-full mt-4 sim-calc-btn"
                      onClick={() => setIsCalcOpen(true)}
                    >
                      <Calculator size={18} className="mr-2" />
                      내 공제 혜택 계산하기
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <TaxCalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
    </section>
  );
};

export default IntegratedValue;
