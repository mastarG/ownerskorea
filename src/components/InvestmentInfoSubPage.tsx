import React, { useState } from 'react';
import { Search, Filter, ArrowUpRight, TrendingUp, Users, MapPin, Building2, ChevronRight, ChevronLeft } from 'lucide-react';
import './InvestmentSubPages.css';

const InvestmentInfoSubPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [currentPage, setCurrentPage] = useState(0);

  const opportunities = [
    { 
      id: 1, 
      name: '판교 테크노파크 대형 카페', 
      location: '경기 성남시 판교동', 
      deposit: '5,000만원',
      scale: '25평 / 1층',
      fundingAmount: '2.5억원',
      roi: '12.5%', 
      progress: 85, 
      investors: 124, 
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80', 
      tag: '마감임박' 
    },
    { 
      id: 2, 
      name: '성수동 복합 문화 공간', 
      location: '서울 성동구 성수동', 
      deposit: '8,000만원',
      scale: '45평 / 2층',
      fundingAmount: '4.2억원',
      roi: '14.2%', 
      progress: 42, 
      investors: 56, 
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80', 
      tag: 'New' 
    },
    { 
      id: 3, 
      name: '해운대 오션뷰 펍', 
      location: '부산 해운대구 중동', 
      deposit: '1.2억원',
      scale: '35평 / 5층',
      fundingAmount: '3.8억원',
      roi: '11.8%', 
      progress: 15, 
      investors: 24, 
      img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 4, 
      name: '강남역 루프탑 와인바', 
      location: '서울 강남구 역삼동', 
      deposit: '1.5억원',
      scale: '20평 / 12층',
      fundingAmount: '5.5억원',
      roi: '13.1%', 
      progress: 65, 
      investors: 88, 
      img: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 5, 
      name: '제주 테마 파크 카페', 
      location: '제주 서귀포시', 
      deposit: '4,000만원',
      scale: '60평 / 단독',
      fundingAmount: '1.8억원',
      roi: '15.5%', 
      progress: 30, 
      investors: 45, 
      img: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 6, 
      name: '송도 센트럴 베이커리', 
      location: '인천 연수구 송도동', 
      deposit: '7,000만원',
      scale: '18평 / 1층',
      fundingAmount: '2.1억원',
      roi: '10.9%', 
      progress: 92, 
      investors: 210, 
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', 
      tag: '마감임박' 
    },
  ];

  const filteredItems = activeFilter === '전체' 
    ? opportunities 
    : opportunities.filter(op => op.name.includes(activeFilter) || op.location.includes(activeFilter));

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const nextSlide = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevSlide = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="invest-info-sub-v42 fade-in">
      <div className="info-controls-row-v42">
        <div className="filter-scroll-v42">
          {['전체', 'F&B', '리테일', '부동산', '서비스', '성장형', '수익형'].map(f => (
            <button 
              key={f} 
              className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        
        {/* Pagination moved to top right */}
        <div className="slider-pagination-dots top-nav">
          {Array(totalPages).fill(null).map((_, i) => (
            <div 
              key={i} 
              className={`pag-dot ${currentPage === i ? 'active' : ''}`} 
              onClick={() => setCurrentPage(i)}
            ></div>
          ))}
        </div>

        <div className="search-bar-v42">
          <Search size={16} />
          <input type="text" placeholder="지역, 업종명으로 검색..." />
        </div>
      </div>

      <div className="opportunities-slider-v42">
        <button 
          className={`slider-nav-btn prev ${currentPage === 0 ? 'disabled' : ''}`}
          onClick={prevSlide}
          disabled={currentPage === 0}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="opportunities-grid">
          {currentItems.map(op => (
            <div key={op.id} className="op-card-v42 fade-in">
              <div className="op-thumb">
                <img src={op.img} alt={op.name} />
                {op.tag && <span className="op-tag">{op.tag}</span>}
                <div className="op-roi-badge">{op.roi} 수익률</div>
              </div>
              <div className="op-content">
                <h3>{op.name}</h3>
                <div className="op-location"><MapPin size={12} /> {op.location}</div>
                
                {/* Detailed property info grid - Funding Amount removed to save space */}
                <div className="op-details-grid">
                  <div className="detail-item">
                    <span className="label">임대보증금</span>
                    <span className="value">{op.deposit}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">임대규모</span>
                    <span className="value">{op.scale}</span>
                  </div>
                </div>

                <div className="op-progress-v42">
                  <div className="prog-text">
                    <div className="prog-info">
                      <Users size={14} /> <span>{op.investors}명 참여중</span>
                    </div>
                    <span>{op.progress}%</span>
                  </div>
                  <div className="prog-bar-bg">
                    <div className="prog-bar-fill" style={{ width: `${op.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Fill empty slots to maintain grid layout */}
          {currentItems.length < itemsPerPage && Array(itemsPerPage - currentItems.length).fill(null).map((_, i) => (
            <div key={`empty-${i}`} className="op-card-v42 empty"></div>
          ))}
        </div>

        <button 
          className={`slider-nav-btn next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
          onClick={nextSlide}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default InvestmentInfoSubPage;
