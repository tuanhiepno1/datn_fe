import React from 'react';
import { createRoot } from 'react-dom/client'; // Sửa import từ 'react-dom' thành 'react-dom/client'
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Tạo root từ 'createRoot'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
