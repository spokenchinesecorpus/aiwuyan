import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Corpus from './components/Corpus';
import Impact from './components/Impact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Features />
        <Corpus />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
