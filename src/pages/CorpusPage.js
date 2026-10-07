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
    <div className="corpus-page section">
      <div className="container">
        <div className="section-header">
          <span className="badge">语料库</span>
          <h2 className="section-title">以真实语料，为学习与研究提供支持</h2>
          <p className="section-subtitle">
            吾言语料库不只是文本集合，而是面向中文学习、教育实践和语言研究的一套真实语言资源体系。
          </p>
        </div>

        <div className="stats-row">
          <div className="stat-box card">
            <strong>100万+</strong>
            <span>中文语句</span>
          </div>
          <div className="stat-box card">
            <strong>50万+</strong>
            <span>词汇覆盖</span>
          </div>
          <div className="stat-box card">
            <strong>20+</strong>
            <span>语料来源</span>
          </div>
          <div className="stat-box card">
            <strong>多维</strong>
            <span>语言标注</span>
          </div>
        </div>

        <div className="corpus-grid">
          {corpusData.map((item, index) => (
            <div key={index} className="corpus-card card">
              <div className="corpus-icon">{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="value-panel card">
          <h3>语料价值</h3>
          <div className="value-list">
            {valuePoints.map((point, index) => (
              <div key={index} className="value-item">
                <span>✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorpusPage;
