
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
  userPoints: number;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQty, 
  onRemove,
  userPoints 
}) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 2000;
  const progress = Math.min(100, (total / freeShippingThreshold) * 100);
  const leftForFree = Math.max(0, freeShippingThreshold - total);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Content */}
      <div className="relative w-[90%] max-w-md h-full bg-surface border-l border-primary/20 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <header className="p-6 pb-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <span className="material-icons-round">close</span>
            </button>
            <h2 className="text-xl font-black uppercase tracking-tight">Your Loot</h2>
          </div>
          <div className="flex items-center gap-1 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="material-icons-round text-xs text-yellow-500">stars</span>
            <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">{userPoints} Points</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 hide-scrollbar">
          {/* Free Shipping Progress */}
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-400 font-medium">Free Shipping Progress</span>
              <span className="text-primary font-bold">₹{leftForFree} left</span>
            </div>
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] mt-2 text-slate-500 uppercase tracking-widest text-center">Pan-India Delivery</p>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <span className="material-icons-round text-6xl text-slate-700">shopping_basket</span>
                <p className="text-slate-400 uppercase tracking-widest text-sm">Your basket is empty</p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2 bg-primary/10 text-primary rounded-lg font-bold uppercase text-xs hover:bg-primary/20"
                >
                  Start Hunting
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="relative p-3 rounded-xl bg-black/30 border border-accent/20 flex gap-4 group">
                  <div className="w-20 h-24 bg-slate-900 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <h3 className="text-sm font-bold leading-tight line-clamp-2">{item.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 uppercase tracking-tighter">Size: <span className="text-accent font-bold">{item.selectedSize}</span></p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary italic">₹{item.price}</span>
                      <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10">
                        <button 
                          onClick={() => onUpdateQty(item.id, item.selectedSize, -1)}
                          className="w-7 h-7 flex items-center justify-center text-slate-400 hover:text-white"
                        >
                          <span className="material-icons-round text-sm">remove</span>
                        </button>
                        <span className="px-3 text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, item.selectedSize, 1)}
                          className="w-7 h-7 flex items-center justify-center text-primary"
                        >
                          <span className="material-icons-round text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id, item.selectedSize)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-primary transition-all"
                  >
                    <span className="material-icons-round text-sm">delete</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Upsell */}
          {cart.length > 0 && (
            <div className="pt-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Complete the Look</h4>
              <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                <RecommendationItem name="Vibe Check Joggers" price={1299} img="https://picsum.photos/seed/joggers/200/200" />
                <RecommendationItem name="Zwigato Cap" price={599} img="https://picsum.photos/seed/cap/200/200" />
                <RecommendationItem name="Sticker Pack" price={199} img="https://picsum.photos/seed/stickers/200/200" />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-surface border-t border-primary/20 space-y-4 pb-12">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase font-black tracking-tighter">Total Loot</span>
                <span className="text-3xl font-black italic tracking-tighter">₹{total.toLocaleString()}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 uppercase font-bold block tracking-widest">Earning Points</span>
                <span className="text-sm font-bold text-yellow-500">+{Math.floor(total/10)} pts</span>
              </div>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 group transition-all active:scale-95 shadow-xl shadow-primary/20 uppercase tracking-widest text-sm">
              Send it!
              <span className="material-icons-round group-hover:translate-x-1 transition-transform">rocket_launch</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const RecommendationItem: React.FC<{ name: string; price: number; img: string }> = ({ name, price, img }) => (
  <div className="flex-shrink-0 w-32 group cursor-pointer">
    <div className="relative aspect-square bg-black/40 rounded-xl overflow-hidden mb-2 border border-white/5">
      <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" alt={name} />
      <button className="absolute bottom-2 right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-lg scale-0 group-hover:scale-100 transition-transform">
        <span className="material-icons-round text-sm">add</span>
      </button>
    </div>
    <p className="text-[10px] font-bold truncate uppercase">{name}</p>
    <p className="text-[10px] text-primary font-bold italic">₹{price}</p>
  </div>
);

export default CartDrawer;
