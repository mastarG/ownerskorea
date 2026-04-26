import { useState } from 'react';
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
          <a href="/" className="navbar-logo">
            <span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea
          </a>
          <div className="navbar-links center-links">
            <a href="#marketplace">투자정보</a>
            <a href="#partnership">입점협력</a>
            <a href="#support">고객지원</a>
            <a href="#career">채용공고</a>
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
