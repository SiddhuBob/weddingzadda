import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import CartProvider from "./context/addToCart";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-sk23ia5ypvxpaj2l.us.auth0.com"
    clientId="QI3dulvuJhVbPv4sTrwklHmVeNl95ScP"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  </Auth0Provider>
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
