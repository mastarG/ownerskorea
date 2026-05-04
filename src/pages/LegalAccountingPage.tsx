import React, { useState, useEffect } from 'react';
import {
  Scale,
  ShieldCheck,
  Briefcase,
  ChevronRight,
  Check,
  Clock
} from 'lucide-react';
import './LegalAccountingPage.css';

// Import generated images
import expert1 from '../assets/expert1.png';
import expert2 from '../assets/expert2.png';
import expert3 from '../assets/expert3.png';
import expert4 from '../assets/expert4.png';
import expert5 from '../assets/expert5.png';
import expert6 from '../assets/expert6.png';
import expert7 from '../assets/expert7.png';
import expert8 from '../assets/expert8.png';
import expert9 from '../assets/expert9.png';
import taxLogo from '../assets/tax_logo.png';
import patentLogo from '../assets/patent_logo.png';

interface SubCategory {
  name: string;
  details?: string;
}

interface Category {
  id: string;
  name: string;
  subcategories?: SubCategory[];
}

const CATEGORIES: Category[] = [
  {
    id: 'company',
    name: '회사',
    subcategories: [
      { name: '기업법무', details: '경업금지, 합병, 영업양도, 스타트업, 계약서검토, 부정경쟁방지법 등' },
      { name: '노동/인사', details: '노무, 직장 내 괴롭힘, 임금체불, 부당해고, 실업급여, 산업재해보상 등' }
    ]
  },
  {
    id: 'criminal',
    name: '형사',
    subcategories: [
      { name: '성범죄' },
      { name: '재산범죄' },
      { name: '교통사고/범죄' },
      { name: '형사절차' },
      { name: '폭행/협박' },
      { name: '명예훼손/모욕' },
      { name: '기타 형사범죄', details: '마약/도박, 소년범죄/학교폭력, 형사일반/기타범죄 (위증, 무고, 뇌물 등)' }
    ]
  },
  {
    id: 'civil',
    name: '민사',
    subcategories: [
      { name: '부동산/임대차', details: '건축/부동산 일반, 재개발/재건축, 매매/소유권 등, 임대차' },
      { name: '금전/계약 문제', details: '손해배상, 대여금/채권추심, 계약일반/매매' },
      { name: '민사절차', details: '소송/집행절차, 가압류/가처분, 회생/파산' },
      { name: '기타 민사문제', details: '공증/내용증명/조합/국제문제 등' }
    ]
  },
  {
    id: 'family',
    name: '가족'
  },
  {
    id: 'admin',
    name: '의료/세금/행정',
    subcategories: [
      { name: '세금/행정/헌법', details: '세금, 과태료, 환경, 인허가, 헌법, 이민/비자, 선거, 언론/방송 등' },
      { name: '의료/식품의약', details: '의료사고, 의료소송, 약사법, 식품위생법 등' },
      { name: '병역/군형법', details: '국방/병역, 군형법, 유공자/보훈, 군인징계 등' }
    ]
  },
  {
    id: 'it_ip',
    name: 'IT/지식재산/금융',
    subcategories: [
      { name: '소비자/공정거래', details: '소비자피해, 집단소송, 전자상거래, 불공정거래 등' },
      { name: 'IT/개인정보', details: '개인정보유출/침해, 감청, 통신비밀보호법, 인공지능 등' },
      { name: '지식재산권/엔터', details: '상표권, 저작권, 특허, 방송, 음악, 영화 등' },
      { name: '금융/보험', details: '가상화폐, 투자, 마진거래, 보험 등' }
    ]
  },
  {
    id: 'labor_main',
    name: '인사/노무'
  }
];

