import { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import './LoginModal.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

const LoginModal = ({ isOpen, onClose, onLoginSuccess }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content login-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="login-header">
          <h2><span className="text-secondary">O</span>wners <span className="text-secondary">K</span>orea</h2>
          <p>프리미엄 자산가 전용 투자 플랫폼</p>
        </div>

        <div className="sns-login">
          <button className="sns-btn kakao">카카오로 1초 만에 시작하기</button>
          <button className="sns-btn naver">네이버로 시작하기</button>
          <button className="sns-btn google">구글로 시작하기</button>
        </div>

        <div className="divider">
          <span>또는 이메일로 로그인</span>
        </div>

        <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          if (onLoginSuccess) onLoginSuccess();
        }}>
          <div className="input-group">
            <label>이메일</label>
            <input type="email" placeholder="example@owners.kr" />
          </div>

          <div className="input-group password-group">
            <label>비밀번호</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full submit-btn">로그인</button>
        </form>

        <div className="login-footer">
          <a href="#">비밀번호 재설정</a>
          <span className="dot">•</span>
          <a href="#">이메일 회원가입</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
