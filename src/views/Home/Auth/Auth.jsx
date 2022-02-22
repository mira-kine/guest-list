import React from 'react';
import { useGuest } from '../../../context/GuestProvider/GuestProvider';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function Auth() {
  const { login } = useGuest();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorMsg] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };
  const handleLogin = (e) => {
    e.preventDefault();
    const authSuccess = login(email, password);
    {
      authSuccess
        ? history.replace(from.pathname)
        : setErrorMsg('login was unsuccessful, try again');
    }
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
