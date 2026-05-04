import { Link } from 'react-router-dom';
import './Marketplace.css';
import { ChevronRight } from 'lucide-react';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';

const investments = [
  {
    id: 1,
    rank: 1,
    title: '스시 오마카세 류',
    category: '외식업',
    location: '서울 강남구',
    size: '42평',
    dailyDividend: '42,500원',
    image: thumb1,
    tags: ['모집중', 'BEST', '매거진', '투자상품']
  },
  {
    id: 2,
    rank: 2,
    title: '메종 드 비프',
    category: '외식업',
    location: '서울 서초구',
    size: '55평',
    dailyDividend: '68,200원',
    image: thumb2,
    tags: ['모집중', 'BEST', '투자상품']
  },
  {
    id: 3,
    rank: 3,
    title: '더 맑은 피부과',
    category: '병원',
    location: '서울 강남구',
    size: '80평',
    dailyDividend: '125,000원',
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    tags: ['모집중', 'BEST', '매거진']
  },
  {
    id: 4,
    rank: 4,
    title: '카페 에스프레소 바',
    category: '카페',
    location: '경기 성남시',
    size: '18평',
    dailyDividend: '28,400원',
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    tags: ['모집중', 'BEST', '투자상품']
  }
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="section marketplace">
      <div className="container">
        <div className="marketplace-header-v2">
          <div className="header-label">BEST</div>
          <h2 className="header-title">실시간 BEST 컨텐츠</h2>
        </div>

        <div className="marketplace-grid">
          {investments.map((item) => (
            <Link key={item.id} to={`/investments/${item.id}`} className="investment-card-link">
              <div className="best-card">
                <div className="best-card-image-wrapper">
                  <img src={item.image} alt={item.title} className="best-card-image" />
                  <div className="rank-badge">{item.rank}위</div>
                </div>
                
                <div className="best-card-content">
                  <div className="best-card-category">
                    {item.category} <ChevronRight size={14} className="category-arrow" />
                  </div>
                  
                  <h3 className="best-card-title">{item.title}</h3>
                  
                  <div className="best-card-info">
                    {item.location} | {item.size}
                  </div>

                  <div className="best-card-pricing">
                    <div className="price-label">예상배당액</div>
                    <div className="price-value">일 배당 {item.dailyDividend}</div>
                  </div>

                  <div className="best-card-tags">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className={`best-tag ${tag === '모집중' ? 'tag-recruiting' : ''}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="marketplace-footer-v2">
          <Link to="/investments" className="btn-more-content">
            더 많은 컨텐츠 <ChevronRight size={18} className="ms-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
