import { Link } from 'react-router-dom';
import './Marketplace.css';
import thumb1 from '../assets/thumb1.png';
import thumb2 from '../assets/thumb2.png';

const investments = [
  {
    id: 1,
    title: '스시 오마카세 류',
    category: '외식업',
    type: '일식/오마카세',
    totalAmount: '9억',
    totalAccounts: 30,
    returnRate: '12.5%',
    progress: 85,
    image: thumb1,
    status: '모집중'
  },
  {
    id: 2,
    title: '메종 드 비프',
    category: '외식업',
    type: '파인다이닝',
    totalAmount: '12억',
    totalAccounts: 40,
    returnRate: '10.8%',
    progress: 100,
    image: thumb2,
    status: '모집완료'
  },
  {
    id: 3,
    title: '카페 에스프레소 바',
    category: '외식업',
    type: '카페/베이커리',
    totalAmount: '6억',
    totalAccounts: 20,
    returnRate: '9.5%',
    progress: 45,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400&h=300&auto=format&fit=crop",
    status: '모집중'
  },
  {
    id: 4,
    title: '와인바 빈티지',
    category: '외식업',
    type: '주점/와인바',
    totalAmount: '8억',
    totalAccounts: 26,
    returnRate: '11.0%',
    progress: 15,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=400&h=300&auto=format&fit=crop",
    status: '모집중'
  }
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="section marketplace">
      <div className="container">
        <div className="marketplace-header">
          <div>
            <h2 className="section-title text-left">프리미엄 매장 투자</h2>
            <p className="section-subtitle text-left">
              검증된 상권의 하이엔드 매장에 투자하고 매월 배당을 받으세요.
            </p>
          </div>
          <div className="carousel-indicator">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="marketplace-grid">
          {investments.map((item) => (
            <Link key={item.id} to={`/investments/${item.id}`} className="investment-card-link">
              <div className="investment-card">
                <div className="card-image-wrapper">
                  <img src={item.image} alt={item.title} className="card-image" />
                  <div className={`status-badge ${item.status === '모집완료' ? 'completed' : 'active'}`}>
                    {item.status}
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="card-header">
                    <div className="card-category">
                      <span>{item.category}</span>
                      <span className="dot">•</span>
                      <span>{item.type}</span>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                  </div>

                  <div className="card-details">
                    <div className="detail-row">
                      <span className="detail-label">총 모집액</span>
                      <span className="detail-value">{item.totalAmount}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">총 모집구좌</span>
                      <span className="detail-value">{item.totalAccounts}구좌</span>
                    </div>
                    <div className="detail-row highlight-row">
                      <span className="detail-label">예상 수익률</span>
                      <span className="detail-value text-danger">{item.returnRate}</span>
                    </div>
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span className="progress-label">모집률 {item.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div 
                        className={`progress-bar-fill ${item.status === '모집완료' ? 'completed' : 'active'}`} 
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className={`btn w-full mt-4 ${item.status === '모집완료' ? 'btn-outline disabled' : 'btn-primary'}`}>
                    {item.status === '모집완료' ? '모집 완료' : '상세 보기'}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
