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
        padding: '24px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#1c1b1a',
          borderRadius: 'var(--radius-card)',
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
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
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
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=1"
            title="Kayujati Teak Workshop"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block' }}
          />
        </div>

        <div style={{ padding: '24px' }}>
          <div style={{ fontSize: '11px', color: 'var(--color-teak-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Artisan Documentary
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '4px', marginBottom: '8px' }}>
            Inside the Jepara Teak Workshop
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
            Witness three generations of master joinery, organic kiln drying, and hand-woven cane
            craftsmanship that gives every Kayujati piece its enduring soul.
          </p>
        </div>
      </div>
    </div>
  );
};
