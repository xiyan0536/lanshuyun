/* src/components/Register.js */
import React, { useState } from 'react';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    isAgreed: false,
  });

  const [validations, setValidations] = useState({
    username: null,
    email: null,
    phone: null,
    password: null,
    confirmPassword: null,
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // 检测输入
    switch (field) {
      case 'username':
        setValidations({
          ...validations,
          username: /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(value),
        });
        break;
      case 'email':
        setValidations({
          ...validations,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        });
        break;
      case 'phone':
        setValidations({
          ...validations,
          phone: /^1[3-9]\d{9}$/.test(value),
        });
        break;
      case 'password':
        setValidations({
          ...validations,
          password: /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])/.test(value),
        });
        break;
      case 'confirmPassword':
        setValidations({
          ...validations,
          confirmPassword: value === formData.password,
        });
        break;
      default:
        break;
    }
  };

  const handleRegister = () => {
    const isValid = Object.values(validations).every((v) => v);
    if (!isValid) {
      alert('请检查输入是否正确');
      return;
    }
    if (!formData.isAgreed) {
      alert('请先同意《用户条款》');
      return;
    }
    alert('注册成功（模拟）');
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">用户注册</h2>
      <form className="auth-form">
        <input
          type="text"
          className="auth-input"
          placeholder="用户名"
          value={formData.username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
        {validations.username === false && (
          <span className="error-message">用户名格式错误</span>
        )}
        <input
          type="email"
          className="auth-input"
          placeholder="邮箱"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {validations.email === false && (
          <span className="error-message">邮箱格式错误</span>
        )}
        <input
          type="text"
          className="auth-input"
          placeholder="电话号码"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
        {validations.phone === false && (
          <span className="error-message">电话号码格式错误</span>
        )}
        <input
          type="password"
          className="auth-input"
          placeholder="密码"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
        {validations.password === false && (
          <span className="error-message">密码必须包含大小写字母、数字或特殊符号的两种</span>
        )}
        <input
          type="password"
          className="auth-input"
          placeholder="确认密码"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
        />
        {validations.confirmPassword === false && (
          <span className="error-message">两次密码输入不一致</span>
        )}
        <div className="auth-agree">
          <input
            type="checkbox"
            id="terms"
            checked={formData.isAgreed}
            onChange={(e) =>
              setFormData({ ...formData, isAgreed: e.target.checked })
            }
          />
          <label htmlFor="terms">
            同意 <a href="#terms" className="auth-link">《用户条款》</a>
          </label>
        </div>
        <button
          type="button"
          className={`auth-button ${
            Object.values(validations).every((v) => v) && formData.isAgreed
              ? ''
              : 'disabled'
          }`}
          onClick={handleRegister}
        >
          注册
        </button>
      </form>
    </div>
  );
};

export default Register;