const EXPERTS = [
  {
    id: 1,
    name: "강현우",
    role: "대표변호사",
    firm: "법무법인 리더스",
    specialty: "기업 M&A / 공정거래",
    experience: "경력 15년",
    image: expert1,
    licenses: ['lawyer'],
    type: 'lawyer',
    specialties: ["기업법무", "계약검토", "M&A"],
    quote: "서울대학교 법과대학 졸업, 사법연수원 35기. 다수의 대기업 법률 자문 및 M&A 프로젝트를 성공적으로 수행하였습니다.",
    bio: [
      "서울대학교 법학대학 졸업",
      "제45회 사법시험 합격 / 사법연수원 35기",
      "전) 법무법인 세종 파트너 변호사",
      "현) 오너스코리아 고문 변호사",
      "2023년 대한민국 법률대상 기업자문 부문 수상"
    ]
  },
  {
    id: 2,
    name: "이지연",
    role: "파트너변호사",
    firm: "법무법인 오리온",
    specialty: "형사 전문 / 성범죄·재산범죄",
    experience: "경력 12년",
    image: expert2,
    licenses: ['lawyer'],
    type: 'lawyer',
    specialties: ["형사전문", "성범죄", "재산범죄"],
    quote: "의뢰인의 입장에서 가장 유리한 전략을 수립합니다. 복잡한 형사 사건의 실타래를 전문적인 식견으로 풀어드립니다.",
    bio: [
      "고려대학교 법학전문대학원 졸업",
      "제5회 변호사시험 합격",
      "대한변호사협회 등록 형사전문변호사",
      "전) 서울중앙지방법원 국선변호인",
      "MBC <법률상담소> 패널 출연"
    ]
  },
  {
    id: 3,
    name: "김준호",
    role: "대표세무사",
    firm: "세무회계 비전",
    specialty: "스타트업 세무 / 상속·증여",
    experience: "경력 10년",
    image: expert3,
    licenses: ['patent', 'tax'],
    type: 'tax',
    specialties: ["세금/행정", "기업회계", "스타트업"],
    quote: "국세청 출신 세무사로서 법인세 및 소득세 신고는 물론, 고난도의 세무조사 대응 및 절세 플래닝을 지원합니다.",
    bio: [
      "연세대학교 경영대학 졸업",
      "제48회 세무사 시험 합격",
      "전) 국세청 조사국 사무관",
      "현) 한국세무사회 법제위원",
      "최우수 세무대리인 표창 (서울지방국세청)"
    ]
  },
  {
    id: 4,
    name: "박소윤",
    role: "파트너변호사",
    firm: "법무법인 한강",
    specialty: "가사 / 이혼전문",
    experience: "경력 8년",
    image: expert4,
    licenses: ['lawyer'],
    type: 'lawyer',
    specialties: ["가사", "이혼", "상속"],
    quote: "따뜻한 공감과 냉철한 법리로 의뢰인의 권리를 지킵니다. 가슴 아픈 분쟁의 끝에 새로운 시작을 함께합니다.",
    bio: [
      "이화여자대학교 법학전문대학원 졸업",
      "제7회 변호사시험 합격",
      "대한변호사협회 등록 가사전문변호사",
      "서울가정법원 조정위원",
      "여성가족부 법률지원단 자문위원"
    ]
  },
  {
    id: 5,
    name: "정민우",
    role: "대표회계사",
    firm: "안진회계법인",
    specialty: "법인감사 / 세무자문",
    experience: "경력 14년",
    image: expert5,
    licenses: ['accountant'],
    type: 'tax',
    specialties: ["법인회계", "세무조사", "IPO"],
    quote: "기업의 투명한 재무 가치를 실현하고 최적화된 세무 전략을 제시합니다. 성장의 파트너가 되어드리겠습니다.",
    bio: [
      "성균관대학교 경영학과 졸업",
      "한국공인회계사(KICPA) 합격",
      "전) 삼일회계법인 감사본부",
      "현) 중소벤처기업진흥공단 외부감사위원",
      "다수의 상장사 IPO 컨설팅 수행"
    ]
  },
  {
    id: 6,
    name: "최은하",
    role: "전문변리사",
    firm: "특허법인 지성",
    specialty: "특허출원 / 지식재산권",
    experience: "경력 9년",
    image: expert6,
    licenses: ['patent'],
    type: 'patent',
    specialties: ["특허", "상표", "디자인"],
    quote: "창의적인 아이디어를 강력한 지식재산권으로 변모시켜 드립니다. 기술 보호의 최전선에서 지원합니다.",
    bio: [
      "한양대학교 공과대학 졸업",
      "제52회 변리사 시험 합격",
      "대한변리사회 정회원",
      "지식재산권 분쟁 대응 전략 수립 전문가",
      "스타트업 기술 가치 평가 자문"
    ]
  },
  {
    id: 7,
    name: "한지훈",
    role: "파트너변호사",
    firm: "법무법인 대륙",
    specialty: "부동산 / 건설소송",
    experience: "경력 11년",
    image: expert7,
    licenses: ['lawyer'],
    type: 'lawyer',
    specialties: ["부동산", "건설", "재개발"],
    quote: "복잡한 부동산 분쟁을 명쾌한 법리 해석으로 해결합니다. 현장 중심의 대응으로 의뢰인의 재산을 지킵니다.",
    bio: [
      "중앙대학교 법과대학 졸업",
      "사법연수원 39기",
      "전) 서울고등검찰청 법무관",
      "건설교통부 고문 변호사",
      "대형 재개발 조합 법률 자문 수행"
    ]
  },
  {
    id: 8,
    name: "송지아",
    role: "대표노무사",
    firm: "노무법인 참터",
    specialty: "인사노무 / 산재전문",
    experience: "경력 7년",
    image: expert8,
    licenses: ['labor'],
    type: 'labor',
    specialties: ["인사노무", "노동사건", "산재"],
    quote: "노사 양측의 상생을 위한 합리적인 솔루션을 제공합니다. 공정한 일터 문화를 만드는 데 앞장섭니다.",
    bio: [
      "경희대학교 사회과학대학 졸업",
      "제25회 공인노무사 합격",
      "서울지방노동위원회 국선노무사",
      "직장 내 괴롭힘 조사 전문 위원",
      "기업 맞춤형 인사 제도 설계"
    ]
  },
  {
    id: 9,
    name: "윤도현",
    role: "대표변호사",
    firm: "법무법인 태양",
    specialty: "IT금융 / 가상자산",
    experience: "경력 13년",
    image: expert9,
    licenses: ['lawyer'],
    type: 'lawyer',
    specialties: ["IT법무", "가상자산", "핀테크"],
    quote: "급변하는 디지털 시장의 법률 리스크를 완벽하게 관리해 드립니다. 미래 산업을 위한 법률 가이드를 제안합니다.",
    bio: [
      "서울대학교 컴퓨터공학/법학 복수전공",
      "사법연수원 37기",
      "금융위원회 가상자산 법률자문단",
      "KISA 개인정보보호 전문위원",
      "핀테크 스타트업 규제 샌드박스 자문"
    ]
  }
];

