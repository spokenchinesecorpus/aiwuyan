import React from 'react';
import './FeaturePage.css';

const featureMap = {
  teach: {
    title: '教',
    icon: '🎓',
    summary: '帮助教师更高效地设计课程、组织教学、分析学习进展。',
    points: [
      '课程设计：根据目标语言水平和学习场景，快速生成课堂任务。',
      '教学管理：跟踪班级进度、管理学习资料和作业安排。',
      '教学反馈：结合真实语料与学习数据，提供更准确的教学洞察。'
    ]
  },
  learn: {
    title: '学',
    icon: '📖',
    summary: '面向学习者构建个性化学习路径，提升真实表达与语言使用能力。',
    points: [
      '个性化学习：根据学习者能力与兴趣推荐适合的句式、话题与练习。',
      '真实语境：围绕生活场景、任务情境和文化话题增强语言理解与表达。',
      '即时反馈：在表达、词汇和语法上提供持续指导与可调整建议。'
    ]
  },
  test: {
    title: '测',
    icon: '🧪',
    summary: '构建科学化的语言能力评估体系，帮助学习者及时发现优势和短板。',
    points: [
      '能力��断：从词汇、句法、语用、表达准确度等维度进行评估。',
      '学习追踪：持续记录测试结果和学习进步，评估提升效果。',
      '用于教学决策：为教师调整课程难度、练习形式和学习策略提供依据。'
    ]
  }
};

const FeaturePage = () => {
  const [activeKey, setActiveKey] = React.useState('teach');
  const current = featureMap[activeKey];

  return (
    <div className="feature-page">
      <section className="feature-hero">
        <div className="container">
          <h1>核心功能</h1>
          <p>教、学、测三大核心模块</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tab-buttons">
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

          <div className="feature-detail">
            <div className="feature-header">
              <span className="feature-emoji">{current.icon}</span>
              <div>
                <h2>{current.title}</h2>
                <p>{current.summary}</p>
              </div>
            </div>

            <div className="feature-points">
              {current.points.map((point, index) => (
                <div key={index} className="feature-point">
                  <span className="point-number">{index + 1}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturePage;