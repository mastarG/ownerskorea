import { useState } from 'react';
import { ChevronDown, ChevronUp, Send, X, ChevronRight } from 'lucide-react';
import './FaqSection.css';

const categories = ['전체', '벤처소득공제', '창업문의', '투자안내', '이용방법'];

const faqs = [
  {
    id: 1,
    category: '벤처소득공제',
    question: "벤처소득공제 혜택은 누구나 받을 수 있나요?",
    answer: "네, 개인투자조합을 통해 벤처기업에 투자하는 경우 거주자(개인)라면 누구나 소득공제 혜택을 받으실 수 있습니다. 투자 금액에 따라 최대 100%까지 소득공제가 가능합니다."
  },
  {
    id: 2,
    category: '벤처소득공제',
    question: "소득공제는 언제 신청하고 적용받나요?",
    answer: "출자한 날이 속하는 과세연도부터 출자 후 2년이 되는 날이 속하는 과세연도 중 한 해를 선택하여 신청할 수 있습니다. 일반적으로 연말정산 또는 종합소득세 신고 시기에 맞춰 진행됩니다."
  },
  {
    id: 3,
    category: '창업문의',
    question: "창업 상담 신청은 어떻게 하나요?",
    answer: "플랫폼 내 '창업지원' 메뉴 또는 각 섹션의 '문의하기' 버튼을 통해 상담 신청이 가능합니다. 전문 상담원이 확인 후 24시간 이내에 연락을 드립니다."
  },
  {
    id: 4,
    category: '이용방법',
    question: "상담 신청 후 전문가 매칭까지 얼마나 걸리나요?",
    answer: "신청하신 문의 분야와 지역에 따라 최적의 전문가를 매칭해 드립니다. 통상적으로 영업일 기준 1~2일 이내에 담당 전문가가 배정되어 1차 유선 상담이 진행됩니다."
  },
  {
    id: 5,
    category: '투자안내',
    question: "투자 상품에 대한 상세 보고서를 받아볼 수 있나요?",
    answer: "네, 각 투자 상품 페이지 하단의 '투자 제안서 다운로드' 버튼을 통해 확인하실 수 있습니다. 보안이 필요한 상세 데이터는 상담 신청 후 별도로 제공해 드립니다."
  },
  {
    id: 6,
    category: '이용방법',
    question: "법률/세무 상담 비용은 무료인가요?",
    answer: "오너스코리아 플랫폼 이용 고객님께는 1차 기본적인 법률/세무 상담을 무료로 지원해 드립니다. 다만, 심화된 계약서 검토나 세무 신고 대리 등 구체적인 실무 단계로 진행될 경우 별도의 비용이 발생할 수 있습니다."
  },
  {
    id: 7,
    category: '창업문의',
    question: "온라인 상담 외에 오프라인 미팅도 가능한가요?",
    answer: "1차 유선/온라인 상담을 통해 기본적인 요구사항을 파악한 후, 필요에 따라 본사 또는 현장에서의 대면 상담 일정을 조율해 드립니다."
  },
  {
    id: 8,
    category: '투자안내',
    question: "제안받은 상권의 실사 데이터를 확인할 수 있나요?",
    answer: "오너스코리아는 빅데이터 기반의 상권 분석 데이터뿐만 아니라, 전문가가 직접 현장 실사를 거쳐 검증한 유동인구 및 예상 매출 데이터를 투명하게 공개하고 있습니다."
  },
  {
    id: 9,
    category: '이용방법',
    question: "회원 등급별 혜택은 무엇인가요?",
    answer: "회원 등급은 활동 지수와 투자 실적에 따라 구분되며, 상위 등급 회원님께는 신규 매장 우선권, 특별 배당 이벤트, VIP 전문가 전담 마크 등 차별화된 혜택을 제공합니다."
  },
  {
    id: 10,
    category: '이용방법',
    question: "서비스 이용 중 불편사항은 어디로 접수하나요?",
    answer: "A. 마이페이지 - 고객센터 - 1:1 문의를 이용하시거나, 하단의 고객문의 폼을 통해 접수해 주세요.\n\n* 실시간 응대가 필요하신 경우 고객센터(1588-XXXX)로 유선 연락 주시면 신속히 해결해 드립니다.\n* 주말 및 공휴일 접수 건은 다음 영업일에 순차적으로 처리됩니다."
  },
  {
    id: 11,
    category: '벤처소득공제',
    question: "벤처기업에 투자하면 소득공제 얼마나 받을까?",
    answer: "투자금액에 따라 소득공제율이 다릅니다. 3천만 원 이하는 100%, 3천만 원 초과 5천만 원 이하는 70%, 5천만 원 초과는 50%의 소득공제를 받습니다. (예: 5천만 원 투자 시 총 3,400만 원 소득공제)"
  },
  {
    id: 12,
    category: '벤처소득공제',
    question: "소득공제 금액은 무제한인가요?",
    answer: "아닙니다. 벤처기업 투자를 통한 소득공제는 종합소득금액의 50%를 한도로 합니다."
  },
  {
    id: 13,
    category: '벤처소득공제',
    question: "모든 투자 프로젝트가 다 소득공제 대상인가요?",
    answer: "아닙니다. 소득공제는 대상이 되는 벤처기업 등에 대상이 되는 증권으로 투자했을 경우에만 해당합니다. 각 프로젝트 페이지에 소득공제 가능 여부가 표기되어 있으니 투자 전 확인이 필요합니다."
  },
  {
    id: 14,
    category: '벤처소득공제',
    question: "국세청에 자동으로 소득공제가 반영되나요?",
    answer: "아닙니다. 연말에 기업이 발급하는 '투자확인서'를 받아 투자자가 직접 근무지의 연말정산 담당 부서나 세무사에게 제출해야 합니다."
  }
];

const FaqSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = activeCategory === '전체' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="support" className="section faq-section">
      <div className="container">
        <div className="faq-header-container">
          <div className="faq-header">
            <div className="faq-label">FAQ</div>
            <h2 className="faq-title">자주 묻는 질문</h2>
            <p className="faq-subtitle">오너스코리아 서비스에 대해 궁금하신 점을 확인하세요.</p>
          </div>
        </div>

        {/* Filter & Inquiry Row */}
        <div className="faq-filter-row">
          <div className="faq-filters">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <button className="faq-action-btn" onClick={() => setIsModalOpen(true)}>
            문의하기 <ChevronRight size={18} className="ms-1" />
          </button>
        </div>

        <div className="faq-grid">
          {filteredFaqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(faq.id)}
              >
                <span className="faq-q-mark">Q.</span>
                <span className="faq-q-text">{faq.question}</span>
                <span className="faq-icon">
                  {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              {openId === faq.id && (
                <div className="faq-answer">
                  <div className="faq-a-content">
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="faq-modal-overlay">
          <div className="faq-modal">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="modal-header">
              <h2>문의하기</h2>
              <p>궁금한 점이 해결되지 않으셨나요? 직접 문의해 주세요.</p>
            </div>
            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>성함</label>
                  <input type="text" placeholder="성함을 입력해 주세요" />
                </div>
                <div className="form-group">
                  <label>전화번호</label>
                  <input type="text" placeholder="010-0000-0000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>문의 분야</label>
                  <select>
                    <option>분야를 선택해 주세요</option>
                    <option>창업문의</option>
                    <option>투자안내</option>
                    <option>이용방법</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>이메일</label>
                  <input type="email" placeholder="example@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label>상담 내용</label>
                <textarea placeholder="문의하실 내용을 상세히 기재해 주세요" rows={5}></textarea>
              </div>
              <button type="submit" className="modal-submit-btn">
                문의하기 전송 <Send size={18} className="ms-2" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FaqSection;
