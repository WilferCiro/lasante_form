import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import axios from 'axios';
import ContextProviderAuth from './shared/context';
import { BrowserRouter } from 'react-router-dom';

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

// For POST requests
axios.interceptors.response.use(
  (res) => {
    if (res.status === 201) {
      console.log('Posted Successfully');
    }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContextProviderAuth>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProviderAuth>
  </React.StrictMode>
)
