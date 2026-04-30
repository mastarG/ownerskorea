import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import CustomerSupportPage from './pages/CustomerSupportPage';
import './App.css';

// Landing Page (Home) component
const Home = () => (
  <>
    <Hero />
    <Marketplace />
    <Testimonials />
    <IntegratedValue />
    <FaqSection />
    <FounderSection />
  </>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        {!isLoggedIn && <Navbar onLogin={() => setIsLoggedIn(true)} />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/investments" element={<InvestmentsPage />} />
            <Route path="/investments/:id" element={<InvestmentDetail />} />
            <Route path="/startup-support" element={<StartupSupportPage />} />
            <Route path="/support" element={<CustomerSupportPage />} />
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <MyPage onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/" replace />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {!isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

export default App;
