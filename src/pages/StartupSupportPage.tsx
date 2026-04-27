import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Award, Users, BarChart3, ShieldCheck } from 'lucide-react';
import './StartupSupportPage.css';

const StartupSupportPage: React.FC = () => {
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
  }, []);

  return (
    <div className="startup-support-page">
      {/* Chapter 1: 마스터 기업의 탄생 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dad9998e?auto=format&fit=crop&w=2000&q=80" 
            alt="Medical Team - Hospital Playlist Vibe" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Expertise</div>
            <h1 className="chapter-title text-white">진심을 다하는 전문가,<br/>마스터 기업의 실력</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '850px' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                준비되지 않은 창업은 도박과 같습니다. <br/>
                오너스코리아의 '마스터 기업'은 단순한 컨설턴트를 넘어 <br/>
                진심으로 동료의 성공을 바라는 현장 전문가들의 그룹입니다.
              </p>
              <p className="fs-5 fw-light lh-lg">
                20년의 세월 동안 대한민국 상권의 파고를 직접 넘으며 쌓아온 데이터. <br/>
                그 귀한 경험을 당신의 새로운 시작을 위해 아낌없이 쏟아붓겠습니다.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <span className="footer-stat text-white fw-bold">메디컬·F&B 현장 전문가 50인 · 누적 창업 지원 1,200건 · 5년 생존율 92%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 두 가지 핵심 포커스 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&w=2000&q=80" 
            alt="Medical Consultation" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(11, 25, 44, 0.75), rgba(11, 25, 44, 0.9))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center">
          <div className="hero-content fade-in-section w-100">
            <div className="chapter-label text-secondary">Two Focuses</div>
            <h1 className="chapter-title text-white mb-5">분야별 압도적인 전문성</h1>
            
            <div className="row g-5 mt-2">
              <div className="col-md-6">
                <div className="focus-card p-5 rounded-4 border border-white border-opacity-10 h-100" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <Award size={48} className="text-secondary mb-4" />
                  <h3 className="text-white mb-3">메디컬 창업: 슬기로운 개원 생활</h3>
                  <p className="text-white opacity-75 fw-light lh-lg">
                    과목별 특성에 맞는 입지 분석부터 병원급 공간 설계, 최신 장비 리싱까지. 
                    진료에만 집중할 수 있도록 개원의 모든 과정을 전문가가 책임집니다.
                  </p>
                  <ul className="list-unstyled text-white mt-4 opacity-90">
                    <li className="mb-2"><CheckCircle2 size={16} className="text-secondary me-2 inline" /> 지역별 환자군 데이터 분석</li>
                    <li className="mb-2"><CheckCircle2 size={16} className="text-secondary me-2 inline" /> MSO 기반 경영 지원 시스템</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="focus-card p-5 rounded-4 border border-white border-opacity-10 h-100" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                  <Users size={48} className="text-secondary mb-4" />
                  <h3 className="text-white mb-3">F&B 창업: 흑백의 미학, 미식의 가치</h3>
                  <p className="text-white opacity-75 fw-light lh-lg">
                    치열한 외식 시장에서 살아남는 유일한 방법은 '차별화된 가치'입니다. 
                    스타 셰프의 레시피와 마스터기업의 운영 노하우로 프리미엄 외식 문화를 선도합니다.
                  </p>
                  <ul className="list-unstyled text-white mt-4 opacity-90">
                    <li className="mb-2"><CheckCircle2 size={16} className="text-secondary me-2 inline" /> 브랜드 아이덴티티(BI) 컨설팅</li>
                    <li className="mb-2"><CheckCircle2 size={16} className="text-secondary me-2 inline" /> 홀·주방 오퍼레이션 시스템 구축</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: 과학적인 상권분석과 시스템 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=2000&q=80" 
            alt="Chef - Culinary Class Wars Vibe" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(11, 25, 44, 0.85))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Systematic Approach</div>
            <h1 className="chapter-title text-white">치열함 끝에 도달한 데이터의 정수</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '850px' }}>
              <div className="row g-4 mb-5">
                <div className="col-4">
                  <div className="stat-box py-4">
                    <BarChart3 size={32} className="text-secondary mb-3 mx-auto" />
                    <h5 className="fw-bold">데이터 분석</h5>
                    <p className="small opacity-75">실시간 유동인구 <br/>카드 결제 분석</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-box py-4">
                    <ShieldCheck size={32} className="text-secondary mb-3 mx-auto" />
                    <h5 className="fw-bold">운영 검증</h5>
                    <p className="small opacity-75">전문가 그룹 <br/>6개월 직접 검증</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-box py-4">
                    <Users size={32} className="text-secondary mb-3 mx-auto" />
                    <h5 className="fw-bold">오너십 매칭</h5>
                    <p className="small opacity-75">신뢰 기반의 <br/>자본 파트너십</p>
                  </div>
                </div>
              </div>
              <p className="fs-5 fw-light lh-lg">
                흑백 요리사들의 치열한 전쟁터처럼, 골목 상권 또한 냉혹한 실력의 장입니다. <br/>
                마스터 기업은 그 치열함의 끝에서 살아남은 '성공 방정식'만을 제안합니다. <br/>
                우리가 직접 운영하며 검증한 데이터만이 당신의 창업 무기가 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing: 당신의 도전을 가치로 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80" 
            alt="Business Agreement" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(11, 25, 44, 0.8), rgba(11, 25, 44, 0.95))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <h2 className="closing-text text-secondary mb-4" style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.1rem' }}>창업 지원</h2>
            <h3 className="closing-subtext text-white fw-light" style={{ fontSize: '2.5rem' }}>마스터 기업과 함께, 내일의 사장이 되십시오.</h3>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '800px' }}>
              <p className="fw-light lh-lg">
                실력 있는 창업자가 자본의 벽에 막혀 꿈을 접지 않도록, <br/>
                마스터 기업의 모든 노하우를 쏟아붓겠습니다. <br/>
                지금, 당신의 비즈니스 플랜을 제안하세요.
              </p>
            </div>
            
            <div className="mt-5 pt-5">
              <button className="btn btn-outline-white btn-large">
                창업 지원 신청하기 <ArrowRight size={24} className="ms-3 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupSupportPage;
