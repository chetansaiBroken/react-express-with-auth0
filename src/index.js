import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-vcj3qpjh.us.auth0.com'
      clientId='Jm552GoUylXkPXbD8lSFnIoRmtvlazZz'
      redirectUri={window.location.origin}
      audience='this is unique identifier'
      scope='openid profile email'>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

