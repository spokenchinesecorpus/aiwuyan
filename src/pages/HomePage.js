import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const projectHighlights = [
    {
      icon: '🎯',
      title: '研究背景',
      text: '全球中文学习者持续增长，但高质量教学资源和个性化支持仍然不足。吾言从真实语言场景出发，让中文学习更有真实感、更有方向。'
    },
    {
      icon: '🌍',
      title: '服务对象',
      text: '面向国际中文学习者、对外汉语教师、教学机构、语言教育研究者，以及中文传播与文化交流工作者。'
    },
    {
      icon: '🧠',
      title: '核心理念',
      text: '把语言学、教育学和人工智能结合在一起，让学习者不仅“学会说”，也能“学会说成自己的话”。'
    },
    {
      icon: '🚀',
      title: '长远目标',
      text: '推动中文教育从经验驱动走向数据驱动、智能驱动、可持续创新的教育实践。'
    }
  ];

  const featureCards = [
    {
      title: '教',
      icon: '🎓',
      desc: '教师使用智能教学工具，快速设计课程、生成任务、管理班级学习进度与教学反馈。'
    },
    {
      title: '学',
      icon: '📖',
      desc: '学习者在真实语境中提升表达能力，个性化学习路径、互动练习和即时反馈。'
    },
    {
      title: '测',
      icon: '🧪',
      desc: '从语言能力、表达准确度到学习表现进行系统诊断，支持更科学的学习评估。'
    }
  ];

  const stats = [
    { value: '100万+', label: '中文语句' },
    { value: '20+', label: '语料来源' },
    { value: '多维', label: '教学支持' },
    { value: 'AI', label: '智能反馈' }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="badge">AI × 中文教育研究</div>
            <h1>言吾言</h1>
            <h2>让中文，从“他言”，走向“吾言”</h2>
            <p className="lead">
              第一日，汉语是“他言”；<br />
              每一天，汉语都更接近“吾言”；<br />
              AI 吾言，陪你把汉语说成自己的话。
            </p>

            <div className="hero-stats">
              {stats.map((item, index) => (
                <div key={index} className="stat-pill">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <Link to="/features" className="btn btn-primary">了解功能</Link>
              <Link to="/corpus" className="btn btn-secondary">探索语料库</Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card card-large">
              <div className="visual-grid">
                <div className="mini-box blue">言</div>
                <div className="mini-box gold">吾</div>
                <div className="mini-box violet">学</div>
                <div className="mini-box green">语</div>
              </div>
              <div className="visual-text">
                <span>語言</span>
                <strong>言吾言</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">项目介绍</span>
            <h2 className="section-title">从“他言”到“吾言”的语言旅程</h2>
            <p className="section-subtitle">
              “語言”拆开看，是“言吾言”。它意味着：每一位学习汉语的外国人，都在经历从“说别人的语言”到“说自己的语言”的过渡。
            </p>
          </div>

          <div className="grid-2">
            {projectHighlights.map((item, index) => (
              <div key={index} className="project-card card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header">
            <span className="badge">核心功能</span>
            <h2 className="section-title">三个核心能力：教、学、测</h2>
            <p className="section-subtitle">
              教师使用教学功能，学生使用学习功能，测试功能为学习评估和能力诊断提供支撑。
            </p>
          </div>

          <div className="grid-3">
            {featureCards.map((item) => (
              <div key={item.title} className="feature-panel card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to="/features" className="inline-link">查看详情</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">语料库</span>
            <h2 className="section-title">支撑理解与表达的真实语料</h2>
            <p className="section-subtitle">
              吾言依托真实、多样、可分析的中文语料，为学习、教学和研究提供稳定基础。
            </p>
          </div>

          <div className="corpus-highlight card">
            <div className="corpus-highlight-copy">
              <h3>真实语料，支持中文学习与教育研究</h3>
              <p>
                语料库从真实的新闻、学术、口语和教学场景中抽取结构化样本，用于语言理解、交互训练和能力评估。
              </p>
            </div>
            <Link to="/corpus" className="btn btn-primary">进入语料库</Link>
          </div>
        </div>
      </section>

      <section className="section contact-callout">
        <div className="container">
          <div className="callout-box card">
            <div>
              <span className="badge">联系我们</span>
              <h2 className="section-title">欢迎与我们交流</h2>
            </div>
            <p>
              无论你是中文教育工作者、学习者、研究者，还是有兴趣参与项目协作的人，都欢迎联系吾言。
            </p>
            <Link to="/contact" className="btn btn-primary">联系项目团队</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
