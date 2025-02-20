// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importă createRoot
import './index.css';
import App from './App';
import './i18n'; // Importă fișierul de configurare i18next

// Creează un root pentru aplicație folosind createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Folosește root-ul pentru a randarea aplicației
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
