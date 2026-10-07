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
      text: '把语言学、教育学和人工智能结合在一起，让学习者不仅"学会说"，也能"学会说成自己的话"。'
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

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-copy">
            <p className="hero-badge">AI × 中文教育</p>
            <h1>吾言</h1>
            <h2>让中文，从"他言"，走向"吾言"</h2>
            <p className="hero-text">
              第一天，汉语是"他言"；<br />
              每一天，汉语都更接近"吾言"；<br />
              AI 吾言，陪你把汉语说成自己的话。
            </p>

            <div className="hero-buttons">
              <Link to="/features" className="btn btn-primary">了解功能</Link>
              <Link to="/corpus" className="btn btn-secondary">探索语料库</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <h2 className="section-title">项目介绍</h2>
          <p className="section-desc">从"他言"到"吾言"的语言旅程</p>

          <div className="grid-4">
            {projectHighlights.map((item, index) => (
              <div key={index} className="info-card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features">
        <div className="container">
          <h2 className="section-title">核心功能</h2>
          <p className="section-desc">教、学、测三大模块</p>

          <div className="grid-3">
            {featureCards.map((item) => (
              <div key={item.title} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to="/features" className="read-more">查看详情 →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section corpus">
        <div className="container">
          <h2 className="section-title">语料库</h2>
          <p className="section-desc">真实语料，支持中文学习与教学研究</p>

          <div className="corpus-box">
            <div className="corpus-text">
              <p>吾言国际中文教育智能体以大规模汉语语料库为支撑，该语料库包括h汉语教材语料库、汉语自然口语语料库、汉语书面语语料库和汉语中介语语料库四大类，为学习、教学和研究提供坚实基础。</p>
            </div>
            <Link to="/corpus" className="btn btn-primary">进入语料库</Link>
          </div>
        </div>
      </section>

      <section className="section contact">
        <div className="container">
          <h2 className="section-title">联系我们</h2>
          <p className="section-desc">欢迎交流与合作</p>

          <div className="contact-box">
            <p>
              无论你是中文教育工作者、学习者、研究者，还是有兴趣参与项目协作的人，都欢迎联系我们。
            </p>
            <Link to="/contact" className="btn btn-primary">联系项目团队</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
