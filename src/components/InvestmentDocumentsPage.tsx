import React, { useState } from 'react';
import { 
  FileText, Download, CheckCircle2, Clock, Send, Search, 
  MessageSquare, User, Filter, ArrowUpRight, HelpCircle, AlertCircle,
  Calendar, X, ChevronRight, ChevronLeft, Vote, Check, ThumbsUp, ThumbsDown,
  ChevronUp, ChevronDown
} from 'lucide-react';
import './InvestmentDocumentsPage.css';

const portfolioList = [
  { 
    id: 1, 
    fundName: '지역 상생 펀드 1호', 
    investmentPlace: '시흥어부 횟집 / 음식점', 
    companyName: '(주)좋은친구들',
    date: '2024.03.15', 
    expiry: '2027.03.14', 
    amount: '3,000만원', 
    thumb: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=80' 
  },
  { 
    id: 2, 
    fundName: '오너스 스타트업 펀드 2호', 
    investmentPlace: '판교 티장 카페 / 베이커리', 
    companyName: '(주)카페파트너스',
    date: '2024.05.10', 
    expiry: '2027.05.09', 
    amount: '1,500만원', 
    thumb: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80' 
  },
  { 
    id: 3, 
    fundName: '오너스 부동산 펀드 3호', 
    investmentPlace: '강남 오피스 / 부동산', 
    companyName: '(주)리얼티매니지먼트',
    date: '2024.08.20', 
    expiry: '2027.08.19', 
    amount: '5,000만원', 
    thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' 
  },
];

const CONTRACT_TEXT = `제 1조 (목적)
본 계약은 '오너스코리아'와 '투자자' 간의 상호 협력을 목적으로 하며...

제 2조 (투자 금액 및 배당)
투자자는 해당 매장에 대한 금 일천만 원을 투자하며, 매월 수익의 5%를 배당받는다...

제 3조 (계약 기간)
본 계약의 효력은 체결일로부터 3년간 유지되며...

제 4조 (권리 및 의무)
투자자는 매장의 경영에 직접 관여하지 않으나, 투명한 회계 보고를 받을 권리가 있다...

제 5조 (해지)
일방이 본 계약을 위반할 경우, 상대방은 서면 통지 후 계약을 해지할 수 있다.

제 6조 (관할 법원)
본 계약과 관련하여 발생한 분쟁에 대해서는 오너스코리아 본사 소재지 관할 법원으로 한다.`;

