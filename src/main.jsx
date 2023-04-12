import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tjcc4fu6gcegmzq6.us.auth0.com"
    clientId="XyaKUAsF4j99W3eBtujYfpYRBjSnMW9w"
    authorizationParams={{
      redirect_uri: window.location.origin}
    }
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Auth0Provider>
)
