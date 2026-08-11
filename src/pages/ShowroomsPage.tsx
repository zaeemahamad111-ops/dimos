import React from 'react';
import { SHOWROOMS } from '../data/siteData';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

interface ShowroomsPageProps {
  onNavigate: (page: string) => void;
}

export const ShowroomsPage: React.FC<ShowroomsPageProps> = ({ onNavigate }) => {

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>Showroom Locations</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '48px', maxWidth: '800px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            5 Locations In Kollam, Kerala <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-teko"
            style={{
              fontSize: 'clamp(44px, 7vw, 84px)',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Visit Our Experience Centers
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
            Touch the velvety grain of seasoned Nilambur teakwood, test our high-resilience sofa cushions, and consult with our bespoke furniture designers in person. Open 7 days a week.
          </p>
        </div>

        {/* Showrooms Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
            marginBottom: '64px',
          }}
        >
          {SHOWROOMS.map((showroom) => (
            <div
              key={showroom.id}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={showroom.image}
                    alt={showroom.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    className="font-panchang"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(28, 27, 26, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      fontSize: '9.5px',
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: 'var(--radius-pill)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {showroom.badge}
                  </div>
                </div>

                <div style={{ padding: '28px' }}>
                  <h3
                    className="font-panchang"
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-text-main)',
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      lineHeight: 1.3,
                    }}
                  >
                    {showroom.name}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--color-text-body)', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <MapPin size={16} color="var(--color-teak)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{showroom.address}, {showroom.city} - {showroom.pincode}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Phone size={16} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.phone} {showroom.phoneAlt && ` / ${showroom.phoneAlt}`}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Clock size={16} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.timing}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Mail size={16} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                      <span>{showroom.email}</span>
                    </div>
                  </div>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {showroom.features.map((feat, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '11px',
                          padding: '3px 10px',
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
              <div style={{ padding: '20px 28px', backgroundColor: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-border-light)', display: 'flex', gap: '10px' }}>
                <a
                  href={`tel:${showroom.phone.replace(/[^0-9+]/g, '')}`}
                  className="btn-pill-dark"
                  style={{ flex: 1, fontSize: '10.5px', padding: '10px', gap: '6px' }}
                >
                  <Phone size={13} />
                  <span>Call Store</span>
                </a>

                <a
                  href={showroom.mapEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                  style={{ flex: 1, fontSize: '10.5px', padding: '10px', gap: '6px' }}
                >
                  <Navigation size={13} />
                  <span>Navigate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
