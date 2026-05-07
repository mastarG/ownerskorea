import { useState } from 'react';
import './Marketplace.css';
import { ChevronRight } from 'lucide-react';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';

const investmentsData = [
  {
    id: 1,
    title: '스시 오마카세 류',
    location: '서울 강남구',
    rent: '450만원',
    investment: '8억 5,000만원',
    dailyDividend: '42,500원',
    image: thumb1
  },
  {
    id: 2,
    title: '메종 드 비프',
    location: '서울 서초구',
    rent: '680만원',
    investment: '12억 2,000만원',
    dailyDividend: '68,200원',
    image: thumb2
  },
  {
    id: 3,
    title: '더 맑은 피부과',
    location: '서울 강남구',
    rent: '1,200만원',
    investment: '25억 4,000만원',
    dailyDividend: '125,000원',
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: '카페 에스프레소 바',
    location: '경기 성남시',
    rent: '280만원',
    investment: '4억 8,000만원',
    dailyDividend: '28,400원',
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: '프리미엄 라운지',
    location: '서울 용산구',
    rent: '950만원',
    investment: '18억 6,000만원',
    dailyDividend: '92,000원',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  }
];

const Marketplace = () => {
  // Use state to manage the order of cards. The last one in the 'order' array is the front-most.
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const handleCardClick = (clickedIndex: number) => {
    // Plan A: Reorder so the clicked card comes to the front (rightmost/index 4 in visual stack)
    const newOrder = [...order];
    const currentIndex = newOrder.indexOf(clickedIndex);

    // Move the clicked card to the end of the array
    newOrder.splice(currentIndex, 1);
    newOrder.push(clickedIndex);
    setOrder(newOrder);
  };

  return (
    <section id="marketplace" className="section marketplace-cascading-v6">
      <div className="container">
        <div className="marketplace-header-v2">
          <div className="now-label">NOW</div>
        </div>

        <div className="cascading-container-layout-v6">
          {/* Left: 3D Cascading Diagonal Stack */}
          <div className="stack-area-v6">
            {order.map((itemIdx, visualPos) => {
              const item = investmentsData[itemIdx];
              // visualPos 0 is back-most (left), visualPos 4 is front-most (right)
              const depth = 4 - visualPos;
              const scales = [1.0, 0.9, 0.8, 0.7, 0.6];
              const scale = scales[depth];
              const leftPos = visualPos * 15; 
              const rotateY = 30;
              const zIndex = visualPos + 1;
              const opacity = 1 - (depth * 0.1);

              return (
                <div 
                  key={item.id} 
                  className={`cascading-card-v6 ${depth === 0 ? 'active' : ''}`}
                  style={{
                    left: `${leftPos}%`,
                    zIndex: zIndex,
                    transform: `rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    transition: 'all 0.5s ease'
                  }}
                  onClick={() => handleCardClick(itemIdx)}
                >
                  <div className="card-inner-v6">
                    <img src={item.image} alt={item.title} className="card-img-v6" />

                    {/* Bottom Gradient for Text Readability */}


                    {/* Card Content Overlay */}
                    <div className="card-content-v6">
                      <div className="card-top-info-v6">
                        {item.title} <span className="divider">ㅣ</span> {item.location}
                      </div>


                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Messaging Area */}
          <div className="message-area-v6">
            <div className="message-content-v6">
              <h3 className="message-title-v6">
                실시간 BEST 컨텐츠<br />
                비지니스를 추천합니다.
              </h3>
              <p className="message-text-v6">
                마스터 그룹을 통해서 선정되고 인큐베이팅된 전문기업에 투자하세요! <br />
                모든 업종을 아우르는 전문가들이 검증한 선택지가 준비되어 있습니다.
              </p>

              <button className="btn-more-content-v6">
                더 많은 콘텐츠 <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;


