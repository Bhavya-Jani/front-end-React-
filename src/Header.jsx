import React from 'react';
// Removed Cog6ToothIcon import as settings button is not in the new design

export default function Header() {
  return (
    <header className="main-extension-header">
      <div className="header-content-container">
        <div className="header-left">
          {/* Placeholder for Logo */}
          <div className="extension-logo-placeholder"></div>
          <div className="header-info">
            <h1 className="header-name">Awesome VS Code Extension</h1>
            {/* Updated author link with potential external icon */}
            <a href="#" className="header-author">by Your Name <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="external-link-icon"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4a2.25 2.25 0 01-2.25 2.25h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M16.16 3.84a.75.75 0 010 1.06l-6.25 6.25a.75.75 0 11-1.06-1.06l6.25-6.25a.75.75 0 011.06 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M10.25 6a.75.75 0 01.75.75V10a.75.75 0 01-1.5 0V6.75a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg></a>
            <p className="header-description">Intelligent tooling for VS Code. Auto-generates README, suggests tech stack, and more.</p>
            <div className="header-stats">
              <span><i className="fas fa-download"></i> 10,000+ installs</span>
              <span><i className="fas fa-star"></i> 4.8 (120)</span>
              <span>Free</span>
            </div>
          </div>
        </div>
        <div className="header-right">
          {/* Removed settings button */}
          <button className="install-button">Install</button>
        </div>
      </div>
    </header>
  );
} 