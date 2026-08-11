import React from 'react';
import { ArrowRight, Truck, ShieldCheck, Trees, Award } from 'lucide-react';

interface LimitedOffersSectionProps {
  onOpenAllOffers: (initialCategory?: string) => void;
}

interface OfferCardData {
  id: string;
  categoryKey: string;
  buttonText: string;
  image: string;
  alt: string;
}

const CARDS: OfferCardData[] = [
  {
    id: 'living',
    categoryKey: 'sofas',
    buttonText: 'EXPLORE SOFAS',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=85&w=1200&auto=format&fit=crop',
    alt: 'Dimos Luxury Living Room Sofas',
  },
  {
    id: 'dining',
    categoryKey: 'dining',
    buttonText: 'EXPLORE DINING',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=85&w=1200&auto=format&fit=crop',
    alt: 'Dimos Handcrafted Teak Dining Sets',
  },
  {
    id: 'bedroom',
    categoryKey: 'bedroom',
    buttonText: 'EXPLORE BEDROOM',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1200&auto=format&fit=crop',
    alt: 'Dimos Master Suite Beds and Wardrobes',
  },
];

export const LimitedOffersSection: React.FC<LimitedOffersSectionProps> = ({ onOpenAllOffers }) => {
  return (
    <section
      id="offers"
      style={{
        backgroundColor: '#fbf9f6',
        paddingTop: 'clamp(48px, 8vw, 80px)',
        paddingBottom: 'clamp(40px, 6vw, 64px)',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)', position: 'relative' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--color-teak)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            CURATED LIVING CONCEPTS
          </div>

          <h2
            className="font-melfira"
            style={{
              fontSize: 'clamp(30px, 5.5vw, 56px)',
              fontWeight: 'bold',
              color: 'var(--color-text-main)',
              lineHeight: 1.05,
              marginBottom: '10px',
            }}
          >
            Featured Living Concepts
          </h2>

          <p
            style={{
              fontSize: '14.5px',
              color: 'var(--color-text-muted)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Architecturally coordinated collections designed for timeless warmth in Kerala residences.
          </p>
        </div>

        {/* 3 Clean Image Cards with Just a CTA */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {CARDS.map((card, idx) => (
            <div
              key={card.id}
              onClick={() => onOpenAllOffers(card.categoryKey)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: 'clamp(380px, 50vw, 480px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '28px 20px',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(28, 27, 26, 0.06)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease',
                backgroundColor: '#f0ece5',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 18px 44px rgba(28, 27, 26, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(28, 27, 26, 0.06)';
              }}
            >
              {/* Clean Staging Photography */}
              <img
                src={card.image}
                alt={card.alt}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              {/* Subtle bottom gradient to enhance CTA button contrast */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 55%, rgba(20, 18, 16, 0.55) 100%)',
                }}
              />

              {/* Pure CTA Button */}
              <div style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: idx === 1 ? '#ffffff' : '#1c1b1a',
                    color: idx === 1 ? '#1c1b1a' : '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.22)',
                    transition: 'all 0.25s ease',
                    backdropFilter: 'blur(8px)',
                    minHeight: '44px',
                  }}
                >
                  <span>{card.buttonText}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 4-Item Feature / Craftsmanship Assurance Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '20px',
            paddingTop: '28px',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {/* 1. Nilambur Teak Timber */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-teak)',
                flexShrink: 0,
              }}
            >
              <Trees size={18} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1px' }}>
                Seasoned Nilambur Teak
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                100% solid kiln-seasoned heartwood
              </div>
            </div>
          </div>

          {/* 2. Free Kerala White Glove Setup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-teak)',
                flexShrink: 0,
              }}
            >
              <Truck size={18} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1px' }}>
                All-Kerala Delivery
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                White-glove in-home installation
              </div>
            </div>
          </div>

          {/* 3. 10-Year Warranty */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-teak)',
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={18} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1px' }}>
                10-Year Warranty
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                Comprehensive structural coverage
              </div>
            </div>
          </div>

          {/* 4. 5 Kollam Showrooms */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-teak)',
                flexShrink: 0,
              }}
            >
              <Award size={18} />
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)', marginBottom: '1px' }}>
                5 Kollam Showrooms
              </div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                Direct factory experience centers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
