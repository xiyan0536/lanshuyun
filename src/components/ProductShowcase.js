// src/components/ProductShowcase.js
import React, { useState } from 'react';
import './ProductShowcase.css';

function ProductShowcase() {
  const [showExtraCards, setShowExtraCards] = useState(false);

  const handleToggle = () => {
    setShowExtraCards(!showExtraCards);
  };

  return (
    <section className="product-showcase">
      <h2>产品展示</h2>
      <p className="section-description">探索我们的核心产品，体验创新与科技的结合</p>
      <div className="product-cards">
        <div className="product-card">
          <h3 className="product-title">产品 1</h3>
          <p className="product-description">高效数据分析，驱动业务增长</p>
        </div>
        <div className="product-card">
          <h3 className="product-title">产品 2</h3>
          <p className="product-description">实时监控系统，保障数据安全</p>
        </div>
        <div className="product-card">
          <h3 className="product-title">产品 3</h3>
          <p className="product-description">智能存储解决方案，提供极致性能</p>
        </div>
        
        {showExtraCards && (
          <>
            <div className="product-card">
              <h3 className="product-title">产品 4</h3>
              <p className="product-description">智能报表生成，助力决策制定</p>
            </div>
            <div className="product-card">
              <h3 className="product-title">产品 5</h3>
              <p className="product-description">多平台兼容，轻松集成</p>
            </div>
          </>
        )}
      </div>
      <button className="toggle-button" onClick={handleToggle}>
        {showExtraCards ? '收起' : '展开更多'}
      </button>
    </section>
  );
}

export default ProductShowcase;
