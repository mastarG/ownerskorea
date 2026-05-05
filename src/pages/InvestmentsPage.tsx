import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, TrendingUp, ChevronRight, ChevronDown, Building2, ShieldCheck, PieChart, Maximize } from 'lucide-react';
import './InvestmentsPage.css';

import { ALL_INVESTMENTS } from '../data/investments';

const InvestmentsPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    status: '전체 상태',
    industry: '전체 업종',
    subCategory: '전체 업태',
    brand: '전체 브랜드',
    region: '전체 지역'
  });

  const toggleFilter = (name: string) => {
    setExpandedFilter(expandedFilter === name ? null : name);
  };

  const handleFilterSelect = (type: string, value: string) => {
    if (type === 'industry') {
      // Reset subCategory if industry changes
      setFilters(prev => ({ ...prev, industry: value, subCategory: '전체 업태' }));
      if (value !== '전체 업종') setActiveIndustry(value);
      else setActiveIndustry('전체');
    } else {
      setFilters(prev => ({ ...prev, [type]: value }));
    }
    setOpenDropdown(null);
  };

  const getSubCategories = () => {
    const industry = filters.industry !== '전체 업종' ? filters.industry : activeIndustry;
    if (industry === '음식점') return ['전체 업태', '한식', '양식', '일식', '카페'];
    if (industry === '병원') return ['전체 업태', '피부과', '정형외과', '치과'];
    return ['전체 업태'];
  };

  const filteredInvestments = ALL_INVESTMENTS.filter(item => {
    const matchesIndustry = activeIndustry === '전체' || item.industry === activeIndustry;
    const matchesStatus = filters.status === '전체 상태' || 
                         (filters.status === '모집' ? item.status === '모집중' : item.status === filters.status);
    const matchesSubCategory = filters.subCategory === '전체 업태' || item.subCategory === filters.subCategory;
    const matchesRegion = filters.region === '전체 지역' || item.location.includes(filters.region);
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesStatus && matchesSubCategory && matchesRegion && matchesSearch;
  });

  const heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"; // Commercial Building Exterior

  return (
    <div className="investments-page">
      <section className="investments-hero-v3">
        <div className="hero-slideshow-v3">
          <div 
            className="hero-slide-v3 active"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        <div className="hero-overlay-v3"></div>
        <div className="container hero-content-v4">
          <div className="hero-text-area-v4">
            <span className="hero-label-v4">오너스코리아 프리미엄 투자</span>
          </div>
          <div className="hero-search-container-v4">
            <div className="hero-search-bar-v4">
              <input 
                type="text" 
                placeholder="관심 있는 매장명이나 지역을 입력해보세요." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="hero-search-btn-v4"><Search size={22} /></button>
            </div>
          </div>

          {/* Simple Filter System: Left-aligned, No sub-options */}
          <div className="hero-filters-v4 left-aligned">
            <div className="filter-cats-v4">
              <button 
                className={`filter-cat-v4 ${activeIndustry === '전체' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveIndustry('전체');
                  setFilters({ ...filters, industry: '전체 업종', subCategory: '전체 업태', status: '전체 상태' });
                }}
              >
                전체
              </button>
              <button 
                className={`filter-cat-v4 ${activeIndustry === '병원' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveIndustry('병원');
                  setFilters({ ...filters, industry: '병원', subCategory: '전체 업태' });
                }}
              >
                병원
              </button>
              <button 
                className={`filter-cat-v4 ${activeIndustry === '음식점' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveIndustry('음식점');
                  setFilters({ ...filters, industry: '음식점', subCategory: '전체 업태' });
                }}
              >
                음식점
              </button>
              <button 
                className={`filter-cat-v4 ${activeIndustry === '상품' ? 'selected' : ''}`}
                onClick={() => {
                  setActiveIndustry('상품');
                  setFilters({ ...filters, industry: '전체 업종', subCategory: '전체 업태', status: '모집' });
                }}
              >
                상품
              </button>
            </div>
          </div>
        </div>
        <div className="hero-fade-overlay-v3"></div>
      </section>

      <main className="investments-main-v3">
        <div className="container">
          {/* Previous filter system removed */}

          <div className="investments-grid-v2">
            {filteredInvestments.map((item) => (
              <Link to={`/investments/${item.id}`} key={item.id} className="investment-card investment-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-top-bar">
                  <span className="biz-name">{item.title}</span>
                  <span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{item.subCategory}</span>
                </div>
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <div className="card-content">
                  <div style={{ marginBottom: '1rem' }}>
                    <span className={`status-tag-chip ${item.status}`}>{item.status === '마감' ? '모집완료' : item.status}</span>
                  </div>
                  <div className="card-details">
                    <div className="detail-row"><span className="detail-label"><MapPin size={14} /> 소재지</span><span className="detail-value">{item.location}</span></div>
                    <div className="detail-row"><span className="detail-label"><ShieldCheck size={14} /> 임대보증금</span><span className="detail-value">{item.deposit}</span></div>
                    <div className="detail-row"><span className="detail-label"><PieChart size={14} /> 모집금액</span><span className="detail-value">{item.totalAmount}</span></div>
                    <div className="detail-row"><span className="detail-label"><Maximize size={14} /> 규모</span><span className="detail-value">{item.size}</span></div>
                    <div className="detail-row highlight-row"><span className="detail-label"><TrendingUp size={14} /> 예상 수익률</span><span className="detail-value text-danger">{item.returnRate}</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentsPage;
