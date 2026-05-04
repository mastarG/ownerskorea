import React from 'react';
import RankingSection from './RankingSection';
import ReviewSection from './ReviewSection';
import './SocialProofSection.css';

const SocialProofSection: React.FC = () => {
  return (
    <section className="social-proof-section">
      <div className="container">
        {/* Unified Header for both Ranking & Review */}
        <div className="social-header">
          <span className="social-label orange">REVIEW</span>
          <h2 className="social-title">회원들의 이야기</h2>
          <p className="social-desc">오너스코리아와 함께 성장하는 사장님들의 생생한 후기입니다.</p>
        </div>

        {/* Ranking Grid (3 Columns) */}
        <div className="ranking-integration">
          <RankingSection />
        </div>
        {/* Review Slider (Now matched width) */}
        <div className="review-integration">
          <ReviewSection />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
