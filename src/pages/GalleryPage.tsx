import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/siteData';
import { MapPin, MessageSquare, X, Trees, ZoomIn, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

const CATEGORIES = [
  'All Installations',
  'Living Room',
  'Dining Room',
  'Bedroom',
  'Outdoor & Veranda',
  'Craftsmanship',
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Installations');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All Installations') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleWhatsAppEnquiry = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `*Dimos Furniture Gallery Lookbook Inquiry*\n\n` +
      `📸 *Featured Installation:* ${item.title}\n` +
      `🏷️ *Category:* ${item.category}\n` +
      `🌲 *Timber:* ${item.woodType}\n` +
      `📍 *Inspiration:* ${item.location}\n\n` +
      `Hello Dimos, I would like to consult on styling my residence with a similar handcrafted furniture layout.`
    );
    window.open(`https://wa.me/917025936662?text=${text}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: 'clamp(80px, 12vw, 110px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header Title Section */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Client Homes & Staging Lookbook <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              fontWeight: 'bold',
              color: 'var(--color-text-main)',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            The Architectural Gallery
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '14.5px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            A curated visual chronicle of real Kerala villa installations, handcrafted solid teakwood living suites,
            sculpted dining spaces, and artisanal joinery moments from our Kollam workshops.
          </p>
        </div>

        {/* Horizontal Scrollable Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '32px',
            paddingBottom: '14px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="scroll-x-touch" style={{ display: 'flex', gap: '8px', maxWidth: '100%' }}>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isActive ? 'var(--color-text-main)' : 'var(--color-surface)',
                    color: isActive ? '#ffffff' : 'var(--color-text-body)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-text-main)' : 'var(--color-border)',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    flexShrink: 0,
                    minHeight: '38px',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Image Canvas with Zoom Icon */}
              <div
                style={{
                  position: 'relative',
                  height: item.aspectRatio === 'tall' ? 'clamp(280px, 40vw, 360px)' : 'clamp(220px, 30vw, 260px)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-soft)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(28, 27, 26, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.category}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-main)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  }}
                >
                  <ZoomIn size={15} />
                </div>
              </div>

              {/* Card Meta */}
              <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3
                    className="font-melfira"
                    style={{
                      fontSize: '17px',
                      fontWeight: 'bold',
                      color: 'var(--color-text-main)',
                      marginBottom: '4px',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-teak-dark)', marginBottom: '8px', fontWeight: 600 }}>
                    <MapPin size={13} color="var(--color-teak)" />
                    <span>{item.location}</span>
                  </div>

                  <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ paddingTop: '10px', borderTop: '1px solid var(--color-border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'var(--color-text-body)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Trees size={12} color="var(--color-teak)" />
                    <span>{item.woodType}</span>
                  </span>

                  <span style={{ fontSize: '11px', color: 'var(--color-teak)', fontWeight: 700, textTransform: 'uppercase' }}>
                    Inspect Look →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Preview Modal (Full Touch Optimized) */}
        {activeItem && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1300,
              backgroundColor: 'rgba(28, 27, 26, 0.88)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(12px, 3vw, 24px)',
            }}
            onClick={() => setActiveItem(null)}
          >
            <div
              className="animate-fade"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                maxWidth: '880px',
                width: '100%',
                maxHeight: '92vh',
                overflowY: 'auto',
                padding: 'clamp(18px, 3vw, 28px)',
                position: 'relative',
                boxShadow: '0 28px 70px rgba(0,0,0,0.35)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                aria-label="Close Lightbox"
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(28, 27, 26, 0.8)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <X size={18} />
              </button>

              <div style={{ borderRadius: '16px', overflow: 'hidden', height: 'clamp(240px, 45vw, 440px)', marginBottom: '18px', backgroundColor: '#f0ece5' }}>
                <img src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-teak)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    {activeItem.category} • {activeItem.location}
                  </div>
                  <h2 className="font-melfira" style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 'bold', color: 'var(--color-text-main)', margin: '0 0 6px 0' }}>
                    {activeItem.title}
                  </h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.6, maxWidth: '580px', margin: '0 0 10px 0' }}>
                    {activeItem.description}
                  </p>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    <strong>Timber Craftsmanship: </strong>{activeItem.woodType}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: 'clamp(200px, 100%, 280px)' }}>
                  <button
                    onClick={() => handleWhatsAppEnquiry(activeItem)}
                    className="btn-pill-dark"
                    style={{ padding: '12px 20px', fontSize: '11px', gap: '8px', width: '100%' }}
                  >
                    <MessageSquare size={14} />
                    <span>Enquire This Look</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveItem(null);
                      onNavigate('showrooms');
                    }}
                    className="btn-pill-outline"
                    style={{ padding: '10px 18px', fontSize: '11px', width: '100%' }}
                  >
                    Visit Showroom
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: '56px',
            padding: 'clamp(24px, 4vw, 36px)',
            borderRadius: '24px',
            backgroundColor: 'var(--color-surface-card)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          <div>
            <h3 className="font-melfira" style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', fontWeight: 'bold', margin: '0 0 4px 0' }}>
              Want to see more live stagings?
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', margin: 0 }}>
              Visit any of our 5 Kollam experience centers to explore full 3,000+ sq.ft curated room layouts in person.
            </p>
          </div>
          <button onClick={() => onNavigate('showrooms')} className="btn-pill-dark" style={{ padding: '12px 24px', fontSize: '11.5px', gap: '8px' }}>
            <span>View 5 Showroom Locations</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
