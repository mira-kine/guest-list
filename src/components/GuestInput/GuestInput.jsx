import React from 'react';
import { useState } from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import { useEntry } from '../../context/EntryProvider/EntryProvider';

export default function GuestInput() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { guest, setGuest } = useGuest();
  const { entry, setEntry } = useEntry();

  function updateList() {
    // if there is no guest entry that exists, set new Guest and entry
    if (!guestEntry) return setGuest(name);
    // spread current entries available out, add the new one
    setEntry([...entry, { name, message: guestEntry }]);
    // reset entry space as empty string
    setGuestEntry('');
  }
  // handle for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Guest Name: </label>
          <input
            id="guestName"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Guest Entry: </label>
          <textarea
            id="guestEntry"
            placeholder="type something nice here"
            value={guestEntry}
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setGuest('');
            setName('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
