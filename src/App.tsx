import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import NotFoundPage from './pages/NotFoundPage';
import InfoPage from './pages/InfoPage';
import CheckoutPage from './pages/CheckoutPage';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/info/:slug" element={<InfoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    <Toaster position="bottom-right" gutter={8} toastOptions={{ duration: 2500, style: { background: '#18181b', color: '#fafafa', border: '1px solid #3f3f46', borderRadius: '0', fontSize: '13px', fontFamily: 'Inter, sans-serif', padding: '10px 14px' }, success: { iconTheme: { primary: '#d97706', secondary: '#fff' } } }} />
  </BrowserRouter>
);
export default App;
