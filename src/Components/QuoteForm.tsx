import React from 'react';

export const QuoteForm: React.FC = () => {
  return (
    <section id="quote" className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent" />
      
      <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight">Ready for Precision?</h2>
          <p className="text-slate-400 font-light">
            Consult with our structural engineers to design packaging that protects your product and the planet.
          </p>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-800 border border-slate-700 px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors" 
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Company Email</label>
            <input 
              type="email" 
              className="w-full bg-slate-800 border border-slate-700 px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors" 
              placeholder="john@company.com"
            />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Project Requirements</label>
            <textarea 
              className="w-full bg-slate-800 border border-slate-700 px-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors h-32" 
              placeholder="Describe your dimensions and material needs..."
            />
          </div>
          <button className="md:col-span-2 w-full py-4 bg-teal-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-teal-500 transition-all duration-200 active:scale-[0.98]">
            Request Technical Quote
          </button>
        </form>
      </div>
    </section>
  );
};