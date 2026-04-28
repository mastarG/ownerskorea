import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Store, 
  Sprout, 
  X, 
  Check, 
  Info, 
  ShieldCheck, 
  ChevronRight,
  Phone
} from 'lucide-react';
import medicalChapter from '../assets/generated/medical-chapter-bg.png';
import fnbChapter from '../assets/generated/fnb-chapter-bg.png';
import startupCenterBg from '../assets/generated/startup-center-bg.png';
import founderBg from '../assets/founder-bg.png';
import './StartupSupportPage.css';

const StartupSupportPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<'proposal' | 'support' | null>(null);
  const [ssnInput, setSsnInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [tempSaved, setTempSaved] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    
    // Auto-save logic (Mock)
    const saveInterval = setInterval(() => {
      if (openModal) {
        setTempSaved(true);
        setTimeout(() => setTempSaved(false), 2000);
      }
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(saveInterval);
    };
  }, [openModal]);

  const handleSsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setSsnInput(val);
  };

  const getMaskedSsn = () => {
    if (!ssnInput) return '';
    return ssnInput[0] + '*'.repeat(ssnInput.length - 1);
  };

  return (
    <div className="startup-support-page-v5">
      {/* Chapter 1: 창업자의 니즈와 솔루션 */}
      <section className="chapter-hero-v5">
        <div className="hero-image-bg-v5">
          <img src={startupCenterBg} alt="Startup Center Incubation" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 1</div>
            <h1 className="chapter-title-v5 text-white">
              열정은 충분한데,<br />
              <span className="text-secondary">창업자금과 노하우</span>로 망설이고 있나요?
            </h1>
            
            <div className="chapter-intro-text-v5 text-white opacity-90 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 fw-light lh-lg mb-5">
                음식점 창업자의 절반 이상이 3년 안에 문을 닫습니다. <br/>
                평균 2억의 자본이 인테리어와 보증금에 묶이고, <br/>
                막상 운영의 디테일은 혼자 감당해야 하는 구조 때문입니다.
              </p>
              
              <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                <p className="fs-4 fw-bold text-secondary mb-0">
                  오너스코리아는 자본은 투자조합으로, <br/>운영은 마스터기업으로 분리해 드립니다.
                </p>
              </div>

              <div className="chapter-footer-v5 mt-5">
                <span className="footer-stat-v5 text-white fw-light opacity-75">현장 전문가 50인 · 누적 창업 지원 1,200건 · 5년 생존율 92%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: 메디컬 마스터 그룹 */}
      <section className="chapter-hero-v5">
        <div className="hero-image-bg-v5">
          <img src={medicalChapter} alt="Medical Master Group" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 2</div>
            <h1 className="chapter-title-v5 text-white">
              슬기로운 개원 생활,<br />
              <span className="text-secondary">혼자가 아니어도</span> 됩니다.
            </h1>
            
            <div className="chapter-intro-text-v5 text-white opacity-90 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 fw-light lh-lg mb-5">
                진료에 집중하고 싶은데 임대차 계약, 인테리어 견적, 의료기기 리싱, 직원 채용까지 <br/>
                모두 직접 챙겨야 하는 현실. 막상 개원해도 환자 동선을 놓치는 순간 매출이 흔들립니다.
              </p>
              
              <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                <p className="fs-4 fw-bold text-secondary mb-0">
                  오너스코리아 '메디컬 마스터 그룹'은 <br/>20명 이상의 현직 원장단이 동료의 마음으로 함께합니다.
                </p>
              </div>

              <div className="chapter-footer-v5 mt-5">
                <span className="footer-stat-v5 text-white fw-light opacity-75">과목별 입지 분석 · MSO 경영지원 · 의료기기 리싱 · 표준화 인테리어</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: F&B 마스터 그룹 */}
      <section className="chapter-hero-v5">
        <div className="hero-image-bg-v5">
          <img src={fnbChapter} alt="F&B Master Group" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 3</div>
            <h1 className="chapter-title-v5 text-white">
              흑백의 창업 무대 위에서,<br />
              <span className="text-secondary">검증된 전문가들</span>이 함께합니다.
            </h1>
            
            <div className="chapter-intro-text-v5 text-white opacity-90 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 fw-light lh-lg mb-5">
                외식업은 냉정합니다. 매일이 평가의 연속이고, 한 번의 실수가 매장의 미래를 바꿉니다. <br/>
                그 치열함 끝에 살아남은 사람들, 그들이 바로 <strong>'F&B 마스터 그룹'</strong>입니다.
              </p>
              
              <div className="solution-highlight-v5 py-4 border-top border-bottom border-white border-opacity-20">
                <p className="fs-4 fw-bold text-secondary mb-0">
                  미슐랭 출신 셰프와 외식 전문가들이 <br/>직접 운영하며 검증한 모델만을 이관해 드립니다.
                </p>
              </div>

              <div className="chapter-footer-v5 mt-5">
                <span className="footer-stat-v5 text-white fw-light opacity-75">상권 빅데이터 · 메뉴 R&D · 홀·주방 운영 · 브랜드 아이덴티티</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: CTA Branch - Founder Section Content */}
      <section className="chapter-hero-v5">
        <div className="hero-image-bg-v5">
          <img src={founderBg} alt="Premium Cafe Interior" />
          <div className="hero-overlay-v5 dark-overlay"></div>
        </div>
        <div className="container h-100 d-flex align-items-start justify-content-start pt-10-v5">
          <div className="hero-content-v5 fade-in-section w-100">
            <div className="chapter-label-v5">Chapter 4</div>
            <h1 className="chapter-title-v5 text-white">
              실력은 당신이,<br />
              자본은 오너스코리아가.
            </h1>
            <div className="chapter-intro-text-v5 text-white opacity-90 mt-5" style={{ maxWidth: '850px' }}>
              <p className="fs-5 fw-light lh-lg mb-5">
                자본금 1,000만원 유한책임 창업.<br />
                뛰어난 실력만 준비하세요. 나머지는 오너스코리아 파트너스가 돕겠습니다.
              </p>
              
              <div className="founder-cta-group-v5 mt-5">
                <div className="cta-item-v5">
                  <p className="cta-label-v5">이미 매장을 운영 중이신가요?</p>
                  <button className="btn-outline-v5" onClick={() => setOpenModal('proposal')}>오너스 입점 제안</button>
                </div>
                <div className="cta-item-v5">
                  <p className="cta-label-v5">새로운 매장 창업을 꿈꾸시나요?</p>
                  <button className="btn-outline-v5" onClick={() => setOpenModal('support')}>창업지원하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals remain the same logic but with refined styling */}
      {/* [Modals Code Here - Simplified for brevity but functionally identical to v4] */}
      {openModal && (
        <div className="modal-overlay-v5" onClick={() => setOpenModal(null)}>
          <div className="modal-content-v5" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{openModal === 'proposal' ? '매장의 다음 챕터를, 함께 써내려갑니다.' : '당신의 첫 매장, 우리가 함께 엽니다.'}</h2>
                <p className="modal-sub">{openModal === 'proposal' ? '작성하신 정보는 마스터 그룹의 1차 평가 자료로만 활용됩니다.' : '자본금 1,000만 원으로 시작 가능한 모델입니다.'}</p>
              </div>
              <button className="close-btn" onClick={() => setOpenModal(null)}><X size={28} /></button>
            </div>
            
            <form className="modal-form-v5">
              {openModal === 'proposal' ? (
                <div className="form-grid-v5">
                  <div className="form-item full">
                    <label>사업자 유형</label>
                    <div className="radio-group">
                      <label><input type="radio" name="bizType" /> 개인</label>
                      <label><input type="radio" name="bizType" /> 법인</label>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>사업자등록번호</label>
                    <input type="text" placeholder="'-' 없이 10자리 입력" />
                  </div>
                  <div className="form-item">
                    <label>대표자 성함</label>
                    <input type="text" />
                  </div>
                  <div className="form-item">
                    <label>직함</label>
                    <input type="text" placeholder="예: 대표, 점주, 셰프" />
                  </div>
                  <div className="form-item">
                    <label>휴대폰 번호</label>
                    <div className="input-with-btn">
                      <input type="text" />
                      <button type="button" className="inner-btn">인증</button>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>이메일</label>
                    <input type="email" />
                  </div>
                  <div className="form-item">
                    <label>상호명</label>
                    <input type="text" />
                  </div>
                  <div className="form-item">
                    <label>업종 / 업태</label>
                    <select>
                      <option>한식</option>
                      <option>양식</option>
                      <option>일식</option>
                      <option>카페</option>
                      <option>메디컬</option>
                    </select>
                  </div>
                  <div className="form-item full">
                    <label>매장 소재지</label>
                    <div className="input-with-btn">
                      <input type="text" placeholder="주소 검색" readOnly />
                      <button type="button" className="inner-btn">검색</button>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>연 매출</label>
                    <select>
                      <option>1억 미만</option>
                      <option>1~3억</option>
                      <option>3~5억</option>
                      <option>5~10억</option>
                      <option>10억 이상</option>
                    </select>
                  </div>
                  <div className="form-item">
                    <label>임대보증금 (만원)</label>
                    <div className="input-wrap">
                      <input type="number" />
                      <div className="info-badge"><Info size={14} /> 2배수 투자 가능</div>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>영업이익률</label>
                    <select>
                      <option>10% 미만</option>
                      <option>10~20%</option>
                      <option>20~30%</option>
                      <option>30% 이상</option>
                    </select>
                  </div>
                  <div className="form-item full">
                    <label>상담 가능 시간</label>
                    <div className="checkbox-group">
                      <label><input type="checkbox" /> 평일 오전</label>
                      <label><input type="checkbox" /> 평일 오후</label>
                      <label><input type="checkbox" /> 평일 저녁</label>
                      <label><input type="checkbox" /> 주말</label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-grid-v5">
                  <div className="form-item full">
                    <label>창업 유형</label>
                    <div className="radio-group">
                      <label><input type="radio" name="supportType" /> 기창업자</label>
                      <label><input type="radio" name="supportType" /> 신규창업자</label>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>성함</label>
                    <input type="text" />
                  </div>
                  <div className="form-item">
                    <label>주민번호 앞자리</label>
                    <div className="input-wrap">
                      <input type="text" value={ssnInput} onChange={handleSsnChange} placeholder="6자리" />
                      <div className="masked-view">{getMaskedSsn()}</div>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>성별</label>
                    <div className="radio-group">
                      <label><input type="radio" name="gender" /> 남</label>
                      <label><input type="radio" name="gender" /> 여</label>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>휴대폰 번호</label>
                    <div className="input-with-btn">
                      <input type="text" />
                      <button type="button" className="inner-btn">인증</button>
                    </div>
                  </div>
                  <div className="form-item">
                    <label>이메일</label>
                    <input type="email" />
                  </div>
                  <div className="form-item full">
                    <label>창업 희망 소재지</label>
                    <input type="text" placeholder="예: 서울 강남구, 경기 판교 등" />
                  </div>
                  <div className="form-item">
                    <label>희망 업종 / 업태</label>
                    <select>
                      <option>한식</option>
                      <option>양식</option>
                      <option>일식</option>
                      <option>카페</option>
                      <option>메디컬</option>
                    </select>
                  </div>
                  <div className="form-item">
                    <label>신용등급</label>
                    <select>
                      <option>1~3등급</option>
                      <option>4~6등급</option>
                      <option>7등급 이하</option>
                      <option>모름</option>
                    </select>
                  </div>
                  <div className="form-item">
                    <label>실무 경력</label>
                    <select>
                      <option>0년</option>
                      <option>1~3년</option>
                      <option>3~5년</option>
                      <option>5년 이상</option>
                    </select>
                  </div>
                  <div className="form-item">
                    <label>가용 자기자본</label>
                    <select>
                      <option>1,000만원</option>
                      <option>1,000~3,000만원</option>
                      <option>3,000~5,000만원</option>
                      <option>5,000만원 이상</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="form-agreement-v5 mt-4">
                <label><input type="checkbox" /> 개인정보 수집 및 이용에 동의합니다 (필수)</label>
              </div>

              <button type="submit" className="submit-btn-v5 mt-4">
                {openModal === 'proposal' ? '제안 접수하기' : '창업 지원 신청하기'} <ArrowRight size={20} />
              </button>
            </form>
            
            {tempSaved && <div className="temp-save-toast">임시 저장되었습니다.</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupSupportPage;
