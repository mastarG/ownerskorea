import React, { useState } from 'react';
import { 
  Wallet, ArrowDownCircle, ArrowUpCircle, FileText, Download, 
  Calendar, User, CreditCard, BarChart3, HelpCircle, Printer,
  Search, Filter, ChevronRight, CheckCircle2, MoreHorizontal,
  Pencil, Mail, Phone, Send, Check, X
} from 'lucide-react';
import './InvestmentSubPages.css';

const SettlementPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [inquiryMessage, setInquiryMessage] = useState('');
  
  // Member Info States
  const [editingField, setEditingField] = useState<string | null>(null);
  const [isAccountVerified, setIsAccountVerified] = useState(false);
  const [verificationError, setVerificationError] = useState(false);

  // Date Picker States
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState<number | null>(1);
  const [endDate, setEndDate] = useState<number | null>(30);
  const [selectedPeriod, setSelectedPeriod] = useState('2024.04.01 ~ 2024.04.30');

  const allTransactions = [
    { id: 1, date: '24.04.10', fundingName: '지역 상생 펀드 1호', category: '수익배당', amount: 450000, status: '지급완료', type: 'deposit' },
    { id: 2, date: '24.04.05', fundingName: '오너스 스타트업 펀드 2호', category: '수익배당', amount: 220000, status: '지급완료', type: 'deposit' },
    { id: 3, date: '24.03.25', fundingName: '-', category: '출금', amount: -1000000, status: '출금완료', type: 'withdraw' },
    { id: 4, date: '24.03.10', fundingName: '지역 상생 펀드 1호', category: '수익배당', amount: 420000, status: '지급완료', type: 'deposit' },
    { id: 5, date: '24.03.05', fundingName: '오너스 스타트업 펀드 2호', category: '수익배당', amount: 210000, status: '지급완료', type: 'deposit' },
  ];

  const filteredTransactions = activeFilter === 'all' 
    ? allTransactions 
    : allTransactions.filter(t => t.type === activeFilter);

  // Calculate totals
  const totalAmount = filteredTransactions.reduce((acc, curr) => acc + curr.amount, 0);

  const formatCurrency = (val: number) => {
    return (val > 0 ? '+' : '') + val.toLocaleString();
  };

  const handleVerifyAccount = () => {
    // Simulated verification logic
    const success = Math.random() > 0.3;
    if (success) {
      setIsAccountVerified(true);
      setVerificationError(false);
    } else {
      setIsAccountVerified(false);
      setVerificationError(true);
    }
  };

  const handleDateClick = (day: number) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (day < startDate) {
        setStartDate(day);
      } else {
        setEndDate(day);
        const startStr = `2024.04.${startDate.toString().padStart(2, '0')}`;
        const endStr = `2024.04.${day.toString().padStart(2, '0')}`;
        setSelectedPeriod(`${startStr} ~ ${endStr}`);
        // Keep popup open for a moment or close it
        setTimeout(() => setShowDatePicker(false), 500);
      }
    }
  };

  const isSelected = (day: number) => {
    if (startDate && !endDate) return day === startDate;
    if (startDate && endDate) return day >= startDate && day <= endDate;
    return false;
  };

  return (
    <div className="legal-tax-dashboard-v42 fade-in">
      <div className="legal-tax-layout-v42">
        
        {/* Left: Member Info & Stats (4fr) */}
        <div className="consultation-form-column wide-column">
          <div className="consult-form-card-v42">
            
            {/* 1. Member Basic Info */}
            <div className="card-header-v42">
              <span className="required-notice-v42">Member Account</span>
              <h2>회원 정보</h2>
            </div>

            <div className="member-profile-box-v42">
              {/* Name / Nickname */}
              <div className={`profile-row-v42 hover-effect ${editingField === 'nickname' ? 'editing' : ''}`}>
                <div className="p-icon"><User size={18} /></div>
                <div className="p-info">
                  <span className="p-label">성함 / 닉네임</span>
                  {editingField === 'nickname' ? (
                    <input type="text" className="p-input-v42" defaultValue="OwnerKim" autoFocus onBlur={() => setEditingField(null)} />
                  ) : (
                    <p className="p-value">김오너 (OwnerKim)</p>
                  )}
                </div>
                <button className="btn-edit-trigger" onClick={() => setEditingField('nickname')}><Pencil size={14} /></button>
              </div>

              {/* Email */}
              <div className={`profile-row-v42 hover-effect ${editingField === 'email' ? 'editing' : ''}`}>
                <div className="p-icon"><Mail size={18} /></div>
                <div className="p-info">
                  <span className="p-label">이메일</span>
                  {editingField === 'email' ? (
                    <input type="text" className="p-input-v42" defaultValue="owner_kim@naver.com" autoFocus onBlur={() => setEditingField(null)} />
                  ) : (
                    <p className="p-value">owner_kim@naver.com</p>
                  )}
                </div>
                <button className="btn-edit-trigger" onClick={() => setEditingField('email')}><Pencil size={14} /></button>
              </div>

              {/* Bank Account (Deposit) */}
              <div className={`profile-row-v42 hover-effect ${editingField === 'bank_in' ? 'editing' : ''}`}>
                <div className="p-icon"><CreditCard size={18} /></div>
                <div className="p-info">
                  <span className="p-label">입금 계좌정보</span>
                  {editingField === 'bank_in' ? (
                    <div className="p-edit-group-v42">
                      <input type="text" className="p-input-v42" placeholder="계좌번호 입력" autoFocus />
                      <div className="p-edit-actions-v42">
                        {!isAccountVerified ? (
                          <button className="btn-verify-acc-v42" onClick={() => handleVerifyAccount()}>계좌조회</button>
                        ) : (
                          <div className="verified-badge-v42"><Check size={14} /> 확인됨</div>
                        )}
                        <button className="btn-cancel-v42" onClick={() => setEditingField(null)}><X size={14} /></button>
                      </div>
                      {verificationError && <p className="p-error-v42">정상적인 계좌가 아닙니다. 다시 확인해주세요.</p>}
                    </div>
                  ) : (
                    <p className="p-value">신한 110-***-***4678</p>
                  )}
                </div>
                <button className="btn-edit-trigger" onClick={() => { setEditingField('bank_in'); setIsAccountVerified(false); setVerificationError(false); }}><Pencil size={14} /></button>
              </div>

              {/* Bank Account (Withdrawal) */}
              <div className={`profile-row-v42 hover-effect ${editingField === 'bank_out' ? 'editing' : ''}`}>
                <div className="p-icon"><Wallet size={18} /></div>
                <div className="p-info">
                  <span className="p-label">출금 계좌정보</span>
                  {editingField === 'bank_out' ? (
                    <div className="p-edit-group-v42">
                      <input type="text" className="p-input-v42" placeholder="계좌번호 입력" autoFocus />
                      <div className="p-edit-actions-v42">
                        {!isAccountVerified ? (
                          <button className="btn-verify-acc-v42" onClick={() => handleVerifyAccount()}>계좌조회</button>
                        ) : (
                          <div className="verified-badge-v42"><Check size={14} /> 확인됨</div>
                        )}
                        <button className="btn-cancel-v42" onClick={() => setEditingField(null)}><X size={14} /></button>
                      </div>
                      {verificationError && <p className="p-error-v42">정상적인 계좌가 아닙니다. 다시 확인해주세요.</p>}
                    </div>
                  ) : (
                    <p className="p-value">국민 432101-**-***433</p>
                  )}
                </div>
                <button className="btn-edit-trigger" onClick={() => { setEditingField('bank_out'); setIsAccountVerified(false); setVerificationError(false); }}><Pencil size={14} /></button>
              </div>
            </div>

            {/* 2. Statistics */}
            <div className="settlement-stats-compact-v42">
              <div className="stat-item-compact-v42">
                <span className="stat-label">이번달 배당액</span>
                <p className="stat-value text-blue">670,000<span>원</span></p>
              </div>
              <div className="stat-item-compact-v42">
                <span className="stat-label">누적 배당액</span>
                <p className="stat-value">5,840,000<span>원</span></p>
              </div>
              <div className="stat-item-compact-v42 highlight">
                <span className="stat-label">출금 가능액</span>
                <p className="stat-value gold-text">2,450,000<span>원</span></p>
              </div>
            </div>

            {/* 3. Settlement Inquiry */}
            <div className="settlement-inquiry-box-v42">
              <h3>정산 문의하기</h3>
              <div className="inquiry-contacts-v42">
                <div className="contact-item">
                  <Phone size={14} /> <span>02-1234-5678</span>
                </div>
                <div className="contact-item">
                  <Mail size={14} /> <span>support@ownerskorea.com</span>
                </div>
              </div>
              <div className="inquiry-message-area-v42">
                <textarea 
                  placeholder="정산 관련 문의 내용을 입력해주세요."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                ></textarea>
                <button className="btn-send-message-v42">
                  <Mail size={16} /> 메시지 보내기
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed History (6fr) */}
        <div className="expert-group-column">
          <div className="sticky-header-v42">
            <div className="column-header-v42">
              <span className="brand-label">Settlement History</span>
              <h1><span className="highlight-text">상세 정산</span> 내역</h1>
            </div>
            
            <div className="expert-list-nav-v42">
              <div className="expert-filters-v42">
                <span 
                  className={`filter-item-v42 ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                >전체</span>
                <span className="filter-divider-v42">|</span>
                <span 
                  className={`filter-item-v42 ${activeFilter === 'deposit' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('deposit')}
                >입금</span>
                <span className="filter-divider-v42">|</span>
                <span 
                  className={`filter-item-v42 ${activeFilter === 'withdraw' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('withdraw')}
                >출금</span>
              </div>
              <div className="filter-actions-right-v42">
                <div className="period-selector-wrapper-v42">
                  <div className="period-selector-v42" onClick={() => setShowDatePicker(!showDatePicker)}>
                    <Calendar size={16} />
                    <span>{selectedPeriod}</span>
                    <ChevronRight size={14} className={showDatePicker ? 'rotate-90' : ''} />
                  </div>
                  
                  {showDatePicker && (
                    <div className="calendar-popup-v42">
                      <div className="calendar-header-v42">
                        <button><ChevronRight className="rotate-180" size={16}/></button>
                        <span>2024.04</span>
                        <button><ChevronRight size={16}/></button>
                      </div>
                      <div className="calendar-grid-v42">
                        {['일','월','화','수','목','금','토'].map(d => <span key={d} className="day-name">{d}</span>)}
                        {Array.from({length: 30}, (_, i) => {
                          const day = i + 1;
                          return (
                            <span 
                              key={day} 
                              className={`day-item ${isSelected(day) ? 'selected-range' : ''} ${day === startDate ? 'range-start' : ''} ${day === endDate ? 'range-end' : ''}`}
                              onClick={() => handleDateClick(day)}
                            >
                              {day}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
                <button className="btn-print-mini-v42">
                  <Printer size={16} /> 내역 출력
                </button>
              </div>
            </div>
          </div>

          <div className="settlement-list-container-v42 scrollable">
            <div className="premium-table-wrapper-v42">
              <table className="premium-table-v42">
                <thead>
                  <tr className="total-row-v42">
                    <th colSpan={3}>합계 내역</th>
                    <th className="t-amount positive">{totalAmount.toLocaleString()} 원</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th>일자</th>
                    <th>펀딩명</th>
                    <th>구분</th>
                    <th>금액</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map(t => (
                    <tr key={t.id}>
                      <td className="t-date">{t.date}</td>
                      <td className="t-name">{t.fundingName}</td>
                      <td>
                        <span className={`t-badge-v42 ${t.type === 'withdraw' ? 'withdraw' : 'deposit'}`}>
                          {t.category}
                        </span>
                      </td>
                      <td className={`t-amount ${t.type === 'deposit' ? 'positive' : 'negative'}`}>
                        {formatCurrency(t.amount)} 원
                      </td>
                      <td>
                        <span className="t-status-pill-v42">
                          <CheckCircle2 size={12} /> {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettlementPage;
