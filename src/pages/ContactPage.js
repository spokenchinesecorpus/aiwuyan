import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page section">
      <div className="container">
        <div className="section-header">
          <span className="badge">联系我们</span>
          <h2 className="section-title">欢迎与吾言建立联系</h2>
          <p className="section-subtitle">
            无论你是希望参与项目传播、合作共建，还是想了解更多中文教育智能应用的实践，我们都欢迎与你交流。
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card card">
            <div className="contact-icon">📧</div>
            <h3>合作与交流</h3>
            <p>适用于教育机构合作、研究合作、项目协同以及知识传播。</p>
            <a href="mailto:hello@aiwuyan.org">hello@aiwuyan.org</a>
          </div>

          <div className="contact-card card">
            <div className="contact-icon">💬</div>
            <h3>项目反馈</h3>
            <p>适用于功能反馈、语料建议、教学使用体验与改进建议。</p>
            <a href="https://github.com/spokenchinesecorpus/aiwuyan/issues" target="_blank" rel="noreferrer">
              反馈入口
            </a>
          </div>

          <div className="contact-card card">
            <div className="contact-icon">🌐</div>
            <h3>项目来源</h3>
            <p>由 Spoken Chinese Corpus 研究与输出，关注中文教育与语言智能应用。</p>
            <a href="https://github.com/spokenchinesecorpus" target="_blank" rel="noreferrer">
              Spoken Chinese Corpus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
