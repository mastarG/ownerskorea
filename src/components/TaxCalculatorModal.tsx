import { useState, useEffect } from 'react';
import { X, TrendingUp, HelpCircle, ArrowDown } from 'lucide-react';
import './TaxCalculatorModal.css';

interface TaxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type UserType = 'employee' | 'business';
type InfoTab = 'taxRates' | 'ventureDeduction';

const TaxCalculatorModal = ({ isOpen, onClose }: TaxCalculatorModalProps) => {
  const [userType, setUserType] = useState<UserType>('employee');
  const [infoTab, setInfoTab] = useState<InfoTab>('taxRates');
  const [accounts, setAccounts] = useState<number>(0); // Starts at 0
  const [incomeInput, setIncomeInput] = useState<string>('0'); // Input is in 만원 units
  
  const [oldRate, setOldRate] = useState<number>(0);
  const [newRate, setNewRate] = useState<number>(0);
  const [refundAmount, setRefundAmount] = useState<number>(0);
  const [actualInvestment, setActualInvestment] = useState<number>(0);

  const investmentAmount = accounts * 30000000;

  // Format currency (adds commas to the input)
  const formatCurrency = (value: string) => {
    // Remove all non-digits, leading zeros (except single zero)
    let numStr = value.replace(/[^0-9]/g, '');
    if (!numStr) return '0';
    numStr = parseInt(numStr, 10).toString();
    return new Intl.NumberFormat('ko-KR').format(parseInt(numStr, 10));
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeInput(formatCurrency(e.target.value));
  };

  const getTaxRate = (amount: number) => {
    if (amount <= 14000000) return 6.6;
    if (amount <= 50000000) return 16.5;
    if (amount <= 88000000) return 26.4;
    if (amount <= 150000000) return 38.5;
    if (amount <= 300000000) return 41.8;
    if (amount <= 500000000) return 44.0;
    if (amount <= 1000000000) return 46.2;
    return 49.5;
  };

  const getBaseTax = (amount: number) => {
    if (amount <= 14000000) return amount * 0.06;
    if (amount <= 50000000) return amount * 0.15 - 1260000;
    if (amount <= 88000000) return amount * 0.24 - 5760000;
    if (amount <= 150000000) return amount * 0.35 - 15440000;
    if (amount <= 300000000) return amount * 0.38 - 19940000;
    if (amount <= 500000000) return amount * 0.40 - 25940000;
    if (amount <= 1000000000) return amount * 0.42 - 35940000;
    return amount * 0.45 - 65940000;
  };

  const getTotalTax = (amount: number) => {
    const base = getBaseTax(Math.max(0, amount));
    return base + (base * 0.1); // Add 10% local tax
  };

  useEffect(() => {
    // incomeInput is in 만원, so multiply by 10,000 for actual math
    const numIncome = (parseInt(incomeInput.replace(/,/g, ''), 10) || 0) * 10000;
    
    if (numIncome > 0) {
      const originalRate = getTaxRate(numIncome);
      setOldRate(originalRate);
      
      let deductibleAmount = investmentAmount;
      if (investmentAmount > 50000000) {
        deductibleAmount = 30000000 + (20000000 * 0.7) + ((investmentAmount - 50000000) * 0.3);
      } else if (investmentAmount > 30000000) {
        deductibleAmount = 30000000 + ((investmentAmount - 30000000) * 0.7);
      }

      const newTaxableIncome = numIncome - deductibleAmount;
      const updatedRate = getTaxRate(Math.max(0, newTaxableIncome));
      setNewRate(updatedRate);

      const originalTax = getTotalTax(numIncome);
      const newTax = getTotalTax(newTaxableIncome);
      
      const calculatedRefund = originalTax - newTax;
      
      setRefundAmount(Math.floor(calculatedRefund));
      setActualInvestment(investmentAmount - Math.floor(calculatedRefund));
    } else {
      setOldRate(0);
      setNewRate(0);
      setRefundAmount(0);
      setActualInvestment(investmentAmount);
    }
  }, [incomeInput, accounts, investmentAmount]);

  if (!isOpen) return null;

  const currentYear = new Date().getFullYear();
  const refundTiming = userType === 'employee' 
    ? `${currentYear + 1}년 2월 연말정산 시`
    : `${currentYear + 1}년 5월 종합소득세 신고 시`;

  const rawIncome = (parseInt(incomeInput.replace(/,/g, ''), 10) || 0) * 10000;
  const deductibleAmount = investmentAmount > 50000000 
    ? 30000000 + (20000000 * 0.7) + ((investmentAmount - 50000000) * 0.3)
    : investmentAmount > 30000000 
      ? 30000000 + ((investmentAmount - 30000000) * 0.7) 
      : investmentAmount;
  const rawNewIncome = Math.max(0, rawIncome - deductibleAmount);

  const getRowClasses = (min: number, max: number) => {
    let classes = [];
    const isOldHere = rawIncome > min && rawIncome <= max;
    const isNewHere = rawNewIncome > min && rawNewIncome <= max && accounts > 0;
    
    if (isOldHere) classes.push('active-bracket'); // Orange
    if (isNewHere && oldRate !== newRate) classes.push('active-bracket-blue'); // Blue
    // If they are in the same bracket, just showing orange is fine, 
    // but the user wants blue when accounts are added. 
    // We'll prioritize showing blue if there's investment and it dropped, 
    // or if they are in the same bracket, we can show a combined state.
    if (isNewHere && oldRate === newRate && accounts > 0) classes.push('active-bracket-combined');
    
    return classes.join(' ');
  };

  return (
    <div className="modal-overlay">
      <div className="calc-modal-container">
        
        {/* Modal Header */}
        <div className="calc-modal-header">
          <h2>내 공제 혜택 계산기</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="calc-modal-body">
          
          {/* LEFT PANE: Information */}
          <div className="calc-pane calc-left-pane">
            <div className="info-tabs">
              <button 
                className={`info-tab ${infoTab === 'taxRates' ? 'active-orange' : ''}`}
                onClick={() => setInfoTab('taxRates')}
              >
                종합소득세율 구간
              </button>
              <button 
                className={`info-tab ${infoTab === 'ventureDeduction' ? 'active-orange' : ''}`}
                onClick={() => setInfoTab('ventureDeduction')}
              >
                벤처투자 소득공제 혜택
              </button>
            </div>

            <div className="info-content scrollable">
              {infoTab === 'taxRates' ? (
                <div className="info-card">
                  <h3>2026년 종합소득세 과세표준</h3>
                  <p className="text-muted text-sm mb-4">지방소득세(10%) 포함 실질 세율입니다.</p>
                  
                  <div className="legend-box mb-4">
                    <span className="legend-item"><span className="legend-color bg-orange"></span> 현재 과세 구간</span>
                    {accounts > 0 && <span className="legend-item"><span className="legend-color bg-blue"></span> 공제 후 과세 구간</span>}
                  </div>

                  <table className="info-table">
                    <thead>
                      <tr>
                        <th>과세표준 구간</th>
                        <th>적용 세율</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={getRowClasses(0, 14000000)}><td>1,400만 원 이하</td><td>6.6%</td></tr>
                      <tr className={getRowClasses(14000000, 50000000)}><td>1,400만 원 ~ 5,000만 원</td><td>16.5%</td></tr>
                      <tr className={getRowClasses(50000000, 88000000)}><td>5,000만 원 ~ 8,800만 원</td><td>26.4%</td></tr>
                      <tr className={getRowClasses(88000000, 150000000)}><td>8,800만 원 ~ 1.5억 원</td><td>38.5%</td></tr>
                      <tr className={getRowClasses(150000000, 300000000)}><td>1.5억 원 ~ 3억 원</td><td>41.8%</td></tr>
                      <tr className={getRowClasses(300000000, 500000000)}><td>3억 원 ~ 5억 원</td><td>44.0%</td></tr>
                      <tr className={getRowClasses(500000000, 1000000000)}><td>5억 원 ~ 10억 원</td><td>46.2%</td></tr>
                      <tr className={getRowClasses(1000000000, Infinity)}><td>10억 초과</td><td>49.5%</td></tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="info-card">
                  <h3>벤처기업 투자 소득공제 (조세특례제한법 제16조)</h3>
                  <p className="text-muted text-sm mb-4">투자금액에 따라 소득공제율이 차등 적용됩니다.</p>
                  
                  <div className="deduction-tiers">
                    <div className="tier-box">
                      <div className="tier-header">3,000만 원 이하</div>
                      <div className="tier-value">100% 공제</div>
                    </div>
                    <div className="tier-box">
                      <div className="tier-header">3,000만 원 ~ 5,000만 원</div>
                      <div className="tier-value">70% 공제</div>
                    </div>
                    <div className="tier-box">
                      <div className="tier-header">5,000만 원 초과</div>
                      <div className="tier-value">30% 공제</div>
                    </div>
                  </div>
                  
                  <div className="info-alert mt-4">
                    <HelpCircle size={18} className="text-secondary flex-shrink-0 mt-1" />
                    <p className="text-sm">
                      <strong>오너스코리아 투자는 전액 벤처기업 투자로 인정</strong>되어 
                      3,000만 원까지 100% 전액 소득공제를 받을 수 있어 절세 효과가 가장 뛰어납니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANE: Calculator Input & Output */}
          <div className="calc-pane calc-right-pane bg-gray-50">
            
            <div className="calc-section">
              <h3 className="calc-section-title">1. 기본 정보</h3>
              
              <div className="input-group">
                <label>사용자 유형 선택</label>
                <div className="user-type-tabs">
                  <button 
                    className={`type-tab ${userType === 'employee' ? 'active-orange-outline' : ''}`}
                    onClick={() => setUserType('employee')}
                  >
                    직장인<br/><span className="text-xs">(근로소득)</span>
                  </button>
                  <button 
                    className={`type-tab ${userType === 'business' ? 'active-orange-outline' : ''}`}
                    onClick={() => setUserType('business')}
                  >
                    전문직·사업자<br/><span className="text-xs">(종합소득)</span>
                  </button>
                </div>
              </div>

              <div className="input-group mt-4">
                <label>
                  {userType === 'employee' ? '연간 총급여 (세전)' : '연간 종합소득금액 (순수익)'}
                </label>
                <div className="input-with-suffix">
                  <input 
                    type="text" 
                    value={incomeInput}
                    onChange={handleIncomeChange}
                    onFocus={() => {
                      if (incomeInput === '0') setIncomeInput('');
                    }}
                    onBlur={() => {
                      if (incomeInput === '') setIncomeInput('0');
                    }}
                  />
                  <span className="suffix">만 원</span>
                </div>
                <p className="input-hint mt-2 text-primary font-medium">※ 만 원 단위로 입력해주세요. (예: 1억 6천만 원 → 16,000)</p>
              </div>

              <div className="input-group mt-4">
                <label>투자 금액 (1구좌 = 3,000만 원)</label>
                <div className="account-selector">
                  <button 
                    className="counter-btn" 
                    onClick={() => setAccounts(Math.max(0, accounts - 1))}
                  >-</button>
                  <div className="account-display">
                    <span className="account-count">{accounts}구좌</span>
                    <span className="account-amount">({(investmentAmount / 10000).toLocaleString()}만 원)</span>
                  </div>
                  <button 
                    className="counter-btn" 
                    onClick={() => setAccounts(accounts + 1)}
                  >+</button>
                </div>
              </div>
            </div>

            <div className="calc-results mt-auto">
              <div className="result-header">
                <TrendingUp size={20} className="text-primary" />
                <h3>계산 결과</h3>
              </div>
              
              {rawIncome === 0 ? (
                <div className="empty-result">
                  소득 금액을 입력하시면<br/>환급액 결과를 확인할 수 있습니다.
                </div>
              ) : accounts === 0 ? (
                <div className="empty-result">
                  투자 구좌를 추가(+)<br/>하시면 환급액이 계산됩니다.
                </div>
              ) : (
                <div className="result-content">
                  
                  {/* 환급액 (최상단) */}
                  <div className="result-row highlight-orange-card">
                    <span className="result-label">💰 예상 환급액</span>
                    <span className="result-value text-xl font-bold">
                      환급금액은 <strong>{(refundAmount / 10000).toLocaleString()}만 원</strong> 입니다.
                    </span>
                  </div>

                  {/* 과세표준 구간 및 하락 효과 */}
                  <div className="result-row bg-white border">
                    <span className="result-label">적용 세율 구간</span>
                    <span className="result-value mb-2">
                      대표님은 현재 <strong>{oldRate.toFixed(1)}%</strong>(지방세 포함) 구간입니다.
                    </span>
                    
                    {oldRate > newRate ? (
                      <div className="bracket-drop-notice mt-2">
                        <div className="drop-header">
                          <span className="drop-badge">소득공제 후 {newRate.toFixed(1)}%</span>
                          <span className="drop-amount"><ArrowDown size={14} className="inline mr-1" />{(oldRate - newRate).toFixed(1)}% 인하</span>
                        </div>
                        <p className="mt-1 text-sm text-blue-800">
                          투자 후 과세표준 구간이 하락하여 절세 혜택이 극대화되었습니다!
                        </p>
                      </div>
                    ) : (
                      <div className="bracket-keep-notice mt-2">
                        <div className="drop-header">
                          <span className="keep-badge">소득공제 후 {newRate.toFixed(1)}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* 실질 투자 원금 */}
                  <div className="result-row bg-white border">
                    <span className="result-label">📉 실질 투자 원금</span>
                    <span className="result-value">
                      {(investmentAmount / 10000).toLocaleString()}만원 투자 시,<br/>
                      실제 리스크 노출액은 <strong>{(actualInvestment / 10000).toLocaleString()}만 원</strong>입니다.
                    </span>
                  </div>

                  {/* 환급 시점 */}
                  <div className="result-row bg-white border">
                    <span className="result-label">📅 환급 시점</span>
                    <span className="result-value font-medium text-primary">
                      {refundTiming}
                    </span>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TaxCalculatorModal;
