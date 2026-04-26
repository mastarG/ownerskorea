import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, List, Store, Bell, MessageSquare, LogOut, 
  FileText, TrendingUp, CircleDollarSign, Calendar, Target, 
  ChevronRight, ArrowUpRight, Trophy, Sparkles
} from 'lucide-react';
import './MyPage.css';

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
  all: {
    name: "통합 지표",
    investment: "9,000만 원",
    dividend: "1,240만 원",
    principal: "5,238만 원",
    duration: "1년 4개월",
    roi: 42,
    nextPayout: "D-12 (예상 180만 원)",
    chartData: [40, 60, 45, 80, 55, 90, 70, 85, 65, 95, 75, 100]
  },
  sushi: {
    name: "시흥 횟집",
    investment: "6,000만 원",
    dividend: "820만 원",
    principal: "3,500만 원",
    duration: "1년 2개월",
    roi: 45,
    nextPayout: "D-12 (예상 120만 원)",
    chartData: [25, 40, 30, 55, 35, 60, 45, 55, 40, 65, 50, 70]
  },
  cafe: {
    name: "판교 카페",
    investment: "3,000만 원",
    dividend: "420만 원",
    principal: "1,738만 원",
    duration: "2개월",
    roi: 35,
    nextPayout: "D-12 (예상 60만 원)",
    chartData: [15, 20, 15, 25, 20, 30, 25, 30, 25, 30, 25, 30]
  }
};

