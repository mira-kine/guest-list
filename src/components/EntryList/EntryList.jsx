import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './Entry-list.css';

export default function EntryList() {
  const { entry } = useEntry();
  return (
    <div>
      {entry.map((item) => (
        <div key={item.id} className="entry-list">
          <span>{item.name}</span>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}
