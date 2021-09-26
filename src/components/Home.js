import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1 className="heading">Home</h1>
    <div className="content">
      <h2 className="home__heading">
        Welcome to SkillOps.ai School Management System
      </h2>
      <div>
        <Link to="/login" className="btn mb2 dark">Login</Link>
        <Link to="/register" className="btn mb2 medium">Signup</Link>
      </div>
    </div>
  </div>
);

export default Home;