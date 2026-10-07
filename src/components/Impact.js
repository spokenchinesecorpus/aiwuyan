import React from 'react';
import './Impact.css';

const Impact = () => {
  const items = [
    {
      title: '中文教育智能化',
      points: [
        '推动国际中文教育从经验驱动转向数据驱动与智能增强。',
        '为教师提供更可控、更高效的教学设计和学习分析支持。',
        '提升学习者的学习效率与学习体验。'
      ]
    },
    {
      title: '语言学研究',
      points: [
        '为语法、语义、语用研究提供真实语料样本。',
        '促进人工智能与语言研究的交叉融合。',
        '为学术研究提供开放性与可复现性支持���'
      ]
    },
    {
      title: '国际合作',
      points: [
        '连接语言教育与研究机构之间的协作网络。',
        '促进文化交流与教育知识共享。',
        '支持更开放、更协作的全球中文教育生态。'
      ]
    }
  ];

  return (
    <section id="impact" className="section impact">
      <div className="container">
        <h2 className="section-title">学术价值与社会影响</h2>
        <p className="section-subtitle">
          吾言不仅是技术项目，也是一种推动中文教育研究与实践发展的知识平台。
        </p>

        <div className="impact-grid">
          {items.map((item, index) => (
            <article key={index} className="impact-card">
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex}><span>→</span>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="impact-cta">
          <h3>参与吾言生态</h3>
          <p>
            无论你是教育工作者、学习者还是研究者，都欢迎参与构建更开放、更加智慧的中文教育未来。
          </p>
          <div className="cta-row impact-row">
            <a href="https://github.com/spokenchinesecorpus/aiwuyan" target="_blank" rel="noreferrer" className="primary-btn">
              贡献代码
            </a>
            <a href="https://github.com/spokenchinesecorpus/aiwuyan/issues" target="_blank" rel="noreferrer" className="secondary-btn">
              提交反馈
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
