import React, { useEffect } from 'react';
import './AboutPage.css';
import { ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Chapter 1: 우리가 마주한 현실 */}
      <section className="chapter-hero">
        <div className="hero-image-bg grayscale">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 1 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Chapter 1</div>
            <h1 className="chapter-title text-white">우리가 마주한 현실</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '800px' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                대한민국에서 음식점을 차린 100명 중 절반은 3년 안에 문을 닫습니다. <br/>
                평균 2억이라는 거금을 쏟아붓고도 결국 빚더미와 함께 사라지고 마는 풍경은, <br/>
                어느덧 우리 골목의 흔한 일상이 되었습니다.
              </p>
              <p className="fs-5 fw-light lh-lg">
                누군가는 프랜차이즈 본사에 매출의 10%를 매달 바쳐가며 버티고, 
                또 누군가는 자기 자본 전부를 잃고 신용불량자가 됩니다. <br/>
                음식점은 '벤처'가 아니라는 이유로, 이들의 도전은 어떤 투자자에게도 닿지 못한 채 홀로 꺾여 왔습니다.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <span className="footer-stat text-white fw-bold">3년 내 폐업률 40~60% · 평균 창업비 2억 · 벤처투자 사각지대 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 그래서 우리가 시작했습니다 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 2 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Chapter 2</div>
            <h1 className="chapter-title text-white">그래서 우리가 시작했습니다</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '900px' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                오너스코리아는 단순한 투자 플랫폼이 아닙니다. <br/>
                우리는 <strong>'세금을 내야 하는 전문직'</strong>과 '실력은 있지만 자본이 없는 창업자' <br/>
                — 서로를 모르고 살아온 두 사람이 하나의 식탁에 앉을 수 있도록 다리를 놓는 일을 합니다.
              </p>
              
              <blockquote className="chapter-quote text-secondary fs-3 my-5 py-4 border-top border-bottom border-secondary border-opacity-25">
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

      {/* Chapter 3: 20년의 신뢰 위에 세웠습니다 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 3 Background" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(11, 25, 44, 0.7), rgba(11, 25, 44, 0.9))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Chapter 3</div>
            <h1 className="chapter-title text-white">공인된 전문가들이 함께합니다.</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '800px' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                (주)엑시톤은 2025년부터 중소벤처기업부의 인가를 받아<br/>
                창업보육센터(Bi), 평생교육원을 운영하는 '창업전문기업'입니다.
              </p>
              <p className="fs-5 fw-light lh-lg">
                우리는 '마스터기업'이 검증한 안전한 창업자를 투자자에게 소개합니다. <br/>
                20년 경력의 마스터기업이 창업자의 미숙함을 6개월간 직접 운영하며 매출과 운영을 검증가능한 점포만이, 
                비로소 오너스코리아의 이름으로 투자자 앞에 섭니다. <br/>
                부진한 점포는 투자자가 만나기 전에 조용히 멈춰 섭니다.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <p className="footer-stat text-secondary fw-bold fs-5 m-0 lh-lg">
                  창업기획자 인가 (중소벤처기업부) <br/>
                  창업보육센터 지정 <br/>
                  원격평생교육시설 인가 (교육부)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: 우리가 약속하는 것 */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338988a154f5?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 4 Background" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(11, 25, 44, 0.6), rgba(11, 25, 44, 0.9))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <div className="chapter-label text-secondary">Chapter 4</div>
            <h1 className="chapter-title text-white">우리가 약속하는 것</h1>
            
            <div className="chapter-intro-text text-white opacity-90 mt-5 mx-auto" style={{ maxWidth: '900px' }}>
              <p className="fs-5 fw-light lh-lg mb-4">
                우리는 보장을 약속하지 않습니다. 보장은 법이 허락하지 않을뿐더러, 
                누구도 진실로 보장할 수 없는 일이기 때문입니다.<br/> 대신 우리는 <strong>'구조'</strong>를 약속합니다.
              </p>
              <p className="fs-5 fw-light lh-lg">
                임대보증금에 대한 1순위 우선 상환권으로 투자금의 절반을 지키고, 
                매장이 흔들리기 시작하면 보증금이 깎이기 전에 시스템이 먼저 멈춥니다. <br/>
                세금으로 사라질 1,200만 원이 절세 환급으로 돌아오고, 
                매월 매출이 만든 배당금이 통장에 찍히며, 4년 뒤 권리금 차익까지 합산됩니다.
              </p>
              <blockquote className="chapter-quote text-secondary fs-3 mt-5 pt-4 border-top border-secondary border-opacity-25">
                "보장은 불법이지만, 구조는 과학입니다."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="chapter-hero">
        <div className="hero-image-bg">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80" 
            alt="Closing Background" 
          />
          <div className="hero-overlay" style={{ background: 'linear-gradient(rgba(11, 25, 44, 0.8), rgba(11, 25, 44, 0.95))' }}></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section w-100">
            <h2 className="closing-text text-secondary mb-4" style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.1rem' }}>오너스코리아</h2>
            <h3 className="closing-subtext text-white fw-light" style={{ fontSize: '2.5rem' }}>골목의 숨결을 자산의 가치로.</h3>
            
            <p className="text-white opacity-80 mt-5 fs-5 lh-lg">
              누군가의 희망을 담은 첫 투자로 <br/>
              오늘도 누군가는 첫 매장의 문을 엽니다. <br/>
              새로운 일자리가 창출되고 <br/>
              대한민국의 지방상권이 살아납니다.
            </p>
            
            <div className="mt-5 pt-5">
              <button className="btn btn-primary btn-lg rounded-pill px-5 py-4 fw-bold shadow-lg" style={{ fontSize: '1.2rem' }}>
                오너십 참여하기 <ArrowRight size={24} className="ms-3 inline" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
