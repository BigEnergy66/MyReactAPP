import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductSpec {
  id: string;
  name: string;
  material: string;
  dimensions: string;
  benefit: string;
}

const specs: ProductSpec[] = [
  {
    id: '01',
    name: 'Poly-Clear Series A',
    material: 'Recycled Ocean Polymer',
    dimensions: '120mm x 45mm',
    benefit: 'Ultra-high clarity with structural reinforcement.',
  },
  {
    id: '02',
    name: 'Industrial Prism',
    material: 'Bio-Based Acrylic',
    dimensions: '200mm x 110mm',
    benefit: 'Impact resistant for high-pressure environments.',
  },
  {
    id: '03',
    name: 'Eco-Seal Container',
    material: 'rPET Advanced',
    dimensions: 'Custom Variable',
    benefit: 'Airtight precision molding for longevity.',
  },
];

export const ProductShowcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl font-light tracking-tight text-slate-900">Structural Showcase</h2>
          <div className="w-12 h-1 bg-teal-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-slate-200">
          {specs.map((spec) => (
            <div 
              key={spec.id} 
              className="p-12 border-r border-b border-slate-200 hover:bg-white transition-colors duration-200 group cursor-pointer relative overflow-hidden bg-slate-50/50"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="font-mono text-[10px] text-slate-400 mb-8 uppercase tracking-widest">{spec.id} // Specification</div>
              <h4 className="text-2xl font-medium mb-4 group-hover:text-teal-600 transition-colors">{spec.name}</h4>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs font-light border-b border-slate-100 pb-2">
                  <span className="text-slate-400 uppercase">Material</span>
                  <span className="text-slate-700">{spec.material}</span>
                </div>
                <div className="flex justify-between text-xs font-light border-b border-slate-100 pb-2">
                  <span className="text-slate-400 uppercase">Dimensions</span>
                  <span className="text-slate-700">{spec.dimensions}</span>
                </div>
              </div>
              
              <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                {spec.benefit}
              </p>
              
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all duration-200">
                View Blueprint <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};