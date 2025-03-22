import React, { useState } from 'react';
import ReportCard from './ReportCard';
import './CheckStatus.css';

const CheckStatus = ({ setView }) => {
  const [searchPlate, setSearchPlate] = useState('');
  const [reports, setReports] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchPlate.trim()) {
      setMessage('Please enter a license plate number');
      return;
    }

    setIsSearching(true);
    setMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await fetch(`https://your-api-endpoint.com/reports?plate=${encodeURIComponent(searchPlate)}`);

      if (response.ok) {
        const data = await response.json();
        setReports(data);

        if (data.length === 0) {
          setMessage('No reports found for this license plate');
        }
      } else {
        setMessage('Failed to retrieve reports. Please try again.');
      }
    } catch (error) {
      setMessage('Error: Could not connect to the server.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="check-container">
      <div className="glass-card">
        <h2>Check Driving Status</h2>
        
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-group">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                value={searchPlate}
                onChange={(e) => setSearchPlate(e.target.value)}
                placeholder="Enter license plate number"
              />
            </div>
            <button 
              type="submit" 
              disabled={isSearching} 
              className="search-button"
            >
              {isSearching ? <span className="loader"></span> : 'Search'}
            </button>
          </div>
        </form>

        {message && (
          <div className="message">
            {message}
          </div>
        )}

        {reports.length > 0 && (
          <div className="results-container">
            <h3 className="results-title">Search Results</h3>
            {reports.map((report, index) => (
              <div key={index} className="result-item">
                <ReportCard report={report} />
              </div>
            ))}
          </div>
        )}

        <button 
          className="back-button" 
          onClick={() => setView('home')}
        >
          <span className="back-icon">←</span>
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default CheckStatus;