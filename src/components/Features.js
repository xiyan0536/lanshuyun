// src/components/Features.js
import React from 'react';
import './Features.css';
import { FaChartLine, FaEye, FaLock, FaFileAlt, FaDesktop, FaShieldAlt } from 'react-icons/fa';

function Features() {
  return (
    <section className="features" id="features">
      <h2>核心功能</h2>
      <div className="feature-cards">
        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>智能数据分析</h3>
          <p>基于大数据的智能分析系统，帮助企业更好地理解数据。</p>
        </div>
        <div className="feature-card">
          <FaEye className="feature-icon" />
          <h3>实时监控</h3>
          <p>实时监控数据流，快速响应市场变化，优化业务流程。</p>
        </div>
        <div className="feature-card">
          <FaLock className="feature-icon" />
          <h3>安全数据存储</h3>
          <p>提供企业级数据安全存储，保障数据完整性和私密性。</p>
        </div>
        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h3>自定义报表</h3>
          <p>用户可以生成定制化的报表，以满足不同业务需求。</p>
        </div>
        <div className="feature-card">
          <FaDesktop className="feature-icon" />
          <h3>多平台支持</h3>
          <p>支持多平台运行，无缝兼容各类操作系统。</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>数据安全防护</h3>
          <p>采用多层安全防护机制，保障数据的安全性。</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
