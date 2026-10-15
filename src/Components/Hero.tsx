import React from 'react';
import { Droplets, Recycle, ShieldCheck, Ruler } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-widest">
              <Droplets className="w-3 h-3" /> Material Excellence
            </div>
            <h1 className="text-6xl lg:text-8xl font-light leading-[0.9] tracking-tighter text-slate-900">
              The Geometry of <br />
              <span className="font-medium italic text-slate-500">Pure Protection.</span>
            </h1>
            <p className="max-w-md text-lg text-slate-600 leading-relaxed font-light">
              Engineering high-precision custom plastic packaging where Scandinavian minimalism meets industrial authority. Consciously crafted for the next era of sustainable logistics.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-teal-600 transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0">
                Explore Catalog
              </button>
              <button className="px-8 py-4 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all duration-200">
                Our Process
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white to-slate-200 rounded-2xl border border-slate-200 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-teal-400/10 mix-blend-overlay animate-pulse" />
              <div className="absolute top-12 right-12 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl group-hover:bg-amber-300/40 transition-colors duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 border border-slate-300 rotate-45 transition-transform duration-500 group-hover:rotate-90" />
                <div className="absolute w-1/3 h-1/3 border border-slate-300 -rotate-12 transition-transform duration-700 group-hover:rotate-45" />
              </div>
              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-slate-400 uppercase tracking-tighter">
                Ref: PF-2026 // Material: RecycledPolymer_V4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 border-l border-slate-200 pl-8">
              <Recycle className="text-teal-600 w-6 h-6" />
              <h3 className="text-lg font-medium">Eco-Conscious Core</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Utilizing ocean-bound plastics and bio-polymers to ensure a closed-loop lifecycle without compromising structural integrity.
              </p>
            </div>
            <div className="space-y-4 border-l border-slate-200 pl-8">
              <ShieldCheck className="text-amber-500 w-6 h-6" />
              <h3 className="text-lg font-medium">Structural Authority</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Precision molding designed to architectural tolerances, ensuring every seal is airtight and every edge is exact.
              </p>
            </div>
            <div className="space-y-4 border-l border-slate-200 pl-8">
              <Ruler className="text-slate-400 w-6 h-6" />
              <h3 className="text-lg font-medium">Modernist Clarity</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Visual purity inspired by Scandinavian design, transforming utility packaging into a symbol of premium quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};