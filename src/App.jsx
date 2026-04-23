import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Robocommando from './pages/Robocommando';
import SneakySnake from './pages/SneakySnake';
import TechnoSorcery from './pages/TechnoSorcery';
import H2O from './pages/H2O';
import Resources from './pages/Resources';
import ShortsAndThrillers from './pages/ShortsAndThrillers';
import News from './pages/News';
import Support from './pages/Support';
import Footer from './components/Footer';
import './App.css'; 

function ThemeManager() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.includes('robocommando')) {
      document.documentElement.setAttribute('data-theme', 'robocommando');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ThemeManager />
      <div className="App">
        <Header />
        <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 160px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/robocommando" element={<Robocommando />} />
            <Route path="/sneaky-snake" element={<SneakySnake />} />
            <Route path="/techno-sorcery" element={<TechnoSorcery />} />
            <Route path="/h2o" element={<H2O />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/shorts-and-thrillers" element={<ShortsAndThrillers />} />
            <Route path="/news" element={<News />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
