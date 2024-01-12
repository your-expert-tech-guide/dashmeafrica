// PasswordInput.jsx
//import React, { useState } from 'react';
import hide from './assets/hide.png';
import PropTypes from 'prop-types';

const PasswordInput = ({ placeholder }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2 pl-10 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300"
      />

      <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
        <button
          onClick={handleTogglePassword}
          className="p-2 focus:outline-none focus:ring"
        >
          {showPassword ? (
            <img
              src={hide}
              alt="Hide password"
              className="h-6 w-6 text-gray-500"
            />
          ) : (
            <img
              src={hide}
              alt="Show password"
              className="h-6 w-6 text-gray-500"
            />
          )}
        </button>
      </div>
    </div>
  );

};

PasswordInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};


export default PasswordInput;