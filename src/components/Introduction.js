import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return (
    <section id="introduction" className="section introduction">
      <div className="container">
        <h2 className="section-title">项目介绍</h2>
        <p className="section-subtitle">
          吾言关注国际中文教育的现代化发展，以智能技术提升教学质量、学习体验和研究能力。
        </p>

        <div className="intro-grid">
          <article className="intro-card">
            <div className="intro-icon">🎯</div>
            <h3>研究背景</h3>
            <p>
              全球中文学习者规模持续增长，但优质教学资源与个性化支持仍然不足。
              吾言强调从真实语料出发，构建更适合教学和学习的智能生态。
            </p>
          </article>

          <article className="intro-card">
            <div className="intro-icon">🌍</div>
            <h3>服务对象</h3>
            <p>
              面向国际中文学习者、对外汉语教师、教育机构、研究学者，以及语言教育与语言传播相关领域的从业者。
            </p>
          </article>

          <article className="intro-card">
            <div className="intro-icon">💡</div>
            <h3>核心理念</h3>
            <p>
              将语言学、教育学、人工智能与数据分析结合起来，打造面向知识构建、学习反馈和教学支持的智能平台。
            </p>
          </article>

          <article className="intro-card">
            <div className="intro-icon">🚀</div>
            <h3>长期目标</h3>
            <p>
              促进国际中文教育从经验驱动走向数据驱动与智能增强，推动更开放、更协作、更��质量的教育实践。
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
