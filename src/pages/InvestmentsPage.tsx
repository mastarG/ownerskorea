import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, TrendingUp, ChevronRight, ChevronDown, Building2, ShieldCheck, PieChart, Maximize, SearchIcon } from 'lucide-react';
import './InvestmentsPage.css';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';

const ALL_INVESTMENTS = [
  {
    id: 1,
    title: '스시 오마카세 류',
    entity: '주식회사 류푸드',
    deposit: '15,000만 원',
    totalAmount: '30,000만 원',
    size: '42평',
    category: '일식',
    location: '서울 강남구',
    brand: '스시류',
    returnRate: '12.5%',
    progress: 85,
    image: thumb1,
    status: '모집중'
  },
  {
    id: 2,
    title: '메종 드 비프',
    entity: '베프코리아 유한회사',
    deposit: '20,000만 원',
    totalAmount: '40,000만 원',
    size: '55평',
    category: '양식',
    location: '서울 서초구',
    brand: '메종드비프',
    returnRate: '10.8%',
    progress: 100,
    image: thumb2,
    status: '마감'
  },
  {
    id: 3,
    title: '카페 에스프레소 바',
    entity: '판교커피그룹',
    deposit: '8,000만 원',
    totalAmount: '16,000만 원',
    size: '18평',
    category: '카페',
    location: '경기 성남시',
    brand: '에스프레소바',
    returnRate: '9.5%',
    progress: 45,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&h=300&auto=format&fit=crop",
    status: '추천'
  },
  {
    id: 4,
    title: '진진 한정식',
    entity: '주식회사 진진글로벌',
    deposit: '25,000만 원',
    totalAmount: '50,000만 원',
    size: '60평',
    category: '한식',
    location: '서울 종로구',
    brand: '진진',
    returnRate: '11.2%',
    progress: 70,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=400&h=300&auto=format&fit=crop",
    status: '모집중'
  },
  {
    id: 5,
    title: '토리노 퀴진',
    entity: '토리노파트너스',
    deposit: '12,000만 원',
    totalAmount: '24,000만 원',
    size: '35평',
    category: '양식',
    location: '서울 마포구',
    brand: '토리노',
    returnRate: '10.5%',
    progress: 30,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=400&h=300&auto=format&fit=crop",
    status: '최신'
  },
  {
    id: 6,
    title: '사쿠라 이자카야',
    entity: '주식회사 사쿠라엔터',
    deposit: '9,000만 원',
    totalAmount: '18,000만 원',
    size: '25평',
    category: '일식',
    location: '서울 송파구',
    brand: '사쿠라',
    returnRate: '13.0%',
    progress: 95,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&h=300&auto=format&fit=crop",
    status: '모집중'
  }
];

const InvestmentsPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dropdown States
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    status: '전체 상태',
    region: '전체 지역',
    brand: '전체 브랜드'
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleFilterSelect = (type: string, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
    setOpenDropdown(null);
  };

  const filteredInvestments = ALL_INVESTMENTS.filter(item => {
    const matchesCategory = activeCategory === '전체' || item.category === activeCategory;
    const matchesStatus = filters.status === '전체 상태' || 
                         (filters.status === '모집' ? item.status === '모집중' : item.status === filters.status);
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <div className="investments-page">
      {/* Hero Section with Search */}
      <section className="investments-hero-v3">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" 
          alt="Premium Restaurant" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-v3"></div>
        <div className="container hero-content-v3">
          
          <h1 className="hero-title-v3">오너스코리아 프리미엄 투자</h1>

          <div className="hero-menu-v3">
            {['전체', '한식', '양식', '일식', '카페'].map(cat => (
              <button 
                key={cat} 
                className={`hero-menu-item-v3 ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hero-search-container-v3">
            <div className="hero-search-bar-v3">
              <input 
                type="text" 
                placeholder="관심 있는 매장명이나 지역을 입력해보세요." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="hero-search-btn-v3">
                <Search size={22} className="text-secondary" />
              </button>
            </div>
          </div>
        </div>
        <div className="hero-fade-overlay-v3"></div>
      </section>

      {/* Main List Section */}
      <main className="investments-main-v3">
        <div className="container">
          <div className="list-top-area-v3">
            <h2 className="premium-list-title-v3">프리미엄 매장 리스트</h2>
            
            {/* Redesigned Filter System (Collapsible Dropdowns) */}
            <div className="filter-dropdown-system">
              {/* Status Filter */}
              <div className="filter-dropdown-item">
                <button 
                  className={`dropdown-toggle ${openDropdown === 'status' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('status')}
                >
                  <span className="label">상태:</span>
                  <span className="current-value">{filters.status}</span>
                  {openDropdown === 'status' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {openDropdown === 'status' && (
                  <div className="dropdown-menu">
                    {['전체 상태', '최신', '추천', '모집', '마감'].map(opt => (
                      <div key={opt} className="dropdown-opt" onClick={() => handleFilterSelect('status', opt)}>{opt}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Region Filter */}
              <div className="filter-dropdown-item">
                <button 
                  className={`dropdown-toggle ${openDropdown === 'region' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('region')}
                >
                  <span className="label">지역:</span>
                  <span className="current-value">{filters.region}</span>
                  {openDropdown === 'region' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {openDropdown === 'region' && (
                  <div className="dropdown-menu">
                    {['전체 지역', '서울', '경기', '부산', '인천'].map(opt => (
                      <div key={opt} className="dropdown-opt" onClick={() => handleFilterSelect('region', opt)}>{opt}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Brand Filter */}
              <div className="filter-dropdown-item">
                <button 
                  className={`dropdown-toggle ${openDropdown === 'brand' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('brand')}
                >
                  <span className="label">브랜드:</span>
                  <span className="current-value">{filters.brand}</span>
                  {openDropdown === 'brand' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {openDropdown === 'brand' && (
                  <div className="dropdown-menu">
                    {['전체 브랜드', '스시류', '메종드비프', '에스프레소바', '진진', '토리노', '사쿠라'].map(opt => (
                      <div key={opt} className="dropdown-opt" onClick={() => handleFilterSelect('brand', opt)}>{opt}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="investments-grid-v2">
            {filteredInvestments.map((item) => (
              <Link to={`/investments/${item.id}`} key={item.id} className="investment-card investment-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* Top Bar Added */}
                <div className="card-top-bar" style={{ justifyContent: 'center' }}>
                  <span className="biz-name">{item.title}({item.category})</span>
                </div>

                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                
                <div className="card-content">
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className={`status-tag-chip ${item.status}`}>
                      {item.status === '마감' ? '모집완료' : item.status}
                    </span>
                  </div>

                  <div className="card-details" style={{ marginBottom: 0 }}>
                    <div className="detail-row">
                      <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <MapPin size={16} /> 소재지
                      </span>
                      <span className="detail-value">{item.location}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <ShieldCheck size={16} /> 임대보증금
                      </span>
                      <span className="detail-value">{item.deposit}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <PieChart size={16} /> 모집금액
                      </span>
                      <span className="detail-value">{item.totalAmount}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Maximize size={16} /> 임대평수
                      </span>
                      <span className="detail-value">{item.size}</span>
                    </div>
                    <div className="detail-row highlight-row">
                      <span className="detail-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <TrendingUp size={16} /> 예상 수익률
                      </span>
                      <span className="detail-value text-danger">{item.returnRate}</span>
                    </div>
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
