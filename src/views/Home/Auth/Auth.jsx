import React from 'react';
import { useGuest } from '../../../context/GuestProvider/GuestProvider';
import { useState } from 'react';
export default function Auth() {
  const { guest } = useGuest();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <form>
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
    </div>
  );
}
