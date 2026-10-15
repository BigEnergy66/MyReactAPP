import React from 'react';
import { Box } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center">
            <Box className="text-white w-5 h-5" />
          </div>
          <span className="font-bold tracking-tighter text-xl uppercase">PureForm <span className="text-teal-600">Labs</span></span>
        </div>
        <div className="hidden md:flex gap-12 text-xs font-medium uppercase tracking-widest text-slate-500">
          <a href="#philosophy" className="hover:text-teal-600 transition-colors">Philosophy</a>
          <a href="#showcase" className="hover:text-teal-600 transition-colors">Showcase</a>
          <a href="#quote" className="hover:text-teal-600 transition-colors">Custom Quote</a>
        </div>
      </div>
    </nav>
  );
};