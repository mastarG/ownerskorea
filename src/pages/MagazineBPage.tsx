import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Info, Plus, ThumbsUp } from 'lucide-react';
import './MagazineBPage.css';

// Import assets
import eventCover from '../assets/magazine-b/event-cover.png';
import premiumCover from '../assets/magazine-b/premium-cover.png';
import techCover from '../assets/magazine-b/tech-cover.png';
import investmentCover from '../assets/magazine-b/investment-cover.png';

interface MagazineItem {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  match: string;
  year: string;
}

const MagazineBPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      title: "이벤트 (Events)",
      items: [
        { id: 1, title: "Global Editorial Forum 2024", image: eventCover, category: "Exclusive", match: "98% Match", year: "2024", description: "Shaping the future of media leaders." },
        { id: 2, title: "Premium Membership Launch", image: premiumCover, category: "New", match: "95% Match", year: "2024", description: "Unlock exclusive benefits today." },
        { id: 3, title: "Investment Summit", image: investmentCover, category: "Hot", match: "99% Match", year: "2024", description: "Direct access to elite investment opportunities." },
        { id: 4, title: "Tech Innovation Expo", image: techCover, category: "Tech", match: "92% Match", year: "2024", description: "Discover the next big thing." },
        { id: 5, title: "Founders Night", image: eventCover, category: "Network", match: "90% Match", year: "2024", description: "Connect with industry giants." },
      ]
    },
    {
      title: "매거진 (Magazines)",
      items: [
        { id: 6, title: "The Definition of Success", image: premiumCover, category: "Portrait", match: "97% Match", year: "2023", description: "David Chen's visionary journey." },
        { id: 7, title: "Synapse City: The Urban Matrix", image: techCover, category: "Trends", match: "94% Match", year: "2023", description: "Navigating the connected metropolis." },
        { id: 8, title: "Elite Investment Insights", image: investmentCover, category: "Finance", match: "96% Match", year: "2023", description: "Building wealth in a volatile market." },
        { id: 9, title: "Leadership & Innovation", image: premiumCover, category: "Executive", match: "93% Match", year: "2023", description: "Strategies for high-growth startups." },
        { id: 10, title: "Future of Work", image: techCover, category: "Society", match: "91% Match", year: "2023", description: "How AI is reshaping our lives." },
      ]
    },
    {
      title: "최근 등록 (Recently Added)",
      items: [
        { id: 11, title: "The Data Revolution", image: techCover, category: "Latest", match: "99% Match", year: "2024", description: "Life in the algorithmic city." },
        { id: 12, title: "Luxury & Legacy", image: investmentCover, category: "Lifestyle", match: "95% Match", year: "2024", description: "Investing in timeless value." },
        { id: 13, title: "Startup Spotlight", image: premiumCover, category: "Interview", match: "92% Match", year: "2024", description: "Rising stars of the tech scene." },
        { id: 14, title: "Spring Event Highlights", image: eventCover, category: "Review", match: "89% Match", year: "2024", description: "Recap of our biggest event yet." },
        { id: 15, title: "Market Trends 2024", image: investmentCover, category: "Report", match: "94% Match", year: "2024", description: "What to expect this year." },
      ]
    },
    {
      title: "우선순위 (Priority)",
      items: [
        { id: 16, title: "Investment Priority #1", image: investmentCover, category: "Must-See", match: "100% Match", year: "2024", description: "The top performing asset class." },
        { id: 17, title: "Visionary Leaders", image: premiumCover, category: "Top Rated", match: "98% Match", year: "2024", description: "People who changed the world." },
        { id: 18, title: "Tech Breakthroughs", image: techCover, category: "Breaking", match: "97% Match", year: "2024", description: "Science becomes reality." },
        { id: 19, title: "Global Opportunities", image: eventCover, category: "Recommended", match: "96% Match", year: "2024", description: "Expanding beyond borders." },
        { id: 20, title: "Wealth Management", image: investmentCover, category: "Expert", match: "95% Match", year: "2024", description: "Secrets of the elite." },
      ]
    }
  ];

  return (
    <div className="magazine-b-page">
      {/* Featured Banner */}
      <section className="magazine-b-hero" style={{ backgroundImage: `url(${eventCover})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-label">
            <span className="n-logo">O</span>
            <span className="n-text">SPECIAL EVENT</span>
          </div>
          <h1 className="hero-title">Global Editorial Forum: Shaping the Future</h1>
          <p className="hero-description">
            Join the premier event for media leaders. Exploring innovation, creativity, and impact with the industry's most visionary founders.
          </p>
          <div className="hero-btns">
            <button className="btn-play">
              <Play size={24} fill="currentColor" /> 자세히 보기
            </button>
            <button className="btn-info">
              <Info size={24} /> 상세 정보
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="magazine-b-rows">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-row">
            <h2 className="category-title">{cat.title} <ChevronRight size={20} className="arrow" /></h2>
            <div className="row-items">
              {cat.items.map((item) => (
                <div key={item.id} className="magazine-card">
                  <img src={item.image} alt={item.title} className="card-img" />
                  <div className="card-info">
                    <div className="card-actions">
                      <div className="action-circle"><Play size={16} fill="white" /></div>
                      <div className="action-circle"><Plus size={16} /></div>
                      <div className="action-circle"><ThumbsUp size={16} /></div>
                      <div className="action-circle info-icon"><ChevronRight size={16} style={{ transform: 'rotate(90deg)' }} /></div>
                    </div>
                    <div className="card-meta">
                      <span className="match">{item.match}</span>
                      <span className="year">{item.year}</span>
                      <span className="badge">{item.category}</span>
                    </div>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MagazineBPage;
