// components/StoriesSection.jsx
import React from 'react';

import '../styles/styles.css'

const StoriesSection = () => {
  return (
    <section className="section stories-section" id="stories">
      <div className="container">
        <h2 className="section-title">Stories of Hope</h2>
        <div className="testimonial-grid">
          {/* Testimonial Cards */}
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"I never thought I'd find the courage to speak up...</p>
            </div>
            <div className="testimonial-author">
              <div className="testimonial-info">
                <h4>Sarah M.</h4>
                <p>Survivor & Advocate</p>
              </div>
            </div>
          </div>
          {/* More testimonial cards here */}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
