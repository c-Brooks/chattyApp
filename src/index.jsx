// Application entrypoint.

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Message from './Message.jsx'


ReactDOM.render(
  <App />,
  document.getElementById('wrapper')
);
