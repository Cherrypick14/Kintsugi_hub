// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const identity = await window.ic.identities.authenticate();
      window.localStorage.setItem('identity', JSON.stringify(identity));
      navigate('/admin');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Internet Identity</button>
    </div>
  );
};

export default Login;
