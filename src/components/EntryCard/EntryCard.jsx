import React from 'react';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './EntryCard.css';

export default function EntryCard() {
  const { entry } = useEntry();
  return (
    <>
      {entry.map((item) => (
        <div key={item.id} className="entry-card">
          <div className="name">
            {item.name} {item.name === 'indy' ? ' 🎹 ' : ' 🌸  '}
            {item.name === 'tis' && ' 🌟 '}
          </div>
          <p className="message">{item.message}</p>
        </div>
      ))}
    </>
  );
}
