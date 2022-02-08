import React from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';

export default function Header() {
  const { guest } = useGuest();
  return <div>Hello {guest ? 'guest' : { guest }}</div>;
}
