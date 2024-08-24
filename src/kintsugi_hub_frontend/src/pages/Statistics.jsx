// components/StatisticsSection.jsx
import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="section statistics-section" id="statistics">
      <div className="container">
        <h2 className="section-title">Our Impact</h2>
        <div className="statistics-grid">
          {/* Statistic Cards */}
          <div className="statistic-card">
            <div className="statistic-number">10,000+</div>
            <div className="statistic-label">Cases Reported</div>
          </div>
          {/* More statistic cards here */}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
