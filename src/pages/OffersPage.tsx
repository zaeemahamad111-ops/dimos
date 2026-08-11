import React from 'react';
import { SHOWROOM_PACKAGES, PRODUCTS, type ProductItem, type ShowroomPackage } from '../data/siteData';
import { MessageSquare, ArrowRight, Check, Gift, ShieldCheck, Truck, Sparkles, MapPin } from 'lucide-react';

interface OffersPageProps {
  onSelectProduct: (product: ProductItem) => void;
  onNavigate: (page: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  const handleWhatsAppPackageEnquiry = (pkg: ShowroomPackage) => {
    const text = encodeURIComponent(
      `*Dimos Furniture Showroom Package Inquiry*\n\n` +
      `🎁 *Package:* ${pkg.title}\n` +
      `🏷️ *Tier:* ${pkg.badge}\n` +
      `🏠 *Ideal For:* ${pkg.idealFor}\n` +
      `🌲 *Timber:* ${pkg.timberGrade}\n\n` +
      `Included Pieces:\n` +
      pkg.piecesIncluded.map((p) => `• ${p}`).join('\n') +
      `\n\nHello Dimos Showroom Team, I would like to consult on booking this package for my home.`
    );
    window.open(`https://wa.me/917025936662?text=${text}`, '_blank');
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: 'clamp(80px, 12vw, 110px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Exclusive Showroom Ensembles <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(30px, 5.5vw, 58px)',
              fontWeight: 'bold',
              color: 'var(--color-text-main)',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Curated Showroom Packages & Living Offers
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '14.5px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Carefully coordinated complete home packages designed to bring seamless timber aesthetics,
            ergonomic comfort, and complimentary white-glove showroom privileges to your Kerala residence.
          </p>
        </div>

        {/* 4 Brand Privileges Bar (Responsive 2x2 grid on mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '14px', borderRadius: '14px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Gift size={20} color="var(--color-teak)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>Free 3D Layout Plan</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Tailored to your floor plan</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '14px', borderRadius: '14px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Truck size={20} color="var(--color-teak)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>All-Kerala Delivery</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>White-glove setup</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '14px', borderRadius: '14px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} color="var(--color-teak)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>10-Year Warranty</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Comprehensive protection</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '14px', borderRadius: '14px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={20} color="var(--color-teak)" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>Free Care Kit</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Annual teak beeswax care</div>
            </div>
          </div>
        </div>

        {/* Showroom Curated Packages Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginBottom: '56px' }}>
          {SHOWROOM_PACKAGES.map((pkg, idx) => (
            <div
              key={pkg.id}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--color-border-light)',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                alignItems: 'center',
              }}
            >
              {/* Image Canvas */}
              <div
                style={{
                  height: 'clamp(280px, 38vw, 440px)',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-surface-soft)',
                  order: idx % 2 === 1 ? 2 : 1,
                }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(28, 27, 26, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {pkg.badge}
                </div>
              </div>

              {/* Package Details */}
              <div style={{ padding: 'clamp(20px, 3.5vw, 36px)', order: idx % 2 === 1 ? 1 : 2 }}>
                <div style={{ fontSize: '11.5px', color: 'var(--color-teak-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                  {pkg.idealFor}
                </div>

                <h3
                  className="font-melfira"
                  style={{
                    fontSize: 'clamp(20px, 3vw, 30px)',
                    fontWeight: 'bold',
                    color: 'var(--color-text-main)',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}
                >
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {pkg.description}
                </p>

                {/* Included Pieces */}
                <div
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    marginBottom: '18px',
                    border: '1px solid var(--color-border-light)',
                  }}
                >
                  <div style={{ fontSize: '11.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-main)', marginBottom: '6px' }}>
                    Package Includes:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {pkg.piecesIncluded.map((piece, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12.5px', color: 'var(--color-text-main)' }}>
                        <Check size={13} color="var(--color-teak)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{piece}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Showroom Perks */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)', marginBottom: '6px' }}>
                    Showroom Privileges:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {pkg.showroomPerks.map((perk, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11px',
                          backgroundColor: 'rgba(62, 77, 60, 0.08)',
                          color: 'var(--color-forest)',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-pill)',
                          fontWeight: 600,
                        }}
                      >
                        ✓ {perk}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <button
                    onClick={() => handleWhatsAppPackageEnquiry(pkg)}
                    className="btn-pill-dark"
                    style={{ padding: '12px 20px', fontSize: '11px', gap: '6px' }}
                  >
                    <MessageSquare size={14} />
                    <span>Enquire on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onNavigate('showrooms')}
                    className="btn-pill-outline"
                    style={{ padding: '11px 18px', fontSize: '11px', gap: '5px' }}
                  >
                    <MapPin size={12} />
                    <span>Locate Showroom</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Masterpieces Quick Catalog */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 className="font-melfira" style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '6px' }}>
            Featured Masterpiece Catalog
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)' }}>
            Select any individual piece to view architectural dimensions and wood joinery specifications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
            gap: '18px',
          }}
        >
          {PRODUCTS.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card-sm)',
                padding: '14px',
                border: '1px solid var(--color-border-light)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  height: '160px',
                  backgroundColor: 'var(--color-surface-soft)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '14px',
                  marginBottom: '10px',
                }}
              >
                <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <h4 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 3px 0' }}>
                {product.name}
              </h4>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                {product.dimensions}
              </div>
              <span style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--color-teak)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>View Specs</span>
                <ArrowRight size={11} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
