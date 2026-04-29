import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, List, Store, Bell, MessageSquare, LogOut,
  FileText, TrendingUp, CircleDollarSign, Calendar, Target,
  ChevronRight, ChevronDown, ArrowUpRight, Trophy, Sparkles,
  Settings, Printer, ShieldCheck, Clock, RefreshCw, Smartphone,
  MapPin, PieChart, Maximize
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
  const [chartPeriod, setChartPeriod] = useState<'daily' | 'weekly' | 'monthly' | 'yearly'>('monthly');
  const [selectedAsset, setSelectedAsset] = useState<'all' | 'sushi' | 'cafe'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [showEmailAuth, setShowEmailAuth] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes
  const [selectedContractId, setSelectedContractId] = useState<number | null>(1);

  const CONTRACTS = [
    { id: 1, title: "입점 협력 계약서 (시흥 횟집)", imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=200&q=80", date: "2024.03.15", expiry: "2026.03.14", content: "제 1조 (목적)\n본 계약은 '오너스코리아'와 '투자자' 간의 상호 협력을 목적으로 하며...\n\n제 2조 (투자 금액 및 배당)\n투자자는 해당 매장에 대해 금 일천만 원을 투자하며, 매월 수익의 5%를 배당받는다...\n\n제 3조 (계약 기간)\n본 계약의 효력은 체결일로부터 2년간 유지되며...\n\n제 4조 (권리 및 의무)\n투자자는 매장의 경영에 직접 관여하지 않으나, 투명한 회계 보고를 받을 권리가 있다...\n\n제 5조 (해지)\n일방이 본 계약을 위반할 경우, 상대방은 서면 통지 후 계약을 해지할 수 있다." },
    { id: 2, title: "투자 약정서 (판교 카페)", imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=200&q=80", date: "2024.04.10", expiry: "2026.04.09", content: "제 1조 (투자금의 예치)\n투자자는 약정된 기일까지 지정된 계좌로 투자금을 예치하여야 한다...\n\n제 2조 (수익 배분 방식)\n수익 배분은 매월 25일에 정산하여 지급하는 것을 원칙으로 한다...\n\n제 3조 (비밀 유지)\n양 당사자는 본 계약과 관련하여 지득한 모든 정보를 제3자에게 누설해서는 안 된다..." },
    { id: 3, title: "업무 제휴 계약서 (강남 오피스)", imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80", date: "2024.05.01", expiry: "2025.04.30", content: "제 1조 (제휴의 범위)\n본 계약은 강남 오피스 지점의 업무 환경 고도화를 위한 제휴를 다룬다...\n\n제 2조 (비용 분담)\n제휴에 따른 초기 구축 비용은 오너스코리아가 전액 부담하며..." }
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

            <button
              className={`nav-item ${activeMenu === 'mystore' ? 'active' : ''}`}
              onClick={() => setActiveMenu('mystore')}
            >
              <ChevronRight size={18} className="chevron-icon" />
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

        {activeMenu === 'dashboard' || activeMenu === 'investments' ? (
          <>
            {/* Header removed as requested */}



            {/* Simplified Key Metrics */}
            <div className="metrics-grid simple-metrics-v2">
              <div className="metric-card-v2">
                <span className="metric-label-v2">총 투자액</span>
                <h3 className="metric-value-v2">{currentData?.investment}</h3>
              </div>
              <div className="metric-card-v2">
                <span className="metric-label-v2">누적 배당이익</span>
                <h3 className="metric-value-v2">{currentData?.dividend}</h3>
              </div>
              <div className="metric-card-v2">
                <span className="metric-label-v2">실질 원금</span>
                <h3 className="metric-value-v2">{currentData?.principal}</h3>
                <span className="metric-hint-v2">소득공제 혜택 반영됨</span>
              </div>
            </div>

            <div className="dashboard-row-v6">
              {/* Main Content: Chart + Stores Integrated */}
              <div className="chart-integrated-section main-content-card">
                <div className="chart-header-v6">
                  <div className="chart-title-area">
                    <h3>매출분석</h3>
                    <div className="chart-toggles">
                      <button className={`chart-toggle ${chartPeriod === 'daily' ? 'active' : ''}`} onClick={() => setChartPeriod('daily')}>일별</button>
                      <button className={`chart-toggle ${chartPeriod === 'weekly' ? 'active' : ''}`} onClick={() => setChartPeriod('weekly')}>주간</button>
                      <button className={`chart-toggle ${chartPeriod === 'monthly' ? 'active' : ''}`} onClick={() => setChartPeriod('monthly')}>월간</button>
                    </div>
                  </div>

                  {/* Asset Filter Cards (Integrated into Chart Header) */}
                  <div className="asset-cards-integrated">
                    <div
                      className={`asset-card-mini ${selectedAsset === 'all' ? 'active' : ''}`}
                      onClick={() => setSelectedAsset('all')}
                    >
                      <div className="mini-thumb bg-primary"><LayoutDashboard size={14} /></div>
                      <span>전체</span>
                    </div>
                    <div
                      className={`asset-card-mini ${selectedAsset === 'sushi' ? 'active' : ''}`}
                      onClick={() => setSelectedAsset('sushi')}
                    >
                      <div className="mini-thumb">
                        <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=100&q=80" alt="시흥" />
                      </div>
                      <span>시흥 횟집</span>
                    </div>
                    <div
                      className={`asset-card-mini ${selectedAsset === 'cafe' ? 'active' : ''}`}
                      onClick={() => setSelectedAsset('cafe')}
                    >
                      <div className="mini-thumb">
                        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=100&q=80" alt="판교" />
                      </div>
                      <span>판교 카페</span>
                    </div>
                  </div>
                </div>

                <div className="enhanced-chart-container">
                  <div className="chart-y-axis">
                    <span>100%</span>
                    <span>80%</span>
                    <span>60%</span>
                    <span>40%</span>
                    <span>20%</span>
                    <span>0</span>
                  </div>
                  <div className="chart-bars-v6">
                    {(chartPeriod === 'daily' ? [45, 60, 85, 95, 80, 75, 90, 65] : currentData?.chartData || []).map((val, i) => (
                      <div key={i} className="chart-column-v6">
                        <div className="column-bars">
                          {/* Revenue Bar */}
                          <div className="bar-v6 revenue-bar-v6" style={{ height: `${val}%` }}>
                            <div className="tooltip-v6">매출: {val * 10}만</div>
                          </div>
                          {/* Visitor Line (Mocked as a dot + line connection via CSS) */}
                          <div className="visitor-point-v6" style={{ bottom: `${val * 0.8}%` }}>
                            <div className="point-dot"></div>
                            <div className="tooltip-v6">방문객: {Math.floor(val * 1.5)}명</div>
                          </div>
                        </div>
                        
                        <span className="x-axis-label-v6">
                          {chartPeriod === 'daily' 
                            ? `${8 + (i * 2)}:00` 
                            : `${i + 1}월`}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="chart-legend-v6">
                    <div className="legend-item"><span className="legend-box bg-revenue"></span> 매출액 (Bar)</div>
                    <div className="legend-item"><span className="legend-line"></span> 방문객 (Line)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Investments Section (Matching InvestmentsPage Style) */}
            <section className="recommended-section-v6">
              <h3 className="section-title">추천 투자처</h3>
              <div className="investments-grid-v2">
                {[
                  { id: 4, title: '광교 베이커리 하우스', industry: '음식점', subCategory: '베이커리', location: '경기 수원시', deposit: '15,000만 원', totalAmount: '35,000만 원', size: '45평', returnRate: '12.5%', progress: 70, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", status: '추천' },
                  { id: 6, title: '송도 이자카야 모리', industry: '음식점', subCategory: '일식', location: '인천 연수구', deposit: '12,000만 원', totalAmount: '24,000만 원', size: '32평', returnRate: '11.2%', progress: 85, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80", status: '모집중' },
                  { id: 10, title: '해운대 마린 펜트하우스', industry: '부동산', subCategory: '숙박', location: '부산 해운대구', deposit: '50,000만 원', totalAmount: '15억', size: '60평', returnRate: '15.8%', progress: 40, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", status: '신규' },
                ].map((item) => (
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
                        <span className={`status-tag-chip ${item.status === '추천' ? 'recommend' : item.status === '신규' ? 'new' : 'active'}`}>{item.status}</span>
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
            </section>
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
                            </select>
                            <input type="text" value="010" className="unified-input phone-part" readOnly />
                            <input type="text" value="1234" className="unified-input phone-part" readOnly />
                            <input type="text" value="5678" className="unified-input phone-part" readOnly />
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
                              <span className="date-sep">|</span>
                              <span>마감일: {activeContract.expiry}</span>
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
        ) : null}
      </main>

      {/* Resume UI Popup Removed */}
    </div>
  );
};

export default MyPage;
