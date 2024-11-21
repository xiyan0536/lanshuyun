/* src/components/Login.js */
import React, { useState } from 'react';
import './Auth.css';

const Login = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleLogin = () => {
    if (!isAgreed) {
      alert('请先同意《用户条款》');
      return;
    }
    alert('登录成功（模拟）');
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">用户登录</h2>
      <form className="auth-form">
        <input
          type="text"
          className="auth-input"
          placeholder="用户名/邮箱/手机号"
        />
        <input
          type="password"
          className="auth-input"
          placeholder="密码"
        />
        <div className="auth-agree">
          <input
            type="checkbox"
            id="terms"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
          <label htmlFor="terms">
            同意 <a href="#terms" className="auth-link">《用户条款》</a>
          </label>
        </div>
        <button
          type="button"
          className={`auth-button ${isAgreed ? '' : 'disabled'}`}
          onClick={handleLogin}
        >
          登录
        </button>
      </form>
      <p className="auth-register">
        没有账号？<a href="/register" className="auth-link">注册</a>
      </p>
    </div>
  );
};

export default Login;
