import React, { useState, useEffect } from 'react';
import { Menu, Search, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Collections' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Showroom Offers' },
    { id: 'showrooms', label: 'Showrooms' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Floating Dynamic Navbar Header */}
      <header
        style={{
          position: 'fixed',
          top: isScrolled ? '12px' : '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 900,
          width: 'clamp(320px, 94vw, 1340px)',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            pointerEvents: 'auto',
            height: isScrolled ? '64px' : '72px',
            borderRadius: 'var(--radius-pill)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0 18px 0 22px' : '0 26px',
            backgroundColor: isScrolled || currentPage !== 'home'
              ? 'rgba(251, 249, 246, 0.95)'
              : 'rgba(28, 27, 26, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isScrolled || currentPage !== 'home'
              ? '1px solid rgba(0, 0, 0, 0.08)'
              : '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: isScrolled || currentPage !== 'home'
              ? '0 12px 32px rgba(28, 27, 26, 0.08), 0 2px 6px rgba(0,0,0,0.04)'
              : '0 8px 32px rgba(0, 0, 0, 0.25)',
            color: isScrolled || currentPage !== 'home' ? 'var(--color-text-main)' : '#ffffff',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Left: Hamburger & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isScrolled || currentPage !== 'home' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.15)',
                color: 'currentColor',
                transition: 'transform 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <Menu size={18} strokeWidth={2} />
            </button>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <img
                src={isScrolled || currentPage !== 'home' ? '/logo.png' : '/logo-white.png'}
                alt="Dimos Furniture"
                style={{
                  height: isScrolled ? '34px' : '40px',
                  width: 'auto',
                  maxWidth: '220px',
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                  display: 'block',
                }}
              />
            </a>
          </div>

          {/* Center Links (Visible on desktop) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="navbar-desktop-links"
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              const isDarkHeader = isScrolled || currentPage !== 'home';
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isActive
                      ? isDarkHeader ? 'var(--color-text-main)' : 'rgba(255,255,255,0.25)'
                      : 'transparent',
                    color: isActive
                      ? isDarkHeader ? '#ffffff' : '#ffffff'
                      : isDarkHeader ? 'var(--color-text-body)' : 'rgba(255,255,255,0.85)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Search & Showroom WhatsApp Hotline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={onOpenSearch}
              aria-label="Search Collections"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isScrolled || currentPage !== 'home' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.12)',
                color: 'currentColor',
                transition: 'all 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              title="Search Catalog"
            >
              <Search size={16} strokeWidth={2} />
            </button>

            <a
              href="https://wa.me/917025936662?text=Hello%20Dimos%20Furniture,%20I%20would%20like%20to%20enquire%20about%20your%20furniture%20collections."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: isScrolled || currentPage !== 'home' ? 'var(--color-teak)' : 'rgba(255,255,255,0.92)',
                color: isScrolled || currentPage !== 'home' ? '#ffffff' : 'var(--color-text-main)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
            >
              <MessageSquare size={13} />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile & Desktop Full Navigation Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            backgroundColor: 'rgba(28, 27, 26, 0.55)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="animate-drawer"
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              backgroundColor: 'var(--color-surface)',
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '8px 0 36px rgba(0,0,0,0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--color-border)',
                  marginBottom: '28px',
                }}
              >
                <img
                  src="/logo.png"
                  alt="Dimos Furniture"
                  style={{
                    height: '42px',
                    width: 'auto',
                    maxWidth: '220px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-surface-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-main)',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {NAV_LINKS.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-card-sm)',
                        backgroundColor: isActive ? 'var(--color-surface-soft)' : 'transparent',
                        color: isActive ? 'var(--color-teak)' : 'var(--color-text-main)',
                        textAlign: 'left',
                        fontSize: '13px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                    >
                      <span>{link.label}</span>
                      {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-teak)' }} />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Info */}
            <div
              style={{
                paddingTop: '24px',
                borderTop: '1px solid var(--color-border)',
                fontSize: '13px',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                Kerala Experience Centers
              </div>
              <div>Chandanathope • Pallimukku • Karunagappalli • Bharanikavu • Thattamala</div>
              <a
                href="tel:+917025936662"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '16px',
                  color: 'var(--color-teak)',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Phone size={14} />
                <span>+91 70259 36662</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
