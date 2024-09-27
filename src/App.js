import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PizzaHouse from '../src/components/Pizza';
import PurchasePage from '../src/components/PurchasePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PizzaHouse />} />
        <Route path="/purchase" element={<PurchasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
