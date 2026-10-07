import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-block">
          <h4>吾言</h4>
          <p>AI 国际中文教育智能体</p>
          <p className="small-text">
            第一日，汉语是他言；每一天，汉语都更接近吾言。AI 吾言，陪你把汉语说成自己的话。
          </p>
        </div>

        <div className="footer-block">
          <h4>导航</h4>
          <ul>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/features">核心功能</Link></li>
            <li><Link to="/corpus">语料库</Link></li>
            <li><Link to="/contact">联系我们</Link></li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>资源</h4>
          <ul>
            <li>
              <a href="https://github.com/spokenchinesecorpus/aiwuyan" target="_blank" rel="noreferrer">
                GitHub 仓库
              </a>
            </li>
            <li>
              <a href="https://github.com/spokenchinesecorpus/aiwuyan/issues" target="_blank" rel="noreferrer">
                问题反馈
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-block">
          <h4>项目来源</h4>
          <p>
            <a href="https://github.com/spokenchinesecorpus" target="_blank" rel="noreferrer">
              Spoken Chinese Corpus
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {year} 吾言 · 国际中文教育智能体
        </div>
      </div>
    </footer>
  );
};

export default Footer;
