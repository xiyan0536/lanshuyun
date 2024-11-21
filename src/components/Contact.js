// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>联系我们</h2>
      <p className="contact-description">
        如果您有任何问题或需要帮助，点击下方按钮与我们取得联系！我们会尽快回复您。
      </p>
      <div className="contact-button-container">
        <button className="contact-button">咨询我们</button>
      </div>
    </section>
  );
}

export default Contact;
