import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Testimonials from './components/Testimonials';
import IntegratedValue from './components/IntegratedValue';
import FaqSection from './components/FaqSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';
import MyPage from './components/MyPage';
import InvestmentsPage from './pages/InvestmentsPage';
import InvestmentDetail from './pages/InvestmentDetail';
import AboutPage from './pages/AboutPage';
import StartupSupportPage from './pages/StartupSupportPage';
import LegalAccountingPage from './pages/LegalAccountingPage';
import InvestmentSupportPage from './pages/InvestmentSupportPage';
import MagazineBPage from './pages/MagazineBPage';
import InvestmentsBPage from './pages/InvestmentsBPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';


function AppContent({ isLoggedIn, setIsLoggedIn }: { isLoggedIn: boolean, setIsLoggedIn: (val: boolean) => void }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();
  const hideFooterRoutes = ['/about', '/startup-support'];
  const shouldHideFooter = !isLoggedIn && hideFooterRoutes.includes(location.pathname);

  const openLoginModal = () => setIsLoginOpen(true);

  return (
    <div className="app">
      <ScrollToTop />
      {!isLoggedIn && !location.pathname.startsWith('/dashboard') && (
        <Navbar 
          onLogin={() => setIsLoggedIn(true)} 
          isLoginOpen={isLoginOpen}
          setIsLoginOpen={setIsLoginOpen}
        />
      )}
      <main>
        <Routes>
          <Route path="/" element={<InvestmentSupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/investments" element={<InvestmentsBPage onOpenLogin={openLoginModal} />} />
          <Route path="/investments-b" element={<InvestmentsBPage onOpenLogin={openLoginModal} />} />
          <Route path="/investments/:id" element={<InvestmentDetail />} />
          <Route path="/startup-support" element={<StartupSupportPage />} />
          <Route path="/legal-accounting" element={<LegalAccountingPage />} />
          <Route 
            path="/dashboard/*" 
            element={isLoggedIn ? <MyPage onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/" replace />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isLoggedIn && !shouldHideFooter && !location.pathname.startsWith('/dashboard') && <Footer />}
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

export default App;
