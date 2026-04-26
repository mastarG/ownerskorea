import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Building2, LineChart, Users, Sprout, Store,
  ShieldCheck, TrendingUp, Handshake, Target, ArrowRight, Zap
} from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // slight delay to ensure rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="about-page">
      {/* Vision & Mission Section */}
      <section id="vision">
        {/* Hero Section */}
        <div className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.8), rgba(11, 25, 44, 0.9)), url('/src/assets/building-bg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container">
            <div className="hero-content text-center">
              <span className="badge badge-secondary mb-4" style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-secondary)', fontWeight: 800 }}>
                VISION & MISSION
              </span>
              <h1 className="hero-title text-light mb-4">
                대한민국 골목의 숨결을<br />자산의 가치로 연결합니다.
              </h1>
              <p className="hero-subtitle text-light opacity-80 mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                자본의 격차를 해소하고 열정 있는 창업가와 안목 있는 오너가 함께 성장하는<br />
                <strong>'상생형 오너십 생태계'</strong>를 구축합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="certificates-section py-5" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
          <div className="container">
            <div className="certificates-grid">
              {/* 창업기획자 */}
              <div className="certificate-card">
                <div className="cert-image">
                  <img src="/src/assets/cert-ac.png" alt="창업기획자 등록증" />
                </div>
                <div className="cert-info">
                  <h5>창업기획자</h5>
                  <span className="cert-agency">중소벤처기업부</span>
                  <p>제2025-16호</p>
                </div>
              </div>

              {/* 창업보육센터 */}
              <div className="certificate-card">
                <div className="cert-image">
                  <img src="/src/assets/cert-bi.png" alt="창업보육센터 지정서" />
                </div>
                <div className="cert-info">
                  <h5>창업보육센터</h5>
                  <span className="cert-agency">중소벤처기업부</span>
                  <p>제2026호 30호</p>
                </div>
              </div>

              {/* 원격평생교육시설 */}
              <div className="certificate-card">
                <div className="cert-image">
                  <img src="/src/assets/cert-edu.png" alt="원격평생교육시설 인가증" />
                </div>
                <div className="cert-info">
                  <h5>원격평생교육시설</h5>
                  <span className="cert-agency">교육부</span>
                  <p>세종-50호</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis & Solution Narrative */}
        <div className="narrative-section py-5 bg-white">
          <div className="container mt-4">
            
            {/* 1.1 & 1.2: The Problem */}
            <div className="narrative-block mb-5">
              <div className="text-center mb-5">
                <span className="badge badge-secondary mb-2 px-3 py-2" style={{ borderRadius: '20px', backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-secondary)' }}>Market Problem</span>
                <h2 className="section-title text-primary fw-bold">한국 소상공인 음식점의 4가지 현실</h2>
              </div>
              
              <div className="row g-4 mb-5">
                <div className="col-md-3">
                  <div className="reality-card h-100 p-4 border rounded-4 bg-light">
                    <div className="text-secondary fw-bold fs-1 mb-2">01</div>
                    <h5 className="fw-bold text-primary mb-3">높은 실패율</h5>
                    <p className="text-muted small">한국 외식업 창업자의 40~60%가 3년 이내에 폐업합니다. 이는 OECD 국가 중 최상위권의 실패율입니다.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="reality-card h-100 p-4 border rounded-4 bg-light">
                    <div className="text-secondary fw-bold fs-1 mb-2">02</div>
                    <h5 className="fw-bold text-primary mb-3">큰 자기자본 부담</h5>
                    <p className="text-muted small">평균 창업 비용 약 2억원(보증금, 권리금, 인테리어, 집기 등). 이 중 상당 부분을 창업자가 직접 부담해야 합니다.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="reality-card h-100 p-4 border rounded-4 bg-light">
                    <div className="text-secondary fw-bold fs-1 mb-2">03</div>
                    <h5 className="fw-bold text-primary mb-3">프랜차이즈 의존</h5>
                    <p className="text-muted small">매출의 5~10% 로열티 지급 및 장기 구속. 본사만 안정적 수익을 얻고, 가맹점주는 실패 리스크를 고스란히 부담합니다.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="reality-card h-100 p-4 border rounded-4 bg-light">
                    <div className="text-secondary fw-bold fs-1 mb-2">04</div>
                    <h5 className="fw-bold text-primary mb-3">투자 유치 차단</h5>
                    <p className="text-muted small">음식점은 벤처투자 대상이 아니며 세제 혜택도 전무합니다. 투자자 입장에서도 체계적 투자 상품이 없어 접근이 어렵습니다.</p>
                  </div>
                </div>
              </div>

              <div className="limitations-box p-5 rounded-4" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <h4 className="fw-bold mb-4 text-center" style={{ color: 'var(--color-secondary)' }}>기존 구조의 한계</h4>
                <p className="text-center mb-4 opacity-80">이 4가지 요인이 결합되어 우리 사회에 3가지 문제가 연쇄적으로 발생하고 있습니다.</p>
                <div className="row g-4">
                  <div className="col-md-4">
                    <div className="limitation-item border-start border-secondary border-3 ps-3">
                      <h6 className="fw-bold text-secondary">소상공인 측면</h6>
                      <p className="small opacity-75 mb-0">자기자본 전부를 잃을 위험 상존. 실패 시 개인 부채로 전환되어 생계 붕괴.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="limitation-item border-start border-secondary border-3 ps-3">
                      <h6 className="fw-bold text-secondary">투자자 측면</h6>
                      <p className="small opacity-75 mb-0">종합소득세율 42~45% 구간의 전문직은 절세에 목마르나, 절세·안전·수익을 결합한 상품 부재.</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="limitation-item border-start border-secondary border-3 ps-3">
                      <h6 className="fw-bold text-secondary">산업 측면</h6>
                      <p className="small opacity-75 mb-0">프랜차이즈 본사만 부를 축적하고, 가맹점 창업자는 계속 교체되는 "소모형 구조" 고착화.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.3: The Solution */}
            <div className="narrative-block mb-5 pt-5 border-top">
              <div className="text-center mb-5">
                <span className="badge badge-primary mb-2 px-3 py-2" style={{ borderRadius: '20px', backgroundColor: 'rgba(11, 25, 44, 0.1)', color: 'var(--color-primary)' }}>Our Solution</span>
                <h2 className="section-title text-primary fw-bold">자본 무부담 외식 벤처 플랫폼</h2>
                <p className="fs-5 text-muted mt-3 max-w-3xl mx-auto">우리는 4주체 협력 구조를 통해 이 문제를 완벽하게 해결합니다.</p>
              </div>

              <div className="solution-diagram p-4 rounded-4 bg-light mb-5 border">
                <p className="text-center text-muted mb-0 lh-lg">
                  (주)엑시톤이 2005년부터 보유한 <strong>창업기획자 인가</strong>를 활용하여 개인투자조합을 결성합니다.<br/>
                  <strong>마스터기업</strong>은 2026년 신설되어 점포 발굴·인큐베이팅·납품·운영지원을 담당합니다.<br/>
                  <strong>개인투자조합</strong>은 LP 20명의 자금 6억원을 점포법인에 투자하고,<br/>
                  <strong>점포법인</strong>은 벤처기업 확인을 받아 실제 음식점을 운영합니다.
                </p>
                <div className="alert alert-warning mt-4 text-center border-0" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: 'var(--color-primary)' }}>
                  <strong>핵심:</strong> 4주체는 법적으로 완전 독립된 법인이며, 업무협약(MOU)으로 협력합니다. <strong>이해상충이 원천적으로 차단되는 구조</strong>입니다.
                </div>
              </div>
            </div>

            {/* 1.4: 3 Engines */}
            <div className="narrative-block mb-5">
              <div className="text-center mb-5">
                <h2 className="section-title text-primary fw-bold">BM이 작동하는 3가지 엔진</h2>
              </div>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="engine-card h-100 p-4 border rounded-4 text-center position-relative overflow-hidden">
                    <div className="engine-icon mb-4 text-secondary"><ShieldCheck size={40} className="mx-auto" /></div>
                    <h5 className="fw-bold text-primary mb-3">1. 인큐베이팅 후 이관 모델</h5>
                    <p className="text-muted small text-start">마스터기업이 6개월간 직영으로 점포를 운영하며 실매출을 검증합니다. 부진한 점포는 투자자 노출 전에 조기 중단됩니다. 투자자(LP)는 <strong>검증된 점포에만 투자</strong>하게 되어 리스크가 크게 낮아집니다.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="engine-card h-100 p-4 border rounded-4 text-center position-relative overflow-hidden">
                    <div className="engine-icon mb-4 text-secondary"><Zap size={40} className="mx-auto" /></div>
                    <h5 className="fw-bold text-primary mb-3">2. 자본 무부담 순환</h5>
                    <p className="text-muted small text-start">LP 자금 6억원은 임대보증금 3억원(담보성), 마스터 납품 2억원, 운영 유보 1억원으로 배분됩니다. 건물주의 인테리어 지원과 주류사의 권리금 대출이 결합되어 자본이 <strong>"태워지지 않고" 순환</strong>합니다.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="engine-card h-100 p-4 border rounded-4 text-center position-relative overflow-hidden">
                    <div className="engine-icon mb-4 text-secondary"><TrendingUp size={40} className="mx-auto" /></div>
                    <h5 className="fw-bold text-primary mb-3">3. 벤처 소득공제 레버리지</h5>
                    <p className="text-muted small text-start">점포법인이 벤처기업(투자형)으로 확인받으면 LP는 조세특례제한법에 따라 <strong>100% 소득공제</strong>를 받습니다. 3천만원 투자 시 1,200~1,500만원을 환급받아, "세금 낼 돈을 투자로 전환"합니다.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Investor Value Section */}
      {/* Investor Value Section (LP) */}
      <section id="investor" className="value-banner-section py-5" style={{ backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.85), rgba(11, 25, 44, 0.95)), url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2000&q=80')` }}>
        <div className="container text-light">
          <div className="text-center mb-5">
            <h2 className="display-title mb-3 text-secondary" style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-1px' }}>투자자(LP)</h2>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.4' }}>
              세금 낼 돈을 투자로 전환하여<br/>확정적 절세와 실물 자산의 주인이 됩니다.
            </h3>
            <div className="purpose-box glass-box mx-auto px-4 py-3">
              <p className="mb-0 lh-lg">
                1구좌 <strong>3,000만원 투자</strong> 기준, 3년 후 <strong>약 4,800만~5,600만원(ROI 160~190%)</strong> 회수를 목표로 합니다.<br/>
                단순 배당을 넘어 세금 환급, 운영 배당, 권리금 차익이 결합된 총회수 구조입니다.
              </p>
            </div>
          </div>
          
          <div className="value-features-grid mt-5">
            <div className="glass-card">
              <div className="text-secondary fw-bold mb-2">투자 즉시</div>
              <h5 className="fs-4">소득공제 환급</h5>
              <h4 className="text-secondary fw-800 my-3">1,200 ~ 1,500만원</h4>
              <p className="opacity-80">조세특례제한법 제16조에 따라 투자액 100% 소득공제 적용 (실질 수익 즉시 확보)</p>
            </div>
            <div className="glass-card">
              <div className="text-secondary fw-bold mb-2">운영 기간 중</div>
              <h5 className="fs-4">분기 배당 누적</h5>
              <h4 className="text-secondary fw-800 my-3">300 ~ 500만원</h4>
              <p className="opacity-80">점포 운영 성과에 따라 3년간 정기적으로 지급되는 실적 연동형 배당 수익</p>
            </div>
            <div className="glass-card">
              <div className="text-secondary fw-bold mb-2">엑시트 발생 시</div>
              <h5 className="fs-4">권리금 및 원금회수</h5>
              <h4 className="text-secondary fw-800 my-3">3,300 ~ 3,600만원</h4>
              <p className="opacity-80">권리금 차익 배당과 투자 원금(3,000만원)을 포함한 최종 자본 회수</p>
            </div>
          </div>
          
          <div className="glass-box mx-auto mt-5 p-4 rounded-4 border-secondary border-opacity-25" style={{ maxWidth: '900px', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
            <div className="row align-items-center text-start">
              <div className="col-md-8">
                <h5 className="text-secondary fw-bold mb-2">🛡️ 강력한 하방 보호 장치 (Downside Protection)</h5>
                <p className="small mb-0 opacity-80">
                  최악의 점포 실패 시에도 <strong>은행 에스크로 임대보증금 선순위 배분</strong>과 <strong>세금 환급</strong>을 통해 투자금의 <strong>60~85% 수준을 우선적으로 회수</strong>할 수 있는 안전장치가 마련되어 있습니다.
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold">투자 상세 가이드 <ArrowRight size={16} className="ml-2 inline" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Value Section */}
      {/* Founder Value Section */}
      <section id="founder" className="value-banner-section py-5" style={{ backgroundImage: `linear-gradient(rgba(11, 25, 44, 0.85), rgba(11, 25, 44, 0.95)), url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=2000&q=80')` }}>
        <div className="container text-light">
          <div className="text-center mb-5">
            <h2 className="display-title mb-3" style={{ fontSize: '3.5rem', fontWeight: 900, color: '#f8fafc', letterSpacing: '-1px' }}>창업자</h2>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.4' }}>
              거액의 자기자본 없이도 실력만 있다면<br/>자신의 매장을 운영하고 성공을 공유합니다.
            </h3>
            <div className="purpose-box glass-box mx-auto px-4 py-3" style={{ borderLeft: '4px solid #f8fafc' }}>
              <p className="mb-0 lh-lg">
                점포법인의 대표이사로서 실질적인 운영 주체가 됩니다.<br/>
                기존의 보증금·권리금 부담을 법인 구조로 해결하여 <strong>무자본에 가까운 창업</strong>을 실현합니다.
              </p>
            </div>
          </div>
          
          <div className="value-features-grid mt-5">
            <div className="glass-card light-glass">
              <h5 className="fs-4 mb-3">안정적 현금흐름</h5>
              <h4 className="fw-800 my-3" style={{ color: '#f8fafc' }}>월 500만원 수준</h4>
              <p className="opacity-80">점포 대표이사로서의 정기 급여를 통해 창업 초기부터 안정적인 생활 기반을 확보합니다.</p>
            </div>
            <div className="glass-card light-glass">
              <h5 className="fs-4 mb-3">운영 성과 보상</h5>
              <h4 className="fw-800 my-3" style={{ color: '#f8fafc' }}>영업이익 기반</h4>
              <p className="opacity-80">점포 운영 성과에 따른 인센티브와 영업이익 기반의 추가 보상을 통해 수익을 극대화합니다.</p>
            </div>
            <div className="glass-card light-glass">
              <h5 className="fs-4 mb-3">엑시트 업사이드</h5>
              <h4 className="fw-800 my-3" style={{ color: '#f8fafc' }}>권리금 배당</h4>
              <p className="opacity-80">매장 양도(Exit) 시 발생하는 권리금에 대해 배당 또는 성과보수 형태로 큰 보상을 확보합니다.</p>
            </div>
          </div>
          
          <div className="mt-5 text-center">
            <div className="d-inline-block p-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', maxWidth: '800px' }}>
              <h5 className="fw-bold mb-3 text-secondary">📋 창업 참여 조건</h5>
              <div className="row text-start g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <ShieldCheck size={18} className="text-secondary" />
                    <span>기본 신용등급 충족 (주류대출 가능 수준)</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <ShieldCheck size={18} className="text-secondary" />
                    <span>실무 운영 역량 및 풀타임 참여 가능자</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <ShieldCheck size={18} className="text-secondary" />
                    <span>필요 시 담보 설정 가능 여부 검토</span>
                  </div>
                </div>
                <div className="col-md-6 text-md-end">
                  <button className="btn btn-outline-light px-4 py-2 rounded-pill fw-bold">창업 프로세스 상담 <ArrowRight size={16} className="ml-2 inline" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
