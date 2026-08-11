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
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 'clamp(36px, 6vw, 80px)',
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
                marginBottom: '16px',
              }}
            >
              <Leaf size={14} color="var(--color-forest)" />
              <span
                style={{
                  fontSize: '11px',
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
                fontSize: 'clamp(32px, 4.5vw, 52px)',
                fontWeight: 'bold',
                lineHeight: 1.1,
                color: 'var(--color-text-main)',
                marginBottom: '18px',
                letterSpacing: '-0.01em',
              }}
            >
              Sourced From Sustainable Forests.
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--color-text-body)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              We believe true luxury honors the soil from which it grows. Every log crafted at Dimos
              originates from responsibly managed, certified timber plantations in Kerala.
              By choosing legal, kiln-seasoned plantation wood, we ensure zero deforestation
              while preserving the lush green canopy of God's Own Country for generations to come.
            </p>

            {/* 4 Sustainability Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginBottom: '36px',
              }}
            >
              {SUSTAINABILITY_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(62, 77, 60, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-forest)',
                        }}
                      >
                        <IconComponent size={16} />
                      </div>
                      <h4
                        className="font-melfira"
                        style={{
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: 'var(--color-text-main)',
                          margin: 0,
                        }}
                      >
                        {pillar.title}
                      </h4>
                    </div>
                    <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <button
                onClick={onLearnMore}
                className="btn-pill-dark"
                style={{
                  padding: '14px 28px',
                  fontSize: '12px',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span>Learn About Our Timber Journey</span>
                <ArrowRight size={15} />
              </button>

              <span style={{ fontSize: '13px', color: 'var(--color-forest)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <span>100% Legally Sourced Nilambur Teak</span>
              </span>
            </div>
          </div>

          {/* Right Column: Lush Plantation Visual Canvas */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                height: 'clamp(420px, 50vw, 560px)',
                boxShadow: '0 24px 60px rgba(28, 27, 26, 0.12)',
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
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  color: '#ffffff',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.85, fontWeight: 600 }}>
                    Kerala Timber Heritage
                  </div>
                  <div className="font-melfira" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Nilambur Sustainable Forests
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '11px',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                >
                  Zero Deforestation
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Forest Pledge Badge */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(62, 77, 60, 0.25)',
                borderRadius: '18px',
                padding: '16px 20px',
                boxShadow: '0 16px 40px rgba(28, 27, 26, 0.12)',
                maxWidth: '240px',
                display: 'none',
              }}
              className="d-md-block"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-forest)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Trees size={16} />
                </div>
                <span className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                  Green Legacy
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                Protecting Kerala's native canopy through certified timber harvesting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
