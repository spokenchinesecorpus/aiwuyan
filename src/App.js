import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import CorpusPage from './pages/CorpusPage';
import FeaturePage from './pages/FeaturePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corpus" element={<CorpusPage />} />
            <Route path="/features" element={<FeaturePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
