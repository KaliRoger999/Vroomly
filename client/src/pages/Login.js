import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/HomeComponents/Navbar';

function Login({refresh}){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  function handleChange(e){ setFormData({ ...formData, [e.target.name]: e.target.value }); };

  async function handleSubmit(e){
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/login', formData);
      alert('Login successful!');
      refresh();
      navigate("/selling");
    } catch (error) { alert('Invalid credentials.'); }
  };

  const inputStyle = {
    width: '100%', padding: '12px', borderRadius: '8px', 
    border: '1px solid #8f91a2', marginTop: '0.5rem', marginBottom: '1rem'
  };

  return (
    <>
        <Navbar/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'80vh' }}>
        <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            padding: '3rem',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center'
        }}>
            <h2 style={{marginBottom: '2rem', color: '#343f3e'}}>Welcome Back</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            
            <label style={{fontWeight: '600', color: '#505a5b'}}>Username</label>
            <input className="input-focus" type="text" name="username" value={formData.username} onChange={handleChange} required style={inputStyle} />
            
            <label style={{fontWeight: '600', color: '#505a5b'}}>Password</label>
            <input className="input-focus" type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
            
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '12px', backgroundColor: '#343f3e', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>Log In</button>
            <div style={{marginTop: '1.5rem', fontSize: '0.9rem', color: '#8f91a2', display:'flex', justifyContent:'center'}}>
                Don't have an account? <a href="/sign-up" style={{color: '#343f3e', fontWeight: '600', textDecoration: 'none', marginLeft:'0.3rem'}}>Sign Up</a>
            </div>
            </form>
        </div>
        </div>
    </>
  );
};
export default Login;