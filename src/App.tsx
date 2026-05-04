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
import './App.css';


function AppContent({ isLoggedIn, setIsLoggedIn }: { isLoggedIn: boolean, setIsLoggedIn: (val: boolean) => void }) {
  const location = useLocation();
  const hideFooterRoutes = ['/about', '/startup-support'];
  const shouldHideFooter = !isLoggedIn && hideFooterRoutes.includes(location.pathname);

  return (
    <div className="app">
      {!isLoggedIn && <Navbar onLogin={() => setIsLoggedIn(true)} />}
      <main>
        <Routes>
          <Route path="/" element={<InvestmentSupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/investments" element={<InvestmentsPage />} />
          <Route path="/investments/:id" element={<InvestmentDetail />} />
          <Route path="/startup-support" element={<StartupSupportPage />} />
          <Route path="/legal-accounting" element={<LegalAccountingPage />} />
          <Route 
            path="/dashboard/*" 
            element={<MyPage onLogout={() => setIsLoggedIn(false)} />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isLoggedIn && !shouldHideFooter && <Footer />}
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
