import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './EntryCard.css';

export default function EntryCard() {
  const { entry } = useEntry();

  return (
    <div className="entry-card">
      {entry.map(({ name, message, id }) => (
        <div key={id} className="entry-list">
          <span className="name">{name}</span>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
