import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, List, Store, Bell, MessageSquare, LogOut,
  FileText, TrendingUp, CircleDollarSign, Calendar, Target,
  ChevronRight, ChevronDown, ArrowUpRight, Trophy, Sparkles,
  Settings, Printer, ShieldCheck, Clock, RefreshCw, Smartphone,
  MapPin, PieChart, Maximize, User, Users, Download, Share2, Calculator,
  Building, CheckCircle2, ArrowLeft, AlertCircle, CalendarDays, Info,
  Sun, Cloud, CloudRain, CloudSun, ArrowUp, ArrowDown, ChevronLeft
} from 'lucide-react';
import './MyPage.css';
import IntegratedValue from './IntegratedValue';

interface MyPageProps {
  onLogout: () => void;
}

interface Asset {
  name?: string;
  investment: string;
  dividend: string;
  principal: string;
  duration: string;
  roi: number;
  nextPayout: string;
  chartData: number[];
}

const ASSET_DATA: Record<'all' | 'sushi' | 'cafe', Asset> = {
  // ... existing asset data ...
};

const INVESTMENTS_DATA: Record<string, any> = {
  "1": {
    title: '시흥 어부 횟집',
    category: '외식업',
    type: '수산물',
    location: '경기도 시흥시 거북섬길 12',
    totalAmount: '9억',
    minInvestment: '3,000만 원',
    returnRate: '15.2%',
    progress: 85,
    duration: '36개월',
    description: '시흥 거북섬에 위치한 프리미엄 횟집입니다. 풍부한 해산물과 탁월한 전망을 자랑합니다.',
    images: ["https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '류현우 셰프', area: '115㎡ (35평)', tables: '홀 20석', avgRevenue: '월 1억 2,000만 원' },
    syndicateName: '오너스 제1호 외식업 투자조합',
    companyInfo: { name: '주식회사 류푸드', ceo: '류현우', address: '서울 강남구 테헤란로 123' }
  },
  "2": {
    title: '판교 아티장 카페',
    category: '외식업',
    type: '카페',
    location: '경기 성남시 분당구 판교역로',
    totalAmount: '6억',
    minInvestment: '3,000만 원',
    returnRate: '12.8%',
    progress: 45,
    duration: '24개월',
    description: '판교 테크노밸리의 중심에 위치한 예술적인 카페입니다.',
    images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '박지민 바리스타', area: '60㎡ (18평)', tables: '홀 12석', avgRevenue: '월 4,500만 원' },
    syndicateName: '오너스 제3호 베이커리 투자조합',
    companyInfo: { name: '주식회사 판교커피', ceo: '박지민', address: '경기 성남시 분당구 판교역로' }
  },
  "3": {
    title: '류 스시 오마카세',
    category: '외식업',
    type: '일식',
    location: '서울 강남구 역삼동',
    totalAmount: '12억',
    minInvestment: '3,000만 원',
    returnRate: '14.5%',
    progress: 100,
    duration: '36개월',
    description: '강남구 역삼동의 최고급 스시 오마카세입니다.',
    images: ["https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '류현우 셰프', area: '138㎡ (42평)', tables: '카운터 12석', avgRevenue: '월 1억 8,000만 원' },
    syndicateName: '오너스 제10호 일식 투자조합',
    companyInfo: { name: '주식회사 류푸드', ceo: '류현우', address: '서울 강남구 테헤란로 123' }
  },
  "4": {
    title: '강남 비프 앤 와인',
    category: '외식업',
    type: '양식',
    location: '서울 강남구 청담동',
    totalAmount: '15억',
    minInvestment: '3,000만 원',
    returnRate: '13.1%',
    progress: 25,
    duration: '48개월',
    description: '청담동의 럭셔리 스테이크 하우스입니다.',
    images: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '이성호 셰프', area: '181㎡ (55평)', tables: '홀 20석', avgRevenue: '월 2억 1,000만 원' },
    syndicateName: '오너스 제15호 스테이크 투자조합',
    companyInfo: { name: '주식회사 강남푸드', ceo: '이성호', address: '서울 강남구 청담동' }
  },
  "5": {
    title: '성수 베이커리 랩',
    category: '외식업',
    type: '제과',
    location: '서울 성동구 성수동',
    totalAmount: '8억',
    minInvestment: '3,000만 원',
    returnRate: '16.4%',
    progress: 70,
    duration: '36개월',
    description: '성수동의 트렌디한 베이커리 카페입니다.',
    images: ["https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '김미영 제빵사', area: '72㎡ (22평)', tables: '홀 10석', avgRevenue: '월 7,200만 원' },
    syndicateName: '오너스 제22호 베이커리 투자조합',
    companyInfo: { name: '주식회사 성수브레드', ceo: '김미영', address: '서울 성동구 성수동' }
  },
  "6": {
    title: '청담 파인다이닝',
    category: '외식업',
    type: '양식',
    location: '서울 강남구 청담동',
    totalAmount: '20억',
    minInvestment: '5,000만 원',
    returnRate: '11.8%',
    progress: 15,
    duration: '60개월',
    description: '청담동 정통 프렌치 파인다이닝입니다.',
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"],
    businessInfo: { founder: '장 피에르 셰프', area: '396㎡ (120평)', tables: '홀 40석', avgRevenue: '월 3억 5,000만 원' },
    syndicateName: '오너스 제30호 파인다이닝 투자조합',
    companyInfo: { name: '주식회사 청담푸드', ceo: '강성훈', address: '서울 강남구 청담동' }
  }
};


// --- Animated Number Component ---
const AnimatedNumber = ({ value, duration = 1000, suffix = "", decimals = 0 }: { value: string | number, duration?: number, suffix?: string, decimals?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const target = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = progress * target;
      setDisplayValue(current as any);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toLocaleString();

  return <span>{formatted}{suffix}</span>;
};

const MyPage = ({ onLogout }: MyPageProps) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [chartPeriod, setChartPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [selectedAsset, setSelectedAsset] = useState<'all' | 'sushi' | 'cafe'>('all');
  const [analysisTab, setAnalysisTab] = useState<'revenue' | 'visitors' | 'info'>('revenue');
  const [clickedMenuId, setClickedMenuId] = useState<number | null>(null);
  const [recommendIndex, setRecommendIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showEmailAuth, setShowEmailAuth] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes
  const [selectedContractId, setSelectedContractId] = useState<number | null>(1);
  const [myStoreTab, setMyStoreTab] = useState<'info' | 'revenue' | 'invest'>('info');
  const [infoSubTab, setInfoSubTab] = useState<'amenities' | 'menu' | 'photos'>('amenities');
  const [selectedInvestmentId, setSelectedInvestmentId] = useState<number | null>(null);
  const [modalTab, setModalTab] = useState('store');
  const [modalUnits, setModalUnits] = useState(1);
  const [dayOffset, setDayOffset] = useState(0); // 0=오늘, 1=내일, 2=모레, 3=글피
  const [weekOffset, setWeekOffset] = useState(0); // 0=이번주, -1=저번주
  const [monthOffset, setMonthOffset] = useState(0); // 0=이번달, -1=저번달

  const [activeMyStoreId, setActiveMyStoreId] = useState(1);
  const [showPhotoSelector, setShowPhotoSelector] = useState<{menuIdx: number} | null>(null);
  const [myStores, setMyStores] = useState([
    { id: 1, name: '시흥 어부 횟집', menus: [{ id: 1, name: '특선 모듬회', price: '65,000', img: '' }], photos: [] },
    { id: 2, name: '판교 아티장 카페', menus: [], photos: [] }
  ]);
  const [amenities, setAmenities] = useState([
    { id: 'parking', name: '주차', icon: <MapPin size={16}/>, checked: true },
    { id: 'wifi', name: '와이파이', icon: <Smartphone size={16}/>, checked: true },
    { id: 'delivery', name: '배달', icon: <RefreshCw size={16}/>, checked: false },
    { id: 'pickup', name: '포장', icon: <Store size={16}/>, checked: true },
    { id: 'reservation', name: '예약', icon: <Calendar size={16}/>, checked: true },
  ]);

  const CONTRACTS = [
    { id: 1, title: "입점 협력 계약서 (시흥 횟집)", imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=200&q=80", date: "2024.03.15", expiry: "2026.03.14", amount: "3,000만원(1구좌)", content: "제 1조 (목적)\n본 계약은 '오너스코리아'와 '투자자' 간의 상호 협력을 목적으로 하며...\n\n제 2조 (투자 금액 및 배당)\n투자자는 해당 매장에 대해 금 일천만 원을 투자하며, 매월 수익의 5%를 배당받는다...\n\n제 3조 (계약 기간)\n본 계약의 효력은 체결일로부터 2년간 유지되며...\n\n제 4조 (권리 및 의무)\n투자자는 매장의 경영에 직접 관여하지 않으나, 투명한 회계 보고를 받을 권리가 있다...\n\n제 5조 (해지)\n일방이 본 계약을 위반할 경우, 상대방은 서면 통지 후 계약을 해지할 수 있다." },
    { id: 2, title: "투자 약정서 (판교 카페)", imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80", date: "2024.04.10", expiry: "2026.04.09", amount: "1,500만원(0.5구좌)", content: "제 1조 (투자금의 예치)\n투자자는 약정된 기일까지 지정된 계좌로 투자금을 예치하여야 한다...\n\n제 2조 (수익 배분 방식)\n수익 배분은 매월 25일에 정산하여 지급하는 것을 원칙으로 한다...\n\n제 3조 (비밀 유지)\n양 당사자는 본 계약과 관련하여 지득한 모든 정보를 제3자에게 누설해서는 안 된다..." },
    { id: 3, title: "업무 제휴 계약서 (강남 오피스)", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80", date: "2024.05.01", expiry: "2025.04.30", amount: "5,000만원(1.5구좌)", content: "제 1조 (제휴의 범위)\n본 계약은 강남 오피스 지점의 업무 환경 고도화를 위한 제휴를 다룬다...\n\n제 2조 (비용 분담)\n제휴에 따른 초기 구축 비용은 오너스코리아가 전액 부담하며..." }
  ];

  const currentData = ASSET_DATA[selectedAsset];
  const activeContract = CONTRACTS.find(c => c.id === selectedContractId);

  useEffect(() => {
    let interval: any;
    if (showEmailAuth) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      setTimer(180);
    }
    return () => clearInterval(interval);
  }, [showEmailAuth]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="mypage-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={onLogout}>
            <span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea
          </Link>
        </div>

        <div className="sidebar-profile">
          <div className="profile-avatar">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
          </div>
          <div className="profile-info">
            <h4>김오너 님</h4>
            <div className="profile-rankings">
              <span>투자랭킹: 12위</span>
              <span>수익랭킹: 5위</span>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <button
              className={`nav-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dashboard')}
            >
              <span className="dot-indicator"></span>
              <span>대시보드</span>
            </button>

            <button
              className={`nav-item ${activeMenu === 'memberInfo' ? 'active' : ''}`}
              onClick={() => setActiveMenu('memberInfo')}
            >
              <ChevronRight size={18} className="chevron-icon" />
              <span>회원정보</span>
            </button>

            <button
              className={`nav-item ${activeMenu === 'investments' ? 'active' : ''}`}
              onClick={() => setActiveMenu('investments')}
            >
              <ChevronDown size={18} className="chevron-icon" />
              <span>투자처 리스트</span>
            </button>

            {activeMenu === 'investments' && (
              <div className="sub-nav">
                <button className={`sub-nav-item ${selectedAsset === 'sushi' ? 'active' : ''}`} onClick={() => setSelectedAsset('sushi')}>
                  시흥 횟집 (2구좌)
                </button>
                <button className={`sub-nav-item ${selectedAsset === 'cafe' ? 'active' : ''}`} onClick={() => setSelectedAsset('cafe')}>
                  판교 카페 (1구좌)
                </button>
              </div>
            )}

            <div className="nav-item-wrapper-v19">
              <button
                className={`nav-item ${activeMenu === 'mystore' ? 'active' : ''}`}
                onClick={() => setActiveMenu('mystore')}
              >
                <ChevronRight size={activeMenu === 'mystore' ? 18 : 18} className={activeMenu === 'mystore' ? 'chevron-icon-down' : 'chevron-icon'} />
                <span>나의 가계</span>
              </button>
              <button className="nav-add-btn-v19" onClick={(e) => {
                e.stopPropagation();
                const newId = Date.now();
                setMyStores([...myStores, { id: newId, name: '신규 매장', menus: [], photos: [] }]);
                setActiveMyStoreId(newId);
                setActiveMenu('mystore');
              }}>+</button>
            </div>

            {activeMenu === 'mystore' && (
              <div className="sub-nav">
                {myStores.map(store => (
                  <button 
                    key={store.id}
                    className={`sub-nav-item ${activeMyStoreId === store.id ? 'active' : ''}`} 
                    onClick={() => setActiveMyStoreId(store.id)}
                  >
                    {store.name}
                  </button>
                ))}
              </div>
            )}

          </div>
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Bell size={18} />
            <span>알림 설정</span>
          </button>
          <button className="nav-item">
            <MessageSquare size={18} />
            <span>1:1 비서 문의</span>
          </button>
          <button className="nav-item text-danger" onClick={onLogout}>
            <LogOut size={18} />
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="mypage-main">

        {activeMenu === 'dashboard' || activeMenu === 'investments' ? (
          <>
            <div className="dashboard-row-v16">
              {/* Full Width Content: Chart + Stores Integrated */}
              <div className="chart-integrated-section-v16 main-content-card">
                <div className="card-header-v8">
                  {/* Title area: vertical bar + tabs + store selectors inline */}
                  <div className="header-title-v8 tabs-v9">
                    <span className="title-bar-v16"></span>
                    <button 
                      className={`analysis-tab-v9 ${analysisTab === 'revenue' ? 'active' : ''}`}
                      onClick={() => setAnalysisTab('revenue')}
                    >
                      매출분석
                    </button>
                    <span className="tab-sep-v9">ㅣ</span>
                    <button 
                      className={`analysis-tab-v9 ${analysisTab === 'visitors' ? 'active' : ''}`}
                      onClick={() => setAnalysisTab('visitors')}
                    >
                      방문고객
                    </button>
                    <span className="tab-sep-v9">ㅣ</span>
                    <button 
                      className={`analysis-tab-v9 ${analysisTab === 'info' ? 'active' : ''}`}
                      onClick={() => setAnalysisTab('info')}
                    >
                      매장정보
                    </button>
                  </div>
                  <div className="asset-cards-v8">
                    <button className={`asset-btn-v8 ${selectedAsset === 'all' ? 'active' : ''}`} onClick={() => setSelectedAsset('all')}>전체</button>
                    <button className={`asset-btn-v8 ${selectedAsset === 'sushi' ? 'active' : ''}`} onClick={() => setSelectedAsset('sushi')}>시흥 횟집</button>
                    <button className={`asset-btn-v8 ${selectedAsset === 'cafe' ? 'active' : ''}`} onClick={() => setSelectedAsset('cafe')}>판교 카페</button>
                  </div>
                </div>

                <div className="chart-body-v8">
                  {analysisTab === 'revenue' && (
                    <div className="revenue-analysis-v13">
                      <div className="summary-stats-v17">
                        <div className="stat-card">
                          <span className="stat-label">총투자액</span>
                          <span className="stat-value"><AnimatedNumber value={9000} /><span className="unit-text">만</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">일배당액</span>
                          <span className="stat-value"><AnimatedNumber value={3.2} decimals={1} /><span className="unit-text">만</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">누적배당액</span>
                          <span className="stat-value"><AnimatedNumber value={1240} /><span className="unit-text">만</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">만기 예정수익</span>
                          <span className="stat-value text-danger"><AnimatedNumber value={1.2} decimals={1} /><span className="unit-text">억</span></span>
                        </div>
                      </div>

                      <div className="visitor-divider-v12"></div>

                      <div className="chart-header-actions-v10">
                        <div className="chart-legend-v8">
                          <div className="legend-item"><span className="legend-box bg-revenue"></span> 매출액 (Bar)</div>
                          <div className="legend-item"><span className="legend-line"></span> 방문객 (Line)</div>
                        </div>
                        <div className="chart-toggles-v8">
                          <button className={`toggle-v8 ${chartPeriod === 'daily' ? 'active' : ''}`} onClick={() => setChartPeriod('daily')}>일별</button>
                          <button className={`toggle-v8 ${chartPeriod === 'weekly' ? 'active' : ''}`} onClick={() => setChartPeriod('weekly')}>주간</button>
                          <button className={`toggle-v8 ${chartPeriod === 'monthly' ? 'active' : ''}`} onClick={() => setChartPeriod('monthly')}>월간</button>
                        </div>
                      </div>

                      <div className="enhanced-chart-container-v8">
                        <div className="chart-y-axis-v8">
                          <span className="y-unit-v8">단위:만원</span>
                          <span>4000</span><span>3500</span><span>3000</span><span>2500</span><span>2000</span><span>1500</span><span>1000</span><span>500</span><span>0</span>
                        </div>
                        <div className="chart-bars-v8">
                          <svg className="visitor-line-v8">
                            {((chartPeriod === 'daily' ? [45, 60, 85, 95, 80, 75, 90] : Array.from({length: 30}, (_, i) => 40 + Math.sin(i) * 20))).map((val, i, arr) => {
                              if (i === arr.length - 1) return null;
                              const nextVal = arr[i + 1];
                              const x1 = `${(i / (arr.length - 1)) * 100}%`;
                              const x2 = `${((i + 1) / (arr.length - 1)) * 100}%`;
                              const y1 = `${100 - (val * 0.8)}%`;
                              const y2 = `${100 - (nextVal * 0.8)}%`;
                              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EA580C" strokeWidth="2" />;
                            })}
                          </svg>

                          {(chartPeriod === 'daily' ? [45, 60, 85, 95, 80, 75, 90] : Array.from({length: 30}, (_, i) => 40 + Math.sin(i) * 20)).map((val, i, arr) => (
                            <div key={i} className="chart-column-v8" style={{ width: `${100 / arr.length}%` }}>
                              <div className="column-bars-v8">
                                <div className="bar-v8 revenue-bar-v8" style={{ height: `${val}%` }}></div>
                                <div className="visitor-point-v8" style={{ bottom: `${val * 0.8}%` }}><div className="point-dot-v8"></div></div>
                              </div>
                              <span className="x-axis-label-v8">{i+1}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {analysisTab === 'visitors' && (
                    <div className="visitors-analysis-v12">
                      <div className="summary-stats-v17">
                        <div className="stat-card">
                          <span className="stat-label">일간 총계</span>
                          <span className="stat-value"><AnimatedNumber value={124} /><span className="unit-text">명</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">주간 총계</span>
                          <span className="stat-value"><AnimatedNumber value={842} /><span className="unit-text">명</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">월간 총계</span>
                          <span className="stat-value"><AnimatedNumber value={3420} /><span className="unit-text">명</span></span>
                        </div>
                        <div className="stat-card">
                          <span className="stat-label">성장 추이</span>
                          <div className="stat-value multi-stat-v15">
                            <span className="trend-up"><span className="small-label-v15">MoM</span> +<AnimatedNumber value={120} /></span>
                            <span className="trend-up"><span className="small-label-v15">YoY</span> +<AnimatedNumber value={450} /></span>
                          </div>
                        </div>
                      </div>
                      <div className="visitor-divider-v12"></div>
                      {/* 방문고객 필터 */}
                      <div className="chart-header-actions-v10" style={{ marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
                          {chartPeriod === 'daily' ? '시간대별 방문 분포' : '연령별 방문 분포'}
                        </span>
                        <div className="chart-toggles-v8">
                          <button className={`toggle-v8 ${chartPeriod === 'daily' ? 'active' : ''}`} onClick={() => setChartPeriod('daily')}>일간</button>
                          <button className={`toggle-v8 ${chartPeriod === 'weekly' ? 'active' : ''}`} onClick={() => setChartPeriod('weekly')}>주간</button>
                          <button className={`toggle-v8 ${chartPeriod === 'monthly' ? 'active' : ''}`} onClick={() => setChartPeriod('monthly')}>월간</button>
                        </div>
                      </div>

                      {chartPeriod === 'daily' ? (
                        <div className="daily-forecast-wrapper-v19">
                          <div className="weather-forecast-table-v19">
                            <div className="wft-scroll-container">
                              {/* Sticky Left Column */}
                              <div className="wft-col sticky-left">
                                <div className="wft-cell header-cell">
                                  <span className="wft-badge">{dayOffset === 0 ? '오늘' : dayOffset === 1 ? '내일' : dayOffset === 2 ? '모레' : '글피'}</span>
                                  <span className="wft-date-label">
                                    {(() => {
                                      const d = new Date('2026-04-30');
                                      d.setDate(d.getDate() + dayOffset);
                                      return `${d.getMonth() + 1}.${d.getDate()}`;
                                    })()}
                                  </span>
                                </div>
                                <div className="wft-cell spacer-cell"></div>
                                <div className="wft-cell label-cell">남자</div>
                                <div className="wft-cell label-cell">여자</div>
                                <div className="wft-cell label-cell total-label-cell">총원</div>
                              </div>

                              {/* Hourly Columns */}
                              {Array.from({length: 24}, (_, i) => {
                                const hour = (10 + i) % 24;
                                const isDay = hour >= 6 && hour <= 18;
                                const weatherTypes = isDay ? ['sun', 'sun', 'cloudSun', 'cloud'] : ['cloud', 'cloudRain', 'cloud'];
                                const weather = weatherTypes[(i + dayOffset * 3) % weatherTypes.length];
                                const temp = `${15 + Math.floor(Math.abs(Math.sin(i/4)) * 5)}°`;
                                const humidity = `${40 + (i * 5 + dayOffset * 10) % 30}%`;
                                const male = Math.floor(1 + Math.abs(Math.sin(i/3)) * 4);
                                const female = Math.floor(2 + Math.abs(Math.cos(i/3)) * 4);
                                const total = male + female;

                                return (
                                  <div key={i} className="wft-col hourly-col">
                                    <div className="wft-cell header-cell time-val">{hour}시</div>
                                    <div className="wft-cell icon-cell">
                                      {weather === 'sun' ? <Sun size={18} color="#eab308"/> :
                                       weather === 'cloudSun' ? <CloudSun size={18} color="#f59e0b"/> :
                                       weather === 'cloudRain' ? <CloudRain size={18} color="#3b82f6"/> :
                                       <Cloud size={18} color="#94a3b8"/>}
                                    </div>
                                    <div className="wft-cell temp-val">{temp}</div>
                                    <div className="wft-cell hum-val">{humidity}</div>
                                    <div className="wft-cell data-val male-val">{male}</div>
                                    <div className="wft-cell data-val female-val">{female}</div>
                                    <div className="wft-cell data-val total-val">
                                      {total} <ArrowUpRight size={10} color="#0b192c" style={{marginLeft: '2px'}}/>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            <button className="wft-nav-btn right" onClick={() => setDayOffset(Math.min(3, dayOffset + 1))} disabled={dayOffset === 3}>
                              <ChevronRight size={20}/>
                            </button>
                            {dayOffset > 0 && (
                              <button className="wft-nav-btn left" onClick={() => setDayOffset(Math.max(0, dayOffset - 1))}>
                                <ChevronLeft size={20}/>
                              </button>
                            )}
                          </div>
                          
                          <div className="wft-bottom-summary">
                            <span>전주 대비 15% 증가</span>
                            <ArrowUp color="#e11d48" size={16}/>
                          </div>
                        </div>
                      ) : chartPeriod === 'weekly' ? (
                        <div className="weekly-forecast-wrapper-v20">
                          <div className="wfw-header-v20">
                            <button className="wfw-nav-btn" onClick={() => setWeekOffset(weekOffset - 1)}><ChevronLeft size={20}/></button>
                            <span className="wfw-week-label">
                              {(() => {
                                const baseDate = new Date('2026-04-30');
                                const dayOfWeek = baseDate.getDay();
                                const startOfWeek = new Date(baseDate);
                                startOfWeek.setDate(baseDate.getDate() - dayOfWeek + (weekOffset * 7));
                                const endOfWeek = new Date(startOfWeek);
                                endOfWeek.setDate(startOfWeek.getDate() + 6);
                                const month = startOfWeek.getMonth() + 1;
                                const weekOfMonth = Math.ceil(startOfWeek.getDate() / 7);
                                const startStr = `${(startOfWeek.getMonth() + 1).toString().padStart(2, '0')}.${startOfWeek.getDate().toString().padStart(2, '0')}`;
                                const endStr = `${(endOfWeek.getMonth() + 1).toString().padStart(2, '0')}.${endOfWeek.getDate().toString().padStart(2, '0')}`;
                                return `${month}월 ${weekOfMonth}째주 (${startStr}~${endStr})`;
                              })()}
                            </span>
                            <button className="wfw-nav-btn" onClick={() => setWeekOffset(weekOffset + 1)} disabled={weekOffset === 0}><ChevronRight size={20}/></button>
                          </div>
                          
                          <div className="weather-forecast-table-v19 weekly-mode-v20">
                            <div className="wft-scroll-container">
                              {Array.from({length: 7}, (_, i) => {
                                const baseDate = new Date('2026-04-30');
                                const startOfWeek = new Date(baseDate);
                                startOfWeek.setDate(baseDate.getDate() - baseDate.getDay() + (weekOffset * 7));
                                const d = new Date(startOfWeek);
                                d.setDate(startOfWeek.getDate() + i);
                                
                                const dayName = ['일', '월', '화', '수', '목', '금', '토'][i];
                                const dateStr = `${d.getMonth() + 1}.${d.getDate()}.`;
                                
                                const total = 50 + Math.floor(Math.abs(Math.sin(i + weekOffset * 3)) * 40);
                                const malePercent = Math.floor(40 + Math.abs(Math.cos(i + weekOffset)) * 40);
                                const femalePercent = 100 - malePercent;
                                const male = Math.round(total * (malePercent / 100));
                                const female = total - male;
                                
                                const isSunday = i === 0;
                                const isSaturday = i === 6;

                                return (
                                  <div key={i} className="wft-col weekly-col-v20">
                                    <div className="wft-cell header-cell weekly-header-v20">
                                      <span className={`wft-day-name ${isSunday ? 'sunday' : isSaturday ? 'saturday' : ''}`}>{dayName}</span>
                                      <span className="wft-date-val">{dateStr}</span>
                                    </div>
                                    
                                    <div className="wft-cell icon-pair-cell-v20">
                                      <User size={28} color="#3b82f6" fill="#eff6ff"/>
                                      <User size={28} color="#ec4899" fill="#fdf2f8"/>
                                    </div>
                                    
                                    <div className="wft-cell percent-cell-v20">
                                      <span className="m">{malePercent}%</span> / <span className="f">{femalePercent}%</span>
                                    </div>
                                    
                                    <div className="wft-cell count-cell-v20">
                                      <span className="m">{male}</span> / <span className="f">{female}</span>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="monthly-forecast-wrapper-v21">
                          <div className="wfw-header-v20">
                            <button className="wfw-nav-btn" onClick={() => setMonthOffset(monthOffset - 1)}>
                              <ChevronLeft size={20}/>
                            </button>
                            <span className="wfw-week-label">
                              {(() => {
                                const baseDate = new Date('2026-04-01');
                                baseDate.setMonth(baseDate.getMonth() + monthOffset);
                                return `${baseDate.getFullYear()}년 ${baseDate.getMonth() + 1}월`;
                              })()}
                            </span>
                            <button className="wfw-nav-btn" onClick={() => setMonthOffset(monthOffset + 1)} disabled={monthOffset === 0}>
                              <ChevronRight size={20}/>
                            </button>
                          </div>
                          
                          <div className="monthly-insights-v21">
                            <div className="insight-card-v21">
                              <span className="i-label">총 방문객</span>
                              <span className="i-value">3,420<span className="text-sm">명</span></span>
                              <span className="i-trend up"><ArrowUpRight size={14}/> 12% 증가</span>
                            </div>
                            <div className="insight-card-v21">
                              <span className="i-label">핵심 고객층</span>
                              <span className="i-value text-blue-600">30대 남자</span>
                              <span className="i-desc">전체 방문의 35% 차지</span>
                            </div>
                            <div className="insight-card-v21">
                              <span className="i-label">최고 방문 주간</span>
                              <span className="i-value text-amber-500">3주차</span>
                              <span className="i-desc">총 920명 방문</span>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  )}

                  {analysisTab === 'info' && (
                    <div className="store-info-integrated-v15">
                      <div className="info-column basic-info-v15">
                        <h4>기본 정보</h4>
                        <div className="info-list-v15">
                          <div className="info-item"><Store size={18} /> <span>시흥 어부 횟집</span></div>
                          <div className="info-item"><MapPin size={18} /> <span>경기도 시흥시 거북섬길 12</span></div>
                          <div className="info-item"><Clock size={18} /> <span>10:00 - 22:00</span></div>
                          <div className="info-item"><Smartphone size={18} /> <span>031-123-4567</span></div>
                          <div className="info-item"><RefreshCw size={18} /> <span>주차, 와이파이, 배달 가능</span></div>
                        </div>
                      </div>
                      <div className="info-column menu-ranking-v15">
                        <h4>인기 메뉴</h4>
                        <div className="menu-list-v15">
                          {[
                            { rank: 1, name: "특선 모듬회", price: "65,000", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=100&q=80" },
                            { rank: 2, name: "물회 대야 세트", price: "45,000", img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=100&q=80" },
                          ].map(menu => (
                            <div key={menu.rank} className="menu-item-v15">
                              <div className="menu-rank">{menu.rank}</div>
                              <img src={menu.img} alt={menu.name} />
                              <div className="menu-text"><span className="name">{menu.name}</span><span className="price">{menu.price}원</span></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="info-column store-gallery-v15">
                        <h4>매장 갤러리</h4>
                        <div className="polaroid-stack-v15">
                          <div className="polaroid photo-1"><img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80" /><p>Cafe View</p></div>
                          <div className="polaroid photo-2"><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=200&q=80" /><p>Interior</p></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="recommendation-section-v16 main-content-card">
              <div className="recommendation-header-v16">
                <div className="recommendation-title-v16"><span className="title-bar-v16"></span><h3>추천매칭</h3></div>
                <div className="recommendation-nav-v16">
                  {[0, 3].map((start, i) => (
                    <button key={i} className={`nav-dot-v16 ${recommendIndex === start ? "active" : ""}`} onClick={() => setRecommendIndex(start)} />
                  ))}
                </div>
              </div>
              <div className="recommendation-grid-v16">
                {[
                  { id: 1, title: "시흥 어부 횟집", subCategory: "수산물", location: "경기 시흥시", deposit: "12,000만 원", totalAmount: "9억", size: "35평", returnRate: "15.2%", progress: 85, status: "모집중", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80" },
                  { id: 2, title: "판교 아티장 카페", subCategory: "카페", location: "경기 성남시", deposit: "8,000만 원", totalAmount: "6억", size: "18평", returnRate: "12.8%", progress: 45, status: "모집중", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80" },
                  { id: 3, title: "류 스시 오마카세", subCategory: "일식", location: "서울 강남구", deposit: "15,000만 원", totalAmount: "12억", size: "42평", returnRate: "14.5%", progress: 100, status: "마감", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=400&q=80" },
                  { id: 4, title: "강남 비프 앤 와인", subCategory: "양식", location: "서울 강남구", deposit: "20,000만 원", totalAmount: "15억", size: "55평", returnRate: "13.1%", progress: 25, status: "모집중", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=400&q=80" },
                  { id: 5, title: "성수 베이커리 랩", subCategory: "제과", location: "서울 성동구", deposit: "7,000만 원", totalAmount: "8억", size: "22평", returnRate: "16.4%", progress: 70, status: "모집중", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80" },
                  { id: 6, title: "청담 파인다이닝", subCategory: "양식", location: "서울 강남구", deposit: "40,000만 원", totalAmount: "20억", size: "120평", returnRate: "11.8%", progress: 15, status: "모집중", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80" }
                ].slice(recommendIndex, recommendIndex + 3).map(match => (
                  <div key={match.id} className="investment-card fade-in" onClick={() => setSelectedInvestmentId(match.id)} style={{ cursor: 'pointer' }}>
                    <div className="card-top-bar">
                      <span className="biz-name">{match.title}</span>
                      <span className="badge badge-secondary" style={{ fontSize: '0.7rem' }}>{match.subCategory}</span>
                    </div>
                    <div className="card-image-wrapper">
                      <img src={match.image} alt={match.title} className="card-image" />
                    </div>
                    <div className="card-content">
                      <div style={{ marginBottom: '1rem' }}>
                        <span className={`status-tag-chip ${match.status === '마감' ? '마감' : '모집중'}`}>
                          {match.status === '마감' ? '모집완료' : '모집중'}
                        </span>
                      </div>
                      <div className="card-details">
                        <div className="detail-row"><span className="detail-label"><MapPin size={14} /> 소재지</span><span className="detail-value">{match.location}</span></div>
                        <div className="detail-row"><span className="detail-label"><ShieldCheck size={14} /> 임대보증금</span><span className="detail-value">{match.deposit}</span></div>
                        <div className="detail-row"><span className="detail-label"><PieChart size={14} /> 모집금액</span><span className="detail-value">{match.totalAmount}</span></div>
                        <div className="detail-row"><span className="detail-label"><Maximize size={14} /> 규모</span><span className="detail-value">{match.size}</span></div>
                        <div className="detail-divider-dotted"></div>
                        <div className="detail-row highlight-row"><span className="detail-label"><TrendingUp size={14} /> 예상 수익률</span><span className="detail-value text-danger">{match.returnRate}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : activeMenu === 'memberInfo' ? (
          <section className="member-info-section fade-in">
            <div className={`flip-card-container ${isFlipped ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                {/* Front Side: Member Info */}
                <div className="flip-card-front glass-content-card">
                  <header className="card-top-header">
                    <div className="header-title-area">
                      <h2 className="card-main-title">회원정보</h2>
                      <div className="header-divider"></div>
                    </div>
                    <button className="btn-flip-toggle" onClick={() => setIsFlipped(true)}>
                      계약서 <ChevronRight size={16} />
                    </button>
                  </header>

                  {/* Section 1: Profile (Vertical Layout) */}
                  <div className="member-section profile-vertical-section">
                    <div className="profile-vertical-unit">
                      <div className="profile-grade-area">
                        <span className="member-badge-v4">정회원</span>
                      </div>
                      <div className="profile-photo-container">
                        <div className="profile-photo-large">
                          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Profile" />
                        </div>
                        <button className="btn-photo-settings">
                          <Settings size={18} />
                        </button>
                      </div>
                      <h3 className="profile-name-v4">김오너 님</h3>
                    </div>

                    <div className="profile-meta-grid">
                      <div className="meta-field">
                        <label>닉네임</label>
                        <input type="text" placeholder="닉네임을 입력하세요" className="unified-input" />
                      </div>
                      <div className="meta-field">
                        <label>비밀번호 변경</label>
                        <div className="input-with-action">
                          <input type="password" value="********" readOnly className="unified-input" />
                          <button className="btn-unified-action">변경하기</button>
                        </div>
                      </div>
                      <div className="meta-field">
                        <label>회사</label>
                        <input type="text" placeholder="회사명을 입력하세요" className="unified-input" />
                      </div>
                      <div className="meta-field">
                        <label>직책</label>
                        <input type="text" placeholder="직책을 입력하세요" className="unified-input" />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Contact & Auth */}
                  <div className="member-section contact-auth-section">
                    <div className="input-row-v3">
                      <div className="input-group-v3">
                        <label>이메일</label>
                        <div className="input-with-action">
                          <input type="email" value="example@owners.kr" readOnly className="unified-input" />
                          <button className="btn-unified-action" onClick={() => setShowEmailAuth(!showEmailAuth)}>이메일 인증</button>
                        </div>
                        {showEmailAuth && (
                          <div className="auth-expand-panel-v3 fade-in">
                            <div className="auth-panel-content">
                              <div className="input-field-v3">
                                <div className="input-timer-wrapper-v3">
                                  <input type="text" placeholder="인증번호 6자리 입력" className="unified-input small" />
                                  <span className="timer-text-v3">{formatTime(timer)}</span>
                                </div>
                              </div>
                              <div className="auth-panel-actions">
                                <button className="btn-resend-v3"><RefreshCw size={14} /></button>
                                <button className="btn-confirm-v3">확인</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="input-group-v3">
                        <label>휴대폰 번호</label>
                        <div className="phone-unified-wrapper">
                          <div className="phone-inputs">
                            <select className="unified-input phone-select">
                              <option>+82</option>
                              <option>+1</option>
                              <option>+81</option>
                            </select>
                            <input type="text" placeholder="010-0000-0000" className="unified-input phone-input" />
                          </div>
                          <button className="btn-unified-action">휴대폰 인증</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="member-section terms-section">
                    <div className="terms-container-v4">
                      <div className="terms-header">
                        <h4 className="terms-title">가입 약관 및 정보 활용</h4>
                        <button className="btn-terms-view">전체 보기</button>
                      </div>
                      <div className="terms-list-v4">
                        <div className="terms-item">
                          <span>서비스 이용약관 동의</span>
                          <span className="terms-status-active">동의함</span>
                        </div>
                        <div className="terms-item">
                          <span>개인정보 수집 및 이용 동의</span>
                          <span className="terms-status-active">동의함</span>
                        </div>
                        <div className="terms-item">
                          <span>마케팅 정보 수신 동의 (선택)</span>
                          <span className="terms-status-active">동의함</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Settlement Account */}
                  <div className="member-section account-management-section">
                    <div className="account-box-highlight">
                      <h4 className="box-label">정산 계좌 관리</h4>
                      <div className="account-form-grid">
                        <div className="input-field">
                          <label>은행 선택</label>
                          <select className="unified-input">
                            <option>신한은행</option>
                            <option>국민은행</option>
                            <option>우리은행</option>
                            <option>하나은행</option>
                            <option>카카오뱅크</option>
                          </select>
                        </div>
                        <div className="input-field">
                          <label>계좌번호 입력</label>
                          <input type="text" placeholder="'-' 없이 숫자만 입력" className="unified-input" />
                        </div>
                        <div className="input-field">
                          <label>예금주 확인</label>
                          <input type="text" value="김오너" readOnly className="unified-input disabled" />
                        </div>
                      </div>
                      <div className="account-actions">
                        <button className="btn-save-account">정보 수정 완료</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side: Contracts */}
                <div className="flip-card-back glass-content-card">
                  <header className="card-top-header">
                    <div className="header-title-area">
                      <h2 className="card-main-title">계약서</h2>
                      <div className="header-divider"></div>
                    </div>
                    <button className="btn-flip-toggle" onClick={() => setIsFlipped(false)}>
                      회원정보 <ChevronRight size={16} />
                    </button>
                  </header>

                  <div className="contracts-content-v3">
                    <div className="contract-icons-grid-v4">
                      {CONTRACTS.map((contract) => (
                        <div
                          key={contract.id}
                          className={`contract-card-item ${selectedContractId === contract.id ? 'active' : ''}`}
                          onClick={() => setSelectedContractId(contract.id)}
                        >
                          <div className="contract-card-thumb">
                            <img src={contract.imageUrl} alt={contract.title} />
                            {selectedContractId === contract.id && <div className="active-glow"></div>}
                          </div>
                          <div className="contract-card-info">
                            <span className="contract-card-name">
                              {contract.title.includes('(') ? contract.title.split('(')[1].split(')')[0] : contract.title}
                            </span>
                            <span className="contract-card-tag">투자계약</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeContract && (
                      <div className="contract-detail-panel fade-in">
                        <header className="detail-header">
                          <div className="detail-title-info">
                            <h3 className="detail-full-title">{activeContract.title}</h3>
                            <div className="detail-dates">
                              <span>계약일: {activeContract.date}</span>
                              <span className="date-sep">ㅣ</span>
                              <span>마감일: {activeContract.expiry}</span>
                              <span className="date-sep">ㅣ</span>
                              <span>계약금액: {activeContract.amount}</span>
                            </div>
                          </div>
                          <button className="btn-print-v3">
                            <Printer size={18} /> 인쇄하기
                          </button>
                        </header>

                        <div className="contract-body-scrollable">
                          {activeContract.content.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : activeMenu === 'mystore' ? (
          <section className="mystore-section-v18 fade-in">
            <div className="mystore-container-single-v20">
              {/* Main Management Area */}
              <div className="mystore-content-v18 glass-content-card">
                <header className="card-top-header">
                  <div className="header-title-area">
                    <h2 className="card-main-title">{myStores.find(s => s.id === activeMyStoreId)?.name} 관리</h2>
                    <div className="header-divider"></div>
                  </div>
                  <div className="mystore-tabs-v17">
                    <button className={`mystore-tab ${myStoreTab === 'info' ? 'active' : ''}`} onClick={() => setMyStoreTab('info')}>매장정보</button>
                    <span className="sep">ㅣ</span>
                    <button className={`mystore-tab ${myStoreTab === 'revenue' ? 'active' : ''}`} onClick={() => setMyStoreTab('revenue')}>매출분석</button>
                    <span className="sep">ㅣ</span>
                    <button className={`mystore-tab ${myStoreTab === 'invest' ? 'active' : ''}`} onClick={() => setMyStoreTab('invest')}>투자정보</button>
                  </div>
                </header>

                <div className="mystore-body-v17">
                  {myStoreTab === 'info' && (
                    <div className="mystore-tab-content info-edit-v18">
                      {/* 1. Basic Business Fields */}
                      <div className="section-title-v18">상세 정보</div>
                      <div className="input-grid-v18">
                        <div className="input-field"><label>업종</label><input type="text" className="unified-input" defaultValue="음식점" /></div>
                        <div className="input-field"><label>업태</label><input type="text" className="unified-input" defaultValue="일식/횟집" /></div>
                        <div className="input-field"><label>사업자번호</label><input type="text" className="unified-input" defaultValue="123-45-67890" /></div>
                        <div className="input-field"><label>대표자명</label><input type="text" className="unified-input" defaultValue="김오너" /></div>
                        <div className="input-field"><label>매니저 연락처</label><input type="text" className="unified-input" defaultValue="010-1111-2222" /></div>
                        <div className="input-field"><label>상호명</label><input type="text" className="unified-input" defaultValue="시흥 어부 횟집" /></div>
                        <div className="input-field"><label>임대 보증금</label><input type="text" className="unified-input" defaultValue="30,000" placeholder="만원 단위" /></div>
                        <div className="input-field"><label>상가 권리금</label><input type="text" className="unified-input" defaultValue="0" placeholder="만원 단위" /></div>
                        <div className="input-field"><label>임대 기간</label><input type="text" className="unified-input" defaultValue="3년" placeholder="예: 2년" /></div>
                        <div className="input-field full-width"><label>주소</label><input type="text" className="unified-input" defaultValue="경기도 시흥시 거북섬길 12" /></div>
                        <div className="input-field full-width">
                          <label>상세 정보</label>
                          <textarea className="unified-textarea-v21" defaultValue="시흥 거북섬의 대표 횟집으로 신선한 제철 회와 최고의 서비스를 제공합니다." />
                        </div>
                      </div>
                      {/* 2. Sub-Tabs for detailed upload */}
                      <div className="info-sub-tabs-v19">
                        <button className={`sub-tab ${infoSubTab === 'amenities' ? 'active' : ''}`} onClick={() => setInfoSubTab('amenities')}>편의시설</button>
                        <span className="sep">ㅣ</span>
                        <button className={`sub-tab ${infoSubTab === 'menu' ? 'active' : ''}`} onClick={() => setInfoSubTab('menu')}>메뉴관리</button>
                        <span className="sep">ㅣ</span>
                        <button className={`sub-tab ${infoSubTab === 'photos' ? 'active' : ''}`} onClick={() => setInfoSubTab('photos')}>사진등록</button>
                      </div>

                      <div className="info-sub-content-v19">
                        {infoSubTab === 'amenities' && (
                          <div className="amenity-checks-v19">
                            {amenities.map(amenity => (
                              <label key={amenity.id} className="amenity-checkbox-v19">
                                <input 
                                  type="checkbox" 
                                  checked={amenity.checked} 
                                  onChange={() => setAmenities(amenities.map(a => a.id === amenity.id ? {...a, checked: !a.checked} : a))}
                                />
                                <span className="custom-check"></span>
                                {amenity.icon}
                                <span>{amenity.name}</span>
                              </label>
                            ))}
                          </div>
                        )}

                        {infoSubTab === 'menu' && (
                          <table className="menu-edit-table-v18">
                            <thead>
                              <tr>
                                <th>사진</th>
                                <th>음식명</th>
                                <th>가격</th>
                                <th style={{ width: '80px' }}>판매중</th>
                              </tr>
                            </thead>
                            <tbody>
                              {myStores.find(s => s.id === activeMyStoreId)?.menus.map((menu, i) => (
                                <tr key={i}>
                                  <td><div className="menu-thumb-v18"><Smartphone size={16} /></div></td>
                                  <td><input type="text" className="unified-input" defaultValue={menu.name} /></td>
                                  <td><input type="text" className="unified-input" defaultValue={menu.price} /></td>
                                  <td>
                                    <button className="row-del-btn" onClick={() => {
                                      const updated = myStores.map(s => s.id === activeMyStoreId ? {...s, menus: s.menus.filter((_, idx) => idx !== i)} : s);
                                      setMyStores(updated);
                                    }}>-</button>
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td colSpan={4}>
                                  <button className="row-add-btn" onClick={() => {
                                    const updated = myStores.map(s => s.id === activeMyStoreId ? {...s, menus: [...s.menus, { id: Date.now(), name: '', price: '', img: '' }]} : s);
                                    setMyStores(updated);
                                  }}>+ 메뉴 추가</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        )}

                        {infoSubTab === 'photos' && (
                          <div className="photo-gallery-v18">
                            {myStores.find(s => s.id === activeMyStoreId)?.photos.map((photo, i) => (
                              <div key={i} className="photo-item-v18" onClick={() => {
                                 const updated = myStores.map(s => s.id === activeMyStoreId ? {...s, photos: s.photos.filter((_, idx) => idx !== i)} : s);
                                 setMyStores(updated);
                              }}>
                                <img src={photo} alt="Store" />
                                <div className="delete-overlay"><TrendingUp size={24} /></div>
                              </div>
                            ))}
                            <button className="photo-add-btn-v18" onClick={() => {
                               const updated = myStores.map(s => s.id === activeMyStoreId ? {...s, photos: [...s.photos, "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80"]} : s);
                               setMyStores(updated);
                            }}>
                              <Sparkles size={20} />
                              <span>사진 추가</span>
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="form-actions-v17" style={{ marginTop: '3rem' }}>
                        <button className="btn-save-v17">매장 정보 전체 저장</button>
                      </div>
                    </div>
                  )}

                  {myStoreTab === 'revenue' && (
                    <div className="mystore-tab-content revenue-upload-v17">
                      <div className="upload-box-v17">
                        <h4 className="box-title">일일 매출 수기 업로드</h4>
                        <div className="upload-form-v17">
                          <div className="input-field">
                            <label>날짜</label>
                            <input type="date" className="unified-input" />
                          </div>
                          <div className="input-field">
                            <label>매출액 (만원)</label>
                            <input type="number" className="unified-input" placeholder="예: 250" />
                          </div>
                          <div className="input-field">
                            <label>방문 고객수</label>
                            <input type="number" className="unified-input" placeholder="예: 45" />
                          </div>
                          <button className="btn-upload-v17">업로드 하기</button>
                        </div>
                      </div>

                      <div className="revenue-history-v17">
                        <h4 className="box-title">최근 업로드 내역</h4>
                        <table className="history-table-v17">
                          <thead>
                            <tr>
                              <th>날짜</th>
                              <th>매출액</th>
                              <th>고객수</th>
                              <th>상태</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2024.04.29</td>
                              <td>320만원</td>
                              <td>52명</td>
                              <td><span className="status-badge success">완료</span></td>
                            </tr>
                            <tr>
                              <td>2024.04.28</td>
                              <td>280만원</td>
                              <td>48명</td>
                              <td><span className="status-badge success">완료</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {myStoreTab === 'invest' && (
                    <div className="mystore-tab-content invest-tracking-v17">
                      <div className="lease-info-grid-v17">
                        <div className="lease-card">
                          <span className="label">임대 보증금</span>
                          <span className="value">3억원</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">상가 권리금</span>
                          <span className="value">-</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">펀딩명</span>
                          <span className="value">어부 펀드 1호</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">투자 계약일</span>
                          <span className="value">24.03.15 ~ 27.03.14 (3년)</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">투자 유치금</span>
                          <span className="value">6억원 (20구좌)</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">배당</span>
                          <span className="value">투자금의 10%</span>
                        </div>
                        <div className="lease-card">
                          <span className="label">투자자 총원</span>
                          <span className="value">14명</span>
                        </div>
                      </div>

                      <div className="investor-list-section-v17">
                        <h4 className="box-title">투자자 리스트</h4>
                        <table className="investor-table-v17">
                          <thead>
                            <tr>
                              <th>투자자명</th>
                              <th>구좌</th>
                              <th>금액</th>
                              <th>계약 상태</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { name: '김*현', units: '2구좌', amount: '6,000만원', status: '계약완료' },
                              { name: '이*우', units: '1구좌', amount: '3,000만원', status: '계약완료' },
                              { name: '박*아', units: '3구좌', amount: '9,000만원', status: '계약완료' },
                              { name: '최*호', units: '1구좌', amount: '3,000만원', status: '대기중' },
                            ].map((investor, i) => (
                              <tr key={i}>
                                <td>{investor.name}</td>
                                <td>{investor.units}</td>
                                <td>{investor.amount}</td>
                                <td><span className={`status-text ${investor.status === '대기중' ? 'pending' : ''}`}>{investor.status}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : activeMenu === 'memberInfo' ? (
          <section className="member-info-section fade-in">
            {/* ... member info code ... */}
          </section>
        ) : null}

        {/* Investment Detail Modal */}
        {selectedInvestmentId && (
          <div className="investment-modal-overlay fade-in" onClick={() => setSelectedInvestmentId(null)}>
            <div className="investment-modal-container" onClick={e => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={() => setSelectedInvestmentId(null)}>×</button>
              
              {(() => {
                const data = INVESTMENTS_DATA[selectedInvestmentId.toString()];
                if (!data) return null;
                const unitPriceValue = parseInt(data.minInvestment.replace(/[^0-9]/g, '')) || 0;
                const totalInvestmentPrice = (modalUnits * unitPriceValue).toLocaleString();

                return (
                  <div className="modal-scroll-content">
                    <div className="detail-layout-v18">
                      {/* Left: Content */}
                      <div className="detail-main-v18">
                        <div className="detail-header-v18">
                          <div className="detail-meta-v18">
                            <span className="badge-v18 primary">{data.category}</span>
                            <span className="badge-v18 outline">{data.type}</span>
                          </div>
                          <h1 className="detail-title-v18">{data.title}</h1>
                          <div className="detail-location-v18">
                            <MapPin size={16} /> {data.location}
                          </div>
                        </div>

                        <div className="detail-gallery-v18">
                          <img src={data.images[0]} alt={data.title} className="main-image-v18" />
                        </div>

                        <div className="detail-tabs-v18">
                          <button className={`tab-v18 ${modalTab === 'store' ? 'active' : ''}`} onClick={() => setModalTab('store')}>매장 상세</button>
                          <button className={`tab-v18 ${modalTab === 'structure' ? 'active' : ''}`} onClick={() => setModalTab('structure')}>투자 구조</button>
                          <button className={`tab-v18 ${modalTab === 'analysis' ? 'active' : ''}`} onClick={() => setModalTab('analysis')}>상권 분석</button>
                          <button className={`tab-v18 ${modalTab === 'risk' ? 'active' : ''}`} onClick={() => setModalTab('risk')}>리스크 관리</button>
                          <button className={`tab-v18 ${modalTab === 'company' ? 'active' : ''}`} onClick={() => setModalTab('company')}>기업 정보</button>
                        </div>

                        <div className="detail-body-v18 fade-in">
                          {modalTab === 'store' && (
                            <div className="tab-pane-v18">
                              <h3 className="pane-title-v18">오너스코리아가 선택한 프리미엄 다이닝</h3>
                              <p className="pane-desc-v18">{data.description}</p>
                              
                              <div className="chef-profile-v18">
                                <div className="chef-avatar-v18">
                                  <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80" alt="Chef" />
                                </div>
                                <div className="chef-info-v18">
                                  <h4>{data.businessInfo.founder}</h4>
                                  <p className="chef-bio-v18">"타협 없는 맛과 접객을 선보입니다."</p>
                                </div>
                              </div>

                              <div className="business-stats-v18">
                                <div className="stat-item-v18"><Building size={20} /> <div className="si-v18"><span className="l">전용 면적</span><span className="v">{data.businessInfo.area}</span></div></div>
                                <div className="stat-item-v18"><Users size={20} /> <div className="si-v18"><span className="l">좌석 규모</span><span className="v">{data.businessInfo.tables}</span></div></div>
                                <div className="stat-item-v18"><TrendingUp size={20} /> <div className="si-v18"><span className="l">최근 월 매출</span><span className="v">{data.businessInfo.avgRevenue}</span></div></div>
                              </div>
                            </div>
                          )}
                          {modalTab === 'structure' && (
                            <div className="tab-pane-v18">
                              <h3 className="pane-title-v18">투명하고 안정적인 투자 구조</h3>
                              <div className="simulation-card-v18">
                                <div className="sim-header-v18"><h4><Calculator size={20} /> 예상 배당 시뮬레이션</h4><span className="sim-badge-v18">{data.returnRate}</span></div>
                                <div className="sim-row-v18"><span>투자 원금</span><strong>3,000만 원 (1구좌)</strong></div>
                                <div className="sim-row-v18"><span>계약 기간</span><strong>{data.duration}</strong></div>
                                <div className="sim-row-v18 highlight-v18"><span>매월 예상 세후 배당금</span><strong className="text-danger">약 312,500 원</strong></div>
                              </div>
                            </div>
                          )}
                          {modalTab === 'analysis' && (
                            <div className="tab-pane-v18">
                              <h3 className="pane-title-v18">데이터로 증명된 최상급 상권</h3>
                              <div className="location-points-v18">
                                <div className="point-box-v18"><MapPin size={24} /><h4>접근성</h4><p>지하철역 도보 3분 거리 초역세권.</p></div>
                                <div className="point-box-v18"><Users size={24} /><h4>배후 수요</h4><p>풍부한 법인 카드 결제 수요.</p></div>
                              </div>
                            </div>
                          )}
                          {modalTab === 'risk' && (
                            <div className="tab-pane-v18">
                              <h3 className="pane-title-v18">철저한 3중 안전 장치</h3>
                              <div className="safety-net-v18">
                                <div className="safety-card-v18"><div className="step-v18">1</div><div className="sc-v18"><h4>임대보증금 담보권 설정</h4><p>1순위 근저당 및 질권을 설정합니다.</p></div></div>
                                <div className="safety-card-v18"><div className="step-v18">2</div><div className="sc-v18"><h4>권리금 양수도 계약 우선권</h4><p>사전 계약이 체결되어 있습니다.</p></div></div>
                              </div>
                            </div>
                          )}
                          {modalTab === 'company' && (
                            <div className="tab-pane-v18">
                              <h3 className="pane-title-v18">운영 법인 및 대표자 정보</h3>
                              <div className="company-card-v18">
                                <div className="cc-row-v18"><span>법인명</span><strong>{data.companyInfo.name}</strong></div>
                                <div className="cc-row-v18"><span>대표자</span><strong>{data.companyInfo.ceo}</strong></div>
                                <div className="cc-row-v18"><span>소재지</span><strong>{data.companyInfo.address}</strong></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Sticky Sidebar Style */}
                      <aside className="detail-sidebar-v18">
                        <div className="sticky-card-v18">
                          <h3 className="syndicate-name-v18">{data.syndicateName}</h3>
                          <div className="fund-summary-v18">
                            <div className="fs-item-v18"><span>총 모집금액</span><strong>{data.totalAmount}</strong></div>
                            <div className="fs-item-v18"><span>투자기간</span><strong>{data.duration}</strong></div>
                            <div className="fs-item-v18"><span>수익률</span><strong className="text-danger">{data.returnRate}</strong></div>
                          </div>
                          
                          <div className="progress-area-v18">
                            <div className="p-header-v18"><span>{data.progress}% 모집 중</span></div>
                            <div className="p-bar-v18"><div className="p-fill-v18" style={{ width: `${data.progress}%` }}></div></div>
                          </div>

                          <div className="selector-area-v18">
                            <span className="l">투자금액 선택</span>
                            <div className="u-selector-v18">
                              <button onClick={() => setModalUnits(Math.max(1, modalUnits - 1))}>-</button>
                              <span>{modalUnits}구좌</span>
                              <button onClick={() => setModalUnits(modalUnits + 1)}>+</button>
                            </div>
                          </div>
                          
                          <div className="total-area-v18">
                            <span>총 투자금액</span>
                            <strong>{totalInvestmentPrice}만 원</strong>
                          </div>

                          <button className="btn-invest-v18">계약하기</button>
                          
                          <div className="sidebar-footer-v18">
                            <Info size={14} /> 벤처투자 소득공제 100% 대상
                          </div>
                        </div>
                      </aside>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MyPage;
