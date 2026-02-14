
import React, { useState } from 'react';
import { COLLECTIONS } from '../constants';

const CollectionsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Desi' | 'Western'>('All');

  const filtered = filter === 'All' ? COLLECTIONS : COLLECTIONS.filter(c => c.category === filter);

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
           <h1 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">The <span className="text-primary">Vault</span></h1>
           <p className="text-slate-500 uppercase text-[10px] font-black tracking-[0.3em]">Curated meme culture for your wardrobe</p>
        </div>
        <div className="flex bg-surface p-1 rounded-xl border border-white/5">
           {['All', 'Desi', 'Western'].map((f) => (
             <button
               key={f}
               onClick={() => setFilter(f as any)}
               className={`px-6 py-2 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all ${filter === f ? 'bg-primary text-white' : 'text-slate-500 hover:text-white'}`}
             >
               {f}
             </button>
           ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((col) => (
          <div key={col.id} className="group relative aspect-[4/5] bg-surface rounded-3xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border border-white/5">
            <img 
              src={col.imageUrl} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60" 
              alt={col.name} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
            
            <div className="absolute top-6 left-6 flex gap-2">
               {col.trending && (
                 <span className="bg-primary text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] shadow-lg">Trending</span>
               )}
               <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em]">{col.category}</span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
               <h3 className="text-4xl font-black italic uppercase leading-[0.8] mb-3 group-hover:text-primary transition-colors">{col.name}</h3>
               <div className="flex items-center gap-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{col.itemCount} Unique Pieces</p>
                  <div className="h-px flex-1 bg-white/10"></div>
                  <span className="material-icons-round text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
