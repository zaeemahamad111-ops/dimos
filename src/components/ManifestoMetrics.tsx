import React from 'react';
import { METRICS } from '../data/siteData';

export const ManifestoMetrics: React.FC = () => {
  return (
    <section className="section-gap" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Two-Column Overview Block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
            marginBottom: '72px',
          }}
        >
          {/* Left: Overview Headline */}
          <div>
            <div className="text-overline" style={{ marginBottom: '12px' }}>
              Overview <span style={{ opacity: 0.5 }}>—</span>
            </div>
            <h2
              className="font-teko"
              style={{
                fontSize: 'clamp(48px, 6.5vw, 76px)',
                fontWeight: 600,
                lineHeight: 0.9,
                letterSpacing: '0.01em',
                color: 'var(--color-text-main)',
                textTransform: 'uppercase',
              }}
            >
              For Modern<br />Living.
            </h2>
          </div>

          {/* Right: Editorial Narrative */}
          <div style={{ maxWidth: '520px' }}>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--color-text-body)',
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              We believe that good design should be easy to accept and comfortable to enjoy. Since 2012,
              Dimos Furniture has worked with master Kerala woodcrafters to create solid teakwood collections
              that elevate modern urban spaces — durable, ergonomic, and crafted for generations.
            </p>
          </div>
        </div>

        {/* 3 Metric Stat Counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            paddingTop: '48px',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {METRICS.map((metric, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                className="font-teko"
                style={{
                  fontSize: 'clamp(54px, 7vw, 84px)',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                  letterSpacing: '0.01em',
                  lineHeight: 0.9,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                {metric.value}
              </div>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.45,
                  maxWidth: '260px',
                }}
              >
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
