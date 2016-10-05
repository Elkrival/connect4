import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';

ReactDOM.render(
  <App rows={6} columns={7} />,
  document.getElementById('root')
);
