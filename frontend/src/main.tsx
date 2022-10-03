import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.variable.min.css';
import axios from 'axios';
import ContextProviderAuth from './shared/context';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

axios.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");
    if (token) {
      req["headers"] = {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    }
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

ConfigProvider.config({
  theme: {
    primaryColor: '#222D60',
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProviderAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProviderAuth>
  </React.StrictMode>
)
