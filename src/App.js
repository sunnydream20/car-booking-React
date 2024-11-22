// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/home';
import Brand from './pages/brand';
import About from './pages/about';
import Contact from './pages/contact';
import Whatsapp from './pages/whatsapp';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/brand/:id" element={<Layout><Brand /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/whatsapp/:id" element={<Layout><Whatsapp /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;