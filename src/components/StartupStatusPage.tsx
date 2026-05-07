import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, CircleDollarSign, PieChart, Download, FileText, 
  MessageSquare, ChevronRight, AlertCircle, Calendar, ArrowUpRight, ArrowDownRight,
  X, Sun, CloudSun, Cloud, CloudRain, User, ChevronLeft, Trophy, HelpCircle, MapPin, Building
} from 'lucide-react';
import './InvestmentStatusPage.css'; // Reuse same styles

// Mock data mapping for dynamic filtering
const MOCK_STATS: Record<string, any> = {
  all: { invest: '3,800', value: '4,120', dividend: '210', roi: '+12.4', visitors: 98 },
  '1': { invest: '2,000', value: '2,200', dividend: '120', roi: '+10.0', visitors: 50 },
  '2': { invest: '1,000', value: '1,120', dividend: '60', roi: '+12.0', visitors: 30 },
  '3': { invest: '800', value: '800', dividend: '30', roi: '+0.0', visitors: 18 },
};

// Generate mock ranking list
const GENERATE_MOCK_RANKING = (type: string) => {
  const list = [];
  const suffix = '만원';
  for (let i = 1; i <= 300; i++) {
    list.push({
      rank: i,
      name: i === 200 ? '김오너' : `사업자 ${i}`,
      amount: `${Math.floor(Math.random() * 10000 + 1000)}${suffix}`,
      isMe: i === 200,
      img: `https://i.pravatar.cc/100?u=${i + (type === 'profit' ? 50 : 0)}`
    });
  }
  return list;
};

