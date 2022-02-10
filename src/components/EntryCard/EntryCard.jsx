import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import './EntryCard.css';

export default function EntryCard() {
  const { entry } = useEntry();
  const { guest } = useGuest();

  return (
    <>
      {entry.map(({ name, message, id }) => (
        <div key={id} className="entry-card">
          <span className="name">
            {name} {guest === 'indy' ? ' 🎹 ' : ' 🌸  '}
            {guest === 'tis' && ' 🌟 '}
          </span>
          <p>{message}</p>
        </div>
      ))}
    </>
  );
}
