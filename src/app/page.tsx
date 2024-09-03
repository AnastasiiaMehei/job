"use client";

import { useState } from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
  <div className="relative overflow-hidden h-96 flex items-center justify-center">
  
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10 p-8 text-white flex items-center justify-center flex-col">
  <h1 className="text-4xl font-bold mb-4">Welcome to Job Finder</h1>
  <p className="text-xl mb-8">Find your dream job today!</p>
</div>
  </div>
</div>

    </>
  );
}