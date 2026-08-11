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
        backgroundColor: 'rgba(28, 27, 26, 0.55)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 20px 20px',
      }}
      onClick={onClose}
    >
      <div
        className="animate-fade"
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-card)',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '28px',
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
            width: '32px',
            height: '32px',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--color-border)' }}>
          <Search size={20} color="var(--color-text-muted)" />
          <input
            autoFocus
            type="text"
            placeholder="Search teak lounge chairs, dining tables, beds..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Quick Suggestion Chips */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {['Lounge Chair', 'Dining Table', 'King Bed', 'Study Desk', 'Teakwood'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              style={{
                padding: '4px 12px',
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '32px', color: 'var(--color-text-muted)', fontSize: '14px' }}>
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
                  gap: '14px',
                  padding: '12px',
                  borderRadius: 'var(--radius-card-sm)',
                  backgroundColor: 'var(--color-surface-card)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '1px solid var(--color-border-light)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-soft)';
                  e.currentTarget.style.borderColor = 'var(--color-teak)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-surface-card)';
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '56px', height: '56px', objectFit: 'contain', borderRadius: '6px', backgroundColor: '#ffffff' }}
                />
                <div style={{ flex: 1 }}>
                  <h4 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 2px 0' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    {item.woodType} • {item.category}
                  </div>
                </div>

                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-teak)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>View Specs</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
