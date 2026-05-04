import React, { useState } from 'react';
import { 
  ChevronRight, MessageCircle, Scale, Briefcase, 
  ChevronDown, ChevronUp, User, Users, CheckCircle2, X,
  FileText, Mic, Clock, ArrowLeft
} from 'lucide-react';
import './InvestmentSubPages.css';

const EXPERTS = [
  {
    id: 1,
    name: '강현우',
    role: '대표변호사',
    badge: '변호사',
    type: 'lawyer',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    bio: '"서울대학교 법과대학 졸업, 사법연수원 35기. 다수의 대기업 법률 자문 및 M&A 프로젝트를 성공적으로 수행하였습니다."',
    tags: ['#기업법무', '#계약검토', '#M&A'],
    experience: '경력 15년',
    careerDetails: [
      '서울대학교 법과대학 졸업',
      '제45회 사법시험 합격 / 사법연수원 35기',
      '前 법무법인 세종 파트너 변호사',
      '現 대한변호사협회 스타트업 지원단 위원',
      '2022년 대한민국 법률대상 기업금융 부문 수상'
    ]
  },
  {
    id: 2,
    name: '이지연',
    role: '파트너변호사',
    badge: '변호사',
    type: 'lawyer',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: '"의뢰인의 입장에서 가장 유리한 전략을 수립합니다. 복잡한 형사 사건의 실타래를 전문적인 식견으로 풀어드립니다."',
    tags: ['#형사전문', '#성범죄', '#재산범죄'],
    experience: '경력 12년',
    careerDetails: [
      '고려대학교 법학전문대학원 졸업',
      '제3회 변호사시험 합격',
      '前 서울중앙지방검찰청 검사대리',
      '現 법무법인 Owners 파트너 변호사',
      '2021년 형사소송 우수 변호사 선정'
    ]
  },
  {
    id: 3,
    name: '김준호',
    role: '대표세무사',
    badge: '세무사',
    type: 'tax',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: '"국세청 출신 세무사로서 법인세 및 소득세 신고는 물론, 고난도의 세무조사 대응 및 절세 플래닝을 지원합니다."',
    tags: ['#세금/행정', '#기업회계', '#스타트업'],
    experience: '경력 10년',
    careerDetails: [
      '성균관대학교 경제학과 졸업',
      '제51회 세무사시험 합격',
      '前 중부지방국세청 조사국 근무',
      '現 한국세무사회 법제위원회 위원',
      '국세청장 표창 수여 (절세 컨설팅 공로)'
    ]
  },
  // Adding 6 more experts for a total of 9
  {
    id: 4,
    name: '박서준',
    role: '파트너세무사',
    badge: '세무사',
    type: 'tax',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: '"중소기업 및 소상공인을 위한 최적의 세무 솔루션을 제공합니다. 세금 고민, 이제 전문가에게 맡기세요."',
    tags: ['#소득세', '#부가세', '#세무회계'],
    experience: '경력 8년',
    careerDetails: ['연세대학교 경영학과 졸업', '제53회 세무사시험 합격', '現 세무법인 오너스 파트너']
  },
  {
    id: 5,
    name: '최유진',
    role: '전문변리사',
    badge: '변리사',
    type: 'patent',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: '"혁신적인 아이디어를 강력한 자산으로 만들어 드립니다. 국내외 특허 출원 및 분쟁 대응 전문가입니다."',
    tags: ['#특허출원', '#상표권', '#IP자문'],
    experience: '경력 11년',
    careerDetails: ['한양대학교 공과대학 졸업', '제52회 변리사시험 합격', '前 삼성전자 IP팀 근무']
  },
  {
    id: 6,
    name: '정해인',
    role: '대표회계사',
    badge: '회계사',
    type: 'accountant',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: '"정확한 회계 감사와 효율적인 재무 전략으로 기업의 가치를 높입니다. 투명한 경영의 파트너가 되겠습니다."',
    tags: ['#회계감사', '#재무컨설팅', '#IPO'],
    experience: '경력 14년',
    careerDetails: ['중앙대학교 경영학과 졸업', '공인회계사(KICPA) 합격', '前 삼일회계법인 상무']
  },
  {
    id: 7,
    name: '한소희',
    role: '소속변호사',
    badge: '변호사',
    type: 'lawyer',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: '"젊고 감각적인 시선으로 리스크를 관리합니다. IT 및 스타트업 전문 법률 서비스를 지원합니다."',
    tags: ['#IT법률', '#개인정보보호', '#스타트업'],
    experience: '경력 5년',
    careerDetails: ['이화여자대학교 법학전문대학원 졸업', '제8회 변호사시험 합격', '現 IT 스타트업 고문 변호사']
  },
  {
    id: 8,
    name: '이도현',
    role: '파트너회계사',
    badge: '회계사',
    type: 'accountant',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: '"기업의 성장을 지원하는 전략적 재무 전문가입니다. M&A 및 기업 가치 평가 분야에 정통합니다."',
    tags: ['#재무실사', '#M&A', '#가치평가'],
    experience: '경력 9년',
    careerDetails: ['서강대학교 경영학과 졸업', '공인회계사(KICPA) 합격', '前 안진회계법인 시니어']
  },
  {
    id: 9,
    name: '임윤아',
    role: '전문세무사',
    badge: '세무사',
    type: 'tax',
    photo: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80',
    bio: '"상속 및 증여세 절세 전략의 스페셜리스트입니다. 고객의 소중한 자산을 안전하게 지켜드립니다."',
    tags: ['#상속세', '#증여세', '#절세플랜'],
    experience: '경력 13년',
    careerDetails: ['경희대학교 회계학과 졸업', '제50회 세무사시험 합격', '現 한국여성세무사회 이사']
  }
];

