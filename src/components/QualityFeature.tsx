import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Trees, Award } from 'lucide-react';

interface QualityFeatureProps {
  onLearnMore: () => void;
}

export const QualityFeature: React.FC<QualityFeatureProps> = ({ onLearnMore }) => {
  const PILLARS = [
    {
      icon: Trees,
      title: 'Grade-A Nilambur Teak',
      desc: '100% solid heartwood, seasoned to optimal moisture levels to resist warping in tropical climates.',
    },
    {
      icon: Award,
      title: 'Mortise & Tenon Joinery',
      desc: 'Handcrafted interlocking joints by master Kerala carpenters without relying on fragile hardware.',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Warranty',
      desc: 'Comprehensive termite-proof and structural warranty backed by our 5 Kollam experience centers.',
    },
    {
      icon: Sparkles,
      title: 'Artisanal Oil Finishes',
      desc: 'Zero-VOC matte & satin sealants that celebrate the natural golden teakwood grain.',
    },
  ];

  return (
    <section
      id="quality"
      className="section-gap"
      style={{
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-border-light)',
        borderBottom: '1px solid var(--color-border-light)',
      }}
    >
      {/* Subtle Background Warm Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 131, 78, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
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
          {/* Left Column: Layered Architectural Visual Showcase */}
          <div style={{ position: 'relative' }}>
            {/* Primary Main Image: Luxurious Teakwood Living Space */}
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
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1400&auto=format&fit=crop"
                alt="Dimos Masterpiece Teak Living Space"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              {/* Gradient Vignette */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(28, 27, 26, 0.6) 100%)',
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
                    Flagship Collection
                  </div>
                  <div className="font-melfira" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Solid Kiln-Seasoned Teakwood
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
                  100% Solid Wood
                </div>
              </div>
            </div>

            {/* Floating Glassmorphic Trust Card */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: 'rgba(251, 249, 246, 0.95)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(197, 131, 78, 0.25)',
                borderRadius: '18px',
                padding: '16px 20px',
                boxShadow: '0 16px 40px rgba(28, 27, 26, 0.14)',
                maxWidth: '220px',
                display: 'none', // Shown on md screens
              }}
              className="d-md-block"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-teak)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <Award size={16} />
                </div>
                <span className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--color-text-main)' }}>
                  12+ Years
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.4 }}>
                Kerala's most trusted bespoke woodcraft heritage.
              </p>
            </div>
          </div>

          {/* Right Column: Refined Editorial Narrative & 4 Craftsmanship Pillars */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-surface-soft)',
                border: '1px solid var(--color-border)',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={13} color="var(--color-teak)" />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--color-teak-dark)',
                  textTransform: 'uppercase',
                }}
              >
                Artisanal Standards
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
              Quality Keeps Us Moving Forward.
            </h2>

            <p
              style={{
                fontSize: '15px',
                color: 'var(--color-text-body)',
                lineHeight: 1.7,
                marginBottom: '32px',
              }}
            >
              At Dimos Furniture, quality is never an afterthought—it is the very foundation of every piece we build.
              For over a decade, our master craftsmen in Kerala have hand-selected timber from sustainable plantations,
              ensuring every grain, joint, and contour delivers generational longevity without compromise.
            </p>

            {/* 4 Craftsmanship Pillars Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '20px',
                marginBottom: '36px',
              }}
            >
              {PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border-light)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-teak)';
                      e.currentTarget.style.backgroundColor = 'var(--color-surface-card)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-border-light)';
                      e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: 'var(--color-surface-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-teak)',
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

            {/* Actions */}
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
                <span>Explore Our Heritage & Process</span>
                <ArrowRight size={15} />
              </button>

              <span style={{ fontSize: '13px', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                Nilambur Seasoned Timber • 10-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
