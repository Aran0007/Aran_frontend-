import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [yardname, setYardname] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [email3, setEmail3] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumber2, setPhonenumber2] = useState('');
    const [phonenumber3, setPhonenumber3] = useState('');
    const [emailCount, setEmailCount] = useState(0);
    const [phoneCount, setPhoneCount] = useState(0);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:9999/register', {name, designation, yardname, address, email, email2, email3, phonenumber, phonenumber2, phonenumber3, password})
        .then(result => console.log(result))
        navigate('/login')
        .catch(err => console.log(err))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <form onSubmit={handleSubmit} style={{ padding: '20px', borderRadius: '5px' }}>
                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                <div style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            style={{ marginBottom: '10px', padding: '10px', width: '45%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="designation"
                            placeholder="Enter your designation"
                            required
                            style={{ marginBottom: '10px', padding: '10px', width: '45%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setDesignation(e.target.value)}
                        />
                    </div>
                    <input
                        type="text"
                        name="companyname"
                        placeholder="Enter your Company/Yard name"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        onChange={(e) => setYardname(e.target.value)}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
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
                        type="tel"
                        name="phonenumber"
                        placeholder="Enter your mobile number"
                        required
                        style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                        onChange={(e) => setPhonenumber(e.target.value)}
                    />

                    {/* Dropdown for selecting how many additional emails */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ fontSize: '14px' }}>How many additional emails do you want to provide?</label>
                        <select
                            style={{ padding: '8px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setEmailCount(Number(e.target.value))}
                            value={emailCount}
                        >
                            <option value="0">No additional emails</option>
                            <option value="1">One additional email</option>
                            <option value="2">Two additional emails</option>
                        </select>
                    </div>

                    {/* Additional email inputs based on selected number */}
                    {emailCount > 0 && (
                        <input
                            type="email"
                            name="email2"
                            placeholder="Enter additional email 1"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setEmail2(e.target.value)}
                        />
                    )}
                    {emailCount > 1 && (
                        <input
                            type="email"
                            name="email3"
                            placeholder="Enter additional email 2"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setEmail3(e.target.value)}
                        />
                    )}

                    {/* Dropdown for selecting how many additional mobile numbers */}
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ fontSize: '14px' }}>How many additional mobile numbers do you want to provide?</label>
                        <select
                            style={{ padding: '8px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setPhoneCount(Number(e.target.value))}
                            value={phoneCount}
                        >
                            <option value="0">No additional numbers</option>
                            <option value="1">One additional number</option>
                            <option value="2">Two additional numbers</option>
                        </select>
                    </div>

                    {/* Additional phone number inputs based on selected number */}
                    {phoneCount > 0 && (
                        <input
                            type="tel"
                            name="phonenumber2"
                            placeholder="Enter additional mobile number 1"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setPhonenumber2(e.target.value)}
                        />
                    )}
                    {phoneCount > 1 && (
                        <input
                            type="tel"
                            name="phonenumber3"
                            placeholder="Enter additional mobile number 2"
                            style={{ marginBottom: '10px', padding: '10px', width: '100%', borderRadius: '3px', border: '1px solid #ccc' }}
                            onChange={(e) => setPhonenumber3(e.target.value)}
                        />
                    )}
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
                    Register
                </button>
                <h6>Already have an account?</h6>
                <Link 
                    to="/login" 
                    style={{ padding: '10px 20px', borderRadius: '3px', border: 'none', backgroundColor: '#007bbb', color: 'white', cursor: 'pointer' }}
                >
                    Login
                </Link>
            </form>
        </div>
    );
}

export default Signup;
