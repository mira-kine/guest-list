import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import { EntryProvider } from '../../context/EntryProvider/EntryProvider';
import GuestInput from '../../components/GuestInput/GuestInput';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <div>
      <EntryProvider>
        <Header />
        <GuestInput />
        <EntryList />
      </EntryProvider>
    </div>
  );
}
