// src/components/Banner.js
import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = '探索数据的无限可能，驱动未来的智能科技';

  useEffect(() => {
    // 打字效果
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullSubtitle.length) {
        setSubtitle(fullSubtitle.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // 添加滚轮事件监听
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        scrollToNextSection();
        window.removeEventListener('wheel', handleScroll); // 防止多次触发
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      clearInterval(typingInterval);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features'); // 使用 ID 确保准确
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner">
      <h1>兰数云创</h1>
      <p className="subtitle">
        {subtitle}
        <span className="cursor">_</span>
      </p>
      <button className="cta-button" onClick={scrollToNextSection}>立即试用</button>
      <div className="scroll-arrow" onClick={scrollToNextSection}>↓</div>
    </section>
  );
}

export default Banner;
