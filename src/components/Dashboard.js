import React from 'react';
import '../style/dashboard.css';

export default function Dashboard (){
  return (
    <div className="container">
      {/* Security Score Card */}
      <div className="card score-card">
        {/* left */}
        <div className="score-left">
          <div className="security-score-header">
            <svg className="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2>Security Score</h2>
          </div>

          <div className="score-number">63</div>

          <div className="score-sub">
            <div className="score-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div>Good security</div>
          </div>
        </div>

        {/* right */}
        <div className="score-right">
          <div className="progress-wrap">
            <div className="progress-line" aria-hidden="true">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-caption">Overview of your account health</div>
          </div>

          <div className="metrics">
            <div className="metric">
              <div className="metric-number">4</div>
              <div className="metric-label">Total Items</div>
            </div>
            <div className="metric weak">
              <div className="metric-number">1</div>
              <div className="metric-label">Weak</div>
            </div>
            <div className="metric reused">
              <div className="metric-number">1</div>
              <div className="metric-label">Reused</div>
            </div>
            <div className="metric">
              <div className="metric-number">0</div>
              <div className="metric-label">Exposed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Password Cards Row */}
      <div className="password-cards">
        {/* Weak */}
        <div className="password-card">
          <div className="password-card-header">
            <div className="password-card-info">
              <div className="icon-circle red">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              </div>
              <div className="password-card-title">
                <h3>Weak Passwords</h3>
              </div>
            </div>
            <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>

          <div className="password-card-content">
            <div className="password-count">1</div>
            <div className="badge action-needed">Action needed</div>
          </div>
        </div>

        {/* Reused */}
        <div className="password-card">
          <div className="password-card-header">
            <div className="password-card-info">
              <div className="icon-circle yellow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e89c3c" strokeWidth="1.8">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                </svg>
              </div>
              <div className="password-card-title">
                <h3>Reused Passwords</h3>
              </div>
            </div>
            <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>

          <div className="password-card-content">
            <div className="password-count">1</div>
            <div className="badge review">Review</div>
          </div>
        </div>

        {/* Exposed */}
        <div className="password-card">
          <div className="password-card-header">
            <div className="password-card-info">
              <div className="icon-circle orange">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e89c3c" strokeWidth="1.6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="password-card-title">
                <h3>Exposed Passwords</h3>
              </div>
            </div>
            <svg className="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>

          <div className="password-card-content">
            <div className="password-count">0</div>
          </div>
        </div>

        {/* Old */}
        <div className="password-card">
          <div className="password-card-header">
            <div className="password-card-info">
              <div className="icon-circle blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="password-card-title">
                <h3>Old Passwords</h3>
              </div>
            </div>
          </div>

          <div className="password-card-content">
            <div className="password-count">4</div>
            <div className="badge update">Update</div>
          </div>
        </div>
      </div>

      {/* Data Breach Alerts Card */}
      <div className="card">
        <div className="breach-header">
          <div className="breach-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
            </svg>
            <h2>Data Breach Alerts</h2>
          </div>

          <div className="check-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <div>Check for breaches</div>
          </div>
        </div>

        <div className="breach-list">
          <div className="breach-item">
            <div className="breach-icon red">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="1.6">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
              </svg>
            </div>

            <div className="breach-content">
              <div className="breach-service">
                <h3>LinkedIn</h3>
                <span className="badge action-required">Action Required</span>
              </div>
              <div className="breach-description">700 million user records exposed including emails and passwords</div>
              <div className="breach-details">Breach Date: 1/15/2024 • Affected: john.doe@gmail.com</div>
            </div>
          </div>

          <div className="breach-item">
            <div className="breach-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="1.6">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <div className="breach-content">
              <div className="breach-service">
                <h3>Adobe</h3>
                <span className="badge resolved">Resolved</span>
              </div>
              <div className="breach-description">Security breach affecting 38 million users</div>
              <div className="breach-details">Breach Date: 12/10/2023 • Affected: johndoe@work.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

