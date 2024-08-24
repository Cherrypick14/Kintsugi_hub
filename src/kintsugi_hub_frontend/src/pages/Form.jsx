// components/FormOverlay.jsx
import React from 'react';

const Form = () => {
  return (
    <div class="container">
    <section class="report-section">
      <h1 class="section-title">Kintsugi Incident Form</h1>
      <form class="report-form" id="reportForm">
        <div class="form-group">
          <label for="nickname">Nickname:</label>
          <input type="text" id="nickname" name="nickname" required />
        </div>
        <div class="form-group">
          <label>Sex:</label>
          <div>
            <label>
              <input type="radio" name="sex" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="sex" value="female" required /> Female
            </label>
            <label>
              <input type="radio" name="sex" value="other" required /> Other
            </label>
          </div>
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <select id="age" name="age" required>
            <option value="">Select age</option>
            <option value="under18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55+">55+</option>
          </select>
        </div>
        <div class="form-group">
          <label for="residence">Residence:</label>
          <select id="residence" name="residence" required>
            <option value="">Select residence</option>
            <option value="urban">Urban</option>
            <option value="suburban">Suburban</option>
            <option value="rural">Rural</option>
          </select>
        </div>
        <div class="form-group">
          <label for="email">E-mail address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="contact-method">How can we contact you?</label>
          <select id="contact-method" name="contact-method" required>
            <option value="">Select contact method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
        <div class="form-group">
          <label for="contact-details">Contact details:</label>
          <input type="text" id="contact-details" name="contact-details" required />
        </div>
        <div class="form-group">
          <label for="incident-description">Incident Description:</label>
          <textarea id="incident-description" name="incident-description" required></textarea>
        </div>
        <div class="form-group">
          <label for="evidence">Upload Evidence (if any):</label>
          <input type="file" id="evidence" name="evidence" class="file-input" multiple />
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="consent" name="consent" required />
          <label for="consent">I consent to the use of my details for reporting purposes</label>
        </div>
        <button type="submit" class="submit-button">Send</button>
      </form>
    </section>
  </div>
  );
};

export default Form;
