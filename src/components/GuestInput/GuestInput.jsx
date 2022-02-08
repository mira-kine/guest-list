import React from 'react';
import { useState } from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import { useEntry } from '../../context/EntryProvider/EntryProvider';

export default function GuestInput() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { guest, setGuest } = useGuest();
  const { setEntry } = useEntry();

  function updateList() {
    // if there is no guest entry that exists, set new Guest and entry
    if (!guestEntry) return setGuest(name);
    // spread current entries available out, add the new one
    setEntry((prevState) => [...prevState, { name, message: guestEntry, id: guestEntry }]);
    // reset entry space as empty string
    setGuestEntry('');
  }

  // handle for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const guestNameInput = (
    <div>
      <label>Guest Name: </label>
      <input
        id="guestName"
        type="text"
        placeholder="Your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {guest ? null : guestNameInput}
        <div>
          <label>Guest Entry: </label>
          <input
            type="textarea"
            id="guestEntry"
            placeholder="type something nice here"
            value={guestEntry}
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            setGuest('');
            setName('');
          }}
        >
          Not you?
        </button>
      </form>
    </div>
  );
}
