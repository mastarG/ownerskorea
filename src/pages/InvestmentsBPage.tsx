import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star, Heart } from 'lucide-react';
import './InvestmentsBPage.css';

// Import shared data
import { ALL_INVESTMENTS } from '../data/investments';

interface InvestmentItem {
  id: number | string;
  title: string;
  image: string;
  category: string;
  location: string;
  deposit: string;
  size: string;
  returnRate: string;
  totalAmount: string;
  status: string;
}

interface InvestmentsBPageProps {
  onOpenLogin: () => void;
}
const InvestmentsBPage = ({ onOpenLogin }: InvestmentsBPageProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleDetailClick = (item: InvestmentItem) => {
    if (item.title === '스시 오마카세 류') {
      navigate(`/investments/${item.id}`);
    } else {
      onOpenLogin();
    }
  };

  const investmentItems: InvestmentItem[] = ALL_INVESTMENTS.map(item => ({
    id: item.id,
    title: item.title,
    image: item.image,
    category: item.subCategory, // 업종 (카페, 일식 등)
    location: item.location,
    deposit: item.deposit,
    size: item.size,
    returnRate: item.returnRate,
    totalAmount: item.totalAmount,
    status: item.status
  }));

  const categories = [
    {
      title: "최근등록",
      subtitle: "(Recently Added)",
      items: investmentItems.slice(0, 4),
    },
    {
      title: "스타트업",
      subtitle: "(Startup)",
      items: investmentItems.slice(0, 16), // Enough to fill 4 rows (4x4)
    }
  ];

  return (
    <div className="investments-b-page creatoom-theme">
      {/* Hero Section - Premium Navy Theme */}
      <section className="inv-b-hero" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2400&q=80)` }}>
        <div className="hero-overlay-navy"></div>
        <div className="container hero-container">
          <div className="hero-content-b">
            <p className="hero-subtitle-b">오너스코리아가 제안하는</p>
            <h1 className="hero-title-b">프리미엄 투자 정보</h1>
            <p className="hero-desc-b">
              투명한 데이터와 전문가의 분석을 통해 검증된<br />
              실제 매장 기반의 안정적인 투자 기회를 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* Row Containers */}
      <section className="inv-b-rows">
        {categories.map((cat, idx) => (
          <div key={idx} className="inv-b-category-row">
            <div className="container">
              <h2 className="inv-b-category-title">
                {cat.title} <span className="inv-b-category-eng">{cat.subtitle}</span> <ChevronRight size={20} className="cat-arrow" />
              </h2>
              
              <div className="creatoom-grid">
                {cat.items.map((item) => (
                  <div key={item.id} className="creatoom-card free-product-card">
                    {/* Header Overlay - Moved outside sliding content to stay fixed */}
                    <div className="header-overlay">
                      <div className="badge-free">{item.category}</div>
                      <div className="wish-icon">
                        <Heart size={20} className="heart-icon" />
                      </div>
                    </div>

                    {/* Sliding Content Container */}
                    <div className="sliding-content">
                      {/* Product Image Area */}
                      <div className="product-image-wrapper">
                        <img src={item.image} alt={item.title} className="product-image" />
                      </div>

                      {/* Info Area */}
                      <div className="info-area">
                        <div className="title-box">
                          <span className="title-line1">{item.title}</span>
                          <span className="title-line2">{item.location}</span>
                        </div>
                      </div>

                      {/* Action Area */}
                      <div className="action-area">
                        <button className="download-button" onClick={() => handleDetailClick(item)}>
                          상세내역 보기
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default InvestmentsBPage;
