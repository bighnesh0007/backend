import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import Navbar from '../components/Navbar';


function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data: responseData } = await axios.post('/login', {
                email,
                password
            });
            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({ email: '', password: '' });
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error, display a toast message, etc.
            toast.error('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="wrapper">
        <h1>Hello Again!</h1>
        <p>Welcome back you've<br />been missed!</p>
        
                      <form onSubmit={loginUser}>
                      <div className="form-group">
                          <label>Email</label>
                          <input
                              className="form-control"
                              placeholder="Enter email..."
                              type="email"
                              value={data.email}
                              onChange={(e) => setData({ ...data, email: e.target.value })}
                          />
                      </div>
  
                      <div className="form-group">
                          <label>Password</label>
                          <input
                              className="form-control"
                              placeholder="Enter password..."
                              type="password"
                              value={data.password}
                              onChange={(e) => setData({ ...data, password: e.target.value })}
                          />
                      </div>
                      
                      <button type="submit" className="btn btn-primary">Submit</button>
                  </form>	
  
        <p className="or">----- or continue with -----</p>
        <div className="icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <div className="not-member">
          Not a member?  <Link to='/register' className="nav-link">Register</Link>
        </div>
      </div>
    );
}

export default Login;
