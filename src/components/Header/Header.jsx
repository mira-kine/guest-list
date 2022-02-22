import React from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import './Header.css';

export default function Header() {
  const {
    guest: { name },
  } = useGuest();

  return (
    <div className="header">
      Hello {name ? name : 'name'} ❤ {name === 'indy' && ' 🎹 '}
      {name === 'tis' && ' 🌟 '}
    </div>
  );
}
11;
