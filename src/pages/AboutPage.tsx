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
      <section id="investor" className="value-section py-5">
        <div className="container">
          <div className="value-layout">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="Investor" />
            </div>
            <div className="value-content investor-col">
              <div className="value-header">
                <h2 className="display-title mb-3" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-secondary)', letterSpacing: '-1px' }}>투자자(LP)</h2>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                  세무서로 가던 당신의 자본을<br />우리 동네 맛집의 지분으로.
                </h3>
                <div className="purpose-box mt-4">
                  <strong>이용 목적:</strong> 단순 재테크를 넘어선 <strong>'확정적 절세'</strong>와 <strong>'실물 자산 소유'</strong>의 결합
                </div>
              </div>
              <ul className="value-list">
                <li>
                  <div className="icon"><ShieldCheck size={24} /></div>
                  <div className="content">
                    <h5>100% 소득공제</h5>
                    <p>투자금 전액 소득공제로 즉시 약 40% 이상의 실질 수익(환급)을 확보합니다.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><TrendingUp size={24} /></div>
                  <div className="content">
                    <h5>보증금 선순위 상환</h5>
                    <p>임대보증금 1배수를 LP 우선권으로 설정하여 원금 하방 리스크를 원천 방어합니다.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><Store size={24} /></div>
                  <div className="content">
                    <h5>관전하는 재미</h5>
                    <p>OMO-Vision과 실시간 매출 추적을 통해 '내가 주인인 가게'를 보는 경영의 즐거움을 드립니다.</p>
                  </div>
                </li>
              </ul>
              <button className="btn btn-primary w-full mt-4">투자 상품 보기 <ArrowRight size={16} className="ml-2 inline" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Value Section */}
      <section id="founder" className="value-section py-5 bg-light">
        <div className="container">
          <div className="value-layout reverse-layout">
            <div className="value-image">
              <img src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=800&q=80" alt="Founder" />
            </div>
            <div className="value-content founder-col">
              <div className="value-header">
                <h2 className="display-title mb-3" style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--color-primary)', letterSpacing: '-1px' }}>창업자</h2>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                  실력은 당신이, 자본은 오너스코리아가.<br />1,000만 원으로 여는 당신의 첫 매장.
                </h3>
                <div className="purpose-box mt-4">
                  <strong>이용 목적:</strong> 거대 자본 없이도 '유한책임' 하에 자신의 브랜드와 실력을 마음껏 펼치는 창업
                </div>
              </div>
              <ul className="value-list">
                <li>
                  <div className="icon"><Target size={24} /></div>
                  <div className="content">
                    <h5>자본 무부담</h5>
                    <p>보증금과 인테리어비 등 초기 거대 자본을 오너스 펀드로 해결합니다. (본인 부담 단 1,000만 원)</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><ShieldCheck size={24} /></div>
                  <div className="content">
                    <h5>리스크 격리</h5>
                    <p>벤처법인 구조를 통해 실패 시에도 신용불량 우려가 없는 극도로 안전한 도전을 지원합니다.</p>
                  </div>
                </li>
                <li>
                  <div className="icon"><Users size={24} /></div>
                  <div className="content">
                    <h5>전문가 밀착 지원</h5>
                    <p>20년 업력의 엑시톤 AC와 마스터기업의 운영 시스템을 그대로 전수받아 폐업률 0%를 지향합니다.</p>
                  </div>
                </li>
              </ul>
              <button className="btn btn-outline w-full mt-4">창업 문의하기 <ArrowRight size={16} className="ml-2 inline" /></button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
