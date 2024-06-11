import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/mykeeper/MyKeeper.css';
import App from '../src/mykeeper/components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
