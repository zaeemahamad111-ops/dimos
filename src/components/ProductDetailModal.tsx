import React, { useState } from 'react';
import type { ProductItem } from '../data/siteData';
import { X, Star, Check, MessageSquare, Phone, MapPin } from 'lucide-react';

interface ProductDetailModalProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  if (!isOpen || !product) return null;

  const currentImage = selectedImage || product.image;

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `*Dimos Furniture Product Inquiry*\n\n` +
      `🛋️ *Piece:* ${product.name}\n` +
      `📂 *Category:* ${product.category}\n` +
      `🌲 *Timber Grade:* ${product.woodType}\n` +
      `📐 *Dimensions:* ${product.dimensions}\n` +
      `✨ *Finish:* ${product.finish}\n\n` +
      `Hello, I would like to inquire about viewing this piece in your Kerala showroom or ordering with custom dimensions.`
    );
    window.open(`https://wa.me/917025936662?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1150,
        backgroundColor: 'rgba(28, 27, 26, 0.7)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(10px, 2.5vw, 24px)',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: 'clamp(20px, 3.5vw, 36px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Product Details"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-surface-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-main)',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(20px, 3vw, 36px)',
            alignItems: 'flex-start',
          }}
        >
          {/* Gallery Column */}
          <div>
            <div
              style={{
                borderRadius: '16px',
                backgroundColor: 'var(--color-surface-soft)',
                padding: '20px',
                height: 'clamp(220px, 32vw, 320px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '10px',
              }}
            >
              <img
                src={currentImage}
                alt={product.name}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div style={{ display: 'flex', gap: '8px' }}>
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '8px',
                      padding: '3px',
                      backgroundColor: 'var(--color-surface-soft)',
                      border: currentImage === img ? '2px solid var(--color-teak)' : '1px solid var(--color-border)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-teak)',
                }}
              >
                {product.number} • {product.category}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '11px', color: '#c5834e', fontWeight: 600 }}>
                <Star size={12} fill="#c5834e" />
                <span>4.9</span>
              </span>
            </div>

            <h2
              className="font-melfira"
              style={{
                fontSize: 'clamp(22px, 3.5vw, 30px)',
                fontWeight: 'bold',
                color: 'var(--color-text-main)',
                marginBottom: '8px',
                lineHeight: 1.15,
              }}
            >
              {product.name}
            </h2>

            <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '16px' }}>
              {product.description}
            </p>

            {/* Specifications Matrix Table */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-soft)',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '12.5px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Timber Species:</span>
                <strong style={{ color: 'var(--color-text-main)' }}>{product.woodType}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Dimensions (L×W×H):</span>
                <strong style={{ color: 'var(--color-text-main)' }}>{product.dimensions}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Surface Finish:</span>
                <strong style={{ color: 'var(--color-text-main)' }}>{product.finish}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Seasoning:</span>
                <strong style={{ color: 'var(--color-text-main)' }}>Kiln-Seasoned (10-12% Moisture)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Warranty:</span>
                <strong style={{ color: 'var(--color-forest)' }}>10-Year Structural Guarantee</strong>
              </div>
            </div>

            {/* Key Features List */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                Architectural Highlights:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {product.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-text-main)' }}>
                    <Check size={13} color="var(--color-teak)" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={handleWhatsAppEnquiry}
                className="btn-pill-dark"
                style={{
                  width: '100%',
                  padding: '13px',
                  fontSize: '11.5px',
                  gap: '8px',
                  justifyContent: 'center',
                }}
              >
                <MessageSquare size={14} />
                <span>Enquire via WhatsApp</span>
              </button>

              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href="tel:+917025936662"
                  className="btn-pill-outline"
                  style={{ flex: 1, padding: '10px', fontSize: '11px', gap: '5px', justifyContent: 'center' }}
                >
                  <Phone size={13} />
                  <span>Call Consultant</span>
                </a>

                {onNavigate && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigate('showrooms');
                    }}
                    className="btn-pill-outline"
                    style={{ flex: 1, padding: '10px', fontSize: '11px', gap: '5px', justifyContent: 'center' }}
                  >
                    <MapPin size={13} />
                    <span>Visit Showroom</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
