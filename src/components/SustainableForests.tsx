import React from 'react';
import { ArrowRight, Trees, Leaf, RefreshCw, Sun, ShieldCheck } from 'lucide-react';

interface SustainableForestsProps {
  onLearnMore: () => void;
}

export const SustainableForests: React.FC<SustainableForestsProps> = ({ onLearnMore }) => {
  const SUSTAINABILITY_PILLARS = [
    {
      icon: Trees,
      title: 'Certified Plantation Timber',
      desc: '100% of our teak is harvested from regulated Kerala government plantations with mandatory replanting protocols.',
    },
    {
      icon: Sun,
      title: 'Solar & Steam Kiln Drying',
      desc: 'Energy-efficient seasoning chambers that eliminate moisture stress without reliance on fossil fuels.',
    },
    {
      icon: RefreshCw,
      title: 'Zero-Waste Upcycling',
      desc: 'Every timber offcut and wood shaving is repurposed into handcrafted joinery accents, trays, or clean biomass.',
    },
    {
      icon: Leaf,
      title: 'Zero-VOC Plant Waxes',
      desc: 'Organic plant-derived oils and beeswax sealants that preserve the air purity inside your living space.',
    },
  ];

  return (
    <section
      id="sustainability"
      className="section-gap"
      style={{
        backgroundColor: 'var(--color-bg-warm)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      {/* Subtle Forest Accent Aura */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(62, 77, 60, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Narrative & Sustainability Matrix */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(62, 77, 60, 0.1)',
                border: '1px solid rgba(62, 77, 60, 0.2)',
                marginBottom: '14px',
              }}
            >
              <Leaf size={14} color="var(--color-forest)" />
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-forest)',
                  textTransform: 'uppercase',
                }}
              >
                Responsible Eco-Conscious Forestry
              </span>
            </div>

            <h2
              className="font-melfira"
              style={{
                fontSize: 'clamp(28px, 4.5vw, 48px)',
                fontWeight: 'bold',
                lineHeight: 1.1,
                color: 'var(--color-text-main)',
                marginBottom: '14px',
                letterSpacing: '-0.01em',
              }}
            >
              Sourced From Sustainable Forests.
            </h2>

            <p
              style={{
                fontSize: '14.5px',
                color: 'var(--color-text-body)',
                lineHeight: 1.65,
                marginBottom: '28px',
              }}
            >
              We believe true luxury honors the soil from which it grows. Every log crafted at Dimos
              originates from responsibly managed, certified timber plantations in Kerala.
              By choosing legal, kiln-seasoned plantation wood, we ensure zero deforestation
              while preserving the lush green canopy of God's Own Country.
            </p>

            {/* 4 Sustainability Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {SUSTAINABILITY_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '14px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-surface)',
                      border: '1px solid var(--color-border-light)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-forest)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-light)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(62, 77, 60, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-forest)',
                          flexShrink: 0,
                        }}
                      >
                        <IconComponent size={15} />
                      </div>
                      <h4
                        className="font-melfira"
                        style={{
                          fontSize: '14px',
                          fontWeight: 'bold',
                          color: 'var(--color-text-main)',
                          margin: 0,
                          lineHeight: 1.2,
                        }}
                      >
                        {pillar.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.45, margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={onLearnMore}
                className="btn-pill-dark"
                style={{
                  padding: '12px 26px',
                  fontSize: '11.5px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Learn About Our Timber Journey</span>
                <ArrowRight size={14} />
              </button>

              <span style={{ fontSize: '12px', color: 'var(--color-forest)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <ShieldCheck size={15} />
                <span>100% Certified Nilambur Teak</span>
              </span>
            </div>
          </div>

          {/* Right Column: Lush Plantation Visual Canvas */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: 'clamp(320px, 45vw, 540px)',
                boxShadow: '0 20px 50px rgba(28, 27, 26, 0.1)',
                backgroundColor: 'var(--color-surface-soft)',
                position: 'relative',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=85&w=1400&auto=format&fit=crop"
                alt="Lush Sustainable Teakwood Plantations in Kerala"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(20, 26, 20, 0.75) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Bottom Image Tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <div style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85, fontWeight: 600 }}>
                    Kerala Timber Heritage
                  </div>
                  <div className="font-melfira" style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 'bold' }}>
                    Nilambur Sustainable Forests
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  Zero Deforestation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
