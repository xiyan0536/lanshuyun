// src/components/Statistics.js
import React, { useEffect, useState } from 'react';
import './Statistics.css';

function Statistics() {
  const [users, setUsers] = useState(0);
  const [storage, setStorage] = useState(0);
  const [uptime, setUptime] = useState(0);

  const targetUsers = 15000;
  const targetStorage = 2000;
  const targetUptime = 99.9;

  useEffect(() => {
    const incrementDuration = 2000;

    const animateValue = (setFunction, targetValue, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setFunction(Math.floor(progress * targetValue));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    animateValue(setUsers, targetUsers, incrementDuration);
    animateValue(setStorage, targetStorage, incrementDuration);
    animateValue(setUptime, targetUptime, incrementDuration);
  }, []);

  return (
    <section className="statistics" id="statistics">
      <h2>平台统计</h2>
      <div className="statistics-cards">
        <div className="statistics-card">
          <h3>用户数量</h3>
          <p className="hover-enlarge">{users.toLocaleString()}</p>
        </div>
        <div className="statistics-card">
          <h3>存储容量 (TB)</h3>
          <p className="hover-enlarge">{storage.toLocaleString()}</p>
        </div>
        <div className="statistics-card">
          <h3>系统正常运行时间 (%)</h3>
          <p className="hover-enlarge">{uptime.toFixed(1)}</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
