import React, { useState, useMemo } from 'react';
import { PRODUCTS, type ProductItem } from '../data/siteData';
import { Search, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigate: (page: string) => void;
  initialCategory?: string;
}

const CATEGORIES = [
  'All Collections',
  'Living Room',
  'Dining Room',
  'Bedroom',
  'Office & Study',
  'Outdoor & Cane',
];

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onNavigate,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || 'All Collections'
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCat =
        selectedCategory === 'All Collections' || product.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.woodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header Title Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Bespoke Kerala Woodcraft <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 58px)',
              fontWeight: 'bold',
              color: 'var(--color-text-main)',
              lineHeight: 1.1,
              marginBottom: '14px',
            }}
          >
            The Furniture Collection
          </h1>
          <p style={{ maxWidth: '620px', margin: '0 auto', fontSize: '15px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
            Explore our curated portfolio of handcrafted living, dining, bedroom, and executive furniture.
            Every piece is built with 100% seasoned solid timber and customizable to your exact architectural blueprints.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '36px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: isActive ? 'var(--color-text-main)' : 'var(--color-surface)',
                    color: isActive ? '#ffffff' : 'var(--color-text-body)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--color-text-main)' : 'var(--color-border)',
                    fontSize: '11.5px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-pill)',
              padding: '6px 16px',
              minWidth: '240px',
            }}
          >
            <Search size={15} color="var(--color-text-muted)" style={{ marginRight: '8px' }} />
            <input
              type="text"
              placeholder="Search by piece, wood grade..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontSize: '13px',
                color: 'var(--color-text-main)',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-muted)' }}>
            <p style={{ fontSize: '16px' }}>No furniture designs found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Collections');
                setSearchQuery('');
              }}
              className="btn-pill-dark"
              style={{ marginTop: '16px' }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '28px',
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-card)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                onClick={() => onSelectProduct(product)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--color-border-light)';
                }}
              >
                {/* Image Canvas */}
                <div
                  style={{
                    backgroundColor: 'var(--color-surface-soft)',
                    height: '260px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))',
                    }}
                  />

                  {/* Category Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(255,255,255,0.92)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: 'var(--color-text-main)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      border: '1px solid var(--color-border-light)',
                    }}
                  >
                    {product.category}
                  </div>
                </div>

                {/* Body Details */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3
                      className="font-melfira"
                      style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: 'var(--color-text-main)',
                        marginBottom: '6px',
                      }}
                    >
                      {product.name}
                    </h3>
                    <div style={{ fontSize: '12.5px', color: 'var(--color-teak-dark)', fontWeight: 600, marginBottom: '6px' }}>
                      {product.woodType}
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
                      {product.description.slice(0, 100)}...
                    </p>

                    <div style={{ fontSize: '12px', color: 'var(--color-text-body)', backgroundColor: 'var(--color-bg)', padding: '8px 12px', borderRadius: '8px', marginBottom: '16px' }}>
                      <strong>Dimensions: </strong>{product.dimensions}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--color-border-light)' }}>
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 700,
                        color: 'var(--color-teak)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <span>View Specifications</span>
                      <ArrowRight size={13} />
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const text = encodeURIComponent(`Hello Dimos Furniture, I am interested in inquiring about ${product.name} (${product.category}).`);
                        window.open(`https://wa.me/917025936662?text=${text}`, '_blank');
                      }}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--color-surface-soft)',
                        border: '1px solid var(--color-border)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--color-text-main)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      <MessageSquare size={12} color="var(--color-teak)" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Showroom Consultation Banner at Bottom */}
        <div
          style={{
            marginTop: '64px',
            padding: '36px',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--color-surface-card)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Sparkles size={16} color="var(--color-teak)" />
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teak-dark)' }}>
                Kerala Experience Centers
              </span>
            </div>
            <h3 className="font-melfira" style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-main)', margin: '0 0 6px 0' }}>
              Experience Our Solid Teakwood Collections In Person
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', margin: 0 }}>
              Visit our 5 flagship Kollam experience centers to feel the grain, test ergonomics, and consult with our woodcraft specialists.
            </p>
          </div>

          <button
            onClick={() => onNavigate('showrooms')}
            className="btn-pill-dark"
            style={{ padding: '14px 28px', fontSize: '12px', gap: '8px' }}
          >
            <span>Explore 5 Kollam Showrooms</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
