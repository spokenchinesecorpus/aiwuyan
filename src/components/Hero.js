import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">AI × 中文教育研究</div>
          <h1>吾言</h1>
          <h2>国际中文教育智能体</h2>
          <p>
            以真实语料与智能对话为基础，支持全球中文学习、教学评估与教育研究。
          </p>
          <div className="cta-row">
            <a href="#features" className="primary-btn">了解功能</a>
            <a href="https://github.com/spokenchinesecorpus/aiwuyan" target="_blank" rel="noreferrer" className="secondary-btn">
              查看项目
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card">语言学习</div>
          <div className="panel-card">语料分析</div>
          <div className="panel-card">教学辅助</div>
          <div className="panel-card">智能反馈</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
