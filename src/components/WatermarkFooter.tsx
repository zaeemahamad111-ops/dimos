import React from 'react';

interface WatermarkFooterProps {
  onNavigate?: (page: string) => void;
}

export const WatermarkFooter: React.FC<WatermarkFooterProps> = ({ onNavigate }) => {
  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--color-bg)',
        paddingTop: '32px',
        paddingBottom: '48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Massive Monumental Watermark 'dimos' in Teko */}
        <div
          style={{
            userSelect: 'none',
            textAlign: 'center',
            marginBottom: '32px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
          onClick={() => handleNav('home')}
        >
          <span
            className="font-teko"
            style={{
              fontSize: 'clamp(90px, 22vw, 280px)',
              fontWeight: 600,
              letterSpacing: '0.02em',
              lineHeight: 0.85,
              color: 'var(--color-border)',
              display: 'inline-block',
              textTransform: 'uppercase',
              opacity: 0.9,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e0d8cc')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-border)')}
          >
            dimos
          </span>
        </div>

        {/* Footer Main Links & Information Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            paddingTop: '32px',
            borderTop: '1px solid var(--color-border)',
            marginBottom: '48px',
          }}
        >
          {/* Brand Col */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <img
                src="/logo.png"
                alt="Dimos Furniture"
                style={{
                  height: '46px',
                  width: 'auto',
                  maxWidth: '240px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.55,
                maxWidth: '280px',
                marginBottom: '24px',
              }}
            >
              Kerala's most trusted and leading bespoke furniture brand since 2012. Crafting timeless living, dining, and bedroom spaces with 100% seasoned teakwood.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { name: 'ig', label: 'Instagram', href: 'https://instagram.com' },
                { name: 'fb', label: 'Facebook', href: 'https://facebook.com' },
                { name: 'wa', label: 'WhatsApp', href: 'https://wa.me/917025936662' },
                { name: 'yt', label: 'YouTube', href: 'https://youtube.com' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="font-panchang"
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-body)',
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-text-main)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-text-body)';
                  }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              className="font-panchang"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Explore Collections
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <button
                onClick={() => handleNav('shop')}
                className="hover-underline"
                style={{ textAlign: 'left', color: 'var(--color-text-body)', border: 'none', background: 'none', cursor: 'pointer', padding: 0, fontSize: '13px' }}
              >
                Handcrafted Furniture Catalog
              </button>
              <button
                onClick={() => handleNav('gallery')}
                className="hover-underline"
                style={{ textAlign: 'left', color: 'var(--color-text-body)', border: 'none', background: 'none', cursor: 'pointer', padding: 0, fontSize: '13px' }}
              >
                Architectural Gallery & Lookbook
              </button>
              <button
                onClick={() => handleNav('offers')}
                className="hover-underline"
                style={{ textAlign: 'left', color: 'var(--color-text-body)', border: 'none', background: 'none', cursor: 'pointer', padding: 0, fontSize: '13px' }}
              >
                Showroom Packages & Ensembles
              </button>
              <button
                onClick={() => handleNav('about')}
                className="hover-underline"
                style={{ textAlign: 'left', color: 'var(--color-text-body)', border: 'none', background: 'none', cursor: 'pointer', padding: 0, fontSize: '13px' }}
              >
                Artisanal Teak Quality & Heritage
              </button>
              <button
                onClick={() => handleNav('showrooms')}
                className="hover-underline font-panchang"
                style={{ textAlign: 'left', color: 'var(--color-teak)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
              >
                5 Kollam Showrooms & Experience Centers →
              </button>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <div
              className="font-panchang"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Customer Support
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>+91 70259 36662</div>
              <div>+91 92880 98981</div>
              <div style={{ color: 'var(--color-teak)', marginTop: '4px' }}>info@dimosfurniture.in</div>
              <div style={{ marginTop: '8px', color: 'var(--color-text-muted)', fontSize: '12px' }}>
                Open All Days: 09:00 AM – 09:00 PM (IST)
              </div>
              <button
                onClick={() => handleNav('contact')}
                className="btn-pill-dark"
                style={{ fontSize: '10px', padding: '6px 14px', marginTop: '12px' }}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Showroom Locations */}
          <div>
            <div
              className="font-panchang"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Showrooms in Kerala
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
              <div><strong>Head Office:</strong> Bismi Tower, Kilikollur, Chandanathope, Kollam - 691004</div>
              <div style={{ marginTop: '6px' }}><strong>Branches:</strong> Pallimukku, Karunagappalli, Bharanikavu & Thattamala</div>
              <button
                onClick={() => handleNav('showrooms')}
                className="hover-underline font-panchang"
                style={{ textAlign: 'left', color: 'var(--color-teak)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', border: 'none', background: 'none', cursor: 'pointer', padding: 0, marginTop: '10px' }}
              >
                View All 5 Showroom Maps →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--color-border-light)',
            fontSize: '12px',
            color: 'var(--color-text-muted)',
            gap: '16px',
          }}
        >
          <div>© {new Date().getFullYear()} Dimos Furniture (New Dimos Furniture Pvt Ltd). All rights reserved.</div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>All-Kerala White Glove Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
