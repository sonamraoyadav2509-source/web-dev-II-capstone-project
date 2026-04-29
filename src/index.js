import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global reset and base styles
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Entry point for the Interactive Storytelling application.
 * It mounts the App component to the 'root' element in public/index.html. [cite: 18]
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (standard in create-react-app)
reportWebVitals();