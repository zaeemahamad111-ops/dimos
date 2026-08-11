import React from 'react';
import { X, TreePine, Award } from 'lucide-react';

interface LearnMoreModalProps {
  isOpen: boolean;
  type: 'quality' | 'sustainability' | null;
  onClose: () => void;
}

export const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isQuality = type === 'quality';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        backgroundColor: 'rgba(28, 27, 26, 0.6)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-card)',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: 'clamp(28px, 4vw, 40px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={16} />
        </button>

        {isQuality ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teak)', marginBottom: '8px' }}>
              <Award size={18} />
              <span className="text-overline" style={{ color: 'var(--color-teak)' }}>Two Decades of Craftsmanship</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px' }}>
              Quality Keeps Us Moving Forward.
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
              Founded in the artisanal heartland of Jepara, Central Java, Kayujati bridges age-old
              Javanese woodcraft with Japanese minimalist proportion. Every piece is constructed
              with kiln-dried heartwood teak that naturally repels moisture, termites, and seasonal warping.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { title: 'Zero Synthetic Adhesives', desc: 'True mortise and tenon joinery tested under 300kg dynamic stress loads.' },
                { title: 'Organic Matte Oil Finishes', desc: 'Beeswax and cold-pressed linseed oils that let natural teak breathe.' },
                { title: 'Export-Grade Verification', desc: 'Over 10 million furniture items delivered across Europe, Japan, and North America.' },
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface-card)', borderRadius: 'var(--radius-card-sm)' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--color-text-main)' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <button onClick={onClose} className="btn-pill-dark" style={{ width: '100%' }}>
              Back to Catalog
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-forest)', marginBottom: '8px' }}>
              <TreePine size={18} />
              <span className="text-overline" style={{ color: 'var(--color-forest)' }}>Responsible Forestry</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '16px' }}>
              Sourced From Sustainable Forests.
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
              We partner exclusively with certified Perum Perhutani state plantations and FSC-accredited
              concessions in Central Java. For every mature teak tree harvested for our collections,
              ten native seedlings are planted to regenerate canopy density.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {[
                { title: 'FSC® 100% Certified Chain of Custody', desc: 'Full digital traceability from seedling forest plot to your doorstep.' },
                { title: 'SVLK Indonesian Legal Wood Certification', desc: 'Compliant with strict international timber legality assurance systems.' },
                { title: 'Zero Waste Production Cycle', desc: 'All teak offcuts are repurposed into architectural tiles, joinery pins, and bio-fuel.' },
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '12px 16px', backgroundColor: 'var(--color-surface-card)', borderRadius: 'var(--radius-card-sm)' }}>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--color-text-main)' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <button onClick={onClose} className="btn-pill-dark" style={{ width: '100%' }}>
              Back to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
