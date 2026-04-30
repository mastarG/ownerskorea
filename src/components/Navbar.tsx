import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import './Navbar.css';
import LoginModal from './LoginModal';

interface NavbarProps {
  onLogin: () => void;
}

const Navbar = ({ onLogin }: NavbarProps) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoginOpen(false);
    onLogin();
    navigate('/dashboard');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea
          </Link>
          <div className="navbar-links center-links">
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>미션</Link>
            <Link to="/investments" className={isActive('/investments') ? 'active' : ''}>투자정보</Link>
            <Link to="/startup-support" className={isActive('/startup-support') ? 'active' : ''}>창업지원</Link>
            <Link to="/support" className={isActive('/support') ? 'active' : ''}>고객지원</Link>
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
