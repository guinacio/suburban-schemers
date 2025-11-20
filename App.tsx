import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheSetup } from './components/TheSetup';
import { Schemes } from './components/Schemes';
import { Duo } from './components/Duo';
import { SchemeGenerator } from './components/SchemeGenerator';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-body selection:bg-tomato selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TheSetup />
        <Schemes />
        <SchemeGenerator />
        <Duo />
      </main>
      <Footer />
    </div>
  );
}