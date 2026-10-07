import React from 'react';
import './Corpus.css';

const Corpus = () => {
  const stats = [
    { icon: '📝', value: '100万+', label: '句子总量' },
    { icon: '📖', value: '50万+', label: '词汇覆盖' },
    { icon: '🌐', value: '20+', label: '文本来源' },
    { icon: '🏷️', value: '多维标签', label: '语料标注' }
  ];

  const types = [
    { title: '新闻语料', description: '覆盖时事、社会、文化等领域的标准书面语，适用于语言规范与阅读训练。' },
    { title: '学术语料', description: '包含学术论文、研究报告等文本，支持专业表达与高阶阅读能力提升。' },
    { title: '口语语料', description: '来自真实对话场景，支持听说训练与语用表达研究。' },
    { title: '教学语料', description: '围绕教材和教学任务设计，适合分级训练和教学实践。' }
  ];

  const points = [
    { title: '多层级标注', text: '词性、语法、语义和文体等多维度标注，支持结构化研究。' },
    { title: '动态更新', text: '持续扩充语料来源，保持内容的时代性与覆盖广度。' },
    { title: '开放性研究', text: '支持学术研究与协作分析的复现和验证。' },
    { title: '质量保障', text: '多轮校验机制确保语料真实性和可用性。' }
  ];

  return (
    <section id="corpus" className="section corpus">
      <div className="container">
        <h2 className="section-title">语料库</h2>
        <p className="section-subtitle">
          吾言依托真实、多样、可分析的中文语料，为教学和研究提供扎实数据基础。
        </p>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="corpus-types-wrap">
          <h3>语料类型</h3>
          <div className="corpus-types-grid">
            {types.map((type, index) => (
              <div key={index} className="type-card">
                <h4>{type.title}</h4>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="corpus-detail">
          <h3>语料特点</h3>
          <div className="detail-grid">
            {points.map((point, index) => (
              <div key={index} className="detail-item">
                <span className="check">✓</span>
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corpus;
