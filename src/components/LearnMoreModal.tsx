import React from 'react';
import { X, Trees, Award } from 'lucide-react';

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
        backgroundColor: 'rgba(28, 27, 26, 0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 24px)',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '620px',
          width: '100%',
          maxHeight: '88vh',
          overflowY: 'auto',
          padding: 'clamp(20px, 4vw, 36px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '34px',
            height: '34px',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-teak)', marginBottom: '6px' }}>
              <Award size={18} />
              <span className="text-overline" style={{ color: 'var(--color-teak)' }}>Over a Decade of Kerala Craftsmanship</span>
            </div>
            <h2 className="font-melfira" style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '12px' }}>
              Quality Keeps Us Moving Forward.
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
              Established in Kollam, Kerala, Dimos Furniture bridges generational carpentry traditions
              with modern architectural precision. Every piece is constructed with 100% kiln-dried
              Nilambur teakwood that naturally resists tropical moisture, termites, and seasonal expansion.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {[
                { title: 'Zero Synthetic Boards', desc: '100% authentic Nilambur teak and Kerala rosewood heartwood.' },
                { title: 'Artisanal Matte Wax Finishes', desc: 'Zero-VOC beeswax and natural oil sealants that highlight golden teak grains.' },
                { title: '10-Year Termite & Timber Guarantee', desc: 'Backed by our 5 Kollam experience centers across Kerala.' },
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '12px 14px', backgroundColor: 'var(--color-surface-card)', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--color-text-main)' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <button onClick={onClose} className="btn-pill-dark" style={{ width: '100%', padding: '12px', fontSize: '11.5px' }}>
              Back to Showroom
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-forest)', marginBottom: '6px' }}>
              <Trees size={18} />
              <span className="text-overline" style={{ color: 'var(--color-forest)' }}>Responsible Forestry</span>
            </div>
            <h2 className="font-melfira" style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '12px' }}>
              Sourced From Sustainable Forests.
            </h2>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
              We partner with regulated Kerala government timber plantations in Nilambur.
              Every tree harvested is replenished through structured reforestation initiatives,
              ensuring zero deforestation and protecting the natural bio-diversity of Kerala.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              {[
                { title: '100% Legal & Documented Plantation Timber', desc: 'Full traceability from Kerala forestry auctions to our workshops.' },
                { title: 'Solar & Steam Kiln Seasoning', desc: 'Moisture reduction using eco-conscious drying chambers.' },
                { title: 'Zero Waste Production Cycle', desc: 'All timber offcuts are upcycled into handcrafted trays and woodcraft accents.' },
              ].map((item, idx) => (
                <div key={idx} style={{ padding: '12px 14px', backgroundColor: 'var(--color-surface-card)', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--color-text-main)' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <button onClick={onClose} className="btn-pill-dark" style={{ width: '100%', padding: '12px', fontSize: '11.5px' }}>
              Back to Showroom
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
