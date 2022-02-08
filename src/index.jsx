import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GuestProvider } from './context/GuestProvider/GuestProvider';

ReactDOM.render(
  <React.StrictMode>
    <GuestProvider>
      <App />
    </GuestProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
