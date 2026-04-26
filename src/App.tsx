import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marketplace from './components/Marketplace';
import Testimonials from './components/Testimonials';
import IntegratedValue from './components/IntegratedValue';
import FaqSection from './components/FaqSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';
import MyPage from './components/MyPage';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'mypage'>('home');

  if (currentView === 'mypage') {
    return <MyPage onLogout={() => setCurrentView('home')} />;
  }

  return (
    <div className="app">
      <Navbar onLogin={() => setCurrentView('mypage')} />
      <main>
        <Hero />
        <Marketplace />
        <Testimonials />
        <IntegratedValue />
        <FaqSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
