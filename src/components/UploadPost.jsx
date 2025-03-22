import React, { useState } from 'react';
import './UploadPost.css';

const UploadPost = ({ setView }) => {
  const [formData, setFormData] = useState({
    licensePlate: '',
    description: '',
    location: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://your-api-endpoint.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitMessage('Report submitted successfully!');
        // Reset form
        setFormData({
          licensePlate: '',
          description: '',
          location: '',
          date: '',
          time: ''
        });
        // Redirect after 2 seconds
        setTimeout(() => setView('home'), 2000);
      } else {
        setSubmitMessage('Failed to submit report. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error: Could not connect to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="upload-container">
      <div className="glass-card">
        <div className="header-with-nav">
          <h2>Report Vehicle Behavior</h2>
          <button 
            className="back-home-button"
            onClick={() => setView('home')}
          >
            <span className="back-icon">←</span>
            Back to Home
          </button>
        </div>
        
        <form className="upload-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="licensePlate">License Plate Number*</label>
            <div className="input-wrapper">
              <span className="input-icon">🚗</span>
              <input
                type="text"
                id="licensePlate"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                placeholder="Enter license plate number"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description*</label>
            <div className="input-wrapper">
              <span className="textarea-icon">📝</span>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe what happened..."
                required
                rows="4"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="location">Location*</label>
            <div className="input-wrapper">
              <span className="input-icon">📍</span>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location where it happened"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="date">Date*</label>
              <div className="input-wrapper">
                <span className="input-icon">📅</span>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group half">
              <label htmlFor="time">Time*</label>
              <div className="input-wrapper">
                <span className="input-icon">🕒</span>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="button-row">
            <button 
              type="button" 
              className="cancel-button" 
              onClick={() => setView('home')}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button" 
              disabled={isSubmitting}
            >
              {isSubmitting ? <span className="loader"></span> : 'Submit Report'}
            </button>
          </div>
        </form>
        
        {submitMessage && <div className={`submit-message ${submitMessage.includes('success') ? 'success' : 'error'}`}>{submitMessage}</div>}
      </div>
    </div>
  );
};

export default UploadPost;