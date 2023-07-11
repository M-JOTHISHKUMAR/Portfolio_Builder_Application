import React from 'react';
// import Login from './login.js';
// import Signup from './signup.js';
import './topbar.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="body">
    <div className="App">
      <nav className="navbar">
  
        <ul className="nav-links">
          <Link to="/"><li className="nav-item">Profile</li></Link>
          <Link to="/sidepanel"><li className="nav-item">Education details</li></Link>
          <li className="nav-item">Internships</li>
          <li className="nav-item">Skills</li>
          <Link to="/login"><li className="nav-item" >Login</li></Link>
        </ul>
      </nav>


        <div className="App">
    
      </div>

      </div>
    </div>
  );
}

export default Home;