import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MyProvider } from "./MyContext"
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <MyProvider>
      <App />
    </MyProvider>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
