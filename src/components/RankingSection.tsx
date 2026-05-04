import React, { useState, useEffect, useRef } from 'react';
import './RankingSection.css';
import { TrendingUp, Award, UserPlus, MessageCircle } from 'lucide-react';

// Helper for name masking
const maskName = (name: string) => {
  if (name.length >= 3) {
    return name[0] + '*' + name.slice(2);
  } else if (name.length === 2) {
    return name[0] + '*';
  }
  return name;
};

// Helper for business name masking
const maskBusiness = (name: string) => {
  const words = name.split(' ');
  const firstWord = words[0];
  return firstWord + '*'.repeat(Math.max(2, name.length - firstWord.length));
};

const INITIAL_INVESTORS = [
  { id: 1, name: '최수주', profit: '12,450,000원', change: 'up' },
  { id: 2, name: '김민호', profit: '8,920,000원', change: 'up' },
  { id: 3, name: '이승준', profit: '7,540,000원', change: 'down' },
  { id: 4, name: '박지훈', profit: '6,210,000원', change: 'up' },
  { id: 5, name: '정서윤', profit: '5,890,000원', change: 'down' },
];

const INITIAL_CONTENTS = [
  { id: 1, title: '스시 오마카세 류', revenue: '9,450만원', change: 'up' },
  { id: 2, title: '메종 드 비프', revenue: '8,210만원', change: 'up' },
  { id: 3, title: '더 맑은 피부과', revenue: '7,890만원', change: 'down' },
  { id: 4, title: '카페 에스프레소 바', revenue: '6,540만원', change: 'up' },
  { id: 5, title: '와인바 빈티지', revenue: '5,210만원', change: 'down' },
];

const GREETINGS = [
  { id: 1, name: '강태오', msg: '방금 가입했습니다! 잘 부탁드려요.' },
  { id: 2, name: '윤하늘', msg: '수익 인증 보고 왔습니다. 기대되네요.' },
  { id: 3, name: '한소리', msg: '소액으로 분산투자 시작해봅니다.' },
  { id: 4, name: '조유진', msg: '상담 받고 바로 가입했네요.' },
  { id: 5, name: '민경훈', msg: '우리 동네 매장이라 더 믿음이 가요.' },
];

const RankingSection: React.FC = () => {
  const [investors, setInvestors] = useState(INITIAL_INVESTORS);
  const [contents, setContents] = useState(INITIAL_CONTENTS);
  const [activeGreeting, setActiveGreeting] = useState(GREETINGS[0]);
  const [shuffleKey, setShuffleKey] = useState(0);

  // Real-time shuffle animation on load and periodically
  useEffect(() => {
    const shuffle = () => {
      setInvestors(prev => [...prev].sort(() => Math.random() - 0.5));
      setContents(prev => [...prev].sort(() => Math.random() - 0.5));
      setShuffleKey(prev => prev + 1);
    };

    const initialTimer = setTimeout(shuffle, 500);
    const intervalTimer = setInterval(shuffle, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  // Random greeting ticker (5-15s)
  useEffect(() => {
    const changeGreeting = () => {
      const nextIdx = Math.floor(Math.random() * GREETINGS.length);
      setActiveGreeting(GREETINGS[nextIdx]);
      
      const nextDelay = Math.floor(Math.random() * 10000) + 5000; // 5-15s
      setTimeout(changeGreeting, nextDelay);
    };

    const timer = setTimeout(changeGreeting, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ranking-grid-container">
      {/* Investment Ranking */}
      <div className="ranking-column">
        <div className="column-header">
          <TrendingUp className="header-icon orange" size={24} />
          <h3 className="column-title">투자 랭킹</h3>
        </div>
        <div className="ranking-list">
          {investors.map((item, idx) => (
            <div key={item.id} className="ranking-item" style={{ transitionDelay: `${idx * 100}ms` }}>
              <span className="rank-num">{idx + 1}</span>
              <span className="item-name">{maskName(item.name)}</span>
              <span className="item-value">{item.profit}</span>
              <span className={`item-change ${item.change}`}>{item.change === 'up' ? '▲' : '▼'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Content */}
      <div className="ranking-column">
        <div className="column-header">
          <Award className="header-icon orange" size={24} />
          <h3 className="column-title">월간 컨텐츠</h3>
        </div>
        <div className="ranking-list">
          {contents.map((item, idx) => (
            <div key={item.id} className="ranking-item" style={{ transitionDelay: `${idx * 100}ms` }}>
              <span className="rank-num">{idx + 1}</span>
              <span className="item-name">{maskBusiness(item.title)}</span>
              <span className="item-value">{item.revenue}</span>
              <span className={`item-change ${item.change}`}>{item.change === 'up' ? '▲' : '▼'}</span>
            </div>
          ))}
        </div>
      </div>

      {/* New Signups & Greetings */}
      <div className="ranking-column">
        <div className="column-header">
          <UserPlus className="header-icon orange" size={24} />
          <h3 className="column-title">신규 가입</h3>
        </div>
        <div className="greeting-feed">
          <div className="greeting-card active" key={activeGreeting.id}>
            <div className="greeting-header">
              <MessageCircle size={16} className="msg-icon" />
              <span className="greeting-name">{maskName(activeGreeting.name)} 님이 방금 가입하셨습니다.</span>
            </div>
            <p className="greeting-msg">"{activeGreeting.msg}"</p>
          </div>
          
          <div className="recent-signups">
            {GREETINGS.filter(g => g.id !== activeGreeting.id).slice(0, 3).map((item) => (
              <div key={item.id} className="signup-mini">
                <span className="signup-time">방금 전</span>
                <span className="signup-name">{maskName(item.name)}</span>
                <span className="signup-status">가입 완료</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingSection;
