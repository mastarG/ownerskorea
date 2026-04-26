import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import './Navbar.css';
import LoginModal from './LoginModal';

interface NavbarProps {
  onLogin: () => void;
}

const Navbar = ({ onLogin }: NavbarProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    onLogin();
  };

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea
          </Link>
          <div className="navbar-links center-links">
            <div className="nav-item-dropdown">
              <Link to="/about" className="dropdown-trigger">어바웃</Link>
              <div className="dropdown-menu">
                <a href="/about#vision">우리는 (Vision & Mission)</a>
                <a href="/about#investor">오너 가이드 (투자자)</a>
                <a href="/about#founder">창업자 가이드</a>
              </div>
            </div>
            <Link to="/investments">투자정보</Link>
            <a href="/#partnership">입점협력</a>
            <a href="/#support">고객지원</a>
            <a href="/#career">채용공고</a>
          </div>
          <div className="navbar-actions right-actions">
            <button className="btn btn-outline-white" onClick={() => setIsLoginOpen(true)}>
              <User size={18} className="mr-2 inline" />
              로그인
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
