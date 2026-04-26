import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FaqSection.css';

const faqs = [
  {
    id: 1,
    question: "소득공제 100%는 어떻게 받을 수 있나요?",
    answer: "오너스코리아의 벤처투자 조합을 통한 투자는 조세특례제한법에 따라 투자금액 100% (최대 3천만원)에 대해 소득공제 혜택이 주어집니다. 연말정산 시 관련 서류를 제출하시면 즉시 환급 효과를 얻으실 수 있습니다."
  },
  {
    id: 2,
    question: "50% 임대보증금 우선순위 상환권이란 무엇인가요?",
    answer: "오너스코리아는 매장 계약 시 발생하는 임대차 보증금에 대해 1순위로 자금을 상환받을 권리를 설정합니다. 이는 전체 창업 비용의 약 50%에 해당하며, 폐업 등의 상황에서도 투자자의 원금 손실을 방지하는 강력한 보호 장치입니다."
  },
  {
    id: 3,
    question: "배당금은 언제, 어떻게 지급되나요?",
    answer: "매장의 월별 결산이 완료되는 익월 15일에 투자자님의 등록된 계좌로 배당금이 자동 입금됩니다. 투명한 정산을 위해 매월 회계 리포트가 함께 제공됩니다."
  },
  {
    id: 4,
    question: "파트너(창업자)로 지원하려면 어떤 조건이 필요한가요?",
    answer: "최소 자본금 1,000만원과 동종 업계 경력 3년 이상의 포트폴리오를 보유한 분이라면 누구나 지원 가능합니다. 실력 검증 후 오너스코리아가 입지 선정부터 자금 조달까지 모든 과정을 지원합니다."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="support" className="section faq-section">
      <div className="container">
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-subtitle">오너스코리아 서비스에 대해 궁금하신 점을 확인하세요.</p>
        
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(faq.id)}
              >
                <span>{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="faq-icon text-secondary" />
                ) : (
                  <ChevronDown className="faq-icon" />
                )}
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
