import React from 'react';
import { SHOWROOMS } from '../data/siteData';
import { MapPin, Phone, Clock, Mail, Navigation, MessageSquare } from 'lucide-react';

interface ShowroomsPageProps {
  onNavigate: (page: string) => void;
}

export const ShowroomsPage: React.FC<ShowroomsPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: 'clamp(80px, 12vw, 110px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>Showroom Locations</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)', maxWidth: '800px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            5 Locations In Kollam, Kerala <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              lineHeight: 1.05,
              marginBottom: '12px',
            }}
          >
            Visit Our Experience Centers
          </h1>
          <p style={{ fontSize: '14.5px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Touch the velvety grain of seasoned Nilambur teakwood, test our high-resilience sofa cushions, and consult with our woodcraft specialists in person. Open 7 days a week.
          </p>
        </div>

        {/* Showrooms Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: '56px',
          }}
        >
          {SHOWROOMS.map((showroom) => (
            <div
              key={showroom.id}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ position: 'relative', height: 'clamp(180px, 25vw, 220px)', overflow: 'hidden' }}>
                  <img
                    src={showroom.image}
                    alt={showroom.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(28, 27, 26, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '9.5px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {showroom.badge}
                  </div>
                </div>

                <div style={{ padding: 'clamp(18px, 3vw, 24px)' }}>
                  <h3
                    className="font-melfira"
                    style={{
                      fontSize: '17px',
                      fontWeight: 'bold',
                      color: 'var(--color-text-main)',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    {showroom.name}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px', color: 'var(--color-text-body)', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <MapPin size={15} color="var(--color-teak)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{showroom.address}, {showroom.city} - {showroom.pincode}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={15} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.phone}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={15} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.timing}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Mail size={15} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.email}</span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {showroom.features.map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '10.5px',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: 'var(--color-surface-soft)',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ padding: '14px clamp(16px, 3vw, 24px)', backgroundColor: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-border-light)', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a
                  href={`tel:${showroom.phone.replace(/[^0-9+]/g, '')}`}
                  className="btn-pill-dark"
                  style={{ flex: 1, minWidth: '100px', fontSize: '10.5px', padding: '9px 12px', gap: '5px', minHeight: '38px' }}
                >
                  <Phone size={12} />
                  <span>Call Store</span>
                </a>

                <a
                  href={`https://wa.me/${showroom.phone.replace(/[^0-9]/g, '')}?text=Hello%20Dimos%20${encodeURIComponent(showroom.name)},%20I%20would%20like%20to%20visit%20your%20showroom.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                  style={{ flex: 1, minWidth: '100px', fontSize: '10.5px', padding: '9px 12px', gap: '5px', minHeight: '38px' }}
                >
                  <MessageSquare size={12} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={showroom.mapEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                  style={{ width: '38px', height: '38px', minHeight: '38px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                  title="Navigate on Google Maps"
                >
                  <Navigation size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
