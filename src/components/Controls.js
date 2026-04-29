import React from 'react';
import '../App.css'; 

/**
 * Controls Component
 * Properly links the 'Change Story' button to the backToMenu state logic.
 */
const Controls = ({ onRestart, onBackToMenu, currentPath }) => {
  return (
    <div className="controls-panel">
      <div className="status-feedback">
        <span>Sector: <strong className="neon-text">{currentPath.toUpperCase()}</strong></span>
      </div>
      
      <div className="action-group">
        {/* This button triggers the backToMenu function in App.js [cite: 36] */}
        <button 
          className="back-menu-btn" 
          onClick={() => onBackToMenu()} 
          aria-label="Return to story selection"
        >
          ← Change Story
        </button>

        <button 
          className="reset-timeline-btn" 
          onClick={onRestart}
          aria-label="Restart current story"
        >
          <span className="btn-glow"></span>
          <span className="btn-text">RESET TIMELINE</span>
        </button>
      </div>

      <p className="instruction-hint">
        Your choices weave the thread of destiny. [cite: 34, 35]
      </p>
    </div>
  );
};

export default Controls;