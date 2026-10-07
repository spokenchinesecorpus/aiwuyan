import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '💬',
      title: '智能对话教学',
      description: '支持课程中与学习者的互动交流，辅助口语训练、情境对话和语言输出反馈。'
    },
    {
      icon: '📚',
      title: '多类型语料库',
      description: '整合口语、书面语、学术语料和教学语料，为不同层级学习者提供真实语言样本。'
    },
    {
      icon: '🔎',
      title: '语料清洗与分析',
      description: '通过文本处理和结构化分析，筛选高质量语料并实现更有效的语言研究与教学应用。'
    },
    {
      icon: '📊',
      title: '学习进度评估',
      description: '结合对话表现和语用模式，帮助教师和学习者更清晰地了解学习状态与成长路径。'
    },
    {
      icon: '🎓',
      title: '教学场景适配',
      description: '从课堂教学、自主学习到科研使用，支持多维度的学习方式与不同教学目标。'
    },
    {
      icon: '🔗',
      title: '研究与开放协作',
      description: '为教育研究和学术协作提供数据和工具支持，推动语言教育研究的开放创新。'
    }
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <h2 className="section-title">核心功能</h2>
        <p className="section-subtitle">
          从学习支持到教学研究，吾言围绕国际中文教育场景设计多维功能模块。
        </p>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
