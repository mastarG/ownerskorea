import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Owners<span>Korea</span>
            </h2>
            <p className="footer-desc">
              프리미엄 자산가 전용 안전 대체 투자 플랫폼
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h3>서비스</h3>
              <a href="#">투자하기</a>
              <a href="#">매장등록</a>
              <a href="#">절세 가이드</a>
            </div>
            <div className="link-group">
              <h3>고객센터</h3>
              <a href="#">공지사항</a>
              <a href="#">자주 묻는 질문</a>
              <a href="#">1:1 문의</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>(주)오너스코리아 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>서울특별시 강남구 테헤란로 123, 45층</p>
            <p>이용약관 | <strong>개인정보처리방침</strong> | 투자위험고지</p>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Owners Korea Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
