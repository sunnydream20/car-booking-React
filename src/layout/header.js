// src/Layout/Header.js
import React from 'react';
import './layout.css';
import { Link } from 'react-router-dom';
import PhoneLogo from "../components/phonelogo";

const Header = () => {
  return (
    <header className='header bg-color-primary'>
        <div className='container'>
            <div className='nav-header color-white'>
                <Link to="/" className="logo"><img className='logo-img' src='logo1.png' alt='loading...' /> </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li className='p-t-38'>
                        <div className='flex'>
                            <PhoneLogo />
                            <span className='color-secondary'>101-9329840808</span>
                        </div>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
  );
};

export default Header;