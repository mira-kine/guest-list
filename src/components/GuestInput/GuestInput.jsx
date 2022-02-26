import React from 'react';
import { useState } from 'react';
import { useGuest } from '../../context/GuestProvider/GuestProvider';
import { useEntry } from '../../context/EntryProvider/EntryProvider';
import './GuestInput.css';
import { useKeyPress } from 'react-recipes';
import { useHistory } from 'react-router-dom';

export default function GuestInput() {
  const [guestEntry, setGuestEntry] = useState('');
  const { setGuest, guest } = useGuest();
  const { setEntry } = useEntry();
  const mPress = useKeyPress('m');
  const iPress = useKeyPress('i');
  const rPress = useKeyPress('r');
  const aPress = useKeyPress('a');
  const history = useHistory();

  function updateList() {
    // if there is no guest entry that exists, set new Guest and entry
    if (!guestEntry) return;
    // spread current entries available out, add the new one
    // setGuest(name);
    setEntry((prevState) => [
      ...prevState,
      { name: guest.name, message: guestEntry, id: Math.floor(Math.random() * 100) },
    ]);

    // reset entry space as empty string
    setGuestEntry('');
  }

  // handle for submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList();
  };

  // const guestNameInput = (
  //   <div className="guest-input">
  //     <label>
  //       <h4 className="label">Guest Name: </h4>
  //       <input
  //         className="guest-name"
  //         type="text"
  //         placeholder="Your name here"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </label>
  //   </div>
  // );

  // const handleNew = (e) => {
  //   e.preventDefault();
  //   setGuest('');
  //   setName('');
  // };

  const handleLogout = (e) => {
    e.preventDefault();
    setGuest({ name: '', password: '' });
    history.push('/login');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* {guest ? null : guestNameInput} */}
        <div className="guest-entry-input">
          <label>
            <h4 className="label">Guest Entry: </h4>
            <input
              type="textarea"
              className="guest-entry"
              placeholder="type something..."
              value={guestEntry}
              onChange={(e) => setGuestEntry(e.target.value)}
            />
          </label>
        </div>
        <div className="button-container">
          <button className="submit-button" type="submit" aria-label="submit-button">
            {mPress || iPress || rPress || aPress ? '😀 ' : 'Submit'}
          </button>
          {/* {guest ? (
            <button className="sign-in" onClick={handleNew}>
              Not You?
            </button>
          ) : null} */}
          <button onClick={handleLogout}>Log out</button>
        </div>
      </form>
    </div>
  );
}
