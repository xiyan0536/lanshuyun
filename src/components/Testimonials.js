// src/components/Testimonials.js
import React, { useEffect, useState } from 'react';
import './Testimonials.css';

function generateRandomPosition(max) {
  return Math.floor(Math.random() * max); // 生成随机数用于气泡位置
}

const testimonials = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  text: `这是第 ${i + 1} 条客户评价，非常好！`,
  avatar: `https://q1.qlogo.cn/g?b=qq&nk=${100000000 + i}&s=100`, // 随机 QQ 头像
}));

function Testimonials() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // 初始化 20 个气泡
    const generatedBubbles = testimonials.map((testimonial) => ({
      ...testimonial,
      left: generateRandomPosition(90) + '%', // 随机水平位置
      top: generateRandomPosition(80) + '%', // 随机垂直位置
      animationDuration: `${10 + Math.random() * 5}s`, // 动画持续时间延长到 10-15 秒
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <section className="testimonials">
      <h2>客户评价</h2>
      <div className="bubbles-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDuration: bubble.animationDuration,
            }}
          >
            <img src={bubble.avatar} alt="avatar" className="bubble-avatar" />
            <p className="bubble-text">{bubble.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
