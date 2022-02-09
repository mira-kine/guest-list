import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import './EntryCard.css';

export default function EntryCard() {
  const { entry } = useEntry();
  const { guest } = useGuest();

  return (
    <div className="entry-card">
      {entry.map(({ name, message, id }) => (
        <div key={id} className="entry-list">
          <span className="name">
            {name} {guest === 'indy' ? ' 🎹 ' : ' 🌸  '}
          </span>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
