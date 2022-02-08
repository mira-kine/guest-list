import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './Entry-list.css';

export default function EntryList() {
  const { entry } = useEntry();
  return (
    <div>
      {entry.map(({ name, message, id }) => (
        <div key={id} className="entry-list">
          <span>{name}</span>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
