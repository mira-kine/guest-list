import React from 'react';
import { useState } from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './GuestInput.css';
import { useKeyPress } from 'react-recipes';

export default function GuestInput() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { guest, setGuest } = useGuest();
  const { setEntry } = useEntry();
  const mPress = useKeyPress('m');
  const iPress = useKeyPress('i');
  const rPress = useKeyPress('r');
  const aPress = useKeyPress('a');

  function updateList() {
    // if there is no guest entry that exists, set new Guest and entry
    if (!guestEntry) return;
    // spread current entries available out, add the new one
    setGuest(name);
    setEntry((prevState) => [
      ...prevState,
      { name, message: guestEntry, id: Math.floor(Math.random() * 100) },
    ]);

    // reset entry space as empty string
    setGuestEntry('');
  }

  // handle for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  const guestNameInput = (
    <div className="guest-input">
      <label>
        Guest Name:
        <input
          className="guest-name"
          type="text"
          placeholder="Your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );

  const handleNew = (e) => {
    e.preventDefault();
    setGuest('');
    setName('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {guest ? null : guestNameInput}
        <div className="guest-entry-input">
          <label>
            Guest Entry:
            <input
              type="textarea"
              className="guest-entry"
              placeholder="type something nice here"
              value={guestEntry}
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </label>
        </div>
        <div className="button-container">
          <button className="submit-button" type="submit">
            {mPress || iPress || rPress || aPress ? '😀 ' : 'Submit'}
          </button>
          {guest ? (
            <button className="sign-in" onClick={handleNew}>
              Not {guest}?
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}
