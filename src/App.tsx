import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}