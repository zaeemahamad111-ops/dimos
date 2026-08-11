import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { WatermarkFooter } from './components/WatermarkFooter';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { GalleryPage } from './pages/GalleryPage';
import { OffersPage } from './pages/OffersPage';
import { AboutPage } from './pages/AboutPage';
import { ShowroomsPage } from './pages/ShowroomsPage';
import { ContactPage } from './pages/ContactPage';

// Shared Drawers and Modals
import { ProductDetailModal } from './components/ProductDetailModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { LearnMoreModal } from './components/LearnMoreModal';
import { InitialLoader } from './components/InitialLoader';

import type { ProductItem } from './data/siteData';

export function App() {
  // Initial 5-Second Loading Screen State
  const [isLoading, setIsLoading] = useState(true);

  // Navigation Router State
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParam, setPageParam] = useState<string | undefined>(undefined);

  // Modals State
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [learnMoreType, setLearnMoreType] = useState<'quality' | 'sustainability' | null>(null);

  // Sync hash routing for browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (hash && ['home', 'shop', 'gallery', 'offers', 'showrooms', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string, param?: string) => {
    setCurrentPage(pageId);
    setPageParam(param);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="kayujati-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 5-Second Luxury Frame Preloader */}
      {isLoading && <InitialLoader onFinish={() => setIsLoading(false)} />}

      {/* Global Dynamic Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Multi-Page Route Render */}
      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomePage
            onSelectProduct={(product) => setSelectedProduct(product)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            onSelectProduct={(product) => setSelectedProduct(product)}
            onNavigate={handleNavigate}
            initialCategory={pageParam}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'offers' && (
          <OffersPage
            onSelectProduct={(product) => setSelectedProduct(product)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'showrooms' && (
          <ShowroomsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Watermark Footer */}
      <WatermarkFooter
        onNavigate={handleNavigate}
      />

      {/* Product Architecture & Specification Inquiry Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigate={handleNavigate}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => {
          setSelectedProduct(product);
          setIsSearchOpen(false);
        }}
      />

      {/* Learn More Quality / Sustainability Modal */}
      <LearnMoreModal
        type={learnMoreType}
        isOpen={!!learnMoreType}
        onClose={() => setLearnMoreType(null)}
      />
    </div>
  );
}

export default App;
