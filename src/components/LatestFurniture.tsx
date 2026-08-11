import React from 'react';
import { PRODUCTS, type ProductItem } from '../data/siteData';
import { ArrowRight, Eye } from 'lucide-react';

interface LatestFurnitureProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigate?: (page: string) => void;
}

export const LatestFurniture: React.FC<LatestFurnitureProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  const displayedProducts = PRODUCTS.slice(0, 5);

  return (
    <section id="products" className="section-gap" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div className="text-overline" style={{ marginBottom: '6px' }}>
              Handcrafted Timber Catalog <span style={{ opacity: 0.5 }}>—</span>
            </div>
            <h2
              className="text-section-title"
              style={{
                fontSize: 'clamp(34px, 5vw, 54px)',
                fontWeight: 'bold',
                marginBottom: '4px',
              }}
            >
              The Furniture Collection
            </h2>
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('shop') : window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="btn-pill-outline"
            style={{ fontSize: '11px', padding: '9px 20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Explore Full Catalog</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                position: 'relative',
              }}
              onClick={() => onSelectProduct(product)}
            >
              {/* Product Number Label */}
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--color-text-muted)',
                  marginBottom: '8px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {product.number} / {product.category}
              </div>

              {/* Product Image Card */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: 'var(--color-surface-soft)',
                  borderRadius: 'var(--radius-card-sm)',
                  height: '270px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  marginBottom: '14px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: '1px solid rgba(0,0,0,0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eae4da';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-soft)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.06))',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* View Specs Floating Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(28, 27, 26, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Eye size={12} />
                  <span>View Specs</span>
                </div>
              </div>

              {/* Product Name & Specifications Intro */}
              <div>
                <h3
                  className="font-melfira"
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'var(--color-text-main)',
                    marginBottom: '4px',
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--color-teak-dark)', fontWeight: 500, marginBottom: '2px' }}>
                  {product.woodType}
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                  {product.dimensions}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
