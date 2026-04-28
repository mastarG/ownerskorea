import React, { useState } from 'react';
import { ChevronDown, Mail, MessageCircle, Search } from 'lucide-react';
import startupCenterBg from '../assets/generated/startup-center-bg.png';
import './CustomerSupportPage.css';

interface FaqItem {
  question: string;
  answer: string;
  category: 'startup' | 'investment' | 'usage';
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'startup',
    question: '병원 창업 지원 프로세스는 어떻게 되나요?',
    answer: '오너스코리아의 메디컬 마스터 그룹이 입지 분석부터 MSO 경영 지원, 의료기기 리싱, 인테리어까지 전 과정을 파트너로서 함께합니다. 우선 창업 지원 신청을 통해 상담을 받아보실 수 있습니다.'
  },
  {
    category: 'investment',
    question: '투자 수익 배당 주기는 어떻게 되나요?',
    answer: '투자 상품별로 상이하나, 일반적으로 매월 또는 분기별로 실질적인 영업 이익에 기반하여 배당이 지급됩니다. 상세한 주기는 각 투자 상품의 상세 페이지에서 확인하실 수 있습니다.'
  },
  {
    category: 'startup',
    question: '마스터 원장단은 어떤 분들로 구성되어 있나요?',
    answer: '20명 이상의 현직 원장단으로 구성되어 있으며, 각 과목별 풍부한 개원 경험과 노하우를 가진 전문가들입니다. 동료의 마음으로 개원의 전 과정을 돕습니다.'
  },
  {
    category: 'startup',
    question: '초기 자본금 1,000만 원으로 정말 창업이 가능한가요?',
    answer: '네, 가능합니다. 오너스코리아 파트너스가 운영 자본의 상당 부분을 투자조합을 통해 지원하며, 창업자는 실력과 열정 위주로 선발하여 유한책임 창업 모델을 제공하기 때문입니다.'
  },
  {
    category: 'usage',
    question: '서비스 이용 시 보안은 안전한가요?',
    answer: '오너스코리아는 모든 금융 거래와 개인 정보를 은행 수준의 보안 프로토콜로 보호합니다. 모든 로그는 안전하게 관리되며 외부 유출이 불가능한 구조입니다.'
  }
];

const CustomerSupportPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'startup' | 'investment' | 'usage'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const searchFiltered = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaqs = searchFiltered.length > 0 && searchQuery !== ''
    ? searchFiltered
    : FAQ_DATA.filter(faq => activeCategory === 'all' || faq.category === activeCategory);

  const searchResults = searchQuery 
    ? searchFiltered.slice(0, 5)
    : [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleResultClick = (question: string) => {
    const index = filteredFaqs.findIndex(f => f.question === question);
    if (index !== -1) {
      setOpenIndex(index);
      setTimeout(() => {
        const element = document.getElementById(`faq-item-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
    setSearchQuery('');
  };

  return (
    <div className="support-page-v5">
      {/* Hero Section */}
      <section className="support-hero-v5">
        <div className="hero-bg-v5">
          <img src={startupCenterBg} alt="Support Background" />
        </div>
      </section>

      {/* Search & Tags Section - Positioned at the bottom of hero */}
      <section className="search-area-v5">
        <div className="container">
          <div className="search-tags-wrapper-v5">
            <div className="support-search-container-v5 fade-in-up">
              <div className="support-search-bar-v5">
                <input 
                  type="text" 
                  placeholder="궁금한 내용을 검색해보세요" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="support-search-btn-v5">
                  <Search size={22} />
                </button>
              </div>
              {searchQuery && (
                <div className="search-results-v5">
                  {searchResults.length > 0 ? (
                    searchResults.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className="search-result-item-v5"
                        onClick={() => handleResultClick(faq.question)}
                      >
                        <div className="result-q">Q. {faq.question}</div>
                      </div>
                    ))
                  ) : (
                    <div className="no-result-v5">검색 결과가 없습니다.</div>
                  )}
                </div>
              )}
            </div>

            <div className="support-tags-v5 fade-in-up delay-1">
              <span className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>#전체</span>
              <span className={activeCategory === 'startup' ? 'active' : ''} onClick={() => setActiveCategory('startup')}>#창업문의</span>
              <span className={activeCategory === 'investment' ? 'active' : ''} onClick={() => setActiveCategory('investment')}>#투자안내</span>
              <span className={activeCategory === 'usage' ? 'active' : ''} onClick={() => setActiveCategory('usage')}>#이용방법</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="faq-content-v5">
        <div className="container">
          <div className="faq-container-v5">
            {/* Accordion List */}
            <div className="faq-list-v5">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index} 
                  id={`faq-item-${index}`}
                  className={`faq-item-v5 ${openIndex === index ? 'open' : ''}`}
                >
                  <div className="faq-question-v5" onClick={() => toggleAccordion(index)}>
                    <span>Q. {faq.question}</span>
                    <ChevronDown className="chevron-icon" size={20} />
                  </div>
                  <div className="faq-answer-v5">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="support-cta-v5">
              <div className="cta-content-v5">
                <h3>원하는 답변을 찾지 못하셨나요?</h3>
                <button className="inquiry-btn-v5">
                  <MessageCircle size={18} className="me-2" />
                  1:1 문의하기
                </button>
              </div>
              <div className="support-email-v5">
                <Mail size={14} className="me-1" />
                help@ownerskorea.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportPage;