const StartupStatusPage: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState('all');
  const [chartView, setChartView] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [showAddContract, setShowAddContract] = useState(false);
  const [contractNo, setContractNo] = useState('');
  const [registerMsg, setRegisterMsg] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [rankingType, setRankingType] = useState('revenue');
  
  // Interaction states for chart
  const [clickedBar, setClickedBar] = useState<number | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const portfolioList = [
    { id: 1, name: '시흥 어부 횟집', category: 'F&B / 수산물', amount: '2,500만원', roi: '+18.2%', status: '성장중', thumb: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: '판교 티장 카페', category: 'Cafe / 베이커리', amount: '1,200만원', roi: '+12.5%', status: '안정기', thumb: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: '강남 오피스', category: '부동산 / 오피스', amount: '3,000만원', roi: '+8.7%', status: '안정기', thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
  ];

  const stats = MOCK_STATS[selectedEntity] || MOCK_STATS.all;

  const { visibleRankings, myRankInfo } = useMemo(() => {
    const allRankings = GENERATE_MOCK_RANKING(rankingType);
    const myIndex = allRankings.findIndex(r => r.isMe);
    const start = Math.max(0, myIndex - 5);
    const end = Math.min(allRankings.length, myIndex + 25);
    return { visibleRankings: allRankings.slice(start, end), myRankInfo: allRankings[myIndex] };
  }, [rankingType]);

  const handleContractSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (contractNo.length > 5) {
        setRegisterMsg({ text: '등록완료', type: 'success' });
      } else {
        setRegisterMsg({ text: '등록된 계약번호가 없습니다', type: 'error' });
      }
      setTimeout(() => {
        setRegisterMsg(null);
        if (contractNo.length > 5) setShowAddContract(false);
        setContractNo('');
      }, 2000);
    }
  };

  const chartDataCount = chartView === 'daily' ? 15 : 7;

  return (
    <div className="invest-status-container fade-in">
      <div className="docs-content-layout-v38">
        {/* Left Sidebar: Real-time Ranking */}
        <aside className="docs-side-column-left">
          <section className="ranking-widget-v39 full-height">
            <div className="ranking-header-v39">
              <h3>실시간 <span style={{color: 'var(--color-secondary)'}}>창업</span> 순위</h3>
              <p>전체 사업자 중 나의 실시간 랭킹입니다.</p>
            </div>

            <div className="ranking-type-filters-v39">
              <button className={rankingType === 'revenue' ? 'active' : ''} onClick={() => setRankingType('revenue')}>매출</button>
              <button className={rankingType === 'profit' ? 'active' : ''} onClick={() => setRankingType('profit')}>영업이익</button>
            </div>

            {myRankInfo && (
              <div className="my-rank-summary-v39">
                <div className="rank-item-v39 is-me highlighted">
                  <span className="rank-num">{myRankInfo.rank}</span>
                  <img src={myRankInfo.img} alt="" className="user-img" />
                  <div className="user-info">
                    <span className="user-name">{myRankInfo.name} <span className="me-badge">(나)</span></span>
                  </div>
                  <span className="rank-amount">{myRankInfo.amount}</span>
                </div>
              </div>
            )}

            <div className="ranking-list-container-v39 expanded">
              <div className="ranking-list-v39">
                {visibleRankings.map((item, idx) => (
                  <div key={idx} className={`rank-item-v39 ${item.isMe ? 'is-me' : ''}`}>
                    <span className="rank-num">
                      {item.rank <= 3 ? <Trophy size={14} className={`medal-rank-${item.rank}`} /> : item.rank}
                    </span>
                    <img src={item.img} alt="" className="user-img" />
                    <div className="user-info">
                      <span className="user-name">{item.name} {item.isMe && <span className="me-badge">(나)</span>}</span>
                    </div>
                    <span className="rank-amount">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </aside>

        {/* Right Main Content */}
        <div className="docs-main-column-right aligned-height">
          {/* 1. Entity Selector (Store Filter) - AT TOP */}
          <section className="entity-selector-v38" style={{ marginBottom: '2rem' }}>
            <div className="selector-list">
              <button className={`entity-btn ${selectedEntity === 'all' ? 'active' : ''}`} onClick={() => setSelectedEntity('all')}>
                <span className="name">전체 창업상품</span>
              </button>
              {portfolioList.map(item => (
                <button 
                  key={item.id} 
                  className={`entity-btn ${selectedEntity === item.id.toString() ? 'active' : ''}`} 
                  onClick={() => setSelectedEntity(item.id.toString())}
                >
                  <img src={item.thumb} alt="" className="btn-thumb" />
                  <div className="btn-text-content">
                    <span className="name">{item.name}</span>
                    <span className="sub">업종/업태</span>
                  </div>
                </button>
              ))}
              <div className="add-contract-wrapper">
                {!showAddContract ? (
                  <button className="btn-add-index" onClick={() => setShowAddContract(true)}>+</button>
                ) : (
                  <div className="contract-input-area">
                    <input type="text" autoFocus placeholder="계약번호 입력..." className="contract-no-input" value={contractNo} onChange={(e) => setContractNo(e.target.value)} onKeyDown={handleContractSubmit} />
                    <button className="btn-close-input" onClick={() => setShowAddContract(false)}><X size={14} /></button>
                    {registerMsg && <div className={`register-toast ${registerMsg.type}`}>{registerMsg.text}</div>}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 2. Summary Stats - BELOW SELECTOR */}
          <section className="summary-stats-v17" style={{ marginBottom: '2.5rem' }}>
            <div className="stat-card">
              <span className="stat-label">총 매출액</span>
              <span className="stat-value"><span className="number">{stats.invest}</span><span className="unit-text">만원</span></span>
            </div>
            <div className="stat-card">
              <span className="stat-label">당월 예상매출</span>
              <span className="stat-value text-blue"><span className="number">{stats.value}</span><span className="unit-text">만원</span></span>
            </div>
            <div className="stat-card">
              <span className="stat-label">누적 영업이익</span>
              <span className="stat-value text-red"><span className="number">{stats.dividend}</span><span className="unit-text">만원</span></span>
            </div>
            <div className="stat-card">
              <span className="stat-label">목표 달성률</span>
              <span className="stat-value text-orange"><span className="number">{stats.roi}</span><span className="unit-text">%</span></span>
            </div>
          </section>

          {/* 3. Visual Charts Section */}
          <section className="unified-chart-section-v36">
            <div className="chart-header-actions-v10">
              <div className="chart-legend-v8">
                <div className="legend-item"><span className="legend-box bg-revenue"></span> 매출 (Bar)</div>
                <div className="legend-item">
                  <svg width="24" height="12" style={{marginRight: '8px'}}>
                    <line x1="0" y1="6" x2="24" y2="6" stroke="#EA580C" strokeWidth="2" />
                    <circle cx="12" cy="6" r="3" fill="#ffffff" stroke="#EA580C" strokeWidth="1.5" />
                  </svg>
                  객단가 (Line)
                </div>
              </div>
              <div className="chart-toggles-v8">
                <button className={`toggle-v8 ${chartView === 'daily' ? 'active' : ''}`} onClick={() => setChartView('daily')}>일별</button>
                <button className={`toggle-v8 ${chartView === 'weekly' ? 'active' : ''}`} onClick={() => setChartView('weekly')}>주간</button>
                <button className={`toggle-v8 ${chartView === 'monthly' ? 'active' : ''}`} onClick={() => setChartView('monthly')}>월간</button>
              </div>
            </div>

            <div className="enhanced-chart-container-v8" style={{ marginTop: '2rem' }}>
              <div className="chart-y-axis-v8">
                <span className="y-unit-v8">단위:만원</span>
                <span>4000</span><span>3000</span><span>2000</span><span>1000</span><span>0</span>
              </div>
              <div className="chart-bars-v8">
                <svg className="visitor-line-v8" style={{overflow: 'visible'}}>
                  {Array.from({ length: chartDataCount - 1 }, (_, i) => {
                    const multiplier = (selectedEntity === 'all' ? 1 : selectedEntity === '1' ? 0.6 : 0.3) * (chartView === 'monthly' ? 4 : 1);
                    const val = (1200 + Math.sin(i * 0.5) * 400) * multiplier;
                    const nextVal = (1200 + Math.sin((i + 1) * 0.5) * 400) * multiplier;
                    const x1 = `${(i / (chartDataCount - 1)) * 100}%`;
                    const x2 = `${((i + 1) / (chartDataCount - 1)) * 100}%`;
                    const y1 = `${100 - (val / 4000 * 100)}%`;
                    const y2 = `${100 - (nextVal / 4000 * 100)}%`;
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EA580C" strokeWidth="2" />;
                  })}
                  
                  {Array.from({ length: chartDataCount }, (_, i) => {
                    const multiplier = (selectedEntity === 'all' ? 1 : selectedEntity === '1' ? 0.6 : 0.3) * (chartView === 'monthly' ? 4 : 1);
                    const val = Math.floor((1200 + Math.sin(i * 0.5) * 400) * multiplier);
                    const x = `${(i / (chartDataCount - 1)) * 100}%`;
                    const y = `${100 - (val / 4000 * 100)}%`;
                    return (
                      <g key={i} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)}>
                        <circle cx={x} cy={y} r={hoveredPoint === i ? 6 : 4} fill="#ffffff" stroke="#EA580C" strokeWidth="2" style={{cursor: 'pointer', transition: 'r 0.2s'}} />
                      </g>
                    );
                  })}
                </svg>

                {Array.from({ length: chartDataCount }, (_, i) => {
                  const multiplier = (selectedEntity === 'all' ? 1 : selectedEntity === '1' ? 0.5 : 0.4) * (chartView === 'monthly' ? 3.5 : 1);
                  const val = Math.floor((1000 + Math.cos(i * 0.4) * 300) * multiplier);
                  const heightPercent = (val / 4000) * 100;
                  return (
                    <div key={i} className="chart-column-v8" style={{ width: `${100 / chartDataCount}%` }}>
                      <div className="column-bars-v8" onClick={() => setClickedBar(clickedBar === i ? null : i)} style={{cursor: 'pointer'}}>
                        <div className={`bar-v8 revenue-bar-v8 ${clickedBar === i ? 'active' : ''}`} style={{ height: `${heightPercent}%` }}></div>
                      </div>
                      <span className="x-axis-label-v8">{chartView === 'daily' ? `${i+1}` : chartView === 'weekly' ? `${i+1}주` : `${i+1}월`}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="visitor-divider-v12" style={{ margin: '3rem 0 2rem' }}></div>

          {/* 4. Operation Information */}
          <section className="visitors-analysis-v12">
            <div className="section-header-v36">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>운영 정보 ({chartView === 'daily' ? '시간별' : chartView === 'weekly' ? '일별' : '주차별'})</h3>
            </div>

            <div className="daily-forecast-wrapper-v19" style={{ marginTop: '1.5rem' }}>
              <div className="weather-forecast-table-v19 fixed-width">
                <div className="wft-scroll-container">
                  <div className="wft-col sticky-left">
                    <div className="wft-cell header-cell">
                      <span className="wft-badge">{chartView === 'daily' ? '오늘' : '전체'}</span>
                      <span className="wft-date-label">데이터</span>
                    </div>
                    <div className="wft-cell spacer-cell"></div>
                    <div className="wft-cell label-cell">신규</div>
                    <div className="wft-cell label-cell">재방문</div>
                    <div className="wft-cell label-cell total-label-cell">총원</div>
                  </div>

                  {Array.from({length: chartView === 'daily' ? 12 : 7}, (_, i) => {
                    const label = chartView === 'daily' ? `${10 + i}시` : chartView === 'weekly' ? `${i + 1}일차` : `${i + 1}주차`;
                    const male = Math.floor((1 + Math.abs(Math.sin(i/3)) * 4) * 10);
                    const female = Math.floor((2 + Math.abs(Math.cos(i/3)) * 4) * 10);
                    const total = male + female;

                    return (
                      <div key={i} className="wft-col hourly-col">
                        <div className="wft-cell header-cell time-val">{label}</div>
                        <div className="wft-cell icon-cell">
                          {i % 3 === 0 ? <Sun size={18} color="#eab308"/> : <CloudSun size={18} color="#f59e0b"/>}
                        </div>
                        <div className="wft-cell temp-val">22°</div>
                        <div className="wft-cell hum-val">40%</div>
                        <div className="wft-cell data-val male-val">{male}</div>
                        <div className="wft-cell data-val female-val">{female}</div>
                        <div className="wft-cell data-val total-val">
                          {total} <ArrowUpRight size={10} color="#0b192c" style={{marginLeft: '2px'}}/>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StartupStatusPage;
