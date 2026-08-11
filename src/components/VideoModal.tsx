import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        backgroundColor: 'rgba(7, 7, 7, 0.85)',
        backdropFilter: 'blur(16px)',
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
          backgroundColor: '#1c1b1a',
          borderRadius: '20px',
          maxWidth: '820px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
          color: '#ffffff',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Video"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        {/* Video Player Container */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000000' }}>
          <video
            src="/hero-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div style={{ padding: 'clamp(16px, 3vw, 24px)' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-teak-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            Craftsmanship Documentary
          </div>
          <h3 className="font-melfira" style={{ fontSize: 'clamp(18px, 3vw, 22px)', fontWeight: 'bold', marginTop: '4px', marginBottom: '6px' }}>
            Inside the Dimos Kerala Woodcraft Workshops
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-light)', lineHeight: 1.5, margin: 0 }}>
            Witness three generations of master joinery, organic kiln drying, and hand-finished teak
            craftsmanship that gives every Dimos piece its enduring soul.
          </p>
        </div>
      </div>
    </div>
  );
};
