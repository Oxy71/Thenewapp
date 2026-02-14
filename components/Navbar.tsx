
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';

interface NavbarProps {
  cartCount: number;
  onToggleCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onToggleCart }) => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to={AppRoute.Home} className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <span className="material-icons-round text-white text-xl">shopping_bag</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            Meme<span className="text-primary">Bazaar</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <span className="material-icons-round text-2xl">search</span>
          </button>
          
          <button 
            onClick={onToggleCart}
            className="relative p-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="material-icons-round text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold neon-glow-pink">
                {cartCount}
              </span>
            )}
          </button>

          <button className="hidden sm:flex p-2 text-white/70 hover:text-white transition-colors">
            <span className="material-icons-round text-2xl">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
