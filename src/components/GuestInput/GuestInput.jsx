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
    setEntry([entry, { name, guestEntry }]);
    // reset entry space as empty string
    setGuestEntry('');
  }

  // handle for submit button
  const handleSubmit = (e) => {
    e.preventDefault;
    updateList();
  };

  // set
  return (
    <div>
      <form>
        <div>
          <label>Guest Name: </label>
          <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Guest Entry: </label>
          <textarea
            placeholder="type something nice here"
            value={guestEntry}
            onChange={(e) => setGuestEntry(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
