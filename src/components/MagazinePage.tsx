import React from 'react';
import { ArrowUpRight, Calendar, Bookmark, Share2, Sparkles, TrendingUp, ChevronLeft, ChevronRight, Send, X, Quote } from 'lucide-react';
import './InvestmentSubPages.css';

interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
  tag?: string;
  content?: {
    quote: string;
    interview: { q: string; a: string }[];
  };
}

interface MagazinePageProps {
  onSelectArticle: (article: Article) => void;
}

const MagazinePage: React.FC<MagazinePageProps> = ({ onSelectArticle }) => {
  const articles: Article[] = [
    {
      id: 1,
      category: '창업주 인터뷰',
      title: '시흥 어부 횟집 박현석 대표, "진심이 담긴 회 한 점이 성공의 열쇠"',
      excerpt: '창업 6개월 만에 지역 1위 매출을 달성한 비결과 그가 꿈꾸는 외식업의 미래...',
      date: '2024.05.01',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      tag: 'FEATURED',
      content: {
        quote: "성공은 얼마나 많은 손님을 받느냐가 아니라, 얼마나 많은 손님이 다시 오느냐에 달려 있습니다.",
        interview: [
          { q: "처음 창업을 결심하게 된 계기는 무엇인가요?", a: "오랜 시간 유통업에 종사하며 좋은 식재료의 가치를 알게 되었습니다. 정직한 재료로 승부하면 반드시 통할 것이라는 확신이 있었죠. 기술보다 정직함이 앞서야 한다는 게 제 철학입니다." },
          { q: "매출 1위의 비결을 딱 하나만 꼽는다면?", a: "기술적인 마케팅보다 중요한 것은 '신뢰'입니다. 저희 가게는 당일 입고된 생선이 아니면 절대 상에 올리지 않는다는 원칙을 지킵니다. 손님이 그 맛을 가장 먼저 알아차리더군요." },
          { q: "어려웠던 순간은 없었나요?", a: "초기에는 인지도가 낮아 고전했습니다. 하지만 묵묵히 제 자리를 지키니 입소문이 나기 시작하더군요. 지금은 하루에 수백 명의 손님이 찾는 명소가 되었습니다." },
          { q: "앞으로의 목표는 무엇인가요?", a: "시흥을 넘어 전국에서 가장 맛있는 횟집으로 인정받고 싶습니다. 또한 저와 같은 길을 걷는 청년 창업자들에게 희망이 되고 싶습니다." },
          { q: "오너스코리아 플랫폼의 장점은?", a: "단순한 중개가 아니라, 사업의 본질을 이해해주는 파트너라는 점입니다. 투자자와의 매칭 과정에서 큰 신뢰를 얻었습니다." },
          { q: "창업을 꿈꾸는 분들에게 조언한다면?", a: "준비가 덜 된 상태에서의 시작은 위험합니다. 하지만 확신이 있다면 주저하지 마세요. 대신 현장을 직접 발로 뛰며 몸으로 배우는 과정이 반드시 필요합니다." },
          { q: "최근 프랜차이즈 제안도 받으셨다고 들었습니다.", a: "네, 여러 곳에서 제안이 오고 있습니다. 하지만 무분별한 확장은 제 원칙에 어긋납니다. 맛의 일관성을 유지할 수 있는 시스템이 갖춰진 후에 고민하려 합니다." },
          { q: "성공한 창업가로서 가장 보람을 느끼는 때는?", a: "단골 손님이 자녀를 데리고 오거나, 부모님 생신이라며 저희 가게를 예약해주실 때입니다. 누군가의 소중한 순간에 저희 음식이 함께한다는 것이 큰 영광이죠." },
          { q: "마지막으로 손님들에게 한마디?", a: "항상 처음과 같은 마음으로 최고의 맛을 선사하겠습니다. 저희 가게를 찾아주시는 모든 분이 행복한 기억을 안고 가셨으면 합니다. 감사합니다." }
        ]
      }
    },
    {
      id: 2,
      category: '인사이드 스토리',
      title: '강남 루프탑 이지은 소장, "공간의 가치를 디자인하다"',
      excerpt: '버려진 옥상을 힙한 와인바로 변신시킨 공간 기획자의 철학과 비전 인터뷰.',
      date: '2024.04.28',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      content: {
        quote: "공간은 단순히 물리적 장소가 아닙니다. 사람의 감정이 머무는 경험의 결정체죠.",
        interview: [
          { q: "루프탑이라는 공간에 주목한 이유는?", a: "도심 속에서 하늘을 볼 수 있는 유일한 탈출구라고 생각했습니다. 그 해방감을 고객들에게 전달하고 싶었습니다." },
          { q: "공간 기획에서 가장 중요하게 생각하는 요소는?", a: "조명과 음악, 그리고 그 사이를 흐르는 여백입니다. 화려함보다는 편안함이 오래가는 법이죠." }
        ]
      }
    },
    {
      id: 3,
      category: '창업 트렌드',
      title: 'IT 개발자에서 카페 사장으로, 김민준의 인생 2막',
      excerpt: '안정적인 직장을 나와 판교 테크노파크에 카페를 차리기까지의 솔직한 이야기.',
      date: '2024.04.25',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW',
      content: {
        quote: "코드를 짜던 섬세함으로 이제는 원두의 맛을 설계합니다.",
        interview: [
          { q: "개발자를 그만두고 창업을 한 것에 후회는 없나요?", a: "전혀요. 코드는 컴퓨터가 실행하지만, 커피는 사람이 마십니다. 눈앞에서 행복해하는 표정을 보는 것만큼 보람찬 일은 없습니다." },
          { q: "판교라는 위치의 특수성이 있나요?", a: "밤늦게까지 일하는 개발자 동료들에게 편안한 쉼터가 되고 싶었습니다. 그들의 라이프스타일을 누구보다 잘 알기 때문이죠." }
        ]
      }
    }
  ];

  // Local state removed, using prop from parent

  return (
    <div className="magazine-container-v42 fade-in">
      <header className="mag-hero-section">
        <div className="mag-date-nav-v42">
          <button className="nav-arrow"><ChevronLeft size={24} /></button>
          <div className="mag-date-display">
            <span className="mag-year">2024</span>
            <span className="mag-month">05</span>
          </div>
          <button className="nav-arrow"><ChevronRight size={24} /></button>
        </div>
        <div className="mag-hero-content">
          <h1>오너스가 제안하는<br />이달의 프리미엄 인사이트</h1>
          <p>창업자와 투자자가 함께 성장하는 오너스코리아의 최신 소식을 확인하세요.</p>
          
          <div className="mag-hero-subscribe">
            <div className="mag-hero-input-group">
              <input type="email" placeholder="이메일 주소를 입력하세요" />
              <button className="btn-mag-hero-sub">구독하기</button>
              <button className="btn-mag-hero-int">인터뷰 신청 <Send size={14} /></button>
            </div>
          </div>
        </div>
      </header>

      <div className="mag-grid-v42">
        {articles.map(article => (
          <div key={article.id} className="mag-card-v42" onClick={() => onSelectArticle(article)}>
            <div className="mag-card-thumb">
              <img src={article.img} alt="" />
              {article.tag && <span className="mag-tag">{article.tag}</span>}
            </div>
            <div className="mag-card-body">
              <div className="mag-card-meta">
                <span className="mag-cat">{article.category}</span>
                <span className="mag-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="mag-card-footer">
                  <button className="btn-mag-read" onClick={() => onSelectArticle(article)}>자세히 보기 <ArrowUpRight size={14} /></button>
                <div className="mag-card-actions">
                  <button><Bookmark size={16} /></button>
                  <button><Share2 size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer actions moved to hero */}
      {/* Modal moved to MyPage.tsx for global stacking context */}
    </div>
  );
};

export default MagazinePage;
