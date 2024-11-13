// src/Layout/Layout.js
import React from 'react';
import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main className='main-body' style={{ flex: '1'}}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;