const CATEGORIES = [
  { id: 'corp', label: '회사' },
  { id: 'criminal', label: '형사' },
  { id: 'civil', label: '민사' },
  { id: 'family', label: '가족' },
  { id: 'tax', label: '의료/세금/행정' },
  { id: 'it', label: 'IT/지식재산/금융' },
  { id: 'labor', label: '인사/노무' }
];

const LegalTaxPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('corp');
  const [selectedSubItem, setSelectedSubItem] = useState('기업법무');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedExpert, setExpandedExpert] = useState<number | null>(null);
  const [selectedExpertIds, setSelectedExpertIds] = useState<number[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>(['category', 'subitem', 'expert']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  
  // Form states for back side
  const [userInfo, setUserInfo] = useState({
    name: '김오너',
    phone: '010-1234-5678',
    email: 'owner_kim@naver.com',
    availableTime: ''
  });
  
  const CONSULT_TEMPLATE = `[상담 참조 항목]
• 사건의 핵심 경위: 
• 현재 우려되는 리스크: 
• 상대방의 주장 및 대응 현황: 
• 상담을 통해 얻고자 하는 결과: `;

  const [consultContent, setConsultContent] = useState(CONSULT_TEMPLATE);

  // Filter experts based on active type
  const filteredExperts = activeFilter === 'all' ? EXPERTS : EXPERTS.filter(e => e.type === activeFilter);
  const totalPages = Math.ceil(filteredExperts.length / 6);
  const displayedExperts = filteredExperts.slice(currentPage * 6, (currentPage + 1) * 6);

  // Auto-scroll logic: Change page every 15 seconds
  React.useEffect(() => {
    // Stop auto-scroll if an expert is expanded
    if (expandedExpert !== null) return;

    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 15000);

    return () => clearInterval(interval);
  }, [expandedExpert, totalPages]);

  // Reset page when filter changes
  React.useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  const toggleExpert = (id: number) => {
    setExpandedExpert(expandedExpert === id ? null : id);
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId) 
        : [...prev, sectionId]
    );
  };

  const selectExpertForConsult = (id: number) => {
    setSelectedExpertIds(prev => {
      if (prev.includes(id)) return prev.filter(eid => eid !== id);
      if (prev.length >= 2) return [prev[1], id]; // Keep last 2
      return [...prev, id];
    });
    
    if (!openSections.includes('expert')) {
      setOpenSections(prev => [...prev, 'expert']);
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsFlipped(false);
      // Optional: Reset selections
      setSelectedExpertIds([]);
      setConsultContent(CONSULT_TEMPLATE);
    }, 2000);
  };

  const handlePageChange = (idx: number) => {
    setSlideDirection(idx > currentPage ? 'right' : 'left');
    setCurrentPage(idx);
  };

  const selectedExperts = EXPERTS.filter(e => selectedExpertIds.includes(e.id));

  const FILTERS = [
    { id: 'all', label: '전체' },
    { id: 'lawyer', label: '변호사' },
    { id: 'patent', label: '변리사' },
    { id: 'accountant', label: '회계사' },
    { id: 'tax', label: '세무사' }
  ];

  return (
    <div className="legal-tax-dashboard-v42 fade-in">
      <div className="legal-tax-layout-v42">
        
        {/* Left: Consultation Form */}
        <div className="consultation-form-column wide-column">
          <div className={`flip-card-v42 ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner-v42">
              
              {/* FRONT SIDE */}
              <div className="flip-card-front-v42 consult-form-card-v42">
                <h2>실시간 상담 신청</h2>
                <p className="subtitle">필요한 상담 카테고리를 선택하고 전문가를 지정해주세요.</p>
    
                {/* 1. 상담 카테고리 */}
                <div className="form-section-v42">
                  <div className="collapsible-header-v42 no-cursor">
                    <div className="header-left">
                      <label>상담 카테고리 <span className="required">필수</span></label>
                    </div>
                  </div>
                  <div className="collapsible-content-v42 static-content">
                      <div className="category-grid-v42">
                        {CATEGORIES.map(cat => (
                          <div 
                            key={cat.id} 
                            className={`cat-checkbox-v42 ${selectedCat === cat.id ? 'active' : ''}`}
                            onClick={() => setSelectedCat(cat.id)}
                          >
                            <div className="checkbox-box">
                              {selectedCat === cat.id && <CheckCircle2 size={12} />}
                            </div>
                            <span>{cat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
    
                {/* 2. 세부 항목 선택 */}
                <div className="form-section-v42">
                  <div className="collapsible-header-v42 no-cursor">
                    <div className="header-left">
                      <label>세부 항목 선택</label>
                    </div>
                  </div>
                  <div className="collapsible-content-v42 static-content">
                        <div 
                          className="sub-item-card-v42"
                          onClick={() => setSelectedSubItem('기업법무')}
                        >
                          <div className="sub-item-header">
                            <h4>기업법무</h4>
                            <div className={`radio-circle ${selectedSubItem === '기업법무' ? 'active' : ''}`}></div>
                          </div>
                          <p>경업금지, 합병, 영업양도, 스타트업, 계약서검토 등</p>
                        </div>
                        <div 
                          className="sub-item-card-v42"
                          onClick={() => setSelectedSubItem('노동/인사')}
                        >
                          <div className="sub-item-header">
                            <h4>노동/인사</h4>
                            <div className={`radio-circle ${selectedSubItem === '노동/인사' ? 'active' : ''}`}></div>
                          </div>
                          <p>노무, 직장 내 괴롭힘, 임금체불, 부당해고 등</p>
                        </div>
                    </div>
                </div>
    
                {/* 3. 전문가 선택 (New) */}
                <div className="form-section-v42 no-accordion">
                  <div className="collapsible-header-v42 static-header">
                    <div className="header-left">
                      <label>전문가 선택 <span className="sub-label">(최대 2명)</span></label>
                    </div>
                  </div>
                  <div className="collapsible-content-v42 static-content">
                    <div className="expert-assignment-row-v42">
                      <div className="simplified-expert-selector-v42">
                        {selectedExperts.length > 0 ? (
                          <div className="selected-experts-tags-v42">
                            {selectedExperts.map(expert => (
                              <div key={expert.id} className="mini-expert-tag-v42">
                                <span className="tag-name">{expert.name} {expert.role}</span>
                                <button className="btn-tag-remove" onClick={() => selectExpertForConsult(expert.id)}>x</button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="no-expert-msg">전문가를 선택해주세요 (오른쪽 리스트)</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
    
                <button className="btn-consult-submit-v42" onClick={() => setIsFlipped(true)}>
                  법률.회계 상담 신청하기 <ChevronRight size={18} />
                </button>
                <p className="form-footer-notice">다음 단계에서 상세 상담 내용을 기재하실 수 있습니다.</p>
              </div>
    
              {/* BACK SIDE */}
              <div className="flip-card-back-v42 consult-form-card-v42 detailed-form-v42">
                <div className="back-header-v42">
                  <h2>상세 상담 신청</h2>
                  <button className="btn-back-v42" onClick={() => setIsFlipped(false)}>
                    이전 <ArrowLeft size={18} />
                  </button>
                </div>
    
                <div className="selection-summary-v42">
                  <div className="summary-item">
                    <span className="label">상담카테고리</span>
                    <span className="value">{CATEGORIES.find(c => c.id === selectedCat)?.label}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">세부항목</span>
                    <span className="value">{selectedSubItem}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">지정 전문가</span>
                    <span className="value">
                      {selectedExperts.length > 0 
                        ? selectedExperts.map(e => `${e.name} ${e.role}`).join(', ')
                        : '미지정'}
                    </span>
                  </div>
                </div>
    
                <div className="form-grid-v42">
                  <div className="input-group-v42">
                    <label>성함</label>
                    <input type="text" value={userInfo.name} readOnly />
                  </div>
                  <div className="input-group-v42">
                    <label>연락처</label>
                    <input type="text" value={userInfo.phone} readOnly />
                  </div>
                </div>
    
                <div className="input-group-v42">
                  <label>이메일</label>
                  <input type="email" value={userInfo.email} readOnly />
                </div>
    
                <div className="input-group-v42">
                  <label>상담 가능 시간</label>
                  <div className="time-selector-v42">
                    <Clock size={16} />
                    <input type="text" placeholder="예: 평일 오후 2시 이후" />
                  </div>
                </div>
    
                <div className="input-group-v42">
                  <label>상담 내용 기재 <span className="required">필수</span></label>
                  <div className="content-container-v42">
                    <textarea 
                      placeholder="상담 내용을 상세히 기재해주세요. 내용이 길어질수록 정확한 검토가 가능합니다."
                      value={consultContent}
                      onChange={(e) => setConsultContent(e.target.value)}
                    ></textarea>
                  </div>
                </div>
    
                <div className="form-row-combined-v42">
                  <div className="input-group-v42 flex-1">
                    <label>파일 첨부 <span className="sub-label">(최대 10MB)</span></label>
                    <div className="file-upload-row-v42">
                      <div className="file-btn-v42">
                        <FileText size={16} /> <span>정리문서</span>
                      </div>
                      <div className="file-btn-v42">
                        <Mic size={16} /> <span>음성파일</span>
                      </div>
                    </div>
                  </div>
                </div>
    
                <button 
                  className={`btn-consult-submit-v42 final-submit ${isSubmitting ? 'submitting' : ''}`}
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>접속완료 <CheckCircle2 size={18} /></>
                  ) : (
                    <>최종 상담 신청 완료 <CheckCircle2 size={18} /></>
                  )}
                </button>
              </div>
    
            </div>
          </div>
        </div>

        {/* Right: Expert Group */}
        <div className="expert-group-column">
          <div className="sticky-header-v42">
            <div className="column-header-v42">
              <span className="brand-label">Owners Partner</span>
              <h1><span className="highlight-text">법률·세무</span> 전문가 그룹</h1>
            </div>

            <div className="expert-list-nav-v42">
              <div className="expert-filters-v42">
                {FILTERS.map((f, i) => (
                  <React.Fragment key={f.id}>
                    <span 
                      className={`filter-item-v42 ${activeFilter === f.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(f.id)}
                    >
                      {f.label}
                    </span>
                    {i < FILTERS.length - 1 && <span className="filter-divider-v42">|</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="indicator-dots-v42">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <span 
                    key={idx}
                    className={`dot ${currentPage === idx ? 'active' : ''}`}
                    onClick={() => handlePageChange(idx)}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div className="expert-list-scroll-v42 overflow-hidden">
            <div 
              key={currentPage}
              className={`expert-list-compact-v42 slide-container slide-${slideDirection}`}
            >
            {displayedExperts.map(expert => (
              <div 
                key={expert.id} 
                className={`expert-card-compact-v42 ${expandedExpert === expert.id ? 'expanded' : ''}`}
                onClick={() => toggleExpert(expert.id)}
              >
                <div className="expert-main-compact-v42">
                  <div className="expert-photo-compact-v42">
                    <img src={expert.photo} alt={expert.name} />
                  </div>
                  <div className="expert-info-compact-v42">
                    <div className="compact-header-row">
                      <span className="name-v42">{expert.name}</span>
                      <span className="role-v42">/ {expert.role}</span>
                    </div>
                    <div className="compact-details-v42">
                      <span className="expertise-tags-only">
                        전문분야: {expert.tags.join(' ')}
                      </span>
                    </div>
                  </div>
                  <div className="compact-right-info-v42">
                    <div className="expert-career-compact-v42">
                      <Scale size={14} /> <span>{expert.experience}</span>
                    </div>
                    <div className="compact-action-v42">
                      {expandedExpert === expert.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </div>
                
                {/* Expandable Details */}
                {expandedExpert === expert.id && (
                  <div className="expert-details-expanded-v42 fade-in">
                    <div className="expanded-bio-v42">
                      <p>{expert.bio}</p>
                    </div>
                    
                    <div className="expanded-career-details-v42">
                      <h5 className="details-title-v42">약력 및 수상</h5>
                      <ul>
                        {expert.careerDetails.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="expanded-actions-v42">
                      <button 
                        className="btn-consult-now-v42"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectExpertForConsult(expert.id);
                        }}
                      >
                        상담 예약하기
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalTaxPage;
