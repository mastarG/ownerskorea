import { Quote } from 'lucide-react';
import './Testimonials.css';
import portraitDoctor from '../assets/portrait-doctor.png';
import portraitLawyer from '../assets/portrait-lawyer.png';

const testimonials = [
  {
    id: 1,
    quote: <>개원 후 세금 문제로 고민이 많았는데, 오너스코리아를 통해 <span className="highlight-text">절세 효과와 안정적인 현금흐름</span>을 만들 수 있었습니다.</>,
    name: "김민호 원장",
    profession: "피부과 전문의",
    image: portraitDoctor
  },
  {
    id: 2,
    quote: <>주식이나 코인은 변동성이 커서 부담스러웠습니다. 오너스코리아는 <span className="highlight-text">실제 매출이 발생하는 우량 매장에 투자하여 꾸준한 수익</span>을 주는 것이 장점입니다.</>,
    name: "이승준 변호사",
    profession: "법무법인 파트너 변호사",
    image: portraitLawyer
  },
  {
    id: 3,
    quote: <>매일 실시간으로 점포 매출 데이터를 확인할 수 있어 투명합니다. <span className="highlight-text">3천만 원 단위로 A급 상권에 분산 투자</span>할 수 있어 매우 만족스럽습니다.</>,
    name: "최수영 이사",
    profession: "IT 기업 임원",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 4,
    quote: <>단순히 이자만 받는 게 아니라 진짜 '가게 사장님'이 된 것 같은 재미가 있습니다. <span className="highlight-text">매일매일의 현장 리포트를 읽는 것</span>도 쏠쏠한 즐거움입니다.</>,
    name: "박지훈 대표",
    profession: "스타트업 창업가",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 5,
    quote: <>세무 대리인으로서 고객들에게 적극 추천하는 모델입니다. <span className="highlight-text">100% 소득공제와 50% 우선순위 상환권</span> 구조는 법적으로도 매우 안전합니다.</>,
    name: "정서윤 세무사",
    profession: "회계법인 파트너",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
  },
  {
    id: 6,
    quote: <>바쁜 스케줄 탓에 부동산 임장조차 가기 힘든데, <span className="highlight-text">앱 하나로 프리미엄 매장의 주인이 되어 배당</span>을 받을 수 있다는 점이 매력적입니다.</>,
    name: "강태오 교수",
    profession: "대학병원 외과",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div>
            <h2 className="section-title text-left" style={{ marginBottom: 0 }}>Owners Voice</h2>
          </div>
        </div>
      </div>
      
      {/* Marquee Wrapper */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Double the list to create an infinite scroll illusion */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={`${item.id}-${index}`} className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-quote">{item.quote}</p>
              
              <div className="testimonial-author">
                <img src={item.image} alt={item.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-title">{item.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
