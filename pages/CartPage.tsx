
import React from 'react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQty: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
  userPoints: number;
}

const CartPage: React.FC<CartPageProps> = ({ cart, onUpdateQty, onRemove, userPoints }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="animate-in fade-in duration-500 px-4 py-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-black italic uppercase tracking-tighter">My <span className="text-primary">Loot</span></h1>
        <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/30">
          <span className="material-icons-round text-yellow-500 text-sm">stars</span>
          <span className="text-xs font-black text-yellow-500 uppercase">{userPoints} pts</span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="py-20 text-center space-y-6">
          <div className="w-24 h-24 bg-surface rounded-3xl flex items-center justify-center mx-auto border border-white/5">
            <span className="material-icons-round text-5xl text-slate-700">shopping_bag</span>
          </div>
          <div>
            <h2 className="text-xl font-bold uppercase mb-2">Basket is empty af</h2>
            <p className="text-slate-500 text-sm">Don't be a normie. Grab some drip.</p>
          </div>
          <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs">
            Start Hunting
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="p-4 bg-surface border border-white/5 rounded-2xl flex gap-6 items-center">
                <div className="w-20 h-24 bg-slate-900 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.imageUrl} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold uppercase tracking-tight text-lg mb-1">{item.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Size: <span className="text-accent">{item.selectedSize}</span></p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10">
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, -1)} className="w-8 h-8 flex items-center justify-center text-slate-500">-</button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, item.selectedSize, 1)} className="w-8 h-8 flex items-center justify-center text-primary">+</button>
                    </div>
                    <button onClick={() => onRemove(item.id, item.selectedSize)} className="text-slate-600 hover:text-primary transition-colors">
                      <span className="material-icons-round text-sm">delete</span>
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black italic">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-surface border border-primary/20 rounded-3xl space-y-6 shadow-2xl">
            <div className="flex justify-between items-end border-b border-white/5 pb-6">
              <div>
                <p className="text-xs font-black uppercase text-slate-500 tracking-[0.2em] mb-1">Total Bill</p>
                <h4 className="text-4xl font-black italic tracking-tighter">₹{total.toLocaleString()}</h4>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase text-accent tracking-widest mb-1">You save</p>
                <p className="text-sm font-bold text-accent italic">₹{Math.floor(total * 0.1)} on this drop</p>
              </div>
            </div>

            <button className="w-full bg-primary py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl neon-glow-pink hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
              Checkout Now
              <span className="material-icons-round">arrow_forward</span>
            </button>
            <p className="text-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Secure UPI & Card Payments Enabled</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
