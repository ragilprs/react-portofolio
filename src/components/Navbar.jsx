import React, { useState } from 'react'
import logo from '../assets/PSCS_CILACAP.webp'
import { FaWhatsapp, FaInstagram, FaYoutube, FaTiktok , } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="PSCS CILACAP Logo" />
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-item">Beranda</a>
          <a href="/tentang" className="navbar-item">Tentang</a>
          <a href="/layanan" className="navbar-item">Layanan</a>
          <a href="/kontak" className="navbar-item">Kontak</a>
        </div>
        <div className="navbar-social">
          <a href="https://shorturl.at/X9ZSJ" target="_blank" rel="noopener noreferrer" className="social-icon"><FaYoutube /></a>
          <a href="https://shorturl.at/8lzfz" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTiktok /></a>
          <a href="https://shorturl.at/nqOIC" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          <a href="https://shorturl.at/8xMdd" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp /></a>
        </div>
        <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;