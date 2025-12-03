import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/HomeComponents/Navbar';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('User registered:', response.data);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Error registering user.');
    }
  };

  const inputStyle = {
    width: '100%', 
    padding: '12px', 
    borderRadius: '8px', 
    border: '1px solid #8f91a2', 
    marginTop: '0.5rem', 
    marginBottom: '1rem',
    fontFamily: 'Montserrat, sans-serif'
  };

  const labelStyle = {
    fontWeight: '600', 
    color: '#505a5b',
    textAlign: 'left',
    display: 'block'
  };

  return (
    <>
        <Navbar/>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '85vh',
            padding: '1rem'
        }}>
        <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            padding: '3rem',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
            border: '1px solid #dcedff'
        }}>
            <h2 style={{
                marginBottom: '2rem', 
                color: '#343f3e', 
                fontSize: '2rem',
                fontWeight: '700'
            }}>Create Account</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            
            <label style={labelStyle}>
                Username
                <input
                className="input-focus"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="Choose a username"
                />
            </label>
            
            <label style={labelStyle}>
                Email
                <input
                className="input-focus"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="name@example.com"
                />
            </label>
            
            <label style={labelStyle}>
                Password
                <input
                className="input-focus"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={inputStyle}
                placeholder="Create a password"
                />
            </label>
            
            <button type="submit" className="btn-primary" style={{ 
                marginTop: '1rem', 
                padding: '14px', 
                backgroundColor: '#343f3e',
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1rem',
                fontWeight: 'bold', 
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(52, 63, 62, 0.2)'
            }}>
                Sign Up
            </button>
            
            <div style={{marginTop: '1.5rem', fontSize: '0.9rem', color: '#8f91a2'}}>
                Already have an account? <a href="/login" style={{color: '#343f3e', fontWeight: '600', textDecoration: 'none'}}>Log In</a>
            </div>
            </form>
        </div>
        </div>
    </>
  );
};

export default SignUp;