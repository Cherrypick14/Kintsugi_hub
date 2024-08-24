// components/TrustSection.jsx
import React from 'react';

import '../styles/styles.css'

const TrustSection = () => {
  return (
    <section className="section" id="trust">
      <div className="container">
        <h2 className="section-title">Why You Can Trust Us</h2>
        <div className="trust-grid">
          {/* Trust Items */}
          <div className="trust-item">
            <i className="fas fa-lock" aria-hidden="true"></i>
            <h3>Data Protection Certified</h3>
            <p>Your information is safeguarded...</p>
          </div>
          {/* More trust items here */}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
