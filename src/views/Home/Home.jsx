import React from 'react';
import EntryList from '../../components/EntryList/EntryList';
import { EntryProvider } from '../../context/EntryProvider/EntryProvider';
import GuestInput from '../../components/GuestInput/GuestInput';
import Header from '../../components/Header/Header';
import './Home.css';

export default function Home() {
  return (
    <EntryProvider>
      <Header />
      <GuestInput />
      <EntryList />
    </EntryProvider>
  );
}
