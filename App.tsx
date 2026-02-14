
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppRoute, CartItem, Product } from './types';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CollectionsPage from './pages/CollectionsPage';
import CustomizerPage from './pages/CustomizerPage';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(450);

  const addToCart = useCallback((product: Product, size: string) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedSize === size) 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = (id: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-background text-white selection:bg-primary selection:text-white">
        <Navbar cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} onToggleCart={toggleCart} />
        
        <main className="flex-grow pb-20">
          <Routes>
            <Route path={AppRoute.Home} element={<Home onAddToCart={addToCart} />} />
            <Route path={AppRoute.Product} element={<ProductPage onAddToCart={addToCart} />} />
            <Route path={AppRoute.Collections} element={<CollectionsPage />} />
            <Route path={AppRoute.Custom} element={<CustomizerPage onAddToCart={addToCart} />} />
            <Route path="*" element={<Home onAddToCart={addToCart} />} />
          </Routes>
        </main>

        <BottomNav />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart}
          onUpdateQty={updateQuantity}
          onRemove={removeFromCart}
          userPoints={userPoints}
        />

        {/* Floating Interactive Stickers */}
        <div className="fixed pointer-events-none inset-0 z-0 overflow-hidden">
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJVxmUkSPGJXu3n1FlAk1FV6DKbwmOnYufuDq2NFGcg2m_XJsbPNNZ9RhDJdyVwfBALjpNed88tV-x7buleV-gufkuYHPuO5vw3ZX8OTEpcTDAsdl3im2dj9AzPneVzrJBRns3YFomSKSyGOUbqJE1H7SKLKE6ZKnn9BUm36DXqTXzoaXUlg_vvJzx_UrqPDzfmnSAuofm6pNmk-MWQJL_gougwecR5XTFo4hRGdzXt-VYHFmVYFL8IzRUu5GZB8TaVhXlzGwYnMo" 
            className="absolute top-24 left-[5%] w-16 h-16 opacity-10 sticker-animation rotate-12"
            alt="Doge"
          />
           <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9TB8tIbMTlRCxjQ3Xm0h8QYZTWwj5uIQk3hv9AwmB-MJuuiXZLY_DACFvYkO4Jsg3Z5C0mBBRpRw0UJR9AwQ_zpGWMRLuYn3qXANH4tmnlxeyCZP22LoEPUk15-FA5vmGaBMZPRzeOim4h4vkK49nL2An6xExOsLFs6e0_mbR648v5X1bbvKi-sgO3m7oJ0YRz-EkdjSUrkwOhbX5x8omcHtYp867TQcMgW66Y88InWd8UwEYksz_nUPM73cyT_UebKkhpCq9GBI" 
            className="absolute bottom-48 right-[8%] w-24 h-24 opacity-10 sticker-animation -rotate-12"
            alt="Pepe"
          />
        </div>

        {/* Social Proof Notification */}
        <div className="fixed bottom-24 left-4 z-40 hidden md:block">
          <div className="bg-primary/95 text-white p-3 rounded-lg shadow-2xl flex items-center space-x-3 max-w-[280px] border border-white/20 backdrop-blur-md">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="material-icons-round text-sm">shopping_bag</span>
            </div>
            <div>
              <p className="text-[10px] leading-tight opacity-90 italic">Someone from <span className="font-bold">Mumbai</span> just bought</p>
              <p className="text-xs font-bold truncate">"Rickshaw Art" Oversized Tee</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
