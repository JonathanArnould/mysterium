import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/styles.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

window.onunload = () => {
  // Clear the local storage
  window.MyStorage.clear();
};
