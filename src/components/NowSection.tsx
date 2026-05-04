import React, { useState, useEffect, useRef } from 'react';
import './NowSection.css';

const NOW_ITEMS = [
  {
    id: 1,
    type: '이벤트',
    title: '오너스코리아 PICK\n이달의 추천 로드맵',
    subtitle: '전문가가 제안하는 최적의 자산 확장 플랜',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    bgColor: '#4F46E5'
  },
  {
    id: 2,
    type: '매거진',
    title: 'ChatGPT 2026%\n활용 로드맵',
    subtitle: 'AI 시대, 창업자의 생산성을 극대화하는 법',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    bgColor: '#065F46'
  },
  {
    id: 3,
    type: '이벤트',
    title: '반도체·임베디드\nCAREER TRACK',
    subtitle: '미래 기술 투자, 핵심 인재와 함께 성장하세요',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    bgColor: '#1E3A8A'
  },
  {
    id: 4,
    type: '매거진',
    title: '신규 기획전\n얼리버드 혜택',
    subtitle: '누구보다 빠르게 프리미엄 매장 오너가 되세요',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    bgColor: '#111827'
  },
  {
    id: 5,
    type: '이벤트',
    title: '수도권 병원 상권\n집중 분석 리포트',
    subtitle: '데이터로 증명하는 실패 없는 병원 개원 입지',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    bgColor: '#7C3AED'
  }
];

const NowSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % NOW_ITEMS.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.now-card')?.clientWidth || 300;
      const gap = 32; // Gap matches BEST section gap (2rem = 32px)
      scrollRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <section className="now-section">
      <div className="container">
        <div className="now-header-row">
          <div className="now-header">
            <div className="now-label">NOW</div>
            <h2 className="now-title">지금 진행 중인 이벤트와 소식</h2>
          </div>
          
          <div className="now-pagination">
            {NOW_ITEMS.map((_, idx) => (
              <div 
                key={idx} 
                className={`pagination-bar ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>

        <div className="now-carousel-wrapper">
          <div className="now-carousel-track" ref={scrollRef}>
            {NOW_ITEMS.map((item) => (
              <div key={item.id} className="now-card" style={{ backgroundColor: item.bgColor }}>
                <img src={item.image} alt={item.title} className="now-card-bg" />
                <div className="now-card-overlay"></div>
                
                <div className="now-card-content">
                  <div className="now-card-type-badge">| {item.type}</div>
                  <h3 className="now-card-title">
                    {item.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== item.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <p className="now-card-subtitle">{item.subtitle}</p>
                  <div className="now-card-more">자세히 보러 가기 →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;
