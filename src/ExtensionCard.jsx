import React from 'react';

export default function ExtensionCard() {
  return (
    <div className="extension-card">
      <div className="card-header">
        {/* Logo placeholder */}
        <div className="extension-info">
          <h1 className="extension-name">Phantom Extension</h1>
          <a href="#" className="extension-author">by Placeholder Author</a>
        </div>
      </div>
      <p className="extension-description">
        This is a placeholder description for the Phantom Extension. It highlights the key features and benefits of the extension.
      </p>
      <div className="extension-stats">
        <span className="stat-item">Placeholder Downloads</span>
        <span className="stat-item">Placeholder Rating</span>
      </div>
      <a
        href="#"
        download
        className="download-button"
      >
        Download
      </a>
    </div>
  );
} 