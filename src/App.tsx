import React from 'react';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { ProductShowcase } from './Components/ProductShowcase';
import { QuoteForm } from './Components/QuoteForm';
import { Footer } from './Components/Footer';

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