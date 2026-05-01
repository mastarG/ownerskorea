import { Scale, FileText, Users, ShieldCheck, ArrowRight, MessageSquare, Calculator, Gavel } from 'lucide-react';
import './LegalAccountingPage.css';

const LegalAccountingPage = () => {
  const services = [
    {
      icon: <Scale className="service-icon-la" />,
      title: "법률 자문 서비스",
      description: "창업부터 운영까지, 전문가의 법률 검토를 통해 리스크를 사전에 방지하세요.",
      features: ["계약서 검토 및 작성", "인허가 및 규제 자문", "노무 및 인사 법률 지원"]
    },
    {
      icon: <Calculator className="service-icon-la" />,
      title: "세무·회계 최적화",
      description: "복잡한 세무 행정을 자동화하고 전문가의 절세 전략을 제안받으세요.",
      features: ["월별 기장 서비스", "법인세·소득세 신고", "절세 플래닝 및 세무 조사 대응"]
    },
    {
      icon: <ShieldCheck className="service-icon-la" />,
      title: "컴플라이언스 지원",
      description: "정기적인 진단을 통해 비즈니스의 영속성과 신뢰성을 확보합니다.",
      features: ["정기 법무 감사", "개인정보 보호 정책 수립", "내부 통제 시스템 구축"]
    }
  ];

  const experts = [
    {
      name: "이지훈 변호사",
      firm: "법무법인 에이펙스",
      specialty: "기업 법무 / M&A",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "박서윤 세무사",
      firm: "세무회계 테크",
      specialty: "스타트업 절세 / 투자 회계",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "최민성 회계사",
      firm: "한울 회계법인",
      specialty: "재무 진단 / IPO 자문",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="legal-accounting-page">
      {/* Hero Section */}
      <section className="la-hero">
        <div className="la-hero-overlay"></div>
        <div className="container la-hero-content">
          <div className="la-badge">Premium Expert Support</div>
          <h1>법률과 세무의 장벽을 넘어<br /><span>비즈니스의 성장에 집중</span>하세요</h1>
          <p>오너스코리아가 검증한 국내 최고 수준의 전문가들이<br />귀하의 비즈니스를 법적, 재무적으로 보호합니다.</p>
          <div className="la-hero-btns">
            <button className="btn btn-primary btn-lg">무료 진단 신청하기</button>
            <button className="btn btn-outline-white btn-lg">서비스 가이드 보기</button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="la-services container">
        <div className="la-section-header">
          <h2>전문가 솔루션</h2>
          <p>오너들을 위한 맞춤형 통합 지원 서비스</p>
        </div>
        <div className="la-services-grid">
          {services.map((s, i) => (
            <div key={i} className="la-service-card">
              <div className="la-card-icon-wrapper">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <ul className="la-feature-list">
                {s.features.map((f, j) => (
                  <li key={j}><ArrowRight size={14} className="mr-2" /> {f}</li>
                ))}
              </ul>
              <button className="la-card-btn">자세히 보기</button>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Network */}
      <section className="la-experts">
        <div className="container">
          <div className="la-section-header light">
            <h2>검증된 전문가 그룹</h2>
            <p>분야별 최고의 실무 경험을 보유한 파트너들을 만나보세요</p>
          </div>
          <div className="la-experts-grid">
            {experts.map((e, i) => (
              <div key={i} className="la-expert-card">
                <div className="la-expert-img">
                  <img src={e.image} alt={e.name} />
                </div>
                <div className="la-expert-info">
                  <span className="la-expert-firm">{e.firm}</span>
                  <h4>{e.name} {i === 0 ? "변호사" : i === 1 ? "세무사" : "회계사"}</h4>
                  <p>{e.specialty}</p>
                  <button className="btn-consult">상담 예약</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="la-cta container">
        <div className="la-cta-box">
          <div className="la-cta-content">
            <MessageSquare size={48} className="mb-4" />
            <h2>지금 바로 상담이 필요하신가요?</h2>
            <p>비즈니스 리스크 진단부터 전문 상담까지, 실시간으로 지원해 드립니다.</p>
            <div className="la-cta-btns">
              <button className="btn btn-secondary btn-lg">1:1 실시간 문의</button>
              <button className="btn btn-outline-gold btn-lg">전문가 매칭 요청</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalAccountingPage;
