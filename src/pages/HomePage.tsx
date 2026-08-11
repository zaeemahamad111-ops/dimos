import React from 'react';
import { Hero } from '../components/Hero';
import { LimitedOffersSection } from '../components/LimitedOffersSection';
import { ManifestoMetrics } from '../components/ManifestoMetrics';
import { QualityFeature } from '../components/QualityFeature';
import { LatestFurniture } from '../components/LatestFurniture';
import { SustainableForests } from '../components/SustainableForests';
import { type ProductItem, SHOWROOMS } from '../data/siteData';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigate: (page: string, categoryParam?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  return (
    <div>
      {/* 1. Hero Section with 3D Teak Scrubbing Canvas & Melfira Title */}
      <Hero />

      {/* 2. Section 2: Featured Living Concepts */}
      <LimitedOffersSection onOpenAllOffers={(category) => onNavigate('offers', category)} />

      {/* 3. Manifesto & Metrics Counter */}
      <ManifestoMetrics />

      {/* 4. Quality & Heritage Feature */}
      <QualityFeature onLearnMore={() => onNavigate('about')} />

      {/* 5. The Furniture Collection Catalog */}
      <LatestFurniture
        onSelectProduct={onSelectProduct}
        onNavigate={onNavigate}
      />

      {/* 6. Sustainable Teak Forests Feature */}
      <SustainableForests onLearnMore={() => onNavigate('about')} />

      {/* 7. Showrooms Network Quick Preview */}
      <section className="section-gap" style={{ backgroundColor: 'var(--color-bg-warm)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '40px',
              gap: '16px',
            }}
          >
            <div>
              <div className="text-overline" style={{ marginBottom: '6px' }}>
                Visit Our Showrooms <span style={{ opacity: 0.5 }}>—</span>
              </div>
              <h2
                className="text-section-title"
                style={{ fontSize: 'clamp(34px, 5vw, 54px)', marginBottom: '4px' }}
              >
                Experience Dimos in Kollam
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                5 state-of-the-art experience centers showcasing solid teakwood collections.
              </p>
            </div>

            <button
              onClick={() => onNavigate('showrooms')}
              className="btn-pill-dark"
              style={{ fontSize: '11px', padding: '10px 22px' }}
            >
              <span>View All 5 Locations</span>
              <ArrowRight size={13} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {SHOWROOMS.slice(0, 3).map((showroom) => (
              <div
                key={showroom.id}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => onNavigate('showrooms')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
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
                      backgroundColor: 'rgba(28, 27, 26, 0.8)',
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

                <div style={{ padding: '24px' }}>
                  <h3
                    className="font-melfira"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: 'var(--color-text-main)',
                      marginBottom: '8px',
                    }}
                  >
                    {showroom.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '13px', color: 'var(--color-text-body)' }}>
                    <MapPin size={15} color="var(--color-teak)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{showroom.address}, {showroom.city} - {showroom.pincode}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', fontSize: '13px', color: 'var(--color-text-body)', fontWeight: 500 }}>
                    <Phone size={15} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                    <span>{showroom.phone}</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)' }}>
                    <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{showroom.timing}</span>
                    <span style={{ fontSize: '11px', color: 'var(--color-teak)', fontWeight: 700, textTransform: 'uppercase' }}>Get Directions →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
