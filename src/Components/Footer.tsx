import React from 'react';
import { Box } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-50">
          <Box className="text-slate-900 w-4 h-4" />
          <span className="font-bold tracking-tighter text-sm uppercase">PureForm Labs</span>
        </div>
        <div className="text-[10px] text-slate-400 uppercase tracking-widest">
          © 2026 Precision Engineering. All Rights Reserved.
        </div>
        <div className="flex gap-6 text-[10px] text-slate-400 uppercase tracking-widest">
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
        </div>
      </div>
    </footer>
  );
};