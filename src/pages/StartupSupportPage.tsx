import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Store,
  Sprout,
  X,
  Check,
  Info,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Phone,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';
import medicalChapter from '../assets/generated/medical-chapter-bg.png';
import fnbChapter from '../assets/generated/fnb-chapter-bg.png';
import startupCenterBg from '../assets/generated/startup-center-bg.png';
import founderBg from '../assets/founder-bg.png';
import Footer from '../components/Footer';
import './StartupSupportPage.css';

const StartupSupportPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<'proposal' | 'support' | null>(null);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [ssnInput, setSsnInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [tempSaved, setTempSaved] = useState(false);
  const [activeMedicalTab, setActiveMedicalTab] = useState<'mission' | 'experts' | 'inquiry'>('experts');
  const [activeFnbTab, setActiveFnbTab] = useState<'mission' | 'experts' | 'inquiry'>('experts');
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const [activeSection, setActiveSection] = useState(0);


  const heroRef = React.useRef<HTMLElement>(null);
  const medicalRef = React.useRef<HTMLElement>(null);
  const fnbRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);
  const footerRef = React.useRef<HTMLElement>(null);

  const sectionRefs = [heroRef, medicalRef, fnbRef, ctaRef];
  const sectionNames = ['니즈 & 솔루션', '메디컬 마스터', 'F&B 마스터', '창업 지원'];



  const reviews = [
    { name: "김준형", field: "내과 원장", text: "강 원장님의 입지 분석 덕분에 공실이 많던 건물에서 독보적인 매출을 내고 있습니다. 동선 설계가 정말 신의 한 수였네요.", image: "/src/assets/portrait-doctor.png" },
    { name: "이민석", field: "치과 원장", text: "개원 자금 조달부터 리스까지 복잡한 과정을 한 번에 해결했습니다. 특히 절세 전략이 큰 도움이 되었습니다.", image: "/src/assets/expert3.png" },
    { name: "박소연", field: "피부과 원장", text: "브랜딩이 병원의 첫인상을 결정한다는 걸 깨달았습니다. 환자들이 인테리어와 로고 칭찬을 정말 많이 해요.", image: "/src/assets/portrait-lawyer.png" }
  ];

  useEffect(() => {
    if (activeMedicalTab !== 'mission') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeMedicalTab]);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));

    // IntersectionObserver for vertical indicator
    const indicatorOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const indicatorObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setActiveSection(index);
            if (index !== 1) setActiveMedicalTab("mission");
            if (index !== 2) setActiveFnbTab("mission");

          }
        }
      });
    }, indicatorOptions);



    sectionRefs.forEach(ref => {
      if (ref.current) indicatorObserver.observe(ref.current);
    });

    // Auto-save logic (Mock)
    const saveInterval = setInterval(() => {
      if (openModal) {
        setTempSaved(true);
        setTimeout(() => setTempSaved(false), 2000);
      }
    }, 5000);

    return () => {
      observer.disconnect();
      indicatorObserver.disconnect();
      clearInterval(saveInterval);
    };
  }, [openModal]);

  const scrollToSection = (index: number) => {
    // Reset all tab expansions when moving via indicator
    setActiveMedicalTab('mission');
    setActiveFnbTab('mission');

    const ref = sectionRefs[index];


    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };



  useEffect(() => {
    let interval: any;
    if (activeMedicalTab === 'experts' || activeMedicalTab === 'inquiry' ||
      activeFnbTab === 'experts' || activeFnbTab === 'inquiry') {
      interval = setInterval(() => {
        setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
      }, 15000);
    }
    return () => clearInterval(interval);
  }, [activeMedicalTab, activeFnbTab]);



  const handleSsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setSsnInput(val);
  };

  const getMaskedSsn = () => {
    if (!ssnInput) return '';
    return ssnInput[0] + '*'.repeat(ssnInput.length - 1);
  };

  return (
    <div className="startup-support-page-v5">
      {/* Vertical Indicator */}
      <div className="startup-indicator-v5">
        {sectionNames.map((_, idx) => (
          <div
            key={idx}
            className={`indicator-dot-v5 ${activeSection === idx ? 'active' : ''}`}
            onClick={() => scrollToSection(idx)}
          />
        ))}
      </div>


      {/* Chapter 1: 창업자의 니즈와 솔루션 */}
      <section className="chapter-hero-v5" ref={heroRef}>

        <div className="hero-image-bg-v5">
          <img src={startupCenterBg} alt="Startup Center Incubation" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 1</div>
            <h1 className="chapter-title-v5 text-white">
              열정은 충분한데,<br />
              <span className="text-premium-gold">창업자금과 노하우</span>로 망설이고 있나요?
            </h1>

            <div className="chapter-intro-text-v5 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 mb-5 text-white">
                아이디어는 있지만 자본금이 부족한 청년 창업가부터,<br />
                직장 생활 후 제2의 인생을 꿈꾸는 예비 창업자까지.<br />
                오너스코리아가 당신의 꿈을 현실로 만드는 든든한 파트너가 됩니다.
              </p>

              <div className="founder-cta-group-v5 mt-5 d-flex gap-4">
                <div className="cta-item-v5">
                  <p className="cta-label-v5 text-premium-gold mb-3">이미 매장을 운영 중이신가요?</p>
                  <button
                    className="btn-outline-v5 btn-hover-swap"
                    onClick={() => scrollToSection(3)}
                  >
                    <span className="btn-text-normal">상가 입점제안 <ArrowRight size={20} className="ms-2" /></span>
                    <span className="btn-text-hover">투자 유치하기 <ArrowRight size={20} className="ms-2" /></span>
                  </button>
                </div>
                <div className="cta-item-v5">
                  <p className="cta-label-v5 text-premium-gold mb-3">새로운 매장 창업을 계획하시나요?</p>
                  <button
                    className="btn-outline-v5 btn-hover-swap"
                    onClick={() => setShowSelectionModal(true)}
                  >
                    <span className="btn-text-normal">창업지원하기 <ArrowRight size={20} className="ms-2" /></span>
                    <span className="btn-text-hover">창업 상담하기 <ArrowRight size={20} className="ms-2" /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Medical Startup Path */}
      <section className={`chapter-hero-v5 ${activeMedicalTab !== 'mission' ? 'layer-open' : ''}`} ref={medicalRef}>

        <div className="hero-image-bg-v5">
          <img src={medicalChapter} alt="Medical Practice" />
          <div className="hero-overlay-v5 medical-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100" style={{ position: 'relative', zIndex: 10 }}>
            <div className="background-hero-text" style={{ opacity: activeMedicalTab === 'mission' ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: activeMedicalTab === 'mission' ? 'auto' : 'none' }}>
              <div className="chapter-label-v5">Chapter 2</div>
              <h1 className="chapter-title-v5 text-white">
                슬기로운 개원 생활,<br />
                <span className="text-premium-gold">혼자가 아니어도</span> 됩니다.
              </h1>
            </div>

            <div className={`chapter-stable-container-v5 ${activeMedicalTab !== 'mission' ? 'is-expanded-v5' : ''}`}>
              <div className="chapter-dynamic-body-v5">
                {/* Click outside logic: background click resets to mission */}
                {activeMedicalTab !== 'mission' && (
                  <div
                    className="chapter-interactive-overlay-v5"
                    onClick={() => setActiveMedicalTab('mission')}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 5 }}
                  ></div>
                )}

                {activeMedicalTab === 'mission' ? (
                  <div className="tab-content-v5">
                    <div className="chapter-intro-text-v5" style={{ maxWidth: '850px' }}>
                      <div className="mb-4"></div>
                      <p className="fs-5 mb-4 text-white">
                        진료에 집중하고 싶은데 임대차 계약, 인테리어 견적, 의료기기 리싱, 직원 채용까지 <br />
                        모두 직접 챙겨야 하는 현실. 막상 개원해도 환자 동선을 놓치는 순간 매출이 흔들립니다.
                      </p>

                      <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                        <p className="fs-4 fw-bold text-secondary mb-0">
                          오너스코리아 '메디컬 마스터 그룹'은 <br />20명 이상의 현직 원장단이 동료의 마음으로 함께합니다.
                        </p>
                      </div>

                      <div className="chapter-footer-v5 mt-4">
                        <span className="footer-stat-v5 text-white fw-bold">과목별 입지 분석 · MSO 경영지원 · 의료기기 리싱 · 표준화 인테리어</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="glass-content-box-v5" style={{ maxWidth: '850px', height: '100%', width: '100%', position: 'relative', zIndex: 10 }}>
                    <div className="glass-sticky-header-v5">
                      <div className="sticky-title-v5">CHAPTER 2 | 슬기로운 개원!</div>
                      <div className="sticky-subtitle-v5"></div>
                    </div>

                    <div className="tab-content-v5 experts-scroll-container-v5">
                      {/* Section 1: Expert 1 */}
                      <section className="expert-section-v5 px-4" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="expert-intro-layout-v5 profile-row-v5 border-0">
                          <div className="expert-text-side-v5">
                            <div className="expert-label-badge-v5">| 창업지원 전문가</div>
                            <h2 className="text-white fw-bold mb-0">
                              "진료실 밖의 모든 리스크,<br />
                              <span className="text-secondary">강현우 원장</span>이 직접 설계합니다."
                            </h2>
                            <div className="mb-4"></div>
                            <div className="expert-bio-v5 text-white fs-6">
                              <p className="expert-advice-v5-white">
                                <i>"단순히 예쁜 병원을 넘어, 환자의 동선과 의료진의 피로도를 최소화하는 설계를 통해 수익을 극대화해야 합니다. 저희는 입지 선정부터 공간 브랜딩까지 개원 과정의 모든 리스크를 원장님과 함께 고민하고 해결하여, 진료에만 집중하실 수 있는 최적의 환경을 제안해 드립니다."</i>
                              </p>
                              <div className="career-tags-v5 mt-4">
                                <div className="career-header-v5 fw-bold text-secondary mb-2">약력 및 이력</div>
                                <div className="career-tag-v5-gold">현) 오너스코리아 메디컬 마스터</div>
                                <div className="career-tag-v5-gold">전) 서울 S대학병원 외과 전문의</div>
                                <div className="career-tag-v5-gold">누적 개원 컨설팅 150건+</div>
                              </div>
                            </div>
                          </div>
                          <div className="expert-sns-side-v5">
                            <div className="sns-card-v5">
                              <div className="sns-header-v5">
                                <div className="sns-avatar-v5" style={{ backgroundImage: 'url("/src/assets/portrait-doctor.png")' }}></div>
                                <div className="sns-user-info-v5">
                                  <span className="sns-username-v5">khw_medical</span>
                                  <span className="sns-location-v5">강남구 신사동</span>
                                </div>
                              </div>
                              <div className="sns-image-v5" style={{ backgroundImage: 'url("/src/assets/portrait-doctor.png")' }}></div>
                              <div className="sns-actions-v5"><Heart size={20} className="text-danger fill-danger" /><MessageCircle size={20} /><Send size={20} /></div>
                              <div className="sns-caption-v5"><b>khw_medical</b> 메디컬 입지는 과학입니다. #개원준비 #병원인테리어</div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Section 2: Expert 2 */}
                      <section className="expert-section-v5 px-4 border-top border-white border-opacity-10" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="expert-intro-layout-v5 profile-row-v5 reverse border-0">
                          <div className="expert-sns-side-v5">
                            <div className="sns-card-v5">
                              <div className="sns-header-v5">
                                <div className="sns-avatar-v5" style={{ backgroundImage: 'url("/src/assets/expert3.png")' }}></div>
                                <div className="sns-user-info-v5">
                                  <span className="sns-username-v5">jylee_analysis</span>
                                  <span className="sns-location-v5">성남시 판교동</span>
                                </div>
                              </div>
                              <div className="sns-image-v5" style={{ backgroundImage: 'url("/src/assets/expert3.png")' }}></div>
                              <div className="sns-actions-v5"><Heart size={20} className="text-danger fill-danger" /><MessageCircle size={20} /><Send size={20} /></div>
                              <div className="sns-caption-v5"><b>jylee_analysis</b> 데이터는 거짓말을 하지 않습니다. 승률 90% 상권.</div>
                            </div>
                          </div>
                          <div className="expert-text-side-v5">
                            <div className="expert-label-badge-v5">| 창업지원 전문가</div>
                            <h2 className="text-white fw-bold mb-0">
                              "1,000건의 상권 데이터,<br />
                              <span className="text-secondary">이지연 마스터</span>가 분석합니다."
                            </h2>
                            <div className="mb-4"></div>
                            <div className="expert-bio-v5 text-white fs-6">
                              <p className="expert-advice-v5-white">
                                <i>"상권 분석은 운에 맡기는 것이 아니라 철저히 데이터로 증명되어야 합니다. 주변 경쟁 의원들의 진료 패턴과 세부 인구 이동 흐름을 정밀하게 분석하여, 실패 확률을 최소화하고 안정적인 초기 매출을 확보할 수 있는 원장님만의 전략적 요충지를 확실하게 제안해 드리겠습니다."</i>
                              </p>
                              <div className="career-tags-v5 mt-4">
                                <div className="career-header-v5 fw-bold text-secondary mb-2">약력 및 이력</div>
                                <div className="career-tag-v5-gold">현) 오너스코리아 상권분석 팀장</div>
                                <div className="career-tag-v5-gold">전) K사 상업용 부동산 애널리스트</div>
                                <div className="career-tag-v5-gold">연간 상권 분석 리포트 300건+ 발행</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Section 3: Expert 3 */}
                      <section className="expert-section-v5 px-4 border-top border-white border-opacity-10" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="expert-intro-layout-v5 profile-row-v5 border-0">
                          <div className="expert-text-side-v5">
                            <div className="expert-label-badge-v5">| 창업지원 전문가</div>
                            <h2 className="text-white fw-bold mb-0">
                              "의사 전담 세무 설계,<br />
                              <span className="text-secondary">김준호 세무사</span>가 제안합니다."
                            </h2>
                            <div className="mb-4"></div>
                            <div className="expert-bio-v5 text-white fs-6">
                              <p className="expert-advice-v5-white">
                                <i>"의료 전문 세무는 일반 세무와 차원이 다릅니다. 개원 자금의 투명성 확보부터 절세를 위한 정교한 법인 전환 시뮬레이션까지, 원장님의 소중한 자산이 불필요한 곳으로 새어나가지 않도록 완벽한 재무 포트폴리오를 구축하여 경영의 안정성과 미래 가치를 동시에 더해 드립니다."</i>
                              </p>
                              <div className="career-tags-v5 mt-4">
                                <div className="career-header-v5 fw-bold text-secondary mb-2">약력 및 이력</div>
                                <div className="career-tag-v5-gold">현) 세무법인 오너스 대표 세무사</div>
                                <div className="career-tag-v5-gold">전) 국세청 의료분야 조사 자문</div>
                                <div className="career-tag-v5-gold">메디컬 법인 전환 컨설팅 80건+</div>
                              </div>
                            </div>
                          </div>
                          <div className="expert-sns-side-v5">
                            <div className="sns-card-v5">
                              <div className="sns-header-v5">
                                <div className="sns-avatar-v5" style={{ backgroundImage: 'url("/src/assets/portrait-lawyer.png")' }}></div>
                                <div className="sns-user-info-v5">
                                  <span className="sns-username-v5">jh_tax_medical</span>
                                  <span className="sns-location-v5">강남구 테헤란로</span>
                                </div>
                              </div>
                              <div className="sns-image-v5" style={{ backgroundImage: 'url("/src/assets/portrait-lawyer.png")' }}></div>
                              <div className="sns-actions-v5"><Heart size={20} className="text-danger fill-danger" /><MessageCircle size={20} /><Send size={20} /></div>
                              <div className="sns-caption-v5"><b>jh_tax_medical</b> 절세는 개원의 첫 걸음입니다. #의사세무 #자산관리</div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Section 4: Process */}
                      <section className="expert-section-v5 px-5 border-top border-white border-opacity-20" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="section-header-wrap-v5 mb-5">
                          <h4 className="expert-label-badge-v5">| 개원지원 프로세스</h4>
                          <p className="text-white mb-0 opacity-80">상권 분석부터 마케팅, 재무 설계까지 통합된 프로세스로<br />체계적이고 안정적인 병원 오픈을 지원합니다.</p>
                        </div>

                        <div className="process-grid-v5">
                          <div className="process-card-v5">
                            <div className="process-badge-v5">STEP 01</div>
                            <h4>상권 및 정밀 입지 분석</h4>
                            <ul>
                              <li>AI 기반 유동인구 성향 및 소비 패턴 분석</li>
                              <li>경쟁 의원 진료 과목 및 환자군 점유율 조사</li>
                              <li>반경 2km 이내 핵심 배후수요 데이터 도출</li>
                            </ul>
                          </div>
                          <div className="process-card-v5">
                            <div className="process-badge-v5 orange">STEP 02</div>
                            <h4>맞춤형 브랜딩 및 공간 설계</h4>
                            <ul>
                              <li>병원 정체성을 담은 프리미엄 CI/BI 개발</li>
                              <li>의료진과 환자의 효율적 동선을 고려한 설계</li>
                              <li>건축 인허가 및 복잡한 행정 절차 원스톱 대행</li>
                            </ul>
                          </div>
                          <div className="process-card-v5">
                            <div className="process-badge-v5 blue">STEP 03</div>
                            <h4>운영 솔루션 및 마케팅</h4>
                            <ul>
                              <li>최신 의료기기 리스/렌탈 최적가 매칭</li>
                              <li>전담 인력 채용 매뉴얼 및 서비스 고도화 교육</li>
                              <li>지역 특화 온/오프라인 통합 마케팅 실행</li>
                            </ul>
                          </div>
                        </div>
                      </section>

                      {/* Section 5: Grid Reviews */}
                      <section className="expert-section-v5 px-5 border-top border-white border-opacity-20" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="section-header-wrap-v5 mb-5">
                          <h4 className="expert-label-badge-v5">| 생생한 개원후기</h4>
                          <p className="text-white mb-0 opacity-80">오너스코리아 마스터 그룹과 함께하여 성공적으로 개원하신<br />원장님들의 진솔한 경험담과 성공 노하우를 공유합니다.</p>
                        </div>

                        <div className="review-grid-v5">
                          {[...reviews, ...reviews].map((review, idx) => (
                            <div key={idx} className="review-card-v5-grid-new">
                              <div className="review-header-v5-new">
                                <div className="review-photo-v5" style={{ backgroundImage: `url(${review.image})` }}></div>
                                <div className="review-user-info-v5">
                                  <div className="review-name-v5-white">{review.name}</div>
                                  <div className="review-field-v5">{review.field}</div>
                                </div>
                              </div>
                              <p className="review-text-v5-italic">"{review.text}"</p>
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Section 6: Inquiry Form */}
                      <section id="medical-inquiry-section" className="expert-section-v5 inquiry-section-refined-v5 px-5 border-top border-white border-opacity-20">
                        <div className="section-header-wrap-v5 mb-5">
                          <h4 className="expert-label-badge-v5">| 상담신청</h4>
                          <p className="text-white mb-0 opacity-80">전담 마스터와의 1:1 상담을 통해 개원 고민을 해결하세요.<br />회원가입 후 더욱 상세한 맞춤형 컨설팅 리포트를 제공해 드립니다.</p>
                        </div>

                        <div className="compact-form-v5-new mx-auto" style={{ maxWidth: '650px' }}>
                          <div className="form-row-v5">
                            <div className="form-item-v5">
                              <label className="text-white fs-7 opacity-70">성함</label>
                              <input type="text" placeholder="성함을 입력하세요" className="inquiry-input-v5" />
                            </div>
                            <div className="form-item-v5">
                              <label className="text-white fs-7 opacity-70">연락처</label>
                              <input type="text" placeholder="연락처를 입력하세요" className="inquiry-input-v5" />
                            </div>
                          </div>

                          <div className="form-item-v5">
                            <label className="text-white fs-7 opacity-70">상담 내용</label>
                            <textarea placeholder="주요 고민 사항을 자유롭게 적어주세요" rows={4} className="inquiry-input-v5"></textarea>
                          </div>

                          <div className="inquiry-btn-group-v5 mt-5">
                            <button
                              className="medical-cta-btn-v5 gold px-5"
                              onClick={() => {
                                // Simplified login check logic as requested
                                const isLoggedIn = false; // This should be replaced with actual auth state
                                if (!isLoggedIn) {
                                  window.location.href = '/login?redirect=/startup-support';
                                } else {
                                  alert('상담이 접수되었습니다.');
                                }
                              }}
                            >
                              상담접수
                            </button>
                          </div>
                        </div>
                      </section>

                    </div>
                  </div>
                )}
              </div>

              <div className="medical-tab-group-v5 mt-4">
                <button
                  className={`medical-tab-btn-v5 ${activeMedicalTab === 'experts' ? 'active' : ''}`}
                  onClick={() => setActiveMedicalTab('experts')}
                >전문가 그룹</button>
                <button
                  className={`medical-tab-btn-v5 ${activeMedicalTab === 'inquiry' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveMedicalTab('inquiry');
                    setTimeout(() => {
                      const container = document.querySelector('.experts-scroll-container-v5');
                      const el = document.getElementById('medical-inquiry-section');
                      if (container && el) {
                        container.scrollTo({
                          top: (el as HTMLElement).offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >상담신청</button>
                <button className="medical-tab-btn-v5 download-btn-gold-v5">
                  소개자료
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: F&B Master Group */}
      <section className={`chapter-hero-v5 ${activeFnbTab !== 'mission' ? 'layer-open' : ''}`} ref={fnbRef}>
        <div className="hero-image-bg-v5">
          <img src={fnbChapter} alt="F&B Master Group" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100" style={{ position: 'relative', zIndex: 10 }}>
            <div className="background-hero-text" style={{ opacity: activeFnbTab === 'mission' ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: activeFnbTab === 'mission' ? 'auto' : 'none' }}>
              <div className="chapter-label-v5">Chapter 3</div>
              <h1 className="chapter-title-v5 text-white">
                골목의 맛을 <span className="text-premium-gold">자산의 가치</span>로,<br />
                F&B 마스터가 설계합니다.
              </h1>
            </div>

            <div className={`chapter-stable-container-v5 ${activeFnbTab !== 'mission' ? 'is-expanded-v5' : ''}`}>
              <div className="chapter-dynamic-body-v5">
                {activeFnbTab !== 'mission' && (
                  <div
                    className="chapter-interactive-overlay-v5"
                    onClick={() => setActiveFnbTab('mission')}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 5 }}
                  ></div>
                )}

                {activeFnbTab === 'mission' ? (
                  <div className="tab-content-v5">
                    <div className="chapter-intro-text-v5" style={{ maxWidth: '850px' }}>
                      <div className="mb-4"></div>
                      <p className="fs-5 mb-4 text-white">
                        단순히 음식을 파는 곳이 아닌, 하나의 브랜드로서 생존해야 합니다. <br />
                        메뉴 개발부터 인테리어 시공, 브랜드 아이덴티티 구축까지 <br />
                        실패하지 않는 F&B 비즈니스의 모든 노하우를 공유합니다.
                      </p>

                      <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                        <p className="fs-4 fw-bold text-secondary mb-0">
                          오너스코리아 'F&B 마스터 그룹'은 <br />실제 매장을 성공시킨 베테랑들이 당신의 매장을 함께 짓습니다.
                        </p>
                      </div>

                      <div className="chapter-footer-v5 mt-4">
                        <span className="footer-stat-v5 text-white fw-bold">브랜딩 컨설팅 · 메뉴 R&D · 주방 동선 설계 · 통합 마케팅</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="glass-content-box-v5" style={{ maxWidth: '850px', height: '100%', width: '100%', position: 'relative', zIndex: 10 }}>
                    <div className="glass-sticky-header-v5">
                      <div className="sticky-title-v5">CHAPTER 3 | F&B 비즈니스 마스터</div>
                    </div>

                    <div className="tab-content-v5 experts-scroll-container-v5">
                      {/* Expert 1: Branding */}
                      <section className="expert-section-v5 px-4" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="expert-intro-layout-v5 profile-row-v5 border-0">
                          <div className="expert-text-side-v5">
                            <div className="expert-label-badge-v5">| F&B 브랜딩 전문가</div>
                            <h2 className="text-white fw-bold mb-0">
                              "첫 입에 반하는 브랜드,<br />
                              <span className="text-secondary">백종현 마스터</span>가 설계합니다."
                            </h2>
                            <div className="mb-4"></div>
                            <div className="expert-bio-v5 text-white fs-6">
                              <p className="expert-advice-v5-white">
                                <i>"성공하는 식당은 맛뿐만 아니라 '스토리'를 팝니다. 소비자의 감성을 자극하는 브랜드 아이덴티티부터 매장의 사소한 소품 하나까지, 고객의 모든 경험이 브랜드가 되는 압도적인 컨셉을 구축해 드립니다."</i>
                              </p>
                              <div className="career-tags-v5 mt-4">
                                <div className="career-header-v5 fw-bold text-secondary mb-2">약력 및 이력</div>
                                <div className="career-tag-v5-gold">현) 오너스코리아 F&B 총괄 디렉터</div>
                                <div className="career-tag-v5-gold">전) 유명 외식 프랜차이즈 기획팀장</div>
                                <div className="career-tag-v5-gold">신규 브랜드 런칭 40건+ 성공</div>
                              </div>
                            </div>
                          </div>
                          <div className="expert-sns-side-v5">
                            <div className="sns-card-v5">
                              <div className="sns-header-v5">
                                <div className="sns-avatar-v5" style={{ backgroundImage: 'url("/src/assets/expert1.png")' }}></div>
                                <div className="sns-user-info-v5">
                                  <span className="sns-username-v5">bjh_master</span>
                                  <span className="sns-location-v5">서울 성수동</span>
                                </div>
                              </div>
                              <div className="sns-image-v5" style={{ backgroundImage: 'url("/src/assets/expert1.png")' }}></div>
                              <div className="sns-actions-v5"><Heart size={20} className="text-danger fill-danger" /><MessageCircle size={20} /><Send size={20} /></div>
                              <div className="sns-caption-v5"><b>bjh_master</b> 브랜딩은 한 끗 차이입니다. #성수동맛집 #브랜딩기획</div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Expert 2: Menu R&D */}
                      <section className="expert-section-v5 px-4 border-top border-white border-opacity-10" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                        <div className="expert-intro-layout-v5 profile-row-v5 reverse border-0">
                          <div className="expert-sns-side-v5">
                            <div className="sns-card-v5">
                              <div className="sns-header-v5">
                                <div className="sns-avatar-v5" style={{ backgroundImage: 'url("/src/assets/expert2.png")' }}></div>
                                <div className="sns-user-info-v5">
                                  <span className="sns-username-v5">choi_rnd</span>
                                  <span className="sns-location-v5">서울 연남동</span>
                                </div>
                              </div>
                              <div className="sns-image-v5" style={{ backgroundImage: 'url("/src/assets/expert2.png")' }}></div>
                              <div className="sns-actions-v5"><Heart size={20} className="text-danger fill-danger" /><MessageCircle size={20} /><Send size={20} /></div>
                              <div className="sns-caption-v5"><b>choi_rnd</b> 맛의 표준화가 곧 경쟁력입니다. #메뉴개발 #레시피연구</div>
                            </div>
                          </div>
                          <div className="expert-text-side-v5">
                            <div className="expert-label-badge-v5">| 메뉴 개발 마스터</div>
                            <h2 className="text-white fw-bold mb-0">
                              "지속 가능한 맛의 표준,<br />
                              <span className="text-secondary">최유진 마스터</span>가 책임집니다."
                            </h2>
                            <div className="mb-4"></div>
                            <div className="expert-bio-v5 text-white fs-6">
                              <p className="expert-advice-v5-white">
                                <i>"누가 주방을 맡아도 변함없는 맛이 나와야 진짜 비즈니스입니다. 오너스 R&D 센터의 검증된 시스템으로 누구나 쉽게 구현 가능한 전문적인 레시피와 효율적인 주방 시스템을 전수해 드립니다."</i>
                              </p>
                              <div className="career-tags-v5 mt-4">
                                <div className="career-header-v5 fw-bold text-secondary mb-2">약력 및 이력</div>
                                <div className="career-tag-v5-gold">현) 오너스 R&D 센터 책임 연구원</div>
                                <div className="career-tag-v5-gold">전) 5성급 호텔 조리 팀장</div>
                                <div className="career-tag-v5-gold">레시피 라이브러리 200건+ 구축</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      {/* Inquiry Form Section */}
                      <section id="fnb-inquiry-section" className="expert-section-v5 inquiry-section-refined-v5 px-5 border-top border-white border-opacity-20">
                        <div className="section-header-wrap-v5 mb-5">
                          <h4 className="expert-label-badge-v5">| F&B 상담신청</h4>
                          <p className="text-white mb-0 opacity-80">브랜딩, 인테리어, 메뉴 개발 등 F&B 창업 전반에 대한<br />전문가의 솔루션을 받아보세요.</p>
                        </div>

                        <div className="compact-form-v5-new mx-auto" style={{ maxWidth: '650px' }}>
                          <div className="form-row-v5">
                            <div className="form-item-v5">
                              <label className="text-white fs-7 opacity-70">성함</label>
                              <input type="text" placeholder="성함을 입력하세요" className="inquiry-input-v5" />
                            </div>
                            <div className="form-item-v5">
                              <label className="text-white fs-7 opacity-70">연락처</label>
                              <input type="text" placeholder="연락처를 입력하세요" className="inquiry-input-v5" />
                            </div>
                          </div>
                          <div className="form-item-v5">
                            <label className="text-white fs-7 opacity-70">관심 분야</label>
                            <select className="inquiry-input-v5">
                              <option>브랜딩 & 컨셉</option>
                              <option>메뉴 개발 (R&D)</option>
                              <option>주방 동선 & 인테리어</option>
                              <option>전체 창업 지원</option>
                            </select>
                          </div>
                          <button className="medical-cta-btn-v5 gold w-100 mt-4">상담신청하기</button>
                        </div>
                      </section>
                    </div>
                  </div>
                )}
              </div>

              <div className="medical-tab-group-v5 mt-4">
                <button
                  className={`medical-tab-btn-v5 ${activeFnbTab === 'experts' ? 'active' : ''}`}
                  onClick={() => setActiveFnbTab('experts')}
                >전문가 그룹</button>
                <button
                  className={`medical-tab-btn-v5 ${activeFnbTab === 'inquiry' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveFnbTab('inquiry');
                    setTimeout(() => {
                      const containers = document.querySelectorAll('.experts-scroll-container-v5');
                      const container = containers[containers.length - 1];
                      const el = document.getElementById('fnb-inquiry-section');
                      if (container && el) {
                        container.scrollTo({
                          top: (el as HTMLElement).offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >상담신청</button>
                <button className="medical-tab-btn-v5 download-btn-gold-v5">소개자료</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Chapter 4: Startup Support Center */}
      <section className="chapter-hero-v5" ref={ctaRef}>
        <div className="hero-image-bg-v5">
          <img src={founderBg} alt="Startup Support Center" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 4</div>
            <h1 className="chapter-title-v5 text-white">
              실력은 당신이,<br />
              <span className="text-premium-gold">자본은 오너스코리아</span>가 지원합니다.
            </h1>

            <div className="chapter-intro-text-v5 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 mb-4 text-white">
                자본금 1,000만원 유한책임 창업 시스템. <br />
                복잡한 법률, 세무, 마케팅은 전문가들에게 맡기고 <br />
                당신은 오직 매장의 실력과 품질에만 집중하세요.
              </p>

              <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                <p className="fs-4 fw-bold text-secondary mb-0">
                  오너스코리아 '창업 지원 센터'는 <br />당신의 성장을 가로막는 모든 행정적·재무적 장애물을 제거합니다.
                </p>
              </div>

              <div className="chapter-footer-v5 mt-4">
                <span className="footer-stat-v5 text-white fw-bold">법률 컨설팅 · 세무 리스크 관리 · 지역 특화 마케팅 · 물류 시스템</span>
              </div>

              <div className="founder-cta-group-v5 mt-5">
                <div className="cta-item-v5">
                  <p className="cta-label-v5 text-premium-gold mb-3">새로운 매장 창업을 계획하시나요?</p>
                  <button className="btn-outline-v5 px-5 w-100" onClick={() => setOpenModal('support')}>
                    상담접수 <ArrowRight size={20} className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Modals remain the same logic but with refined styling */}
      {/* [Modals Code Here - Simplified for brevity but functionally identical to v4] */}
      {openModal && (
        <div className="modal-overlay-v5" onClick={() => setOpenModal(null)}>
          <div className="modal-content-v5" onClick={e => e.stopPropagation()}>
            {/* Modal content remained as is for other chapters if needed, but Chapter 1 triggers are gone */}
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{openModal === 'proposal' ? '매장의 다음 챕터를, 함께 써내려갑니다.' : '당신의 첫 매장, 우리가 함께 엽니다.'}</h2>
                <p className="modal-sub">{openModal === 'proposal' ? '작성하신 정보는 마스터 그룹의 1차 평가 자료로만 활용됩니다.' : '자본금 1,000만 원으로 시작 가능한 모델입니다.'}</p>
              </div>
              <button className="close-btn" onClick={() => setOpenModal(null)}><X size={28} /></button>
            </div>

            <form className="modal-form-v5" onSubmit={(e) => { e.preventDefault(); alert('신청이 접수되었습니다.'); setOpenModal(null); }}>
              {/* Simplified for the sake of the task request to remove complex input logic from buttons */}
              <div className="py-5 text-center">
                <Check size={48} className="text-secondary mb-4 mx-auto" />
                <h3 className="mb-4">빠르게 연락드리겠습니다.</h3>
                <p className="text-muted">전담 마스터가 배정된 후 <br /> 입력하신 번호로 유선 상담이 진행됩니다.</p>
              </div>
              <button type="submit" className="submit-btn-v5 mt-4">확인</button>
            </form>
          </div>
        </div>
      )}

      {/* Selection Modal for Chapter 1 */}
      {showSelectionModal && (
        <div className="selection-modal-overlay" onClick={() => setShowSelectionModal(false)}>
          <div className="selection-modal-content" onClick={e => e.stopPropagation()}>
            <button className="selection-close-btn" onClick={() => setShowSelectionModal(false)}><X size={24} /></button>
            <h2 className="selection-title">어떤 분야의 창업을 꿈꾸시나요?</h2>
            <div className="selection-grid">
              <button className="selection-btn medical btn-outline-v5" onClick={() => { scrollToSection(1); setShowSelectionModal(false); }}>
                <div className="selection-icon-wrap"><Heart size={32} /></div>
                <div className="selection-text">
                  <h3>병원 (Medical)</h3>
                  <p>전문의 중심의 전문 개원 시스템 <ArrowRight size={18} className="ms-2" /></p>
                </div>
              </button>
              <button className="selection-btn fnb btn-outline-v5" onClick={() => { scrollToSection(2); setShowSelectionModal(false); }}>
                <div className="selection-icon-wrap"><Store size={32} /></div>
                <div className="selection-text">
                  <h3>상가 (F&B / Store)</h3>
                  <p>베테랑 마스터의 브랜드 창업 시스템 <ArrowRight size={18} className="ms-2" /></p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section with Snap Support - At the very bottom of the page */}
      <section className="snap-footer-section" ref={footerRef}>

        <Footer />
      </section>
    </div>
  );
};

export default StartupSupportPage;
