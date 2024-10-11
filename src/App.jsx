import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@pages/Home';
import LoginRegister from '@pages/dangnhap';
import endPoints from '@routes/router'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path={endPoints.ALL} element={<HomePage />} />
        <Route path={endPoints.LOGIN_REGISTER} element={<LoginRegister />} /> {/* Sử dụng đúng endPoints */}
      </Routes>
    </Router>
  );
}

export default App;
