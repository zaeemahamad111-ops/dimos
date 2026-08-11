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
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Exclusive Showroom Ensembles <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 'bold',
              color: 'var(--color-text-main)',
              lineHeight: 1.1,
              marginBottom: '14px',
            }}
          >
            Curated Showroom Packages & Living Offers
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '15px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Carefully coordinated complete home packages designed to bring seamless timber aesthetics,
            ergonomic comfort, and complimentary white-glove showroom privileges to your Kerala residence.
          </p>
        </div>

        {/* 4 Brand Privileges Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div style={{ backgroundColor: 'var(--color-surface)', padding: '18px', borderRadius: '16px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Gift size={22} color="var(--color-teak)" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)' }}>Free 3D Layout Plan</div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>Tailored to your architectural floor plan</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '18px', borderRadius: '16px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Truck size={22} color="var(--color-teak)" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)' }}>All-Kerala Delivery</div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>Complimentary white-glove setup</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '18px', borderRadius: '16px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={22} color="var(--color-teak)" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)' }}>10-Year Teak Warranty</div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>Comprehensive structural protection</div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-surface)', padding: '18px', borderRadius: '16px', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Sparkles size={22} color="var(--color-teak)" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-main)' }}>Free Care Kit</div>
              <div style={{ fontSize: '11.5px', color: 'var(--color-text-muted)' }}>Annual organic teak beeswax polish</div>
            </div>
          </div>
        </div>

        {/* Showroom Curated Packages Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '64px' }}>
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center',
              }}
            >
              {/* Image Canvas */}
              <div
                style={{
                  height: 'clamp(340px, 42vw, 480px)',
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
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(28, 27, 26, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {pkg.badge}
                </div>
              </div>

              {/* Package Details */}
              <div style={{ padding: 'clamp(28px, 4vw, 44px)', order: idx % 2 === 1 ? 1 : 2 }}>
                <div style={{ fontSize: '12px', color: 'var(--color-teak-dark)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {pkg.idealFor}
                </div>

                <h3
                  className="font-melfira"
                  style={{
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 'bold',
                    color: 'var(--color-text-main)',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                  }}
                >
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                  {pkg.description}
                </p>

                {/* Included Pieces */}
                <div
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: '14px',
                    padding: '16px 18px',
                    marginBottom: '20px',
                    border: '1px solid var(--color-border-light)',
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-main)', marginBottom: '8px' }}>
                    Package Includes:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pkg.piecesIncluded.map((piece, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--color-text-main)' }}>
                        <Check size={14} color="var(--color-teak)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{piece}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Showroom Perks */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-forest)', marginBottom: '6px' }}>
                    Complimentary Showroom Privileges:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {pkg.showroomPerks.map((perk, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '11.5px',
                          backgroundColor: 'rgba(62, 77, 60, 0.08)',
                          color: 'var(--color-forest)',
                          padding: '4px 10px',
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    onClick={() => handleWhatsAppPackageEnquiry(pkg)}
                    className="btn-pill-dark"
                    style={{ padding: '12px 24px', fontSize: '11.5px', gap: '8px' }}
                  >
                    <MessageSquare size={15} />
                    <span>Enquire Package on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => onNavigate('showrooms')}
                    className="btn-pill-outline"
                    style={{ padding: '12px 20px', fontSize: '11.5px', gap: '6px' }}
                  >
                    <MapPin size={13} />
                    <span>Locate Showroom</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Masterpieces Quick Catalog */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 className="font-melfira" style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--color-text-main)', marginBottom: '8px' }}>
            Featured Masterpiece Catalog
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Select any individual piece to view architectural dimensions and wood joinery specifications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '20px',
          }}
        >
          {PRODUCTS.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-card-sm)',
                padding: '16px',
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
                  height: '180px',
                  backgroundColor: 'var(--color-surface-soft)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  marginBottom: '12px',
                }}
              >
                <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <h4 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
                {product.name}
              </h4>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                {product.dimensions}
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-teak)', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>View Specs</span>
                <ArrowRight size={12} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
