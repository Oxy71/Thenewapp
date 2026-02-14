
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, Product } from '../types';
import { PRODUCTS, COLLECTIONS } from '../constants';

interface HomeProps {
  onAddToCart: (product: Product, size: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'Desi' | 'Western'>('Desi');

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="px-4 py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[21/9] group border border-white/5 shadow-2xl">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q55JiaZS4jegqdANILr9eRTyu__WQs7sob6VXojLqWaPzrlCol9FRvyDU_lRC2AAdRNM5-w6R_6p7-40dNWGixV1vpbC0fNhFuiOoBgmVfYJQSYQ84MmCHzyqkG-H-UB33jCChJ1wYjLMr8dJ2MOztU04U1xrASisCvAniP8oz-D85gilmEBlf8xyoWvUgg8qc9m-N27Fsoc_bD7fcIf40l6GCJytBQJ0hGtQ32UHYxLTTGEduaQQI3ncspL162ukImqxzwxfpc" 
              alt="Meme Streetwear Hero" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 max-w-xl">
              <span className="inline-block bg-accent text-black text-[10px] font-black px-3 py-1 rounded mb-4 uppercase tracking-widest neon-glow-blue animate-pulse">New Drop</span>
              <h2 className="text-4xl md:text-7xl font-black leading-[0.9] uppercase mb-4 italic">
                Wear Your<br/><span className="text-primary">Meme.</span>
              </h2>
              <p className="text-sm md:text-lg text-slate-300 mb-8 font-light max-w-md">
                High-energy streetwear for the internet-obsessed generation. Limited drops only.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm flex items-center gap-3 neon-glow-pink hover:scale-105 transition-all">
                Shop the Drop <span className="material-icons-round">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mode Toggle */}
      <section className="px-4 py-6 flex justify-center">
        <div className="bg-surface p-1.5 rounded-2xl flex items-center w-full max-w-sm border border-primary/20">
          <button 
            onClick={() => setActiveTab('Desi')}
            className={`flex-1 py-3 px-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all ${activeTab === 'Desi' ? 'bg-primary text-white shadow-lg' : 'text-slate-500'}`}
          >
            Desi Mode
          </button>
          <button 
            onClick={() => setActiveTab('Western')}
            className={`flex-1 py-3 px-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all ${activeTab === 'Western' ? 'bg-accent text-black shadow-lg' : 'text-slate-500'}`}
          >
            Western
          </button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface border border-primary/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-1">Next Limited Drop</p>
              <h3 className="text-2xl md:text-3xl font-black italic uppercase">Billionaire Grinch Tee</h3>
            </div>
            <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/5">
              <CountdownUnit value="02" label="Hrs" />
              <span className="text-2xl font-black text-slate-700 animate-pulse">:</span>
              <CountdownUnit value="48" label="Min" />
              <span className="text-2xl font-black text-slate-700 animate-pulse">:</span>
              <CountdownUnit value="15" label="Sec" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12">
        <div className="px-4 max-w-7xl mx-auto flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black uppercase tracking-tighter italic">Trending <span className="text-primary">Now</span></h3>
          <Link to={AppRoute.Collections} className="text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">View All Items</Link>
        </div>
        <div className="flex overflow-x-auto gap-6 px-4 md:px-0 hide-scrollbar max-w-7xl mx-auto">
          {PRODUCTS.filter(p => activeTab === 'Western' ? p.category === 'Western' : p.category === 'Desi').map((product) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[320px] flex-shrink-0 group">
              <Link to={`/product/${product.id}`} className="block relative bg-surface rounded-2xl aspect-[3/4] mb-4 overflow-hidden border border-white/5 group">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={product.imageUrl} alt={product.name} />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all">
                    <span className="material-icons-round text-xl">favorite_border</span>
                  </button>
                  <button 
                    onClick={(e) => { e.preventDefault(); onAddToCart(product, 'L'); }}
                    className="w-10 h-10 rounded-full bg-primary backdrop-blur-md flex items-center justify-center text-white shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all"
                  >
                    <span className="material-icons-round text-xl">add_shopping_cart</span>
                  </button>
                </div>
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">{product.tag}</span>
                  </div>
                )}
              </Link>
              <div className="px-2">
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-1">{product.subCategory}</p>
                <h4 className="text-lg font-bold truncate leading-tight">{product.name}</h4>
                <div className="flex items-center justify-between mt-2">
                   <p className="text-xl font-black italic tracking-tighter">₹{product.price}</p>
                   <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-primary rounded-3xl p-8 overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center py-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6 rotate-12 group-hover:rotate-0 transition-transform">
                <span className="material-icons-round text-5xl text-white">psychology</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none mb-4">What Meme<br/><span className="text-black">Are You?</span></h3>
              <p className="text-white/90 text-sm md:text-lg mb-10 max-w-sm font-medium">Find your soul-meme and unlock a secret <span className="text-black font-black">20% DISCOUNT</span> code.</p>
              <button className="w-full max-w-xs bg-white text-primary font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-slate-100 active:scale-95 transition-all">
                Take the Quiz
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vaporwave / Glitch Grid Section (Western Featured) */}
      {activeTab === 'Western' && (
        <section className="py-20 vaporwave-grid overflow-hidden border-y border-primary/10 mt-12">
          <div className="px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                 <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic">
                  <span className="text-accent neon-text-blue">CYBER</span><br/>
                  <span className="text-primary">CORE</span>
                 </h2>
                 <p className="text-slate-400 text-lg max-w-md">The original internet archive. Restocked with early 2010s classics and Gen-Alpha chaos.</p>
                 <div className="flex gap-4">
                    <Link to={AppRoute.Collections} className="px-8 py-3 bg-white text-black font-black rounded-lg uppercase tracking-widest text-xs hover:scale-105 transition-all">Explore</Link>
                    <Link to={AppRoute.Collections} className="px-8 py-3 border border-accent text-accent font-black rounded-lg uppercase tracking-widest text-xs hover:bg-accent/10 transition-all">Archive</Link>
                 </div>
              </div>
              <div className="flex-1 relative">
                  <div className="grid grid-cols-2 gap-4">
                    {COLLECTIONS.filter(c => c.category === 'Western').map(col => (
                      <div key={col.id} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl shadow-primary/10">
                        <img src={col.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                           <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-1 italic">Collection</p>
                           <h4 className="text-sm font-bold uppercase">{col.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Desi Poster Wall Section (Desi Featured) */}
      {activeTab === 'Desi' && (
        <section className="py-20 bg-[#1e0d14] relative overflow-hidden mt-12">
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f4256a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
           <div className="px-4 max-w-7xl mx-auto relative z-10">
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic text-primary">Local <span className="text-white">Legends</span></h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {COLLECTIONS.filter(c => c.category === 'Desi').map(col => (
                  <div key={col.id} className="group relative aspect-[3/4] bg-surface rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-4 hover:rotate-2">
                    <img src={col.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      {col.trending && <span className="bg-primary text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">Trending</span>}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                       <h4 className="text-2xl font-black italic uppercase leading-tight mb-2">{col.name}</h4>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{col.itemCount} Items Available</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>
      )}
    </div>
  );
};

const CountdownUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-2xl md:text-3xl font-black font-mono text-accent">{value}</span>
    <span className="text-[8px] uppercase font-black text-slate-500 tracking-widest">{label}</span>
  </div>
);

export default Home;
