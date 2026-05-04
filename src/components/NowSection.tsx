import React, { useState, useEffect, useRef } from 'react';
import { X, Quote, ArrowUpRight } from 'lucide-react';
import './NowSection.css';
import './InvestmentSubPages.css';

const ARTICLES = [
  {
    id: 1,
    category: '창업주 인터뷰',
    title: '진심이 담긴 회 한 점이 성공의 열쇠',
    brand: '시흥 어부 횟집',
    owner: '박현석 대표',
    excerpt: '창업 6개월 만에 지역 1위 매출을 달성한 비결과 그가 꿈꾸는 외식업의 미래...',
    date: '2024.05.01',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    tag: 'FEATURED',
    bgColor: '#1e293b',
    content: {
      quote: "성공은 얼마나 많은 손님을 받느냐가 아니라, 얼마나 많은 손님이 다시 오느냐에 달려 있습니다.",
      interview: [
        { q: "처음 창업을 결심하게 된 계기는 무엇인가요?", a: "오랜 시간 유통업에 종사하며 좋은 식재료의 가치를 알게 되었습니다. 정직한 재료로 승부하면 반드시 통할 것이라는 확신이 있었죠. 기술보다 정직함이 앞서야 한다는 게 제 철학입니다." },
        { q: "매출 1위의 비결을 딱 하나만 꼽는다면?", a: "기술적인 마케팅보다 중요한 것은 '신뢰'입니다. 저희 가게는 당일 입고된 생선이 아니면 절대 상에 올리지 않는다는 원칙을 지킵니다. 손님이 그 맛을 가장 먼저 알아차리더군요." },
        { q: "어려웠던 순간은 없었나요?", a: "초기에는 인지도가 낮아 고전했습니다. 하지만 묵묵히 제 자리를 지키니 입소문이 나기 시작하더군요. 지금은 하루에 수백 명의 손님이 찾는 명소가 되었습니다." },
        { q: "앞으로의 목표는 무엇인가요?", a: "시흥을 넘어 전국에서 가장 맛있는 횟집으로 인정받고 싶습니다. 또한 저와 같은 길을 걷는 청년 창업자들에게 희망이 되고 싶습니다." }
      ]
    }
  },
  {
    id: 2,
    category: '인사이드 스토리',
    title: '공간의 가치를 디자인하다',
    brand: '강남 루프탑',
    owner: '이지은 소장',
    excerpt: '버려진 옥상을 힙한 와인바로 변신시킨 공간 기획자의 철학과 비전 인터뷰.',
    date: '2024.04.28',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tag: 'NEW',
    bgColor: '#0f172a',
    content: {
      quote: "공간은 단순히 물리적 장소가 아닙니다. 사람의 감정이 머무는 경험의 결정체죠.",
      interview: [
        { q: "루프탑이라는 공간에 주목한 이유는?", a: "도심 속에서 하늘을 볼 수 있는 유일한 탈출구라고 생각했습니다. 그 해방감을 고객들에게 전달하고 싶었습니다." },
        { q: "공간 기획에서 가장 중요하게 생각하는 요소는?", a: "조명과 음악, 그리고 그 사이를 흐르는 여백입니다. 화려함보다는 편안함이 오래가는 법이죠." }
      ]
    }
  },
  {
    id: 3,
    category: '창업 트렌드',
    title: 'IT 개발자에서 카페 사장으로, 김민준의 인생 2막',
    brand: '판교 테크노 카페',
    owner: '김민준 대표',
    excerpt: '안정적인 직장을 나와 판교 테크노파크에 카페를 차리기까지의 솔직한 이야기.',
    date: '2024.04.25',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    tag: 'NEW',
    bgColor: '#1e3a8a',
    content: {
      quote: "코드를 짜던 섬세함으로 이제는 원두의 맛을 설계합니다.",
      interview: [
        { q: "개발자를 그만두고 창업을 한 것에 후회는 없나요?", a: "전혀요. 코드는 컴퓨터가 실행하지만, 커피는 사람이 마십니다. 눈앞에서 행복해하는 표정을 보는 것만큼 보람찬 일은 없습니다." },
        { q: "판교라는 위치의 특수성이 있나요?", a: "밤늦게까지 일하는 개발자 동료들에게 편안한 쉼터가 되고 싶었습니다. 그들의 라이프스타일을 누구보다 잘 알기 때문이죠." }
      ]
    }
  },
  {
    id: 4,
    category: '오너스 인사이트',
    title: 'AI 시대, 창업자의 생산성을 극대화하는 법',
    brand: 'ChatGPT 2026 활용 로드맵',
    owner: 'AI 전략 연구소',
    excerpt: 'AI는 도구일 뿐이지만, 그 도구를 다루는 기술이 경쟁력이 되는 시대입니다.',
    date: '2024.04.20',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    tag: 'HOT',
    bgColor: '#065F46',
    content: {
      quote: "AI는 도구일 뿐이지만, 그 도구를 다루는 기술이 경쟁력이 되는 시대입니다.",
      interview: [
        { q: "창업자가 AI를 활용해야 하는 가장 큰 이유는?", a: "시간과 자원의 효율적 배분입니다. 반복적인 업무는 AI에게 맡기고 사장님은 본질적인 전략에 집중해야 합니다." },
        { q: "추천하는 구체적인 활용법은?", a: "메뉴 설명문 작성, 고객 문의 답변 초안 마련, 그리고 상권 데이터 분석 보조 도구로 활용해보세요." }
      ]
    }
  },
  {
    id: 5,
    category: '이달의 로드맵',
    title: '입지는 운이 아니라 데이터의 분석 결과입니다',
    brand: '수도권 병원 상권 분석',
    owner: '오너스 전략팀',
    excerpt: '데이터로 증명하는 실패 없는 병원 개원 입지 분석 리포트.',
    date: '2024.04.15',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tag: 'EXPERT',
    bgColor: '#7C3AED',
    content: {
      quote: "입지는 운이 아니라 철저한 데이터의 분석 결과입니다.",
      interview: [
        { q: "병원 창업 시 가장 중요하게 생각하는 데이터는?", a: "유동인구뿐만 아니라 해당 지역의 연령대별 의료 소비 패턴을 분석해야 합니다." },
        { q: "오너스코리아의 입지 분석 강점은?", a: "실제 결제 데이터와 유동인구 추이를 결합하여 가장 정교한 수익 예측 모델을 제공합니다." }
      ]
    }
  },
  {
    id: 6,
    category: '창업 트렌드',
    title: '비주얼보다 본질에 집중하는 베이커리',
    brand: '아틀리에 엠',
    owner: '최유진 대표',
    excerpt: '화려한 디저트 시장에서 기본으로 승부하여 단골을 확보한 비결.',
    date: '2024.05.10',
    img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tag: 'NEW',
    bgColor: '#4B2C20',
    content: {
      quote: "빵의 본질은 맛과 건강입니다. 화려함은 그 다음이죠.",
      interview: [
        { q: "베이커리 창업에서 가장 중요한 것은?", a: "좋은 재료를 아끼지 않는 것입니다. 손님들은 그 정성을 가장 먼저 알아봅니다." }
      ]
    }
  },
  {
    id: 7,
    category: '성공 스토리',
    title: '데이터로 증명하는 반찬 정기배송의 힘',
    brand: '정성찬',
    owner: '김태호 대표',
    excerpt: '1인 가구 증가에 맞춘 데이터 기반 메뉴 구성으로 폭발적인 성장을 이룬 정성찬 이야기.',
    date: '2024.05.12',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    tag: 'HOT',
    bgColor: '#064E3B',
    content: {
      quote: "데이터는 고객이 무엇을 원하는지 가장 정확하게 말해줍니다.",
      interview: [
        { q: "반찬 정기배송 시장의 전망은?", a: "편리함과 건강을 동시에 찾는 소비자가 늘어남에 따라 앞으로도 꾸준히 성장할 것입니다." }
      ]
    }
  }
];

const NowSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const [activeMagPage, setActiveMagPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const magRightRef = useRef<HTMLDivElement>(null);
  
  const [isDown, setIsDown] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    setIsDragging(true);
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (item: any) => {
    if (!isDragging) {
      setSelectedArticle(item);
    }
  };

  const handleMagScroll = () => {
    if (magRightRef.current) {
      const { scrollTop, clientHeight } = magRightRef.current;
      const page = Math.round(scrollTop / clientHeight);
      setActiveMagPage(page);
    }
  };

  const scrollToMagPage = (index: number) => {
    if (magRightRef.current) {
      magRightRef.current.scrollTo({
        top: index * magRightRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  // Removed ticker effect

  return (
    <section className="now-section">
      <div className="container">
        <div className="now-header-row">
          <div className="now-header">
            <div className="now-label">NOW</div>
            <h2 className="now-title">인기 매거진</h2>
          </div>
        </div>

        <div className="now-carousel-wrapper">
          <div 
            className={`now-carousel-track ${isDown ? 'active' : ''}`} 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {ARTICLES.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="now-card" style={{ backgroundColor: item.bgColor }} onClick={() => handleCardClick(item)}>
                <img src={item.img} alt={item.title} className="now-card-bg" />
                <div className="now-card-overlay"></div>
                
                <div className="now-card-content">
                  <div className="now-card-top-content">
                    <div className="now-card-type-badge">| {item.category}</div>
                  </div>
                  
                  <div className="now-card-bottom-content">
                    <h3 className="now-card-title">
                      {item.title}
                    </h3>
                    <div className="now-card-brand">{item.brand}</div>
                    <div className="now-card-owner">{item.owner}</div>
                    <div className="now-card-more">자세히 보러 가기 →</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MAGAZINE ARTICLE MODAL */}
      {selectedArticle && (
        <div className="mag-modal-overlay" style={{ zIndex: 10000 }} onClick={() => setSelectedArticle(null)}>
          <div className="mag-modal-content fade-up" onClick={e => e.stopPropagation()}>
            <button className="mag-modal-close" onClick={() => setSelectedArticle(null)}>
              <X size={24} />
            </button>
            <div className="mag-modal-body">
              <div className="mag-modal-left">
                <div className="mag-modal-cover">
                  <div className="mag-cover-masthead">OWNERS KOREA</div>
                  <div className="mag-cover-date">JULY / AUGUST 2026</div>
                  <img src={selectedArticle.img} alt="" />
                  <div className="mag-modal-img-caption">
                    <span className="mag-modal-cat-highlight">{selectedArticle.category}</span>
                    <h3>{selectedArticle.title.split(',')[0]}</h3>
                  </div>
                </div>
              </div>
              <div className="mag-modal-right-container">
                <div className="mag-modal-right" ref={magRightRef} onScroll={handleMagScroll}>
                  <div className="mag-modal-section">
                    <div className="mag-modal-header">
                      <span className="mag-modal-date">{selectedArticle.date}</span>
                      <h1 className="mag-modal-split-title">
                        {selectedArticle.title.includes('"') || selectedArticle.title.includes(',') ? (
                          <>
                            <span className="title-line-1">{selectedArticle.title.split(/[",]/)[0].trim()}</span>
                            <span className="title-line-2">
                              {selectedArticle.title.includes('"') 
                                ? `"${selectedArticle.title.split('"')[1]}"` 
                                : selectedArticle.title.split(',')[1].trim()}
                            </span>
                          </>
                        ) : (
                          selectedArticle.title
                        )}
                      </h1>
                    </div>
                    
                    {selectedArticle.content && (
                      <div className="mag-modal-quote">
                        <Quote size={40} className="quote-icon" />
                        <p>{selectedArticle.content.quote}</p>
                      </div>
                    )}

                    {selectedArticle.content && selectedArticle.content.interview.length <= 2 && (
                      <div className="mag-modal-interview">
                        {selectedArticle.content.interview.map((item: any, idx: number) => (
                          <div key={idx} className="interview-item">
                            <div className="question">Q. {item.q}</div>
                            <div className="answer">{item.a}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedArticle.content && selectedArticle.content.interview.length > 2 && (
                      <div className="mag-modal-interview">
                        {selectedArticle.content.interview.slice(0, Math.ceil(selectedArticle.content.interview.length / 2)).map((item: any, idx: number) => (
                          <div key={idx} className="interview-item">
                            <div className="question">Q. {item.q}</div>
                            <div className="answer">{item.a}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {selectedArticle.content && selectedArticle.content.interview.length <= 2 && (
                      <div className="mag-modal-footer">
                        <button className="btn-mag-share">기사 공유하기</button>
                        <button className="btn-mag-save">북마크 저장</button>
                      </div>
                    )}
                  </div>
                  
                  {selectedArticle.content && selectedArticle.content.interview.length > 2 && (
                    <div className="mag-modal-section">
                      <div className="mag-modal-interview">
                        {selectedArticle.content.interview.slice(Math.ceil(selectedArticle.content.interview.length / 2)).map((item: any, idx: number) => (
                          <div key={idx} className="interview-item">
                            <div className="question">Q. {item.q}</div>
                            <div className="answer">{item.a}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mag-modal-footer">
                        <button className="btn-mag-share">기사 공유하기</button>
                        <button className="btn-mag-save">북마크 저장</button>
                      </div>
                    </div>
                  )}
                </div>

                {(() => {
                  const interviewCount = selectedArticle.content?.interview.length || 0;
                  const totalPages = interviewCount > 2 ? 2 : 1;
                  
                  if (totalPages <= 1) return null;
                  
                  return (
                    <div className="mag-modal-scroll-dots">
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`scroll-dot ${activeMagPage === i ? 'active' : ''}`}
                          onClick={() => scrollToMagPage(i)}
                        ></div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NowSection;