const MyPage = ({ onLogout }: MyPageProps) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [showResumePopup, setShowResumePopup] = useState(false);
  const [chartPeriod, setChartPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [selectedAsset, setSelectedAsset] = useState<'all' | 'sushi' | 'cafe'>('all');

  const currentData = ASSET_DATA[selectedAsset];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResumePopup(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mypage-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <a href="/" className="sidebar-logo" onClick={(e) => { e.preventDefault(); onLogout(); }}>
            <span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea
          </a>
        </div>
        
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
          </div>
          <div className="profile-info">
            <h4>김오너 님</h4>
            <span className="profile-badge">VIP 투자자</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-group">
            <div className="nav-label">메인 메뉴</div>
            <button 
              className={`nav-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dashboard')}
            >
              <LayoutDashboard size={18} />
              <span>대시보드</span>
            </button>
            
            <button 
              className={`nav-item ${activeMenu === 'investments' ? 'active' : ''}`}
              onClick={() => setActiveMenu('investments')}
            >
              <List size={18} />
              <span>투자처 리스트</span>
              <ChevronRight size={16} className="ml-auto" />
            </button>
            
            {activeMenu === 'investments' && (
              <div className="sub-nav">
                <button className={`sub-nav-item ${selectedAsset === 'sushi' ? 'active' : ''}`} onClick={() => setSelectedAsset('sushi')}>
                  <span className="status-dot active"></span> 시흥 횟집 (2구좌)
                </button>
                <button className={`sub-nav-item ${selectedAsset === 'cafe' ? 'active' : ''}`} onClick={() => setSelectedAsset('cafe')}>
                  <span className="status-dot active"></span> 판교 카페 (1구좌)
                </button>
              </div>
            )}

            <button 
              className={`nav-item ${activeMenu === 'mystore' ? 'active' : ''}`}
              onClick={() => setActiveMenu('mystore')}
            >
              <Store size={18} />
              <span>나의 가게 (창업자 전용)</span>
            </button>
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
        
        {/* Top Header */}
        <header className="main-header">
          <div>
            <h1 className="page-title">{selectedAsset === 'all' ? '통합 자산 현황' : `${currentData?.name ?? ''} 현황`}</h1>
            <p className="page-subtitle">김오너 님의 투자 포트폴리오 관제센터입니다.</p>
          </div>
          <div className="header-actions">
            <div className="header-date">기준일: 2026. 04. 26</div>
          </div>
        </header>

        {/* Asset Filter Cards */}
        <section className="asset-filter-section">
          <h3 className="section-title">나의 투자 매장</h3>
          <div className="asset-cards-container">
            <div 
              className={`asset-filter-card ${selectedAsset === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedAsset('all')}
            >
              <div className="asset-card-img bg-primary">
                <LayoutDashboard size={24} className="text-secondary" />
              </div>
              <div className="asset-card-info">
                <span className="asset-card-name">전체 보기</span>
                <span className="asset-card-count">3구좌 합산</span>
              </div>
            </div>

            <div 
              className={`asset-filter-card ${selectedAsset === 'sushi' ? 'active' : ''}`}
              onClick={() => setSelectedAsset('sushi')}
            >
              <div className="asset-card-img">
                <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=200&q=80" alt="시흥 횟집" />
              </div>
              <div className="asset-card-info">
                <span className="asset-card-name">시흥 횟집</span>
                <span className="asset-card-tag investor">투자자</span>
              </div>
            </div>

            <div 
              className={`asset-filter-card ${selectedAsset === 'cafe' ? 'active' : ''}`}
              onClick={() => setSelectedAsset('cafe')}
            >
              <div className="asset-card-img">
                <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80" alt="판교 카페" />
              </div>
              <div className="asset-card-info">
                <span className="asset-card-name">판교 카페</span>
                <span className="asset-card-tag investor">투자자</span>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon bg-blue-light"><CircleDollarSign size={24} className="text-blue" /></div>
            <div className="metric-content">
              <span className="metric-label">총 투자액</span>
              <h3 className="metric-value">{currentData?.investment}</h3>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon bg-orange-light"><TrendingUp size={24} className="text-orange" /></div>
            <div className="metric-content">
              <span className="metric-label">누적 배당금 (수익)</span>
              <h3 className="metric-value text-orange">{currentData?.dividend}</h3>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon bg-green-light"><Target size={24} className="text-green" /></div>
            <div className="metric-content">
              <span className="metric-label">실질 원금 (환급 차감 후)</span>
              <h3 className="metric-value">{currentData?.principal}</h3>
              <span className="metric-hint">소득공제 혜택 반영됨</span>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-icon bg-purple-light"><Calendar size={24} className="text-purple" /></div>
            <div className="metric-content">
              <span className="metric-label">유지 기간</span>
              <h3 className="metric-value">{currentData?.duration}</h3>
            </div>
          </div>
        </div>

        <div className="dashboard-row">
          {/* Charts Section */}
          <div className="chart-section main-content-card">
            <div className="chart-header">
              <h3>{selectedAsset === 'all' ? '매출 및 배당액 추이' : `${currentData?.name ?? ''} 매출 추이`}</h3>
              <div className="chart-toggles">
                <button className={`chart-toggle ${chartPeriod === 'daily' ? 'active' : ''}`} onClick={() => setChartPeriod('daily')}>일별</button>
                <button className={`chart-toggle ${chartPeriod === 'weekly' ? 'active' : ''}`} onClick={() => setChartPeriod('weekly')}>주간</button>
                <button className={`chart-toggle ${chartPeriod === 'monthly' ? 'active' : ''}`} onClick={() => setChartPeriod('monthly')}>월간</button>
                <button className={`chart-toggle ${chartPeriod === 'yearly' ? 'active' : ''}`} onClick={() => setChartPeriod('yearly')}>연간</button>
              </div>
            </div>

            <div className="mock-chart-container">
              <div className="chart-y-axis">
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0</span>
              </div>
              <div className="chart-bars">
                {currentData?.chartData.map((height, i) => (
                  <div key={i} className="chart-bar-group">
                    <div className="bar revenue-bar" style={{ height: `${height}%` }}>
                      <div className="bar-tooltip">매출: {(height * 10).toLocaleString()}만</div>
                    </div>
                    <div className="bar dividend-bar" style={{ height: `${height * 0.2}%` }}>
                      <div className="bar-tooltip">배당: {(height * 2).toLocaleString()}만</div>
                    </div>
                    <span className="chart-x-label">{i + 1}월</span>
                  </div>
                ))}
              </div>
              
              <div className="chart-legend">
                <div className="legend-item"><span className="legend-color bg-revenue"></span> 매장 총 매출</div>
                <div className="legend-item"><span className="legend-color bg-dividend"></span> 나의 배당액</div>
              </div>
            </div>
          </div>

          {/* New Sidebar Widgets */}
          <div className="dashboard-sidebar">
            {/* ROI Progress Widget */}
            <div className="widget-card roi-widget">
              <div className="widget-header">
                <h4>투자 원금 회수율</h4>
                <ArrowUpRight size={16} className="text-green" />
              </div>
              <div className="roi-progress-container">
                <div className="roi-percentage">{currentData?.roi}% <span className="status">진행 중</span></div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${currentData?.roi}%` }}></div>
                </div>
                <p className="roi-desc">배당금 + 절세 혜택 포함</p>
              </div>
            </div>

            {/* Next Payout Widget */}
            <div className="widget-card payout-widget">
              <div className="widget-header">
                <h4>다음 정산일</h4>
                <Calendar size={16} className="text-secondary" />
              </div>
              <div className="payout-content">
                <div className="d-day">{currentData?.nextPayout.split(' ')[0]}</div>
                <p className="payout-est">{currentData?.nextPayout.split(' ')[1]} {currentData?.nextPayout.split(' ')[2]}</p>
              </div>
            </div>

            {/* Store Updates Widget */}
            <div className="widget-card updates-widget">
              <div className="widget-header">
                <h4>매장 최신 소식</h4>
                <Sparkles size={16} className="text-secondary" />
              </div>
              <div className="updates-list">
                <div className="update-item">
                  <div className="update-icon"><Trophy size={14} /></div>
                  <div className="update-text">
                    <p><strong>시흥 횟집:</strong> 배민 맛집 1위 달성! 🏆</p>
                    <span>2시간 전</span>
                  </div>
                </div>
                <div className="update-item">
                  <div className="update-icon"><Sparkles size={14} /></div>
                  <div className="update-text">
                    <p><strong>판교 카페:</strong> 시즌 수박주스 반응 폭발 🍉</p>
                    <span>어제</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Resume UI Popup */}
      {showResumePopup && (
        <div className="resume-popup-overlay">
          <div className="resume-popup-container">
            <div className="resume-popup-icon">
              <FileText size={32} />
            </div>
            <h3>작성 중인 계약서가 있습니다</h3>
            <p>이전에 작성하시던 입점 협력 계약서가 임시 저장되어 있습니다. 이어서 진행하시겠습니까?</p>
            <div className="resume-popup-actions">
              <button className="btn btn-outline" onClick={() => setShowResumePopup(false)}>다음에 하기</button>
              <button className="btn btn-primary" onClick={() => setShowResumePopup(false)}>이어서 작성하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
