import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/signup.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';

import Login from './components/login.jsx';


function App() {

  return (
    <>
      <div className="container" style={{ 
        maxWidth: '600px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        margin: '0 auto', 
        backgroundColor: '#212529',
        color: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
