// components/FeaturesSection.jsx
import React from 'react';
import '../styles/styles.css'

const FeaturesSection = () => {
  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="section-title">How We Keep You Safe</h2>
        <div className="feature-grid">
          {/* Feature Cards */}
           <div className='feature-card'>
           <i className="fas fa-user-secret" aria-hidden="true"></i>
           <p>We connect you with a comprehensive range of support services, including medical, legal, and psychological assistance. Your safety and well-being are our top priorities. We are committed to ensuring you have access to the resources needed to navigate your situation with confidence.</p>
           </div>

           <div className='feature-card'>
           <i className="fas fa-user-secret" aria-hidden="true"></i>
           <p>We connect you with a comprehensive range of support services, including medical, legal, and psychological assistance. Your safety and well-being are our top priorities. We are committed to ensuring you have access to the resources needed to navigate your situation with confidence.</p>
           </div>

           <div className='feature-card'>
           <i className="fas fa-user-secret" aria-hidden="true"></i>
           <p>We connect you with a comprehensive range of support services, including medical, legal, and psychological assistance. Your safety and well-being are our top priorities. We are committed to ensuring you have access to the resources needed to navigate your situation with confidence.</p>
           </div>
        
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
