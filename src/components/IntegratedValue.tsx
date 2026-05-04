import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import TaxCalculatorModal from './TaxCalculatorModal';
import './IntegratedValue.css';

const IntegratedValue = () => {
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  return (
    <section className="section integrated-value">
      <div className="container">
        {/* Header Area */}
        <div className="iv-header-row">
          <div className="iv-title-area">
            <div className="iv-label">VALUE</div>
            <h2 className="iv-main-title">
              전문가 그룹의 노하우<br />
              안전하고 투명한 <span className="iv-gold-text">'투자수익모델'</span>
            </h2>
          </div>
          
          <div className="iv-btn-group">
            <button 
              className="iv-action-btn"
              onClick={() => setIsCalcOpen(true)}
            >
              세제혜택 <ChevronRight size={18} className="ms-1" />
            </button>
            <button 
              className="iv-action-btn"
              onClick={() => {
                // Placeholder for Webtoon link
                window.open('https://example.com/webtoon', '_blank');
              }}
            >
              웹툰보기 <ChevronRight size={18} className="ms-1" />
            </button>
          </div>
        </div>

        {/* 4 Blocks with Horizontal Dividers */}
        <div className="iv-content-list">
          {/* Block 1: Safety (안전) */}
          <div className="iv-item">
            <div className="iv-item-left">
              <h3 className="iv-item-title-italic"><span className="text-dark">Off</span> <span className="text-light">the risk</span></h3>
              <div className="iv-item-highlight">
                <p className="orange-bold">전문가 사전검토,</p>
                <p className="black-thin">직접 확인합니다.</p>
              </div>
            </div>
            <div className="iv-item-right">
              <p className="iv-item-desc-bold">투자금 보호를 위한 오너스코리아만의 특별한 체계를 구축합니다.</p>
              <p className="iv-item-desc">
                엄격한 사전 검토와 원금 보호 장치를 통해 리스크를 최소화합니다.<br />
                직접 발로 뛰어 확인한 데이터만을 바탕으로 최고의 투자처를 제안합니다.
              </p>
            </div>
          </div>

          {/* Block 2: Tax (소득공제) */}
          <div className="iv-item">
            <div className="iv-item-left">
              <h3 className="iv-item-title-italic"><span className="text-dark">Off</span> <span className="text-light">the tax</span></h3>
              <div className="iv-item-highlight">
                <p className="orange-bold">압도적인 절세,</p>
                <p className="black-thin">벤처소득공제 혜택.</p>
              </div>
            </div>
            <div className="iv-item-right">
              <p className="iv-item-desc-bold">합법적인 세제 혜택을 통해 투자 초기부터 안정적인 환급을 보장합니다.</p>
              <p className="iv-item-desc">
                최대 100% 소득공제 혜택으로 실질 투자 비용을 획기적으로 낮출 수 있습니다.<br />
                오너스코리아만의 전문적인 세무 설계로 절세 효과를 극대화하세요.
              </p>
            </div>
          </div>

          {/* Block 3: Dividend (배당) */}
          <div className="iv-item">
            <div className="iv-item-left">
              <h3 className="iv-item-title-italic"><span className="text-light">Pay it</span> <span className="text-dark">Off</span></h3>
              <div className="iv-item-highlight">
                <p className="orange-bold">매월 정기 배당,</p>
                <p className="black-thin">투명한 수익 정산.</p>
              </div>
            </div>
            <div className="iv-item-right">
              <p className="iv-item-desc-bold">매달 발생하는 배당 수익으로 안정적인 캐시플로우를 창출합니다.</p>
              <p className="iv-item-desc">
                투자한 매장의 매출 현황과 배당 내역을 플랫폼에서 투명하게 공개합니다.<br />
                매월 정해진 날짜에 정기적으로 지급되는 배당의 즐거움을 경험하세요.
              </p>
            </div>
          </div>

          {/* Block 4: Reliability (투자/관리) */}
          <div className="iv-item">
            <div className="iv-item-left">
              <h3 className="iv-item-title-italic"><span className="text-dark">Off</span> <span className="text-light">the management</span></h3>
              <div className="iv-item-highlight">
                <p className="orange-bold">신뢰의 서포터,</p>
                <p className="black-thin">전문가 그룹의 관리.</p>
              </div>
            </div>
            <div className="iv-item-right">
              <p className="iv-item-desc-bold">복잡한 운영과 관리는 전문가에게 맡기고 수익에만 집중하세요.</p>
              <p className="iv-item-desc">
                세무, 법률, 마케팅 등 전문적인 운영 관리는 오너스코리아 팀이 책임집니다.<br />
                신뢰할 수 있는 파트너로서 투자자님의 자산 성장을 끝까지 함께합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <TaxCalculatorModal isOpen={isCalcOpen} onClose={() => setIsCalcOpen(false)} />
    </section>
  );
};

export default IntegratedValue;
