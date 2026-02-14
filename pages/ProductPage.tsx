
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductPageProps {
  onAddToCart: (product: Product, size: string) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('L');
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
    }
  }, [id]);

  if (!product) return (
    <div className="flex items-center justify-center py-40">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
    </div>
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors font-bold uppercase text-[10px] tracking-widest"
        >
          <span className="material-icons-round text-sm">arrow_back</span>
          Back to feed
        </button>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-4">
             <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5 bg-surface group shadow-2xl">
                <img 
                  src={product.imageUrl} 
                  className="w-full h-full object-cover" 
                  alt={product.name} 
                />
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:text-primary transition-all">
                    <span className="material-icons-round">favorite_border</span>
                  </button>
                </div>
             </div>
             <div className="flex gap-4">
               {[0, 1, 2].map((i) => (
                 <button 
                   key={i} 
                   onClick={() => setActiveImg(i)}
                   className={`flex-1 aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-primary' : 'border-white/5'}`}
                 >
                   <img src={product.imageUrl} className="w-full h-full object-cover opacity-50 hover:opacity-100" />
                 </button>
               ))}
             </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-3 italic">{product.subCategory}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic leading-[0.9] tracking-tighter mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black italic text-primary tracking-tighter">₹{product.price}</span>
                <span className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full line-through opacity-50">₹2,499</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Size Selector */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">Select Size</h3>
                  <button className="text-[10px] font-bold uppercase text-primary underline">Size Guide</button>
                </div>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-14 h-14 rounded-xl font-black transition-all flex items-center justify-center
                        ${selectedSize === size ? 'bg-primary text-white neon-glow-pink scale-110' : 'bg-surface text-slate-400 border border-white/5 hover:border-primary/50'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex gap-4">
                <button 
                  onClick={() => onAddToCart(product, selectedSize)}
                  className="flex-grow bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 uppercase tracking-widest text-sm"
                >
                  Grab the Loot
                  <span className="material-icons-round">shopping_bag</span>
                </button>
                <button className="px-5 bg-surface border border-white/5 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <span className="material-icons-round">share</span>
                </button>
              </div>

              {/* Shipping Info */}
              <div className="p-4 bg-accent/5 rounded-2xl border border-accent/10 flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <span className="material-icons-round">local_shipping</span>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-accent">Free Delivery Pan-India</p>
                  <p className="text-[8px] text-slate-500 uppercase font-bold tracking-tighter">Arriving in 3-5 business days</p>
                </div>
              </div>

              {/* Description Tabs */}
              <div className="border-t border-white/5 pt-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Meme Backstory</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {product.description} {product.backstory}
                </p>
                
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Fabric Details</h3>
                <ul className="grid grid-cols-2 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> 240 GSM Premium Cotton</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Terry French Fleece</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> High-Density Puff Print</li>
                  <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Bio-Washed Anti-Shrink</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
