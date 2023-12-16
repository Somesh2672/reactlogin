import React, { useState } from 'react';
import './App.css';

const App = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for validation status
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation (simple check for a valid email format)
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmailValid(isValidEmail);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation (at least 8 characters long)
    const isValidPassword = newPassword.length >= 8;
    setPasswordValid(isValidPassword);
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Confirm password validation (matches the password)
    const isValidConfirmPassword = newConfirmPassword === password;
    setConfirmPasswordValid(isValidConfirmPassword);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('All fields must be filled out. Please enter your details.');
    } 
    else if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } 
    else {
      alert('Can’t submit the form. Please check the input fields.');
    }
  };

  return (
    <div className='app'>
      <div className='email'>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '1px solid green' : '1px solid red' }}
        />
        {!emailValid && <div style={{ color: 'red' }}>Invalid email format</div>}
      </div>

      <div className='password'>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordValid ? '1px solid green' : '1px solid red' }}
        />
        {!passwordValid && <div style={{ color: 'red' }}>Password must be at least 8 characters long</div>}
      </div>

      <div className='confirmPassword'>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ border: confirmPasswordValid ? '1px solid green' : '1px solid red' }}
        />
        {!confirmPasswordValid && <div style={{ color: 'red' }}>Passwords do not match</div>}
      </div>

      <button onClick={handleSubmit}>Sign up</button>
    </div>
  );
};

export default App;
