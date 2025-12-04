import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { UraDemo } from './components/UraDemo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Features />
        <UraDemo />
        <Contact />
      </main>
      
      <Footer />
      <AIChat />
    </div>
  );
}

export default App;