import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, TrendingUp, Calendar, Users, ShieldCheck, 
  ArrowLeft, Download, Share2, Calculator, Info,
  Store, Building2, CheckCircle2, AlertCircle, MessageSquare, CalendarDays, Building
} from 'lucide-react';
import './InvestmentDetail.css';

// Mock data mapping
import { INVESTMENTS_DATA } from '../data/investments';

const InvestmentDetail = () => {
  const { id } = useParams();
  const data = id ? INVESTMENTS_DATA[id] : null;
  const [activeTab, setActiveTab] = useState('store');
  const [units, setUnits] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab]);

  if (!data) {
    return (
      <div className="detail-error container">
        <AlertCircle size={48} />
        <h2>상품 정보를 찾을 수 없습니다.</h2>
        <Link to="/investments" className="btn btn-primary mt-4">목록으로 돌아가기</Link>
      </div>
    );
  }

  // Helper to calculate total investment based on units
  const getMinAmountValue = (str: string) => {
    return parseInt(str.replace(/[^0-9]/g, '')) || 0;
  };

  const unitPriceValue = getMinAmountValue(data.minInvestment);
  const totalInvestmentPrice = (units * unitPriceValue).toLocaleString();

  const handleUnitChange = (delta: number) => {
    setUnits(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="investment-detail">
      <nav className="detail-nav">
        <div className="container">
          <Link to="/investments" className="back-link">
            <ArrowLeft size={18} /> 투자 목록으로
          </Link>
        </div>
      </nav>

      <main className="detail-container container">
        <div className="detail-layout">
          
          {/* Left Column: Info */}
          <div className="detail-main">
            <div className="detail-header">
              <div className="detail-meta">
                <span className="badge badge-primary">{data.category}</span>
                <span className="badge badge-outline">{data.type}</span>
              </div>
              <h1 className="detail-title">{data.title}</h1>
              <div className="detail-location">
                <MapPin size={16} /> {data.location}
              </div>
            </div>

            <div className="detail-gallery">
              <img src={data.images[0]} alt={data.title} className="main-image" />
            </div>

            <div className="detail-tabs">
              <button className={`detail-tab ${activeTab === 'store' ? 'active' : ''}`} onClick={() => setActiveTab('store')}>매장 상세</button>
              <button className={`detail-tab ${activeTab === 'structure' ? 'active' : ''}`} onClick={() => setActiveTab('structure')}>투자 구조</button>
              <button className={`detail-tab ${activeTab === 'analysis' ? 'active' : ''}`} onClick={() => setActiveTab('analysis')}>상권 분석</button>
              <button className={`detail-tab ${activeTab === 'risk' ? 'active' : ''}`} onClick={() => setActiveTab('risk')}>리스크 관리</button>
              <button className={`detail-tab ${activeTab === 'company' ? 'active' : ''}`} onClick={() => setActiveTab('company')}>기업 정보</button>
            </div>

            <div className="detail-content fade-in-section">
              {activeTab === 'store' && (
                <div className="tab-pane">
                  <section className="content-section">
                    <h3>오너스코리아가 선택한 프리미엄 다이닝</h3>
                    <p className="premium-desc">{data.description}</p>
                    
                    <div className="chef-profile">
                      <div className="chef-avatar">
                        <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=150&q=80" alt="Chef" />
                      </div>
                      <div className="chef-info">
                        <h4>{data.businessInfo.founder}</h4>
                        <p className="chef-bio">"완벽한 한 점을 위해 매일 새벽 노량진과 통영에서 최고급 식재료를 공수합니다. 미슐랭 1스타 업장 수석 셰프의 경험을 바탕으로, 타협 없는 맛과 접객을 선보입니다."</p>
                      </div>
                    </div>

                    <div className="business-stats mt-4">
                      <div className="stat-item">
                        <Building2 size={20} className="text-secondary" />
                        <div className="stat-info">
                          <span className="label">전용 면적</span>
                          <span className="value">{data.businessInfo.area}</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <Users size={20} className="text-secondary" />
                        <div className="stat-info">
                          <span className="label">좌석 규모</span>
                          <span className="value">{data.businessInfo.tables}</span>
                        </div>
                      </div>
                      <div className="stat-item">
                        <TrendingUp size={20} className="text-secondary" />
                        <div className="stat-info">
                          <span className="label">최근 월 매출</span>
                          <span className="value">{data.businessInfo.avgRevenue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="key-points mt-4">
                      <h4>매장 핵심 경쟁력</h4>
                      <ul className="points-list">
                        <li><CheckCircle2 size={18} className="text-primary" /> <strong>100% 예약제 운영:</strong> 캐치테이블 매월 오픈 1분 내 마감. 노쇼 비율 0%.</li>
                        <li><CheckCircle2 size={18} className="text-primary" /> <strong>높은 객단가:</strong> 디너 코스 1인 18만 원, 주류 페어링 비율 60% 이상으로 수익성 극대화.</li>
                        <li><CheckCircle2 size={18} className="text-primary" /> <strong>재방문율 40%:</strong> 탄탄한 단골 고객층 확보로 안정적인 매출 기반 완성.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'structure' && (
                <div className="tab-pane">
                  <section className="content-section">
                    <h3>투명하고 안정적인 투자 구조</h3>
                    <p className="section-subtitle">모집된 자금의 명확한 사용처와 예상 수익 시뮬레이션입니다.</p>
                    
                    <div className="fund-allocation">
                      <h4>총 모집액 {data.totalAmount} 사용 계획</h4>
                      <div className="allocation-bar">
                        <div className="segment color-1" style={{ width: '50%' }}>임대보증금 50%</div>
                        <div className="segment color-2" style={{ width: '30%' }}>인테리어 30%</div>
                        <div className="segment color-3" style={{ width: '20%' }}>운영 자금 20%</div>
                      </div>
                    </div>

                    <div className="simulation-card mt-4">
                      <div className="sim-header">
                        <h4><Calculator size={20} /> 예상 배당 시뮬레이션</h4>
                        <span className="sim-badge">연 수익률 {data.returnRate}</span>
                      </div>
                      <div className="sim-body">
                        <div className="sim-row">
                          <span>투자 원금</span>
                          <strong>3,000만 원 (1구좌)</strong>
                        </div>
                        <div className="sim-row">
                          <span>계약 기간</span>
                          <strong>{data.duration}</strong>
                        </div>
                        <div className="sim-row highlight">
                          <span>매월 예상 세후 배당금</span>
                          <strong className="text-danger">약 312,500 원</strong>
                        </div>
                      </div>
                      <p className="sim-note">* 위 배당금은 예상치이며, 실제 매장 매출에 따라 변동될 수 있습니다.</p>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'analysis' && (
                <div className="tab-pane">
                  <section className="content-section">
                    <h3>데이터로 증명된 최상급 상권</h3>
                    <p className="section-subtitle">강남구 역삼동 오피스 상권의 소비력과 유동인구를 분석했습니다.</p>

                    <div className="chart-container">
                      <h4>타겟 고객층 소비력 분석</h4>
                      <div className="bar-chart">
                        <div className="bar-row">
                          <span className="bar-label">30대 전문직</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '45%' }}>45%</div></div>
                        </div>
                        <div className="bar-row">
                          <span className="bar-label">40대 임원급</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '35%' }}>35%</div></div>
                        </div>
                        <div className="bar-row">
                          <span className="bar-label">20대 하이엔드</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '15%' }}>15%</div></div>
                        </div>
                        <div className="bar-row">
                          <span className="bar-label">기타</span>
                          <div className="bar-track"><div className="bar-fill" style={{ width: '5%' }}>5%</div></div>
                        </div>
                      </div>
                    </div>

                    <div className="location-points mt-4">
                      <div className="point-box">
                        <div className="point-icon"><MapPin size={24} /></div>
                        <h4>접근성</h4>
                        <p>지하철역 도보 3분 거리 초역세권 및 다수의 대형 프라임 오피스 밀집 구역.</p>
                      </div>
                      <div className="point-box">
                        <div className="point-icon"><Users size={24} /></div>
                        <h4>배후 수요</h4>
                        <p>반경 500m 내 기업 임원진 및 고소득 직장인 중심의 풍부한 법인 카드 결제 수요.</p>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'risk' && (
                <div className="tab-pane">
                  <section className="content-section">
                    <h3>철저한 3중 안전 장치 (Safety Net)</h3>
                    <p className="section-subtitle">오너스코리아는 투자자의 소중한 원금을 방어하기 위해 업계 최고 수준의 보호 장치를 마련했습니다.</p>

                    <div className="safety-net-list">
                      <div className="safety-card">
                        <div className="safety-step">1단계</div>
                        <div className="safety-content">
                          <h4><ShieldCheck size={20} className="text-secondary" /> 임대보증금 담보권 설정</h4>
                          <p>매장 임대보증금 1억 5,000만 원에 대해 오너스코리아가 1순위 근저당 및 질권을 설정하여 최소 원금의 50%를 절대적으로 방어합니다.</p>
                        </div>
                      </div>

                      <div className="safety-card">
                        <div className="safety-step">2단계</div>
                        <div className="safety-content">
                          <h4><Store size={20} className="text-secondary" /> 권리금 양수도 계약 우선권</h4>
                          <p>최악의 상황 발생 시, 기존 확립된 프리미엄 상권의 바닥 권리금 및 인테리어 권리금을 즉시 회수할 수 있는 사전 계약이 체결되어 있습니다.</p>
                        </div>
                      </div>

                      <div className="safety-card">
                        <div className="safety-step">3단계</div>
                        <div className="safety-content">
                          <h4><CheckCircle2 size={20} className="text-secondary" /> 대표자 연대 보증</h4>
                          <p>운영 법인 대표 및 메인 셰프의 개인 연대 보증을 통해 도덕적 해이를 원천 차단하고 책임 경영을 보장합니다.</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {activeTab === 'company' && (
                <div className="tab-pane">
                  <section className="content-section">
                    <h3>운영 법인 및 대표자 정보</h3>
                    <p className="section-subtitle">본 매장을 책임지고 운영하는 법인과 대표자의 공식 정보입니다.</p>

                    <div className="company-info-card">
                      <div className="company-header">
                        <Building size={24} className="text-primary" />
                        <h4>{data.companyInfo.name}</h4>
                      </div>
                      
                      <div className="company-details-grid">
                        <div className="info-cell">
                          <span className="label">대표자</span>
                          <span className="value">{data.companyInfo.ceo}</span>
                        </div>
                        <div className="info-cell">
                          <span className="label">설립일</span>
                          <span className="value">{data.companyInfo.founded}</span>
                        </div>
                        <div className="info-cell">
                          <span className="label">자본금</span>
                          <span className="value">{data.companyInfo.capital}</span>
                        </div>
                        <div className="info-cell">
                          <span className="label">고객 센터</span>
                          <span className="value">{data.companyInfo.contact}</span>
                        </div>
                        <div className="info-cell full-width">
                          <span className="label">본점 소재지</span>
                          <span className="value">{data.companyInfo.address}</span>
                        </div>
                      </div>
                    </div>

                    <div className="message-box mt-4">
                      <h4>궁금한 점이 있으신가요?</h4>
                      <p>운영 법인의 대표자에게 직접 메시지를 보내고 신속한 답변을 받아보세요.</p>
                      <button className="btn btn-primary w-full mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem' }}>
                        <MessageSquare size={18} /> 대표에게 메시지 보내기
                      </button>
                    </div>
                  </section>
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <aside className="detail-sidebar">
            <div className="sticky-card">
              
              <div className="sidebar-top-info">
                <h3 className="syndicate-name">{data.syndicateName}</h3>
                
                <div className="fund-summary-list mt-3">
                  <div className="fund-summary-item">
                    <span className="label">총 결성금액</span>
                    <span className="value">{data.totalAmount} (30구좌)</span>
                  </div>
                  <div className="fund-summary-item">
                    <span className="label">1구좌</span>
                    <span className="value">{data.minInvestment}</span>
                  </div>
                  <div className="fund-summary-item">
                    <span className="label">결정 예정일</span>
                    <span className="value">{data.closingDate}</span>
                  </div>
                  <div className="fund-summary-item">
                    <span className="label">투자기간</span>
                    <span className="value">{data.duration}</span>
                  </div>
                </div>

                <button className="btn btn-outline w-full mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={16} /> 문의사항(메시지)
                </button>
              </div>

              <div className="sidebar-header mt-4" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                <div className="progress-top">
                  <span className="percent">{data.progress}% 모집 중</span>
                  <span className="remaining">잔여 5구좌</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${data.progress}%` }}></div>
                </div>
              </div>

              <div className="investment-metrics">
                <div className="metric-item">
                  <span className="label">연 예상 수익률</span>
                  <span className="value text-danger">{data.returnRate}</span>
                </div>
                <div className="metric-item">
                  <span className="label">최소 투자액</span>
                  <span className="value">(1구좌) {data.minInvestment}</span>
                </div>
                
                {/* Interactive Unit Selection */}
                <div className="metric-item mt-3 pt-3 border-top">
                  <span className="label">투자금액 선택</span>
                  <div className="unit-selector">
                    <button className="unit-btn" onClick={() => handleUnitChange(-1)}>-</button>
                    <span className="unit-count">{units}구좌</span>
                    <button className="unit-btn" onClick={() => handleUnitChange(1)}>+</button>
                  </div>
                </div>
                <div className="metric-item highlight-amount mt-2">
                  <span className="label">총 투자금액</span>
                  <span className="value text-primary">{totalInvestmentPrice}만 원</span>
                </div>
              </div>

              <div className="sidebar-actions">
                <button className="btn btn-primary w-full btn-lg">계약하기</button>
                <div className="sub-actions">
                  <button className="btn btn-outline"><Download size={18} /> 자료실</button>
                  <button className="btn btn-outline"><Share2 size={18} /> 공유</button>
                </div>
              </div>

              <div className="sidebar-footer">
                <div className="info-tip">
                  <Info size={14} />
                  <span>벤처투자 소득공제 100% 대상 상품</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default InvestmentDetail;
