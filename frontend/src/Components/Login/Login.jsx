import React, { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux';
import { FaUser, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../ReduxStore/features/Authenticate/authSlice';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate('/');
  };
  return (
    <div className='login-form'>
      <div className='wrapper'>
        <div className='form-box login'></div>
        <form action="" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" name='username' placeholder='Username/Mobilenumber'
              onChange={handleChange}
              autoComplete='off'
              required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="password"
              name='password' placeholder='Password'
              onChange={handleChange} 
              autoComplete='off'
              required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <div className='button'><button type='submit'>Login</button></div>
          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login