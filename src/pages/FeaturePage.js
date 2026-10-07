import React from 'react';
import { NavLink } from 'react-router-dom';
import './FeaturePage.css';

const featureMap = {
  teach: {
    title: '教',
    badge: '教学支持',
    summary: '帮助教师更高效地设计课程、组织教学、分析学习进展。',
    points: [
      '课程设计：根据目标语言水平和学习场景，快速生成课堂任务。',
      '教学管理：跟踪班级进度、管理学习资料和作业安排。',
      '教学反馈：结合真实语料与学习数据，提供更准确的教学洞察。'
    ],
    accent: 'indigo'
  },
  learn: {
    title: '学',
    badge: '学习支持',
    summary: '面向学习者构建个性化学习路径，提升真实表达与语言使用能力。',
    points: [
      '个性化学习：根据学习者能力与兴趣推荐适合的句式、话题与练习。',
      '真实语境：围绕生活场景、任务情境和文化话题增强语言理解与表达。',
      '即时反馈：在表达、词汇和语法上提供持续指导与可调整建议。'
    ],
    accent: 'cyan'
  },
  test: {
    title: '测',
    badge: '测试评估',
    summary: '构建科学化的语言能力评估体系，帮助学习者及时发现优势和短板。',
    points: [
      '能力诊断：从词汇、句法、语用、表达准确度等维度进行评估。',
      '学习追踪：持续记录测试结果和学习进步，评估提升效果。',
      '用于教学决策：为教师调整课程难度、练习形式和学习策略提供依据。'
    ],
    accent: 'amber'
  }
};

const FeaturePage = () => {
  const [activeKey, setActiveKey] = React.useState('teach');

  const current = featureMap[activeKey];

  return (
    <div className="feature-page section">
      <div className="container">
        <div className="section-header">
          <span className="badge">核心功能</span>
          <h2 className="section-title">教、学、测三大核心模块</h2>
          <p className="section-subtitle">
            吾言围绕教学、学习与评估三大场景，构建语言教育的完整智能支持链条。
          </p>
        </div>

        <div className="feature-tabs">
          {Object.entries(featureMap).map(([key, item]) => (
            <button
              key={key}
              className={`tab-btn ${activeKey === key ? 'active' : ''}`}
              onClick={() => setActiveKey(key)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className={`feature-panel-detail ${current.accent}`}>
          <div className="feature-panel-copy">
            <span className="badge">{current.badge}</span>
            <h3>{current.title}</h3>
            <p>{current.summary}</p>
          </div>

          <div className="detail-list">
            {current.points.map((point, index) => (
              <div key={index} className="detail-item">
                <span className="detail-index">{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-bottom-grid">
          <div className="card">
            <h4>适用人群</h4>
            <ul>
              <li>教师：用于课程设计、课堂活动和学习管理</li>
              <li>学生：用于语言练习、表达纠错和能力提升</li>
              <li>教育机构：用于评估与教学质量优化</li>
            </ul>
          </div>

          <div className="card">
            <h4>项目价值</h4>
            <ul>
              <li>降低教学成本，提高教学效率</li>
              <li>增强学习者的自主性与参与度</li>
              <li>帮助教育实践更科学、更精准地评估效果</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;
