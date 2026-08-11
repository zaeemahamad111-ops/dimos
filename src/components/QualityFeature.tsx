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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Layered Architectural Visual Showcase */}
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
                    Flagship Collection
                  </div>
                  <div className="font-melfira" style={{ fontSize: 'clamp(16px, 3vw, 20px)', fontWeight: 'bold' }}>
                    Solid Kiln-Seasoned Teakwood
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
                  100% Solid
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 4-Pillar Matrix */}
          <div>
            <div className="text-overline" style={{ marginBottom: '8px' }}>
              Craftsmanship Standard <span style={{ opacity: 0.5 }}>—</span>
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
              Quality Keeps Us Moving Forward.
            </h2>

            <p
              style={{
                fontSize: '14.5px',
                color: 'var(--color-text-body)',
                lineHeight: 1.65,
                marginBottom: '28px',
              }}
            >
              Every dining table, sofa suite, and bed crafted at Dimos is engineered from single-origin,
              kiln-seasoned Nilambur teak. We combine multi-generational Kerala hand-joinery with modern
              structural precision to create heirloom pieces that endure for decades.
            </p>

            {/* 4-Pillar Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '16px',
                marginBottom: '32px',
              }}
            >
              {PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      padding: '14px',
                      borderRadius: '12px',
                      backgroundColor: 'var(--color-bg-warm)',
                      border: '1px solid var(--color-border-light)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-teak)';
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
                          backgroundColor: 'rgba(140, 98, 57, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--color-teak)',
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

            {/* Action Link */}
            <button
              onClick={onLearnMore}
              className="btn-pill-dark"
              style={{
                padding: '12px 26px',
                fontSize: '11.5px',
                gap: '8px',
              }}
            >
              <span>Explore Our Teak Heritage</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
