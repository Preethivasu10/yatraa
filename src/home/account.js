// MyAccount.js

import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = () => {
  return (
    <div>
      <h2>My Account</h2>
      <div>
        {/* Dropdown for login or sign up */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Choose an option
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link to="/login" className="dropdown-item">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="dropdown-item">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
