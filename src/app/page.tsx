"use client";

import { useState } from 'react';
import Header from '../components/Header';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />
      
      <ToastContainer />
     
    </>
  );
}