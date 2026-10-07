import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: '/', label: '首页' },
    { to: '/features', label: '核心功能' },
    { to: '/corpus', label: '语料库' },
    { to: '/contact', label: '联系我们' }
  ];

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          吾言
        </Link>

        <button
          className="menu-toggle"
          aria-label="打开导航菜单"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/spokenchinesecorpus/aiwuyan"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;