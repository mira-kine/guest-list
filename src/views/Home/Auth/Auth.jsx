import React from 'react';
import { useState } from 'react';
import { useGuest } from '../../../context/GuestProvider/GuestProvider';
import { useLocation, useHistory } from 'react-router-dom';

export default function Auth() {
  const { setGuest } = useGuest();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrorMsg] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const { from } = location.state || { from: { pathname: '/' } };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      name === process.env.REACT_APP_AUTH_NAME &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setGuest({ name: name, password: password });
      setName('');
      setPassword('');
      history.replace(from.pathname);
    } else {
      setErrorMsg('login was unsuccessful, try again!');
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>
          name
          <input
            type="text"
            name="name"
            value={name}
            aria-label="name"
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit">Log in</button>
      </form>
      {error && <h3>{error}</h3>}
    </>
  );
}
