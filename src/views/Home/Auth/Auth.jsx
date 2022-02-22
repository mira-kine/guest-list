import React from 'react';
import { useGuest } from '../../../context/GuestProvider/GuestProvider';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function Auth() {
  const { setGuest, guest } = useGuest();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorMsg] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setGuest({ email: email, password: password });
      setEmail('');
      setPassword('');
    } else {
      setErrorMsg('login was unsuccessful, try again!');
    }
    history.replace(from.pathname);
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>
          email
          <input
            type="email"
            name="email"
            value={email}
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password
          <input
            type="password"
            name="password"
            value={password}
            aria-label="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <h3>{error}</h3>}
    </>
  );
}
