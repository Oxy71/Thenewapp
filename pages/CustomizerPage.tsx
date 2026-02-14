
import React, { useState } from 'react';
import { Product } from '../types';

interface CustomizerPageProps {
  onAddToCart: (product: Product, size: string) => void;
}

const CustomizerPage: React.FC<CustomizerPageProps> = ({ onAddToCart }) => {
  const [memeText, setMemeText] = useState('YOUR TEXT HERE');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [selectedFont, setSelectedFont] = useState('Space Grotesk');
  const [sticker, setSticker] = useState('https://picsum.photos/seed/meme1/400/400');

  const handleAdd = () => {
    const customProduct: Product = {
      id: `custom-${Date.now()}`,
      name: `Custom "${memeText}" Tee`,
      category: 'Western',
      subCategory: 'User Custom',
      price: 1999,
      imageUrl: sticker,
      description: `User customized t-shirt with text: ${memeText}`,
      points: 200
    };
    onAddToCart(customProduct, 'L');
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter italic leading-none mb-4">
          The <span className="text-accent">Forge</span>
        </h1>
        <p className="text-slate-500 uppercase text-[10px] font-black tracking-[0.4em]">Become the memelord. Design your own drip.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Preview Canvas */}
        <div className="sticky top-24 aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-accent/20 flex items-center justify-center p-8">
           <div className="relative w-full h-full flex items-center justify-center bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {/* Tee Template Placeholder */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center opacity-50">
                 <span className="material-icons-round text-[200px] text-white/5">checkroom</span>
              </div>
              
              {/* Design Area */}
              <div className="relative z-10 w-[70%] h-[70%] flex flex-col items-center justify-center text-center p-4">
                 <img src={sticker} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg mb-4 shadow-2xl" alt="Preview Sticker" />
                 <h2 
                   className="text-2xl md:text-4xl font-black uppercase break-words leading-none italic"
                   style={{ color: selectedColor, fontFamily: selectedFont }}
                 >
                   {memeText}
                 </h2>
              </div>
           </div>
        </div>

        {/* Controls */}
        <div className="space-y-10">
           <section>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">1. Add Your Caption</h3>
              <input 
                type="text" 
                value={memeText}
                onChange={(e) => setMemeText(e.target.value.toUpperCase())}
                placeholder="Type something funny..."
                className="w-full bg-surface border border-white/10 rounded-xl px-6 py-4 font-black italic text-xl focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
              />
           </section>

           <section>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">2. Choose Vibe (Font)</h3>
              <div className="grid grid-cols-2 gap-3">
                 {['Impact', 'Space Grotesk', 'Comic Sans MS', 'Monospace'].map(f => (
                   <button 
                    key={f}
                    onClick={() => setSelectedFont(f)}
                    className={`p-3 rounded-lg border font-bold text-xs ${selectedFont === f ? 'bg-accent text-black border-accent' : 'bg-surface text-slate-400 border-white/5'}`}
                   >
                     {f}
                   </button>
                 ))}
              </div>
           </section>

           <section>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">3. Pick a Base</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                 {[1, 2, 3, 4, 5].map(i => (
                   <button 
                     key={i}
                     onClick={() => setSticker(`https://picsum.photos/seed/sticker${i}/400/400`)}
                     className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${sticker.includes(`sticker${i}`) ? 'border-primary scale-110' : 'border-white/5'}`}
                   >
                     <img src={`https://picsum.photos/seed/sticker${i}/100/100`} className="w-full h-full object-cover" />
                   </button>
                 ))}
              </div>
           </section>

           <section className="pt-8 border-t border-white/5">
              <div className="flex items-center justify-between mb-8">
                 <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Estimated Cost</p>
                    <h4 className="text-3xl font-black italic tracking-tighter text-primary">₹1,999</h4>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Wait Time</p>
                    <h4 className="text-lg font-black italic tracking-tighter text-accent uppercase">7 Days</h4>
                 </div>
              </div>
              <button 
                onClick={handleAdd}
                className="w-full bg-primary py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl neon-glow-pink hover:scale-105 transition-all"
              >
                Send to Foundry
              </button>
           </section>
        </div>
      </div>
    </div>
  );
};

export default CustomizerPage;
