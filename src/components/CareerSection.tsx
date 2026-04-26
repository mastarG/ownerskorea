import { Briefcase, Heart, Rocket } from 'lucide-react';
import './CareerSection.css';

const CareerSection = () => {
  return (
    <section className="section career-section">
      <div className="container">
        <h2 className="section-title">함께 성장할 동료를 찾습니다</h2>
        <p className="section-subtitle">
          오너스코리아와 함께 골목상권의 혁신을 만들어갈 인재를 영입합니다.
        </p>

        <div className="career-grid">
          <div className="career-welfare">
            <h3>오너스코리아 복리후생</h3>
            <ul className="welfare-list">
              <li>
                <Rocket className="welfare-icon text-secondary" />
                <div>
                  <strong>3년 근속 시 창업 지원</strong>
                  <p>우수 장기 근속자 대상 자사 플랫폼 연계 창업 자금 전액 지원</p>
                </div>
              </li>
              <li>
                <Briefcase className="welfare-icon text-secondary" />
                <div>
                  <strong>자율 출퇴근 및 하이브리드 워크</strong>
                  <p>코어타임 외 자율 근무 및 주 2회 재택근무 지원</p>
                </div>
              </li>
              <li>
                <Heart className="welfare-icon text-secondary" />
                <div>
                  <strong>업계 최고 수준의 의료비 지원</strong>
                  <p>본인 및 직계가족 대상 종합 건강검진 및 의료비 지원</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="career-jobs">
            <h3>진행 중인 채용</h3>
            <div className="job-list">
              <a href="#" className="job-card">
                <div className="job-info">
                  <span className="job-category">Tech & Data</span>
                  <h4>AI 데이터 엔지니어</h4>
                  <p>상권 분석 및 정산 엔진 개발</p>
                </div>
                <span className="job-status active">채용중</span>
              </a>
              <a href="#" className="job-card">
                <div className="job-info">
                  <span className="job-category">Business</span>
                  <h4>외식 브랜드 발굴 (마스터 매니저)</h4>
                  <p>우수 점포 소싱 및 파트너십 구축</p>
                </div>
                <span className="job-status active">채용중</span>
              </a>
              <a href="#" className="job-card">
                <div className="job-info">
                  <span className="job-category">Design</span>
                  <h4>BX/UI 디자이너</h4>
                  <p>플랫폼 사용자 경험 고도화</p>
                </div>
                <span className="job-status active">채용중</span>
              </a>
            </div>
            <button className="btn btn-outline w-full mt-4">채용 지원하기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
