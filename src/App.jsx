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
import ResourceSneakySnake from './pages/ResourceSneakySnake';
import ResourceRobocommando from './pages/ResourceRobocommando';
import ResourceTechnoSorcery from './pages/ResourceTechnoSorcery';
import ResourceH2O from './pages/ResourceH2O';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <Router>
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
            <Route path="/resources/sneaky-snake" element={<ResourceSneakySnake />} />
            <Route path="/resources/robocommando" element={<ResourceRobocommando />} />
            <Route path="/resources/techno-sorcery" element={<ResourceTechnoSorcery />} />
            <Route path="/resources/h2o" element={<ResourceH2O />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
