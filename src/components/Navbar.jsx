import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css'; // Import custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">VibeOnHere</Link>
        <ul className="navbar-links">
          <li><Link to="/">News Feed</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/create-post">Create Post</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
