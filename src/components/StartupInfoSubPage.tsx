import React, { useState } from 'react';
import { 
  Building, Camera, FileText, Phone, Mail, MapPin, Calendar, 
  Wifi, Package, Baby, Bike, Dog, CheckCircle2, Save, 
  BarChart3, Settings, Plus, X, ArrowRight, Info, AlertCircle,
  CreditCard, ClipboardCheck, Bell, ChevronRight, ChevronLeft, Edit2
} from 'lucide-react';
import './StartupInfoSubPage.css';

const StartupInfoSubPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'facility' | 'lease' | 'stats'>('basic');
  const [statsMethod, setStatsMethod] = useState<'manual' | 'api'>('manual');
  
  // Form states (simplified for UI demo)
  const [menus, setMenus] = useState([
    { id: 1, name: '특선 모듬회', price: '65,000', intro: '산지 직송 제철 활어', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=200&q=80' }
  ]);

  const amenities = [
    { id: 'wifi', icon: <Wifi size={18} />, label: '무선인터넷' },
    { id: 'takeout', icon: <Package size={18} />, label: '포장' },
    { id: 'nursery', icon: <Baby size={18} />, label: '유아시설' },
    { id: 'delivery', icon: <Bike size={18} />, label: '배달' },
    { id: 'pet', icon: <Dog size={18} />, label: '반려동물동반' },
    { id: 'chair', icon: <Baby size={18} />, label: '유아의자' },
  ];

  return (
    <div className="startup-info-mgmt-v43 fade-in">
      <div className="mgmt-header-v43">
        <div className="title-area">
          <h1>창업정보관리</h1>
          <p>창업자의 비즈니스 정보를 관리하고 투자자에게 공유되는 데이터를 최신으로 유지하세요.</p>
        </div>
        <div className="actions">
          <button className="btn-save-v43">
            <Save size={18} /> 전체 저장하기
          </button>
        </div>
      </div>

      <div className="mgmt-layout-v43">
        {/* Navigation Sidebar */}
        <aside className="mgmt-nav-v43">
          <button className={activeTab === 'basic' ? 'active' : ''} onClick={() => setActiveTab('basic')}>
            <Building size={20} /> 기본정보관리
          </button>
          <button className={activeTab === 'facility' ? 'active' : ''} onClick={() => setActiveTab('facility')}>
            <Wifi size={20} /> 시설 및 메뉴 설정
          </button>
          <button className={activeTab === 'lease' ? 'active' : ''} onClick={() => setActiveTab('lease')}>
            <ClipboardCheck size={20} /> 계약 및 임대 정보
          </button>
          <button className={activeTab === 'stats' ? 'active' : ''} onClick={() => setActiveTab('stats')}>
            <BarChart3 size={20} /> 데이터 연동 설정
          </button>
          
          <div className="profile-completion-v43">
            <div className="c-label">정보 완성도 <span>85%</span></div>
            <div className="c-bar"><div className="c-fill" style={{width: '85%'}}></div></div>
            <p>모든 정보를 입력하면 투자 매칭 확률이 높아집니다.</p>
          </div>
        </aside>

        {/* Main Form Area */}
        <main className="mgmt-content-v43">
          {activeTab === 'basic' && (
            <div className="section-card-v43 fade-in">
              <div className="card-header">
                <h3><Building size={20} /> 기본 비즈니스 정보</h3>
              </div>
              
              <div className="biz-profile-hero-v43">
                {/* Photo Area with Controls */}
                <div className="photo-display-v43">
                  <div className="main-photo-v43">
                    <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80" alt="Representative" />
                    <div className="photo-controls-v43">
                      <button className="ctrl-btn prev"><ChevronLeft size={18} /></button>
                      <div className="edit-btn-wrapper">
                        <button className="ctrl-btn edit">
                          <Edit2 size={16} />
                          <div className="edit-tooltip-v43">사진 추가 및 제거</div>
                        </button>
                      </div>
                      <button className="ctrl-btn next"><ChevronRight size={18} /></button>
                    </div>
                  </div>
                </div>

                {/* Text Info Summary */}
                <div className="biz-summary-v43">
                  <div className="summary-top">
                    <button className="btn-biz-cert-status registered">사업자등록증</button>
                  </div>
                  <ul className="summary-list-v43">
                    <li><span className="label">상호명</span> <span className="val">시흥 어부 횟집</span></li>
                    <li><span className="label">법인명</span> <span className="val">(주)오너스 파트너스</span></li>
                    <li><span className="label">업종/업태</span> <span className="val">음식점 / 일식, 활어회</span></li>
                    <li><span className="label">대표자</span> <span className="val">김오너</span></li>
                    <li><span className="label">대표전화</span> <span className="val">010-1234-5678</span></li>
                    <li><span className="label">회사전화</span> <span className="val">031-123-4567</span></li>
                  </ul>
                </div>
              </div>

              <div className="mgmt-divider-v43"></div>

              <div className="doc-upload-section-v43">
                <h4>자료 업로드 및 관리</h4>
                <div className="doc-upload-grid-v43">
                  {[
                    { id: 'cert', label: '사업자등록증', status: 'uploaded' },
                    { id: 'lease', label: '임대차계약서', status: 'uploaded' },
                    { id: 'articles', label: '정관', status: 'empty' },
                    { id: 'venture', label: '벤처인증', status: 'empty' },
                    { id: 'account', label: '사업자 계좌', status: 'uploaded' },
                    { id: 'id', label: '대표자 신분증', status: 'empty' }
                  ].map(doc => (
                    <div key={doc.id} className={`doc-upload-item-v43 ${doc.status}`}>
                      <div className="doc-icon">
                        <FileText size={20} />
                      </div>
                      <span className="doc-label">{doc.label}</span>
                      <button className="btn-doc-action">
                        {doc.status === 'uploaded' ? '수정' : '등록'}
                      </button>
                      {doc.status === 'uploaded' && <CheckCircle2 size={16} className="check-mark" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facility' && (
            <div className="section-card-v43 fade-in">
              <div className="card-header">
                <h3><Wifi size={20} /> 시설 및 메뉴 설정</h3>
                <p>매장의 강점을 투자자와 고객에게 어필하세요.</p>
              </div>

              <div className="amenity-grid-v43">
                {amenities.map(item => (
                  <label key={item.id} className="amenity-item">
                    <input type="checkbox" />
                    <div className="amenity-box">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="menu-mgmt-section-v43">
                <div className="s-header">
                  <h4>메뉴 등록 관리</h4>
                  <button className="btn-add-menu"><Plus size={16} /> 메뉴 추가</button>
                </div>
                <div className="menu-list-v43">
                  {menus.map(menu => (
                    <div key={menu.id} className="menu-item-v43">
                      <img src={menu.img} alt="" />
                      <div className="m-info">
                        <span className="m-name">{menu.name}</span>
                        <span className="m-price">{menu.price}원</span>
                        <p className="m-intro">{menu.intro}</p>
                      </div>
                      <div className="m-actions">
                        <button className="btn-icon"><Settings size={14} /></button>
                        <button className="btn-icon"><X size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="notification-settings-v43">
                <h4>상담 및 알림 설정</h4>
                <div className="notif-row">
                  <div className="text">
                    <span className="n-label">상담 내역 수신</span>
                    <p>투자자 및 고객의 상담 요청 시 실시간 알림을 받습니다.</p>
                  </div>
                  <label className="toggle-v43"><input type="checkbox" defaultChecked /><span className="slider"></span></label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'lease' && (
            <div className="section-card-v43 fade-in">
              <div className="card-header">
                <h3><ClipboardCheck size={20} /> 계약 및 임대 정보</h3>
                <p>임대차 계약 정보를 입력하여 비즈니스의 안정성을 확인합니다.</p>
              </div>

              <div className="form-grid-v43">
                <div className="input-group">
                  <label>임차계약 시작일</label>
                  <div className="date-input-v43"><Calendar size={16} /><input type="date" /></div>
                </div>
                <div className="input-group">
                  <label>임차계약 종료일</label>
                  <div className="date-input-v43"><Calendar size={16} /><input type="date" /></div>
                </div>
                <div className="input-group">
                  <label>임차인 성명</label>
                  <input type="text" placeholder="홍길동" />
                </div>
                <div className="input-group">
                  <label>임차인 연락처</label>
                  <input type="tel" placeholder="010-1234-5678" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="section-card-v43 fade-in">
              <div className="card-header">
                <h3><BarChart3 size={20} /> 데이터 연동 설정</h3>
                <p>매출 및 방문자 통계 데이터의 입력 방식을 선택하세요.</p>
              </div>

              <div className="stats-method-selector-v43">
                <div 
                  className={`method-card ${statsMethod === 'manual' ? 'active' : ''}`}
                  onClick={() => setStatsMethod('manual')}
                >
                  <div className="m-icon"><FileText size={32} /></div>
                  <div className="m-text">
                    <span className="m-title">수기 직접 입력</span>
                    <p>정산 내역을 바탕으로 매일 또는 매월 직접 데이터를 입력합니다.</p>
                  </div>
                  <div className="m-check"><CheckCircle2 size={24} /></div>
                </div>

                <div 
                  className={`method-card ${statsMethod === 'api' ? 'active' : ''}`}
                  onClick={() => setStatsMethod('api')}
                >
                  <div className="m-icon"><Settings size={32} /></div>
                  <div className="m-text">
                    <span className="m-title">API 자동 연동 (권장)</span>
                    <p>포스(POS) 및 카드사 연동을 통해 매출 정보를 실시간으로 수집합니다.</p>
                  </div>
                  <div className="m-check"><CheckCircle2 size={24} /></div>
                </div>
              </div>

              {statsMethod === 'api' && (
                <div className="api-config-area-v43 fade-in">
                  <div className="alert-box-v43">
                    <Info size={18} />
                    <span>API 연동 시 투자자들에게 실시간 성과가 공개되어 신뢰도가 상승합니다.</span>
                  </div>
                  <button className="btn-api-connect">포스(POS) 연동하기 <ArrowRight size={16} /></button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default StartupInfoSubPage;
