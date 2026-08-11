import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS, type ProductItem } from '../data/siteData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: ProductItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.woodType.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        backgroundColor: 'rgba(28, 27, 26, 0.65)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(24px, 10vw, 80px) 16px 20px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '84vh',
          overflowY: 'auto',
          padding: 'clamp(18px, 3.5vw, 28px)',
          position: 'relative',
          boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Search"
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid var(--color-border)', paddingRight: '36px' }}>
          <Search size={18} color="var(--color-text-muted)" style={{ flexShrink: 0 }} />
          <input
            autoFocus
            type="text"
            placeholder="Search teak chairs, tables, beds..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '18px', flexWrap: 'wrap' }}>
          {['Lounge Chair', 'Dining Table', 'King Bed', 'Study Desk', 'Teakwood'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              style={{
                padding: '5px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--color-surface-soft)',
                fontSize: '11px',
                fontWeight: 600,
                color: 'var(--color-text-body)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '28px', color: 'var(--color-text-muted)', fontSize: '13.5px' }}>
              No pieces match your search query. Try searching for "Teak" or "Dining".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--color-surface-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '1px solid var(--color-border-light)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ede7de';
                  e.currentTarget.style.borderColor = 'var(--color-teak)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-card)';
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-surface-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    padding: '4px',
                  }}
                >
                  <img src={item.image} alt={item.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <h4
                    className="font-melfira"
                    style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: 'var(--color-text-main)',
                      marginBottom: '2px',
                    }}
                  >
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>
                    {item.category} • {item.woodType}
                  </div>
                </div>

                <ArrowRight size={14} color="var(--color-teak)" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
