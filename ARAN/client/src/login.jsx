import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function Login() {

   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:9999/register', {email, password})
        .then(result => console.log(result))
        navigate('/login')
        .catch(err => console.log(err))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
                <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                   <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#287745', color: 'white', cursor: 'pointer' }}
                >
                    Login
                </button>
                <h6>Doesn't have an account?</h6>
                <Link 
                    to="/register" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#007bbb', color: 'white', cursor: 'pointer' }}
                >
                    Register
                </Link>
            </form>
        </div>
    );
}

export default Login;
