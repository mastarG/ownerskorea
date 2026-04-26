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

        {/* Policy & Mission */}
        <div className="policy-section py-5 bg-light">
          <div className="container mt-4">
            <div className="mission-grid">
              {/* Mission 1 */}
              <div className="mission-card">
                <div className="mission-image">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Finance Equity" />
                </div>
                <div className="mission-content">
                  <span className="mission-label">Finance Equity</span>
                  <h4>1. 소상공인 투자 사각지대 해소</h4>
                  <p className="problem"><strong>문제:</strong> 기존 외식업/소상공인은 '벤처투자'에서 소외되어 고리 사채나 담보 대출에 의존.</p>
                  <p className="solution"><strong>해결:</strong> 외식업을 '투자형 벤처기업'으로 체계화하여 자본이 합법적으로 유입되는 통로 개척.</p>
                  <p className="effect text-primary"><strong>효과:</strong> 거대 자본 없이도 창업할 수 있는 금융 민주화 실현.</p>
                </div>
              </div>

              {/* Mission 2 */}
              <div className="mission-card">
                <div className="mission-image">
                  <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80" alt="Urban Regeneration" />
                </div>
                <div className="mission-content">
                  <span className="mission-label">Urban Regeneration</span>
                  <h4>2. 지자체 상가 공실 문제 해결</h4>
                  <p className="problem"><strong>문제:</strong> 상가 공실률 급증으로 인한 지역 경제 침체 및 도시 미관 훼손.</p>
                  <p className="solution"><strong>해결:</strong> 건물주-마스터기업-오너를 연결해 '공실에 최적화된 킬러 브랜드' 매칭 및 자본 투입.</p>
                  <p className="effect text-primary"><strong>효과:</strong> 유령 상가를 맛집으로 변모시켜 상권을 재생하고 건물 가치 상승.</p>
                </div>
              </div>

              {/* Mission 3 */}
              <div className="mission-card">
                <div className="mission-image">
                  <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80" alt="Job Creation" />
                </div>
                <div className="mission-content">
                  <span className="mission-label">Job Creation</span>
                  <h4>3. 청년 및 시니어 고용 문제 해결</h4>
                  <p className="problem"><strong>문제:</strong> 준비되지 않은 창업의 폐업 양산 및 로봇/AI로 인한 일자리 감소.</p>
                  <p className="solution"><strong>해결:</strong> 마스터기업의 표준화된 운영 시스템 하에서 초보 창업자와 실무 인력을 교육 및 채용.</p>
                  <p className="effect text-primary"><strong>효과:</strong> 빚이 남지 않는 유한책임 창업 기회 및 안정적인 커리어 패스 제공.</p>
                </div>
              </div>

              {/* Mission 4 */}
              <div className="mission-card">
                <div className="mission-image">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80" alt="Social Impact" />
                </div>
                <div className="mission-content">
                  <span className="mission-label">Social Impact</span>
                  <h4>4. 자본의 선순환 생태계 구축</h4>
                  <p className="problem"><strong>문제:</strong> 전문직 자본이 부동산 투기 등에 머물러 실물 경제로 흐르지 않음.</p>
                  <p className="solution"><strong>해결:</strong> 절세 혜택(소득공제 100%)을 명분으로 고소득자의 자금을 골목 상권으로 유도.</p>
                  <p className="effect text-primary"><strong>효과:</strong> "내 세금이 우리 동네 가게를 살린다"는 자부심과 실물 경제 활성화.</p>
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
