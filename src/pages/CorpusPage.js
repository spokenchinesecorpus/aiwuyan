import React from 'react';
import './CorpusPage.css';

const corpusData = [
  {
    title: '新闻语料',
    description: '覆盖国内外时政、社会、文化等语境的标准中文文本，用于阅读理解与表达训练。'
  },
  {
    title: '学术语料',
    description: '涵盖论文、报告、研究资料等正式文本，适合高阶语言运用和学术表达训练。'
  },
  {
    title: '口语语料',
    description: '来自真实对话、访谈、课堂交流和日常表达，适用于口语训练和情境交际研究。'
  },
  {
    title: '教学语料',
    description: '围绕教学任务、学习目标和层次需求组织，适合课堂设计、分级训练与教学实践。'
  }
];

const valuePoints = [
  '真实场景：来源于真实语境，不只是机械生成。',
  '多维标注：支持词汇、句法、语义和语用层面的分析。',
  '持续更新：随着中文使用情境变化持续扩展语料覆盖范围。',
  '研究支持：为语言学习研究、教学评价和 AI 应用提供基础。'
];

const CorpusPage = () => {
  return (
    <div className="corpus-page">
      <section className="corpus-hero">
        <div className="container">
          <h1>语料库</h1>
          <p>真实语料，支持中文学习与教育研究</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <strong>100万+</strong>
              <span>中文语句</span>
            </div>
            <div className="stat-item">
              <strong>50万+</strong>
              <span>词汇覆盖</span>
            </div>
            <div className="stat-item">
              <strong>20+</strong>
              <span>语料来源</span>
            </div>
            <div className="stat-item">
              <strong>多维</strong>
              <span>语言标注</span>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '60px' }}>语料类型</h2>
          <div className="corpus-grid">
            {corpusData.map((item, index) => (
              <div key={index} className="corpus-card">
                <div className="corpus-number">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '60px' }}>语料价值</h2>
          <div className="value-grid">
            {valuePoints.map((point, index) => (
              <div key={index} className="value-item">
                <span className="check">✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorpusPage;