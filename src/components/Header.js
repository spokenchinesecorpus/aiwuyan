import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const jumpTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand" aria-label="吾言品牌标识">
          <span className="brand-name">吾言</span>
          <span className="brand-sub">国际中文教育智能体</span>
        </div>

        <button
          className="menu-toggle"
          aria-label="打开导航菜单"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          <button onClick={() => jumpTo('introduction')}>项目介绍</button>
          <button onClick={() => jumpTo('features')}>核心功能</button>
          <button onClick={() => jumpTo('corpus')}>语料库</button>
          <button onClick={() => jumpTo('impact')}>学术价值</button>
          <a href="https://github.com/spokenchinesecorpus/aiwuyan" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
