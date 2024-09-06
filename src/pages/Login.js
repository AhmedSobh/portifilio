import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validation/loginValidation';
import axios from 'axios';
import "../style/style.css"
import videoSrc from '../imgs/imgs/Space Man.mp4';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    console.log("Validation Errors: ", validationErrors);

    if (validationErrors.email === "" && validationErrors.password === "") {
      try {
        const res = await axios.post('http://localhost:8081/login', values);
        console.log("Server Response: ", res.data);
        if (res.data === "Success") {
          navigate('/home');
        } else {
          alert("No Record Data !!");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className="video-container">
        <video autoPlay muted loop id="background-video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className='form-container  p-4 rounded  position-relative' style={{ width: '100%', maxWidth: '500px' }}>
          <form action='' onSubmit={handleSubmit}>
            <p ><strong> Login</strong></p>
            <div className='mb-3'>
              <label htmlFor='email'>Email</label>
              <input onChange={handleInput} name='email' type='email' className='form-control rounded-0' placeholder='Enter email' />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor='password'>Password</label>
              <input onChange={handleInput} name='password' type='password' className='form-control rounded-0' placeholder='Enter Password' />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type='submit' className='btnn-top'>Login</button>
            <br></br><br></br>
            <Link to="/home"><button className="btnn-down">Home Directly</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
