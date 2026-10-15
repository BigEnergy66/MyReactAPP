import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default App;