const InvestmentDocumentsPage: React.FC = () => {
  const [qnaCategory, setQnaCategory] = useState('tax');
  const [selectedEntity, setSelectedEntity] = useState('1');
  const [voteStatus, setVoteStatus] = useState<'idle' | 'voted'>('idle');
  const [selectedVote, setSelectedVote] = useState<'yes' | 'no' | null>(null);
  const [isVotingExpanded, setIsVotingExpanded] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  const activeContract = portfolioList.find(p => p.id.toString() === selectedEntity) || portfolioList[0];

  return (
    <div className="legal-tax-dashboard-v42 fade-in">
      <div className="legal-tax-layout-v42">
        
        {/* Left: Direct Q&A (Matches Consultation Form) */}
        <div className="consultation-form-column wide-column">
          <div className="consult-form-card-v42">
            <div className="card-header-v42">
              <span className="required-notice-v42">Direct Q&A</span>
              <h2>실시간 문의하기</h2>
              <p className="subtitle">투자 및 계약 관련 궁금하신 내용을 전문가에게 문의하세요.</p>
            </div>

            <div className="form-section-v42">
              <div className="collapsible-header-v42 no-cursor">
                <div className="header-left">
                  <label>문의 카테고리</label>
                </div>
              </div>
              <div className="collapsible-content-v42 static-content">
                <div className="category-toggles-v42">
                  {['tax', 'biz', 'etc'].map(cat => (
                    <button 
                      key={cat}
                      className={qnaCategory === cat ? 'active' : ''} 
                      onClick={() => setQnaCategory(cat)}
                    >
                      {cat === 'tax' ? '세무' : cat === 'biz' ? '기업문의' : '기타'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-section-v42">
              <div className="collapsible-header-v42 no-cursor">
                <div className="header-left">
                  <label>문의 내용</label>
                </div>
              </div>
              <div className="collapsible-content-v42 static-content">
                <textarea 
                  className="consult-textarea-v42"
                  placeholder="궁금하신 내용을 입력해주세요. 전문가가 영업일 기준 48시간 내에 답변드립니다."
                ></textarea>
              </div>
            </div>

            <button className="btn-consult-submit-v42">
              문의하기 <Send size={18} />
            </button>

            <div className="qna-history-box-v42">
              <div className="history-header">
                <h3>최근 문의 내역</h3>
                <button className="btn-more" onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}>
                  {isHistoryExpanded ? '접기' : '더보기'}
                </button>
              </div>
              {isHistoryExpanded && (
                <div className="history-list-v42 fade-in">
                  <div className="history-item-v42">
                    <div className="h-top">
                      <span className="h-cat">세무</span>
                      <span className="h-status">답변완료</span>
                    </div>
                    <p className="h-title">소득공제 서류 제출 방법 문의</p>
                    <span className="h-date">2026.04.28</span>
                  </div>
                </div>
              )}
            </div>

            {/* Voting Widget - Redesigned to match footer notice area or secondary card */}
            <div className="voting-section-v42">
              <div className="voting-card-mini-v42" onClick={() => setIsVotingExpanded(!isVotingExpanded)}>
                <div className="v-header">
                  <div className="v-title">
                    <Vote size={18} />
                    <span>전자 투표 및 의결권</span>
                  </div>
                  <span className="v-badge">LIVE</span>
                </div>
                {isVotingExpanded && (
                  <div className="v-body fade-in">
                    <p className="v-proposal">매장 리모델링 및 설비 교체 건</p>
                    <div className="v-progress-bar">
                      <div className="v-fill" style={{width: '68%'}}></div>
                    </div>
                    <div className="v-actions">
                      <button className="btn-v-yes" onClick={(e) => { e.stopPropagation(); setVoteStatus('voted'); }}>찬성</button>
                      <button className="btn-v-no" onClick={(e) => { e.stopPropagation(); setVoteStatus('voted'); }}>반대</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contract Group (Matches Expert Group) */}
        <div className="expert-group-column">
          <div className="sticky-header-v42">
            <div className="column-header-v42">
              <span className="brand-label">Owners Partner</span>
              <h1><span className="highlight-text">투자 계약서</span></h1>
            </div>
            
            <div className="expert-list-nav-v42">
              <div className="expert-filters-v42">
                <span className="filter-item-v42 active">전체</span>
                <span className="filter-divider-v42">|</span>
                <span className="filter-item-v42">계약서</span>
                <span className="filter-divider-v42">|</span>
                <span className="filter-item-v42">계약종료</span>
              </div>
              <div className="indicator-dots-v42">
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>

          <div className="expert-list-scroll-v42">
            <div className="expert-list-compact-v42">
              {portfolioList.map(contract => (
                <div 
                  key={contract.id} 
                  className={`expert-card-compact-v42 ${selectedEntity === contract.id.toString() ? 'expanded' : ''}`}
                  onClick={() => setSelectedEntity(selectedEntity === contract.id.toString() ? '' : contract.id.toString())}
                >
                  <div className="expert-main-compact-v42">
                    <div className="expert-photo-compact-v42">
                      <img src={contract.thumb} alt={contract.name} />
                    </div>
                    <div className="expert-info-compact-v42">
                      <div className="expert-name-row-v42">
                        <span className="e-name-v42">{contract.investmentPlace}</span>
                        <span className="e-role-v42">{contract.companyName}</span>
                      </div>
                    </div>
                    <div className="compact-right-info-v42">
                      <div className="compact-action-v42">
                        {selectedEntity === contract.id.toString() ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </div>

                  {selectedEntity === contract.id.toString() && (
                    <div className="expert-details-expanded-v42 fade-in">
                      <div className="contract-paper-mini-v42">
                        <div className="paper-header-v42">
                          <h4>{contract.fundName} ㅣ {contract.date} ~ {contract.expiry} ㅣ {contract.amount}(1구좌)</h4>
                          <button className="btn-download-mini">
                            <Download size={14} /> 다운로드
                          </button>
                        </div>
                        <div className="paper-content-v42">
                          <pre>{CONTRACT_TEXT}</pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvestmentDocumentsPage;
