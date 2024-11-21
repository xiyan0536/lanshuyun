// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="#terms" className="footer-link">
            服务条款
          </a>
          <a href="#privacy" className="footer-link">
            隐私条款
          </a>
          <a href="#contact" className="footer-link">
            联系我们
          </a>
          <a href="#about" className="footer-link">
            关于我们
          </a>
        </div>
        <div className="footer-info">
          <p>© 2024 兰数云创. 版权所有</p>
          <p>ICP备案号：粤ICP备12345678号</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
