// components/Chatbot.jsx
import React from 'react';

import '../styles/styles.css'

const Chatbot = () => {
  return (
    <>
      <div className="chatbot-toggle" id="chatbotToggle">
        <i className="fas fa-comments" aria-hidden="true"></i>
        Let's Talk
      </div>
      <div className="chatbot-container hidden" id="chatbotContainer">
        <div className="chatbot-header">
          <span>Kintsugi Assistant</span>
          <i className="fas fa-times" id="chatbotClose" aria-hidden="true"></i>
        </div>
        <div className="chatbot-messages" id="chatbotMessages"></div>
        <div className="chatbot-input">
          <input type="text" id="chatbotInput" placeholder="Type your message..." />
          <button id="chatbotSend">Send</button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
