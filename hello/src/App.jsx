import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/products?page=1" replace />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<div className="text-center mt-5"><h2>404 - Page Not Found</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;

