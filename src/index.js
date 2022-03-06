import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventsContextProvider from './context/EventsContext';


ReactDOM.render(
  <React.StrictMode>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