const LegalAccountingPage = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>(CATEGORIES[0].id);
  const [selectedSub, setSelectedSub] = useState<string>('');
  const [consultText, setConsultText] = useState<string>('');
  const [expandedExpert, setExpandedExpert] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(EXPERTS.length / ITEMS_PER_PAGE);

  const activeCategory = CATEGORIES.find(c => c.id === selectedCatId);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedExpert(null);
    // Remove auto-scroll to top when paging to keep slider focus
  };

  // Auto-play timer (15 seconds) - Pauses if any bio is expanded
  useEffect(() => {
    if (expandedExpert !== null) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 15000);
    return () => clearInterval(timer);
  }, [totalPages, expandedExpert]);

  const handleConsultSubmit = () => {
    setIsLoginModalOpen(true);
  };

  const getBackgroundIcon = (type: string) => {
    switch (type) {
      case 'lawyer': return <Scale size={120} />;
      case 'tax': return <img src={taxLogo} alt="Tax Logo" style={{ width: '150px', opacity: 0.15 }} />;
      case 'patent': return <img src={patentLogo} alt="Patent Logo" style={{ width: '150px', opacity: 0.15 }} />;
      case 'labor': return <Briefcase size={120} />;
      default: return <Scale size={120} />;
    }
  };

  const getLicenseLabel = (lib: string) => {
    switch (lib) {
      case 'lawyer': return '변호사';
      case 'patent': return '변리사';
      case 'accountant': return '회계사';
      case 'tax': return '세무사';
      case 'labor': return '노무사';
      default: return '';
    }
  };

  return (
    <div className="la-page-wrapper">
      <div className="la-split-container">

        {/* Left Side: Expert Profiles */}
        <div className="la-left-experts">
          <h2 className="la-side-title animate-in">
            Owners Partner<br />
            <span className="la-title-highlight">법률·세무</span> 전문가 그룹
          </h2>

          <div className="la-expert-nav-sub">
            <div className="la-nav-pill-transparent">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className={`la-pill-dot ${currentPage === i ? 'la-pill-dot-gold' : 'la-pill-dot-white'}`}
                  onClick={() => handlePageChange(i)}
                ></div>
              ))}
            </div>
          </div>

          <div className="la-experts-slider-container">
            <div
              className="la-experts-slider-track"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {[...Array(totalPages)].map((_, pageIdx) => (
                <div key={pageIdx} className="la-experts-page">
                  {EXPERTS.slice(pageIdx * ITEMS_PER_PAGE, (pageIdx + 1) * ITEMS_PER_PAGE).map((expert) => (
                    <div key={expert.id} className="la-expert-card-wide">
                      <div className="la-expert-bg-icon">
                        {getBackgroundIcon(expert.type)}
                      </div>

                      <div className="la-expert-main-content">
                        <div className="la-expert-photo-frame">
                          <img src={expert.image} alt={expert.name} />
                        </div>

                        <div className="la-expert-info-panel">
                          <div className="la-info-header">
                            <div className="la-license-row">
                              {expert.licenses.map(lib => (
                                <span key={lib} className={`la-license-badge ${lib}`}>
                                  {getLicenseLabel(lib)}
                                </span>
                              ))}
                            </div>
                            <h3 className="la-expert-name-row">
                              {expert.name} <span className="la-expert-role-light">{expert.role}</span>
                            </h3>
                            <div className="la-quote-box">
                              <p>"{expert.quote}"</p>
                            </div>
                            <div className="la-spec-exp-row">
                              <div className="la-spec-tags-inline">
                                <span className="la-spec-label">전문분야:</span>
                                {expert.specialties.map((s, i) => (
                                  <span key={i} className="la-spec-tag">#{s}</span>
                                ))}
                              </div>
                              <div
                                className="la-exp-toggle-inline"
                                onClick={() => setExpandedExpert(expandedExpert === expert.id ? null : expert.id)}
                              >
                                <Clock size={14} style={{ marginRight: '4px' }} /> <span>{expert.experience}</span>
                                <ChevronRight size={16} className={`la-chevron-v2 ${expandedExpert === expert.id ? 'rotated' : ''}`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Bio Section */}
                      <div className={`la-expert-bio-expanded ${expandedExpert === expert.id ? 'open' : ''}`}>
                        <div className="la-bio-divider"></div>
                        <h4>약력 및 수상</h4>
                        <ul>
                          {expert.bio.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Consultation Form */}
        <div className="la-right-form">
          <div className="la-form-card">
            <div className="la-form-header">
              <h3>실시간 상담 신청</h3>
              <p>필요한 상담 카테고리를 선택하고 내용을 남겨주세요.</p>
            </div>

            <div className="la-form-body">
              {/* Category Grid (Checkbox style) */}
              <div className="la-form-group">
                <label className="la-label">상담 카테고리 <span>필수</span></label>
                <div className="la-category-checkbox-list">
                  {CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className={`la-cat-checkbox-item ${selectedCatId === cat.id ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCatId(cat.id);
                        setSelectedSub('');
                      }}
                    >
                      <div className={`la-checkbox-box ${selectedCatId === cat.id ? 'checked' : ''}`}>
                        {selectedCatId === cat.id && <Check size={14} strokeWidth={3} />}
                      </div>
                      <span className="la-cat-name">{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-category selection */}
              {activeCategory?.subcategories && (
                <div className="la-form-group animate-in">
                  <label className="la-label">세부 항목 선택</label>
                  <div className="la-sub-list">
                    {activeCategory.subcategories.map((sub, i) => (
                      <div
                        key={i}
                        className={`la-sub-item ${selectedSub === sub.name ? 'selected' : ''}`}
                        onClick={() => setSelectedSub(sub.name)}
                      >
                        <div className="la-sub-header">
                          <span className="la-sub-name">{sub.name}</span>
                          <div className={`la-radio-circle ${selectedSub === sub.name ? 'checked' : ''}`}></div>
                        </div>
                        {sub.details && <p className="la-sub-details">{sub.details}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Content */}
              <div className="la-form-group">
                <label className="la-label">상담 내용 기재 <span>회원가입 필수</span></label>
                <textarea
                  className="la-textarea"
                  placeholder="상담받으실 내용을 상세히 적어주시면 더욱 정확한 검토가 가능합니다. (사건 경위, 현재 상황 등)"
                  value={consultText}
                  onChange={(e) => setConsultText(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="la-submit-btn" onClick={handleConsultSubmit}>
                법률.회계 상담 신청하기 <ChevronRight size={20} className="ml-2" />
              </button>

              <div className="la-form-footer">
                <p>신청 즉시 담당 전문가가 배정되며, 24시간 내에 연락드립니다.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Login Required Modal */}
      {isLoginModalOpen && (
        <div className="la-modal-overlay animate-in">
          <div className="la-modal-content">
            <div className="la-modal-icon">
              <ShieldCheck size={48} color="var(--color-secondary)" />
            </div>
            <h3>회원가입 필수</h3>
            <p>전문가 상담 신청 서비스는 오너스코리아<br />회원에게만 제공됩니다.</p>
            <div className="la-modal-actions">
              <button
                className="la-modal-btn-primary"
                onClick={() => window.location.href = '/login?redirect=/legal-accounting'}
              >
                회원가입하기
              </button>
              <button
                className="la-modal-btn-secondary"
                onClick={() => setIsLoginModalOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalAccountingPage;
