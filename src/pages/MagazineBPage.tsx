import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Info, Plus, ThumbsUp, X, Bookmark, Share2, Quote, ArrowUpRight } from 'lucide-react';
import './MagazineBPage.css';

// Import shared data
import { ALL_INVESTMENTS } from '../data/investments';

// Import assets
import eventCover from '../assets/magazine-b/event-cover.png';
import premiumCover from '../assets/magazine-b/premium-cover.png';
import techCover from '../assets/magazine-b/tech-cover.png';
import investmentCover from '../assets/magazine-b/investment-cover.png';

interface MagazineItem {
  id: number | string;
  title: string;
  image: string;
  category: string;
  description: string;
  match: string;
  year: string;
  link: string;
  storeName?: string; // Optional store name for overlay
}

const MagazineBPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. 이벤트 (Articles synced from MagazinePage/Admin)
  const eventItems: any[] = [
    { 
      id: 'm1', 
      title: '시흥 어부 횟집', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80', 
      category: "창업주 인터뷰", 
      match: "FEATURED", 
      year: "2024", 
      description: '"진심이 담긴 회 한 점이 성공의 열쇠"', 
      link: "/investments/1", 
      storeName: "시흥 어부 횟집",
      personName: "박현석 대표",
      content: {
        quote: "성공은 얼마나 많은 손님을 받느냐가 아니라, 얼마나 많은 손님이 다시 오느냐에 달려 있습니다.",
        interview: [
          { q: "처음 창업을 결심하게 된 계기는 무엇인가요?", a: "오랜 시간 유통업에 종사하며 좋은 식재료의 가치를 알게 되었습니다. 정직한 재료로 승부하면 반드시 통할 것이라는 확신이 있었죠." },
          { q: "매출 1위의 비결을 딱 하나만 꼽는다면?", a: "기술적인 마케팅보다 중요한 것은 '신뢰'입니다. 저희 가게는 당일 입고된 생선이 아니면 절대 상에 올리지 않는다는 원칙을 지킵니다." }
        ]
      }
    },
    { 
      id: 'm2', 
      title: '강남 루프탑', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', 
      category: "인사이드 스토리", 
      match: "HOT", 
      year: "2024", 
      description: '"공간의 가치를 디자인하다"', 
      link: "/investments/2", 
      storeName: "루프탑 디자인",
      personName: "이지은 소장",
      content: {
        quote: "공간은 단순히 물리적 장소가 아닙니다. 사람의 감정이 머무는 경험의 결정체죠.",
        interview: [
          { q: "루프탑이라는 공간에 주목한 이유는?", a: "도심 속에서 하늘을 볼 수 있는 유일한 탈출구라고 생각했습니다. 그 해방감을 고객들에게 전달하고 싶었습니다." },
          { q: "공간 기획에서 가장 중요하게 생각하는 요소는?", a: "조명과 음악, 그리고 그 사이를 흐르는 여백입니다. 화려함보다는 편안함이 오래가는 법이죠." }
        ]
      }
    },
    { 
      id: 'm3', 
      title: 'IT 개발자의 인생 2막', 
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', 
      category: "창업 트렌드", 
      match: "NEW", 
      year: "2024", 
      description: '"코드를 짜던 섬세함으로 원두를 설계합니다"', 
      link: "/investments/3", 
      storeName: "판교 테크노 카페",
      personName: "김민준 대표",
      content: {
        quote: "코드를 짜던 섬세함으로 이제는 원두의 맛을 설계합니다.",
        interview: [
          { q: "개발자를 그만두고 창업을 한 것에 후회는 없나요?", a: "전혀요. 코드는 컴퓨터가 실행하지만, 커피는 사람이 마십니다. 눈앞에서 행복해하는 표정을 보는 것만큼 보람찬 일은 없습니다." },
          { q: "판교라는 위치의 특수성이 있나요?", a: "밤늦게까지 일하는 개발자 동료들에게 편안한 쉼터가 되고 싶었습니다." }
        ]
      }
    },
    { 
      id: 'm4', 
      title: 'MZ세대의 상권 분석', 
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', 
      category: "트렌드 리포트", 
      match: "TRENDING", 
      year: "2024", 
      description: '"데이터로 읽는 골목 상권의 생존 전략"', 
      link: "/investments/4", 
      storeName: "데이터 랩",
      personName: "최재혁 팀장",
      content: {
        quote: "상권은 살아있는 생명체와 같습니다. 데이터는 그 생명체의 맥박을 읽는 청진기죠.",
        interview: [
          { q: "MZ세대 상권의 가장 큰 특징은?", a: "목적지가 명확하다는 점입니다. 단순히 유동인구가 많은 곳이 아니라, '그곳에만 있는 경험'을 찾아 이동하죠." },
          { q: "데이터 분석 시 가장 중요하게 보는 지표는?", a: "재방문율과 체류 시간입니다. 신규 방문보다 그 공간이 얼마나 지속 가능한지를 보여주는 지표이기 때문이죠." }
        ]
      }
    },
  ];

  // Startup Cards from ALL_INVESTMENTS
  const allStartupCards: MagazineItem[] = ALL_INVESTMENTS.map(item => ({
    id: item.id,
    title: item.title,
    image: item.image,
    category: item.subCategory,
    description: `${item.location} | ${item.size} | 보증금 ${item.deposit}`,
    match: `${item.returnRate} 수익률`,
    year: item.status,
    link: `/investments/${item.id}`,
    storeName: item.title,
    personName: "오너스 코리아" // Default for startups
  }));

  const categories = [
    {
      title: "이벤트 (Events)",
      items: eventItems,
      color: "#ff4b4b" // Red for Events
    },
    {
      title: "최근 등록 (Recently Added)",
      items: allStartupCards.slice(0, 5),
      color: "#ff8c00" // Orange
    },
    {
      title: "병원 (Hospitals)",
      items: allStartupCards.filter(c => c.category.includes('과') || c.category === '병원').slice(0, 5),
      color: "#46d369" // Green
    },
    {
      title: "음식점 (Restaurants)",
      items: allStartupCards.filter(c => ['한식', '양식', '일식', '카페'].includes(c.category)).slice(0, 5),
      color: "#ffd700" // Yellow
    },
    {
      title: "스타트업 (Startups)",
      items: allStartupCards.filter(c => !['병원', '한식', '양식', '일식', '카페'].includes(c.category)).slice(0, 5),
      color: "#d4af37" // Premium Gold
    }
  ];

  return (
    <div className="magazine-b-page">
      {/* Featured Banner */}
      <section className="magazine-b-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">오너스가 제안하는<br />이달의 프리미엄 인사이트</h1>
          <p className="hero-description">
            창업자와 투자자가 함께 성장하는 오너스코리아의 최신 소식을 확인하세요. 성공적인 자산 운용을 위한 전문가들의 비전을 공유합니다.
          </p>
          <div className="hero-btns">
            <button className="btn-play" onClick={() => setSelectedArticle(eventItems[0])}>
              <Info size={24} /> 자세히 보기
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="magazine-b-rows">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-row" style={{ '--row-theme-color': cat.color } as any}>
            <h2 className="category-title" style={{ color: cat.color }}>
              {cat.title} <ChevronRight size={20} className="arrow" />
            </h2>
            <div className="row-items">
              {cat.items.map((item) => (
                <div 
                  key={item.id} 
                  className="magazine-card"
                  onClick={() => idx === 0 ? setSelectedArticle(item) : null}
                >
                  {/* Top Left Overlay */}
                  <div className="card-tag-badge">
                    {idx === 0 ? (
                      <>
                        <span className="mag-name">OWNERS KOREA</span>
                        <span className="mag-date">JULY / AUGUST 2026</span>
                      </>
                    ) : (
                      <span className="category-box" style={{ backgroundColor: cat.color }}>{item.category}</span>
                    )}
                  </div>
                  
                  <img src={item.image} alt={item.title} className="card-img" />
                  
                  {/* Bottom Right Overlay */}
                  <div className="card-store-name" style={{ color: idx !== 0 ? cat.color : '#fff' }}>
                    <span className="shop">{item.storeName}</span>
                    <span className="person">{item.personName}</span>
                  </div>

                  <div className="card-info">
                    <div className="card-actions">
                      <div className="action-circle" onClick={(e) => { e.stopPropagation(); idx === 0 ? setSelectedArticle(item) : null; }}>
                        <Play size={16} fill="white" />
                      </div>
                      <div className="action-circle"><Plus size={16} /></div>
                      <div className="action-circle"><ThumbsUp size={16} /></div>
                      <div className="action-circle info-icon">
                        <ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} />
                      </div>
                    </div>
                    <div className="card-meta">
                      <span className="match">{item.match}</span>
                      <span className="year">{item.year}</span>
                      <span className="badge">{item.category}</span>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="mag-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="mag-modal-content" onClick={e => e.stopPropagation()}>
            <button className="mag-modal-close" onClick={() => setSelectedArticle(null)}>
              <X size={32} />
            </button>
            
            <div className="mag-modal-hero" style={{ backgroundImage: `url(${selectedArticle.image})` }}>
              <div className="mag-modal-hero-overlay"></div>
              <div className="mag-modal-hero-text">
                <span className="mag-modal-cat">{selectedArticle.category}</span>
                <h2>{selectedArticle.title}</h2>
                <div className="mag-modal-meta">
                  <span>{selectedArticle.personName}</span>
                  <span className="dot">•</span>
                  <span>{selectedArticle.year}.05.01</span>
                </div>
              </div>
            </div>

            <div className="mag-modal-body">
              {selectedArticle.content && (
                <>
                  <div className="mag-modal-quote">
                    <Quote className="quote-icon" size={40} />
                    <p>{selectedArticle.content.quote}</p>
                  </div>

                  <div className="mag-modal-interview">
                    {selectedArticle.content.interview.map((item: any, i: number) => (
                      <div key={i} className="interview-block">
                        <h4 className="question">Q. {item.q}</h4>
                        <p className="answer">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              <div className="mag-modal-footer">
                <button className="btn-modal-action">
                  <Bookmark size={20} /> 보관하기
                </button>
                <button className="btn-modal-action">
                  <Share2 size={20} /> 공유하기
                </button>
                <Link to={selectedArticle.link} className="btn-modal-primary">
                  상세 투자정보 보기 <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineBPage;
