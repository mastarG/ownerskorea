import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Footer from "../components/Footer";
import "./AboutPage.css";

const AboutPage: React.FC = () => {

  const [activeSection, setActiveSection] = useState(0);

  const realityRef = useRef<HTMLElement>(null);
  const startRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLElement>(null);
  const promiseRef = useRef<HTMLElement>(null);
  const closingRef = useRef<HTMLElement>(null);

  const sectionRefs = [realityRef, startRef, trustRef, promiseRef, closingRef];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

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
          }
        }
      });
    }, indicatorOptions);

    sectionRefs.forEach(ref => {
      if (ref.current) indicatorObserver.observe(ref.current);
    });

    return () => {
      observer.disconnect();
      indicatorObserver.disconnect();
    };
  }, []);

  const scrollToSection = (index: number) => {
    const ref = sectionRefs[index];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="about-page">
      {/* Vertical Indicator */}
      <div className="page-indicator-v5">
        {sectionRefs.map((_, idx) => (
          <div 
            key={idx} 
            className={`indicator-dot-v5 ${activeSection === idx ? 'active' : ''}`}
            onClick={() => scrollToSection(idx)}
          />
        ))}
      </div>

      {/* Chapter 1: 우리가 마주한 현실 */}
      <section className="chapter-hero" ref={realityRef}>

        <div className="hero-image-bg grayscale">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 1 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label">Chapter 1</div>
            <h1 className="chapter-title">우리가 마주한 현실</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '1200px', wordBreak: 'keep-all' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                대한민국에서 음식점을 차린 100명 중 절반은 3년 안에 문을 닫습니다. <br/>
                평균 2억이라는 거금을 쏟아붓고도 결국 빚더미와 함께 사라지고 마는 풍경은, <br/>
                어느덧 우리 골목의 흔한 일상이 되었습니다.
              </p>
              
              <blockquote className="chapter-quote fs-3 my-5">
                "음식점은 '벤처'가 아니라는 이유로, <br/> 홀로 꺾여가는 도전들이 있습니다."
              </blockquote>

              <p className="fs-5 fw-light lh-lg">
                누군가는 프랜차이즈 본사에 매출의 10%를 매달 바쳐가며 버티고, 
                또 누군가는 자기 자본 전부를 잃고 신용불량자가 됩니다. <br/>
                이들의 간절함이 어떤 투자자에게도 닿지 못한 채 사라지지 않도록.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <span className="footer-stat text-white fw-bold">3년 내 폐업률 40~60% · 평균 창업비 2억 · 벤처투자 사각지대 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 그래서 시작 되었습니다. */}
      <section className="chapter-hero chapter-2" ref={startRef}>

        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 2 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label">Chapter 2</div>
            <h1 className="chapter-title text-nowrap">그래서 시작 되었습니다.</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '1200px', wordBreak: 'keep-all' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                오너스코리아는 단순한 투자 플랫폼이 아닙니다. <br/>
                우리는 <strong>'세금을 내야 하는 전문직'</strong>과 '실력은 있지만 자본이 없는 창업자' <br/>
                — <br/>
                서로를 모르고 살아온 두 사람이 하나의 식탁에 앉을 수 있도록 다리를 놓는 일을 합니다.
              </p>
              
              <blockquote className="chapter-quote fs-3 my-5">
                "내 세금이 우리 동네 사장님의 꿈이 되고, <br/> 그 꿈이 다시 내 자산으로 돌아옵니다."
              </blockquote>
              
              <p className="fs-5 fw-light lh-lg">
                전문직의 세금이 사라지지 않고 우리 동네 맛집의 자본이 되고, 
                창업자의 땀이 누군가의 안정적인 노후가 되는 구조.<br/> 
                그것이 우리가 만들고자 하는 상생형 오너십 생태계입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: 공인된 전문가들이 함께합니다 */}
      <section className="chapter-hero chapter-3" ref={trustRef}>

        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 3 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label">Chapter 3</div>
            <h1 className="chapter-title">공인된 전문가들이 함께합니다</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '1200px', wordBreak: 'keep-all' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                (주)엑시톤은 중소벤처기업부의 인가를 받아<br/>
                창업보육센터(BI), 평생교육원을 운영하는 '창업전문기업'입니다.
              </p>

              <blockquote className="chapter-quote fs-3 my-5">
                "20년 경력의 마스터기업이 <br/> 창업자의 실력을 6개월간 직접 검증합니다."
              </blockquote>

              <p className="fs-5 fw-light lh-lg">
                우리는 '마스터기업'이 검증한 안전한 창업자를 투자자에게 소개합니다. <br/>
                매출과 운영이 철저히 검증된 점포만이 비로소 오너스코리아의 이름으로 투자자 앞에 섭니다. <br/>
                부진한 점포는 투자자가 만나기 전에 조용히 멈춰 섭니다.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <span className="footer-stat text-white fw-bold">중기부 창업기획자 인가 · 창업보육센터 지정 · 교육부 평생교육시설 인가</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: 우리가 약속하는 것 */}
      <section className="chapter-hero" ref={promiseRef}>

        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338988a154f5?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 4 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label">Chapter 4</div>
            <h1 className="chapter-title">우리가 약속하는 것</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '1200px', wordBreak: 'keep-all' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                우리는 보장을 약속하지 않습니다. 보장은 법이 허락하지 않을뿐더러, <br/>
                누구도 진실로 보장할 수 없는 일이기 때문입니다.
              </p>

              <blockquote className="chapter-quote fs-3 my-5">
                "보장 대신, <br/> 지속가능한 '구조'를 약속합니다."
              </blockquote>

              <p className="fs-5 fw-light lh-lg">
                1순위 우선 상환권으로 투자금을 지키고, 보증금이 깎이기 전에 시스템이 먼저 멈춥니다. <br/>
                절세 환급과 매월 배당, 그리고 4년 뒤 권리금 차익까지. <br/>
                지속가능한 구조의 발견이 바로 오너스코리아가 정의하는 혁신입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 5: 함께 만드는 새로운 가치 */}
      <section className="chapter-hero chapter-5" ref={closingRef}>

        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80" 
            alt="Closing Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label">Chapter 5</div>
            <h1 className="chapter-title text-nowrap">함께 만드는 새로운 가치</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '1200px', wordBreak: 'keep-all' }}>
              <p className="fs-5 fw-light lh-lg mb-4 text-nowrap">
                누군가의 희망을 담은 첫 투자로 오늘 누군가는 첫 매장의 문을 엽니다. <br/>
                새로운 일자리가 창출되고 대한민국의 지방상권이 살아납니다.
              </p>

              <blockquote className="chapter-quote fs-3 my-5">
                "골목의 숨결을 <br/> 자산의 가치로 바꿉니다."
              </blockquote>
              
              <p className="fs-5 fw-light lh-lg mb-5">
                <span style={{ whiteSpace: 'nowrap' }}>당신의 투자가 실력 있는 창업자의 꿈을 깨우고, 우리 골목의 새로운 가치를 만듭니다.</span> <br/>
                지금 오너스코리아의 혁신적인 투자 매거진을 확인해보세요.
              </p>

              <div className="mt-5">
                <Link to="/investments" className="btn-outline-v5 text-decoration-none py-3 px-5 fs-5">
                  참여하기 <ArrowRight size={24} className="ms-3 inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section with Snap Support */}
      <section className="snap-footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default AboutPage;
