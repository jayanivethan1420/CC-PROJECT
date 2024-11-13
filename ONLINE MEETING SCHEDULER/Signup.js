// src/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    const userData = { name, email, phone, password };

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Navigate to the login page after successful signup
        navigate('/login');
      } else {
        setErrorMessage('Failed to register user. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="auth-container" style={containerStyle}>
      <div className="auth-box" style={boxStyle}>
        <h2>Welcome to Online Meeting Scheduler</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <label className="terms-container" style={termsStyle}>
            <input type="checkbox" required />
            I agree to the terms and conditions.
          </label>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" style={buttonStyle}>Sign up</button>
        </form>
        <div className="auth-footer">
          <p>Already have an account? <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign in</span></p>
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#1a1a1a',
  backgroundImage: 'linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)',
  fontFamily: '"Roboto", sans-serif',
};

const boxStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  maxWidth: '400px',
  width: '100%',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  border: '2px solid #ddd',
  borderRadius: '8px',
  fontSize: '16px',
};

const termsStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

const buttonStyle = {
  backgroundColor: '#333333',
  color: 'white',
  padding: '14px',
  border: 'none',
  borderRadius: '8px',
  fontSize: '18px',
  cursor: 'pointer',
  width: '100%',
  fontWeight: '600',
};
