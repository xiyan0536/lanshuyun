// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './components/Features';
import Statistics from './components/Statistics';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 添加 Footer 模块
import Login from './pages/Login'; // 引入登录页面
import Register from './pages/Register'; // 引入注册页面
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* 单独路由登录和注册页面 */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* 默认首页内容 */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Features />
                <Statistics />
                <ProductShowcase />
                <Testimonials />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
