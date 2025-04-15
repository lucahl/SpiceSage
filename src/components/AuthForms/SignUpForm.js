import React, { useState } from 'react';
import { auth } from '../../auth/firebase';
import './LoginForm.css';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = ({ setShowSignUpForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('Signed up user:', email);
      })
      .catch((error) => {
        console.error('Sign up error:', error.message);
        setError(error.message);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSignUp();
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Sign Up</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            autocomplete="email"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="input-group">
          {error && <p className="error">{error}</p>}
        </div>
        <div className="button-group">
          <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
          <button className="close-button" onClick={() => setShowSignUpForm(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
