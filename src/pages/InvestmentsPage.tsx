import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, TrendingUp, ChevronRight, ChevronDown, Building2, ShieldCheck, PieChart, Maximize } from 'lucide-react';
import './InvestmentsPage.css';

const ALL_INVESTMENTS = [
  // Restaurants (Existing)
  { id: 1, title: '스시 오마카세 류', industry: '음식점', subCategory: '일식', location: '서울 강남구', deposit: '15,000만 원', totalAmount: '30,000만 원', size: '42평', returnRate: '12.5%', progress: 85, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', status: '모집중' },
  { id: 2, title: '메종 드 비프', industry: '음식점', subCategory: '양식', location: '서울 서초구', deposit: '20,000만 원', totalAmount: '40,000만 원', size: '55평', returnRate: '10.8%', progress: 100, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', status: '마감' },
  { id: 3, title: '카페 에스프레소 바', industry: '음식점', subCategory: '카페', location: '경기 성남시', deposit: '8,000만 원', totalAmount: '16,000만 원', size: '18평', returnRate: '9.5%', progress: 45, image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80", status: '추천' },
  { id: 4, title: '진진 한정식', industry: '음식점', subCategory: '한식', location: '서울 종로구', deposit: '25,000만 원', totalAmount: '50,000만 원', size: '60평', returnRate: '11.2%', progress: 70, image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80", status: '모집중' },
  { id: 5, title: '토리노 퀴진', industry: '음식점', subCategory: '양식', location: '서울 마포구', deposit: '12,000만 원', totalAmount: '24,000만 원', size: '35평', returnRate: '10.5%', progress: 30, image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80", status: '최신' },
  { id: 6, title: '사쿠라 이자카야', industry: '음식점', subCategory: '일식', location: '서울 송파구', deposit: '9,000만 원', totalAmount: '18,000만 원', size: '25평', returnRate: '13.0%', progress: 95, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80", status: '모집중' },
  
  // Hospitals (New)
  { id: 7, title: '더 맑은 피부과 강남점', industry: '병원', subCategory: '피부과', location: '서울 강남구', deposit: '30,000만 원', totalAmount: '10억', size: '80평', returnRate: '11.5%', progress: 40, image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', status: '최신' },
  { id: 8, title: '바른 정형외과 센터', industry: '병원', subCategory: '정형외과', location: '서울 서초구', deposit: '50,000만 원', totalAmount: '20억', size: '150평', returnRate: '10.2%', progress: 65, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', status: '모집중' },
  { id: 9, title: '연세 화이트 치과', industry: '병원', subCategory: '치과', location: '경기 성남시', deposit: '20,000만 원', totalAmount: '8억', size: '45평', returnRate: '12.8%', progress: 90, image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80', status: '모집중' },
  { id: 10, title: '리버스 성형외과', industry: '병원', subCategory: '피부과', location: '서울 강남구', deposit: '40,000만 원', totalAmount: '15억', size: '120평', returnRate: '13.5%', progress: 20, image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80', status: '추천' },
  { id: 11, title: '튼튼 마디 한의원', industry: '병원', subCategory: '정형외과', location: '서울 송파구', deposit: '15,000만 원', totalAmount: '5억', size: '40평', returnRate: '9.8%', progress: 55, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80', status: '모집중' },
  { id: 12, title: '에스플란트 치과', industry: '병원', subCategory: '치과', location: '서울 용산구', deposit: '25,000만 원', totalAmount: '12억', size: '65평', returnRate: '11.0%', progress: 75, image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&w=800&q=80', status: '모집중' },
];

const InvestmentsPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const [filters, setFilters] = useState({
    status: '전체 상태',
    industry: '전체 업종',
    subCategory: '전체 업태',
    brand: '전체 브랜드',
    region: '전체 지역'
  });

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
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

  return (
    <div className="investments-page">
      <section className="investments-hero-v3">
        <img 
          src="https://images.unsplash.com/photo-1538108149393-fdfd81895907?auto=format&fit=crop&w=1600&q=80" 
          alt="Premium Investment" 
          className="hero-bg-img"
        />
        <div className="hero-overlay-v3"></div>
        <div className="container hero-content-v3">
          <h1 className="hero-title-v3">오너스코리아 프리미엄 투자</h1>
          <div className="hero-menu-v3">
            {['전체', '병원', '음식점'].map(cat => (
              <button 
                key={cat} 
                className={`hero-menu-item-v3 ${activeIndustry === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveIndustry(cat);
                  setFilters(prev => ({ ...prev, industry: cat === '전체' ? '전체 업종' : cat, subCategory: '전체 업태' }));
                }}
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
              <button className="hero-search-btn-v3"><Search size={22} className="text-secondary" /></button>
            </div>
          </div>
        </div>
        <div className="hero-fade-overlay-v3"></div>
      </section>

      <main className="investments-main-v3">
        <div className="container">
          <div className="list-top-area-v3">
            <h2 className="premium-list-title-v3">프리미엄 투자 리스트</h2>
            <div className="filter-dropdown-system">
              {/* Status */}
              <div className="filter-dropdown-item">
                <button className={`dropdown-toggle ${openDropdown === 'status' ? 'open' : ''}`} onClick={() => toggleDropdown('status')}>
                  <span className="label">상태:</span> <span className="current-value">{filters.status}</span>
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

              {/* Industry (업종) */}
              <div className="filter-dropdown-item">
                <button className={`dropdown-toggle ${openDropdown === 'industry' ? 'open' : ''}`} onClick={() => toggleDropdown('industry')}>
                  <span className="label">업종:</span> <span className="current-value">{filters.industry}</span>
                  {openDropdown === 'industry' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {openDropdown === 'industry' && (
                  <div className="dropdown-menu">
                    {['전체 업종', '병원', '음식점'].map(opt => (
                      <div key={opt} className="dropdown-opt" onClick={() => handleFilterSelect('industry', opt)}>{opt}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* SubCategory (업태) */}
              <div className="filter-dropdown-item">
                <button className={`dropdown-toggle ${openDropdown === 'subCategory' ? 'open' : ''}`} onClick={() => toggleDropdown('subCategory')}>
                  <span className="label">업태:</span> <span className="current-value">{filters.subCategory}</span>
                  {openDropdown === 'subCategory' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
                {openDropdown === 'subCategory' && (
                  <div className="dropdown-menu">
                    {getSubCategories().map(opt => (
                      <div key={opt} className="dropdown-opt" onClick={() => handleFilterSelect('subCategory', opt)}>{opt}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Region */}
              <div className="filter-dropdown-item">
                <button className={`dropdown-toggle ${openDropdown === 'region' ? 'open' : ''}`} onClick={() => toggleDropdown('region')}>
                  <span className="label">지역:</span> <span className="current-value">{filters.region}</span>
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
            </div>
          </div>

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
