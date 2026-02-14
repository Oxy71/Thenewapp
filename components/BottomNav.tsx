
import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../types';

const BottomNav: React.FC = () => {
  const links = [
    { to: AppRoute.Home, icon: 'home', label: 'Home' },
    { to: AppRoute.Collections, icon: 'grid_view', label: 'Shop' },
    { to: AppRoute.Custom, icon: 'add', label: 'Custom', isAction: true },
    { to: AppRoute.Community, icon: 'people', label: 'Squad' },
    { to: AppRoute.Cart, icon: 'shopping_cart', label: 'Cart' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-primary/20 px-6 py-3 pb-6 md:pb-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {links.map((link) => (
          link.isAction ? (
            <div key={link.to} className="relative -top-8">
              <NavLink
                to={link.to}
                className={({ isActive }) => `
                  w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all
                  ${isActive ? 'bg-primary neon-glow-pink' : 'bg-primary/80'}
                  border-4 border-background
                `}
              >
                <span className="material-icons-round text-white text-3xl">add</span>
              </NavLink>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-tighter text-slate-500">
                {link.label}
              </span>
            </div>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                flex flex-col items-center gap-1 transition-colors
                ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}
              `}
            >
              <span className="material-icons-round text-2xl">{link.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">
                {link.label}
              </span>
            </NavLink>
          )
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
