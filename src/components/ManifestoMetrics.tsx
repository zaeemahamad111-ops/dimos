import React from 'react';

export const ManifestoMetrics: React.FC = () => {
  const METRICS = [
    { value: '12+', label: 'Years of Kerala Mastery' },
    { value: '100%', label: 'Solid Seasoned Teak' },
    { value: '10 YR', label: 'Termite & Timber Warranty' },
    { value: '5', label: 'Kollam Experience Centers' },
  ];

  return (
    <section
      id="manifesto"
      className="section-gap"
      style={{
        backgroundColor: 'var(--color-bg-warm)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div className="container">
        {/* Top: 2-Column Manifesto Intro */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'flex-start',
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          <div>
            <div className="text-overline" style={{ marginBottom: '8px' }}>
              The Dimos Manifesto <span style={{ opacity: 0.5 }}>—</span>
            </div>
            <h2
              className="text-section-title"
              style={{
                fontSize: 'clamp(28px, 4.5vw, 48px)',
                lineHeight: 1.15,
                marginBottom: '0',
              }}
            >
              Furniture shaped by tradition, built for tomorrow.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--color-text-body)',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              At Dimos, we believe that true luxury lies in timeless authenticity. Every piece of
              furniture is born from 100% legal, kiln-dried Nilambur teakwood and shaped by Kerala's
              finest master carpenters.
            </p>
            <p
              style={{
                fontSize: '14.5px',
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              We reject short-lived trends in favor of enduring silhouettes that age gracefully with
              your family, becoming treasured heirlooms for generations.
            </p>
          </div>
        </div>

        {/* Bottom: 4-Column Metrics Counter */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: 'clamp(16px, 3vw, 32px)',
            paddingTop: 'clamp(24px, 4vw, 40px)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                className="font-melfira"
                style={{
                  fontSize: 'clamp(36px, 5.5vw, 56px)',
                  fontWeight: 'bold',
                  color: 'var(--color-teak)',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {metric.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--color-text-main)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  lineHeight: 1.3,
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
