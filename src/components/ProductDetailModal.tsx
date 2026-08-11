import React, { useState } from 'react';
import type { ProductItem } from '../data/siteData';
import { X, Star, Check, Shield, Truck, Trees, MessageSquare, Phone, MapPin } from 'lucide-react';

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
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
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
          maxWidth: '880px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(24px, 4vw, 40px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
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
            color: 'var(--color-text-main)',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'flex-start',
          }}
        >
          {/* Gallery Column */}
          <div>
            <div
              style={{
                borderRadius: 'var(--radius-card-sm)',
                backgroundColor: 'var(--color-surface-soft)',
                padding: '24px',
                height: '340px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '12px',
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
                      width: '64px',
                      height: '64px',
                      borderRadius: '8px',
                      padding: '4px',
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

            {/* Timber Assurance Tag */}
            <div
              style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: '10px',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Trees size={18} color="var(--color-teak)" />
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                <strong style={{ color: 'var(--color-text-main)' }}>Kiln-Seasoned Teakwood: </strong>
                Moisture regulated for tropical coastal longevity.
              </div>
            </div>
          </div>

          {/* Details & Specifications Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-teak)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {product.category}
              </span>
              <span style={{ color: 'var(--color-border)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <Star size={13} fill="#c5834e" color="#c5834e" />
                <span style={{ fontSize: '12px', fontWeight: 600 }}>{product.rating}</span>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>({product.reviewsCount} Kerala client reviews)</span>
              </div>
            </div>

            <h2 className="font-melfira" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '12px' }}>
              {product.name}
            </h2>

            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
              {product.description}
            </p>

            {/* Architectural Specifications Box */}
            <div
              style={{
                backgroundColor: 'var(--color-surface-card)',
                borderRadius: 'var(--radius-card-sm)',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '13px',
                marginBottom: '20px',
                border: '1px solid var(--color-border-light)',
              }}
            >
              <div>
                <strong style={{ color: 'var(--color-text-main)' }}>Dimensions: </strong>
                <span style={{ color: 'var(--color-text-muted)' }}>{product.dimensions}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--color-text-main)' }}>Wood Grade: </strong>
                <span style={{ color: 'var(--color-text-muted)' }}>{product.woodType}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--color-text-main)' }}>Artisan Finish: </strong>
                <span style={{ color: 'var(--color-text-muted)' }}>{product.finish}</span>
              </div>
              {product.idealFor && (
                <div>
                  <strong style={{ color: 'var(--color-text-main)' }}>Ideal Space: </strong>
                  <span style={{ color: 'var(--color-text-muted)' }}>{product.idealFor}</span>
                </div>
              )}
            </div>

            {/* Key Craftsmanship Features */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', color: 'var(--color-text-main)' }}>
                Craftsmanship Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-text-body)' }}>
                    <Check size={14} color="var(--color-teak)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Showroom Consultation & Custom Blueprint Inquiries */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppEnquiry}
                className="btn-pill-dark"
                style={{ width: '100%', padding: '14px', fontSize: '12px', gap: '8px' }}
              >
                <MessageSquare size={16} />
                <span>Enquire on WhatsApp (+91 70259 36662)</span>
              </button>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    onClose();
                    if (onNavigate) onNavigate('showrooms');
                  }}
                  className="btn-pill-outline"
                  style={{ flex: 1, padding: '10px', fontSize: '11px', gap: '6px' }}
                >
                  <MapPin size={13} color="var(--color-teak)" />
                  <span>View in Showroom</span>
                </button>
                <a
                  href="tel:+917025936662"
                  className="btn-pill-outline"
                  style={{ flex: 1, padding: '10px', fontSize: '11px', gap: '6px', textDecoration: 'none', color: 'inherit', textAlign: 'center' }}
                >
                  <Phone size={13} />
                  <span>Call Showroom</span>
                </a>
              </div>
            </div>

            {/* Guarantee Trust Badges */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '18px',
                marginTop: '18px',
                borderTop: '1px solid var(--color-border-light)',
                fontSize: '11px',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Shield size={13} color="var(--color-teak)" />
                <span>10-Year Warranty</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Truck size={13} color="var(--color-teak)" />
                <span>All-Kerala White Glove Setup</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Trees size={13} color="var(--color-teak)" />
                <span>5 Kollam Showrooms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
