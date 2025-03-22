import React, { useState } from 'react';
import './HomePage.css';

const HomePage = ({ setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src="/api/placeholder/40/40" alt="PLACA FALA Logo" className="logo" />
          <h1>PLACA FALA</h1>
        </div>
        
        <div className="nav-container">
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li className="active"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#safety">Safety</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Static Background and Tagline */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="road"></div>
        </div>

        <div className="hero-content">
          <div className="tagline-container">
            <h2>PLACA FALA</h2>
            <span className="tagline">Your Plate Speaks: It tells the story of how you drive</span>
          </div>
          
          <p className="hero-description">
            In a world where your license plate becomes your public identity on the road, 
            PLACA FALA gives every citizen a voice to create safer streets through accountability and awareness.
          </p>
          
          <div className="plate-illustration">
            <div className="license-plate">
              <span className="plate-text">ABC·1234</span>
            </div>
            <div className="plate-speech-bubble">
              <p>I reflect your driving habits!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Message Section with Static Icons */}
      <section className="safety-message">
        <h2>Every Plate Tells a Story</h2>
        <p>
          Just as our faces are recognized among friends, our license plates identify us on the road. 
          PLACA FALA—meaning "Plate Speaks" in Portuguese—is built on a simple truth: 
          your driving behavior becomes your reputation, and your plate speaks volumes about who you are behind the wheel.
        </p>
        <div className="safety-icons">
          <div className="safety-icon helmet-icon"></div>
          <div className="safety-icon seatbelt-icon"></div>
          <div className="safety-icon speed-icon"></div>
        </div>
      </section>

      {/* Main Content */}
      <main className="home-container">
        <h2>How PLACA FALA Makes Roads Safer</h2>
        <p>Our platform empowers citizens to report and verify driving behavior, creating a transparent ecosystem where license plates tell the true story of driver conduct.</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon report-icon"></div>
            <h3>Accountability</h3>
            <p>When plates have a voice, drivers become more aware of their actions</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon verify-icon"></div>
            <h3>Community</h3>
            <p>Citizens work together to recognize and promote safer driving</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon safety-icon"></div>
            <h3>Safety</h3>
            <p>Knowledge and transparency lead to better decision-making on roads</p>
          </div>
        </div>
        
        <div className="action-section">
          <h3>What would you like to do?</h3>
          
          <div className="button-container">
            <button 
              className="action-button upload-button"
              onClick={() => setView('upload')}
            >
              Upload New Report
            </button>
            
            <button 
              className="action-button check-button"
              onClick={() => setView('check')}
            >
              Check Driving Status
            </button>
          </div>
        </div>

        <div className="traffic-display">
          <div className="traffic-light">
            <div className="light red"></div>
            <div className="light yellow"></div>
            <div className="light green"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>PLACA FALA</h3>
            <p>"Your Plate Speaks" - Creating safer roads through transparency</p>
            <div className="social-icons">
              <a href="#" className="social-icon"></a>
              <a href="#" className="social-icon"></a>
              <a href="#" className="social-icon"></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Safety Resources</h3>
            <ul>
              <li><a href="#tips">Safe Driving Tips</a></li>
              <li><a href="#statistics">Road Safety Statistics</a></li>
              <li><a href="#education">Driver Education</a></li>
              <li><a href="#laws">Traffic Laws & Regulations</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@placafala.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Safety Street, City, Country</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 PLACA FALA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;