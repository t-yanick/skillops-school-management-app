import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const runLoginAuth = async (email, password) => {

  }

  const handleSubmit = (email, password) => {
    runLoginAuth(email, password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <div>
      <h1 className="heading">Login</h1>
      <div className="content">
        <div>
          <form onSubmit={onSubmit} className="form">
            <div className="form__group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <button type="submit" className="btn mb3">{btnName}</button> */}
            <button type="submit" className="btn mb3">Save</button>
          </form>
        </div>
        <Link to="/" className="btn">Go back to Home</Link>
        <h3>
          Not registered, <span><Link to="/register" className="btn">Signup Here</Link></span>
        </h3>
      </div>
    </div>
  )
}



export default Login;