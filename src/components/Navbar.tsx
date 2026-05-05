import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, LogIn } from 'lucide-react';
import './Navbar.css';
import LoginModal from './LoginModal';

interface NavbarProps {
  onLogin: () => void;
}

const Navbar = ({ onLogin }: NavbarProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('한국어 (Korea)');
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    "한국어 (Korea)",
    "영어 (English)",
    "중국어 (简体中文)",
    "러시아어 (Русский)",
    "베트남어 (Tiếng Việt)",
    "태국어 (ไทย)",
    "일본어 (日本語)"
  ];

  // Translations dictionary
  const translations: { [key: string]: { [key: string]: string } } = {
    "한국어 (Korea)": {
      mission: "미션",
      magazine: "투자정보",
      magazineB: "투자정보B",
      investmentSupport: "오너스",
      startupSupport: "창업지원",
      legalAccounting: "법률.회계",
      support: "고객문의",
      login: "로그인"
    },
    "영어 (English)": {
      mission: "Mission",
      magazine: "Magazine",
      magazineB: "Magazine B",
      investmentSupport: "Investment",
      startupSupport: "Startup",
      legalAccounting: "Legal/Accounting",
      support: "Inquiry",
      login: "Login"
    },
    "중국어 (简体中文)": {
      mission: "使命",
      magazine: "杂志",
      magazineB: "杂志 B",
      investmentSupport: "投资咨询",
      startupSupport: "创业支持",
      legalAccounting: "法律/会计",
      support: "客户咨询",
      login: "登录"
    },
    "러시아어 (Русский)": {
      mission: "Миссия",
      magazine: "Журнал",
      magazineB: "Журнал B",
      investmentSupport: "Инвест. консультация",
      startupSupport: "Поддержка стартапов",
      legalAccounting: "Юрид./Бухг.",
      support: "Вопросы",
      login: "Войти"
    },
    "베트남어 (Tiếng Việt)": {
      mission: "Sứ mệnh",
      magazine: "Tạp chí",
      magazineB: "Tạp chí B",
      investmentSupport: "Tư vấn đầu tư",
      startupSupport: "Hỗ trợ khởi nghiệp",
      legalAccounting: "Pháp lý/Kế toán",
      support: "Yêu cầu",
      login: "Đăng nhập"
    },
    "태국어 (ไทย)": {
      mission: "พันธกิจ",
      magazine: "นิตยสาร",
      magazineB: "นิตยสาร B",
      investmentSupport: "ปรึกษาการลงทุน",
      startupSupport: "การสนับสนุนสตาร์ทอัพ",
      legalAccounting: "กฎหมาย/บัญชี",
      support: "สอบถาม",
      login: "เข้าสู่ระบบ"
    },
    "일본어 (日本語)": {
      mission: "ミッション",
      magazine: "マガジン",
      magazineB: "マガジンB",
      investmentSupport: "投資相談",
      startupSupport: "創業支援",
      legalAccounting: "法律/会計",
      support: "お問い合わせ",
      login: "ログイン"
    }
  };

  const t = translations[currentLang] || translations["한국어 (Korea)"];

  const getHeaderLangName = (lang: string) => {
    if (lang === "한국어 (Korea)") return "한국어";
    const match = lang.match(/\((.*?)\)/);
    return match ? match[1] : lang;
  };

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    onLogin();
    navigate('/dashboard');
  };

  const isActive = (path: string, hash?: string) => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    if (path === '/') return location.pathname === '/' && !location.hash;
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-owners">Owners</span><span className="logo-korea">Korea</span>
          </Link>
          
          <div className="navbar-links center-links">
            <Link to="/" className={isActive('/') ? 'active' : ''}>{t.investmentSupport}</Link>
            <Link to="/investments" className={isActive('/investments') ? 'active' : ''}>{t.magazine}</Link>
            <Link to="/magazine-b" className={isActive('/magazine-b') ? 'active' : ''}>{t.magazineB}</Link>
            <Link to="/startup-support" className={isActive('/startup-support') ? 'active' : ''}>{t.startupSupport}</Link>
            <Link to="/legal-accounting" className={isActive('/legal-accounting') ? 'active' : ''}>{t.legalAccounting}</Link>
            <Link to="/#faq" className={isActive('/', '#faq') ? 'active' : ''}>{t.support}</Link>
          </div>

          <div className="navbar-actions right-actions">
            <div className="nav-action-item lang-selector">
              <Globe size={18} className="icon" />
              <span className="current-lang">{getHeaderLangName(currentLang)}</span>
              <div className="lang-dropdown">
                {languages.map((lang) => (
                  <div 
                    key={lang} 
                    className={`lang-item ${currentLang === lang ? 'active' : ''}`}
                    onClick={() => setCurrentLang(lang)}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>
            
            <button className="nav-action-item login-btn" onClick={() => setIsLoginOpen(true)}>
              <LogIn size={18} className="icon" />
              <span>{t.login}</span>
            </button>
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};

export default Navbar;
