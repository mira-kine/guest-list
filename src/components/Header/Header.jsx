import React from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import './Header.css';

export default function Header() {
  const { guest } = useGuest();
  return (
    <div className="header">
      Hello {guest ? guest : 'guest'} {guest === 'indy' ? ' 🎹 ' : ' ❤  '}
    </div>
  );
}
