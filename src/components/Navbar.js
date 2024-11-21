/* src/components/Navbar.js */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 用于路由导航
import './Navbar.css';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://example.com/logo.png" alt="Logo" className="logo" />
        <h1>兰数云创</h1>
      </div>
      <div className="navbar-links">
        <Link to="/features" className="nav-link">功能</Link>
        <Link to="/statistics" className="nav-link">统计</Link>
        <Link to="/product-showcase" className="nav-link">产品展示</Link>
        <Link to="/testimonials" className="nav-link">客户评价</Link>
        <Link to="/contact" className="nav-link">联系我们</Link>
        <Link to="/login" className="login-button">登录</Link> {/* 登录按钮 */}
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <img src="https://example.com/logo.png" alt="Logo" className="logo" />
            <h1>兰数云创</h1>
            <button className="close-button" onClick={toggleSidebar}>×</button>
          </div>
          <div className="sidebar-links">
            <Link to="/features" className="sidebar-link">功能</Link>
            <Link to="/statistics" className="sidebar-link">统计</Link>
            <Link to="/product-showcase" className="sidebar-link">产品展示</Link>
            <Link to="/testimonials" className="sidebar-link">客户评价</Link>
            <Link to="/contact" className="sidebar-link">联系我们</Link>
            <Link to="/login" className="sidebar-login-button">登录</Link> {/* 侧边栏登录按钮 */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
