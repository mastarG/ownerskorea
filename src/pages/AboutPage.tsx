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
      {/* Chapter 1: 우리가 마주한 현실 - Full-screen Intro with Text inside Image */}
      <section className="chapter-hero chapter-1">
        <div className="hero-image-bg grayscale">
          <img 
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=2000&q=80" 
            alt="Chapter 1 Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="hero-content text-center fade-in-section">
            <div className="chapter-label text-secondary">Chapter 1</div>
            <h1 className="chapter-title text-white">우리가 마주한 현실</h1>
            <div className="chapter-intro-text text-white-50 mt-4 mx-auto" style={{ maxWidth: '800px' }}>
              <p className="fs-4 fw-light lh-lg">
                대한민국 음식점 사장님 100명 중 절반은 3년 안에 문을 닫습니다. <br/>
                평균 2억이라는 거금을 쏟아붓고도 결국 빚더미와 함께 사라지는 풍경은 <br/>
                어느덧 우리 골목의 시린 일상이 되었습니다.
              </p>
              <div className="chapter-footer mt-5 pt-4 border-top border-white border-opacity-25">
                <span className="footer-stat text-white">3년 내 폐업률 40~60% · 평균 창업비 2억 · 벤처투자 사각지대 100%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 Sub-text (The detailed narrative) */}
      <section className="narrative-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 fade-in-section">
              <div className="chapter-text text-center">
                <p>
                  누군가는 프랜차이즈 본사에 매출의 10%를 매달 바쳐가며 버티고, 
                  또 누군가는 자기 자본 전부를 잃고 신용불량자가 됩니다. 
                  음식점은 '벤처'가 아니라는 이유로, 이들의 도전은 어떤 투자자에게도 닿지 못한 채 홀로 꺾여 왔습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 그래서 우리가 시작했습니다 */}
      <section className="chapter-section chapter-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-lg-2">
              <div className="magazine-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1550966841-3ee4ad00a30b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Warm beginning" 
                  className="magazine-image"
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1 pe-lg-5 fade-in-section">
              <div className="chapter-label text-secondary">Chapter 2</div>
              <h2 className="chapter-title">그래서 우리가<br/>시작했습니다</h2>
              <div className="chapter-text">
                <p>
                  오너스코리아는 단순한 투자 플랫폼이 아닙니다. 
                  우리는 <strong>'세금을 내야 하는 전문직'</strong>과 '실력은 있지만 자본이 없는 창업자' 
                  — 서로를 모르고 살아온 두 사람이 하나의 식탁에 앉을 수 있도록 다리를 놓습니다.
                </p>
                <blockquote className="chapter-quote">
                  "내 세금이 우리 동네 사장님의 꿈이 되고,<br/>그 꿈이 다시 내 자산으로 돌아옵니다."
                </blockquote>
                <p>
                  전문직의 세금이 사라지지 않고 우리 동네 맛집의 자본이 되고, 
                  창업자의 땀이 누군가의 안정적인 노후가 되는 구조. 
                  그것이 우리가 만들고자 하는 상생형 오너십 생태계입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: 20년의 신뢰 위에 세웠습니다 */}
      <section className="chapter-section chapter-3 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="magazine-image-container left">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                  alt="20 years of trust" 
                  className="magazine-image"
                />
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5 fade-in-section">
              <div className="chapter-label text-secondary">Chapter 3</div>
              <h2 className="chapter-title">20년의 신뢰 위에<br/>세웠습니다</h2>
              <div className="chapter-text">
                <p>
                  오너스코리아는 한순간의 아이디어가 아닌, 20년의 축적된 신뢰에서 출발했습니다. 
                  우리의 모기업 (주)엑시톤은 2005년부터 중소벤처기업부의 창업기획자로 활동해 온 정통 액셀러레이터입니다.
                </p>
                <p>
                  우리는 검증된 점포만을 투자자에게 소개합니다. 
                  마스터기업이 6개월간 직접 운영하며 매출과 운영의 진정성을 검증한 점포만이, 
                  비로소 오너스코리아의 이름으로 투자자 앞에 섭니다. 
                </p>
              </div>
              <div className="chapter-footer mt-5 pt-4 border-top border-secondary border-opacity-25">
                <p className="footer-stat fw-bold text-primary">
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
      <section className="chapter-section chapter-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-lg-2">
              <div className="magazine-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80" 
                  alt="Our promise" 
                  className="magazine-image"
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1 pe-lg-5 fade-in-section">
              <div className="chapter-label text-secondary">Chapter 4</div>
              <h2 className="chapter-title">우리가 약속하는 것</h2>
              <div className="chapter-text">
                <p>
                  우리는 보장을 약속하지 않습니다. 보장은 법이 허락하지 않을뿐더러, 
                  누구도 진실로 보장할 수 없는 일이기 때문입니다. 대신 우리는 <strong>'구조'</strong>를 약속합니다.
                </p>
                <p>
                  임대보증금에 대한 1순위 우선 상환권으로 투자금의 절반을 지키고, 
                  매장이 흔들리기 시작하면 시스템이 먼저 멈춤니다. 
                </p>
                <blockquote className="chapter-quote">
                  "보장은 불법이지만, 구조는 과학입니다."
                </blockquote>
                <p>
                  세금으로 사라질 1,200만 원이 절세 환급으로 돌아오고, 
                  매월 매출이 만든 배당금이 통장에 찍히며, 4년 뒤 권리금 차익까지 합산되는 시스템.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="closing-section d-flex align-items-center justify-content-center text-center">
        <div className="closing-overlay"></div>
        <div className="container position-relative z-index-2 fade-in-section">
          <h2 className="closing-text text-secondary mb-4">오너스코리아.</h2>
          <h3 className="closing-subtext text-light">골목의 숨결을 자산의 가치로.</h3>
          <div className="mt-5">
            <button className="btn btn-primary btn-lg rounded-pill px-5 py-4 fw-bold">
              상생형 오너십 참여하기 <ArrowRight size={24} className="ms-3 inline" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
