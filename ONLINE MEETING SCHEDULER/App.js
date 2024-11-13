// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for signup */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for login */}
          <Route path="/login" element={<Login />} />

          {/* Route for home page */}
          <Route path="/home" element={<HomePage />} />

          {/* Default route */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//npx json-server --watch db.json --port 5000
