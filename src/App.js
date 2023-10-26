import React from 'react';
import './style/default.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/f12project" element={<Home />} />;
      </Routes>
    </div>
  );
}

export default App;
