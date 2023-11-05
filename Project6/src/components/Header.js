import React from 'react';

const Header = () => {
  return (
    <div className="parent-header">
      <div className="Header">
        <div className="logo">
          <h4>PDF</h4>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Register</li>
            <li>Login</li>
            <li>Blog</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
