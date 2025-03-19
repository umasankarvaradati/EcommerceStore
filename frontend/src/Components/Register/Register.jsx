import React, { useState } from 'react';
import '../Login/login.css';
import { FaUser, FaLock, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerUser } from '../../ReduxStore/features/Authenticate/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [isValid, setIsValid] = useState({
    username: true,
    password: true,
    confirmPassword: true,
    email: true,
  });

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^(?=.*[A-Z])[A-Za-z\s]{4,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setIsValid(prevState => ({ ...prevState, username: value ? nameRegex.test(value) : true }));
    } else if (name === "password") {
      setIsValid(prevState => ({ ...prevState, password: value ? passwordRegex.test(value) : true }));
    } else if (name === "confirmPassword") {
      setIsValid(prevState => ({ ...prevState, confirmPassword: formData.password === value || false }));
    } else if (name === "email") {
      setIsValid(prevState => ({ ...prevState, email: value ? emailRegex.test(value) : true }));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    navigate('/');
  };

  return (
    <div>
      <div className='login-form register-form'>
        <div className='wrapper register-page'>
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                name='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="off"
                className={`${isValid.username ? "input-valid" : "input-invalid"}`}
              />
              {!isValid.username && <p className='not-valid'>UserName Must Contain Min 8 Letters</p>}
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input
                type="email"
                name='email'
                value={formData.email}
                placeholder='Email Id'
                onChange={handleChange}
                required
                autoComplete="off"
                className={`no-arrows ${isValid.email ? "input-valid" : "input-invalid"}`}
              />
              <FaPhoneAlt className='icon' />
              {!isValid.email && <p className='not-valid'>Invalid Email Id</p>}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder='Create password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="off"
                className={`${isValid.password ? "input-valid" : "input-invalid"}`}
              />
              <FaLock className='icon' />
              {!isValid.password && <p className='not-valid'>Password Must contain min 8 Letter and a special character and a digit.</p>}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder='Confirm password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                autoComplete="off"
                className={`${isValid.confirmPassword ? "input-valid" : "input-invalid"}`}
              />
              <FaLock className='icon' />
              {!isValid.confirmPassword && <p className='not-valid'>Passwords do not match.</p>}
            </div>
            <div className='button'>
              <button type='submit' disabled={!(isValid.username && (formData.password === formData.confirmPassword) && isValid.email)}>Register</button>
            </div>
            {/* {serverMessage && <p className='server-message'>{serverMessage}</p>} {/* Display server message */}
            {/* {error && <p className='error-message'>{error}</p>}  */}
            <div className="register-link">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
