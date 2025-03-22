// ReportCard.jsx
import React from 'react';
import './ReportCard.css';

const ReportCard = ({ report }) => {
  const formatDate = (dateStr, timeStr) => {
    const date = new Date(`${dateStr}T${timeStr}`);
    return date.toLocaleString();
  };

  return (
    <div className="report-card">
      <div className="report-card-background"></div>
      <div className="report-card-content">
        {/* Card Header */}
        <div className="report-header">
          <div className="license-plate-container">
            <div className="license-plate-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <h3>{report.licensePlate}</h3>
          </div>
          <div className="report-date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span>{formatDate(report.date, report.time)}</span>
          </div>
        </div>
        
        {/* Location */}
        <div className="report-location">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>{report.location}</p>
        </div>
        
        {/* Description */}
        <div className="report-description">
          <p>{report.description}</p>
        </div>
        
        {/* Visual indicator at bottom */}
        <div className="report-accent">
          <div className="accent-segment accent-segment-1"></div>
          <div className="accent-segment accent-segment-2"></div>
          <div className="accent-segment accent-segment-3"></div>
          <div className="accent-segment accent-segment-4"></div>
          <div className="accent-segment accent-segment-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;