import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4>吾言</h4>
          <p>国际中文教育智能体</p>
          <p className="small-text">
            以真实语料为支撑，推动全球中文教育更智能、更开放、更高质量的发展。
          </p>
        </div>

        <div>
          <h4>导航</h4>
          <ul>
            <li><a href="#introduction">项目介绍</a></li>
            <li><a href="#features">核心功能</a></li>
            <li><a href="#corpus">语料库</a></li>
            <li><a href="#impact">学术价值</a></li>
          </ul>
        </div>

        <div>
          <h4>资源</h4>
          <ul>
            <li><a href="https://github.com/spokenchinesecorpus/aiwuyan" target="_blank" rel="noreferrer">GitHub 仓库</a></li>
            <li><a href="https://github.com/spokenchinesecorpus/aiwuyan/issues" target="_blank" rel="noreferrer">问题反馈</a></li>
            <li><a href="https://github.com/spokenchinesecorpus/aiwuyan/discussions" target="_blank" rel="noreferrer">讨论区</a></li>
          </ul>
        </div>

        <div>
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
          © {year} 吾言 - 国际中文教育智能体。
        </div>
      </div>
    </footer>
  );
};

export default Footer;
