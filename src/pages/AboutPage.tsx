import React from 'react';
import { ShieldCheck, Award, Trees, Users, ArrowRight, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>About Dimos Furniture</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '56px', maxWidth: '840px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Master Craftsmanship Since 2012 <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-teko"
            style={{
              fontSize: 'clamp(44px, 7vw, 84px)',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            The Art of Kerala Teakwood
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Established in 2012 in Kollam, Kerala, <strong>New Dimos Furniture Pvt Ltd</strong> has grown from a visionary local carpentry workshop into Kerala's most trusted bespoke furniture brand. We unite generational timber joinery with modern architectural aesthetics.
          </p>
        </div>

        {/* Narrative & Image Split Block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '72px',
          }}
        >
          <div style={{ position: 'relative', borderRadius: 'var(--radius-card)', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-md)' }}>
            <img
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=85&w=1200&auto=format&fit=crop"
              alt="Artisans at work in Dimos Workshop"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div className="text-overline" style={{ marginBottom: '6px' }}>
              Our Philosophy <span style={{ opacity: 0.5 }}>—</span>
            </div>
            <h2 className="font-teko" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.95, textTransform: 'uppercase', marginBottom: '16px' }}>
              Furniture Built For Generations
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '16px' }}>
              In an age of mass-produced, short-lived synthetic boards, Dimos Furniture stands firmly for permanence. We work exclusively with seasoned solid timber — predominantly Grade-A Nilambur Teakwood and Kerala Rosewood.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '24px' }}>
              Every mortise and tenon joint is hand-fitted by master craftsmen who have honed their skills over decades. The result is furniture that doesn't just decorate a house — it becomes an heirloom cherished by your children and grandchildren.
            </p>

            <button onClick={() => onNavigate('shop')} className="btn-pill-dark" style={{ fontSize: '11px', padding: '12px 24px' }}>
              <span>Explore Our Catalog</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 4 Brand Pillars */}
        <div style={{ marginBottom: '72px' }}>
          <div className="text-overline" style={{ textAlign: 'center', marginBottom: '6px' }}>
            Why Families Choose Dimos <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h2 className="text-section-title" style={{ textAlign: 'center', fontSize: 'clamp(36px, 5vw, 54px)', marginBottom: '40px' }}>
            Our Craftsmanship Pillars
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {/* 1 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '16px' }}>
                <Trees size={20} />
              </div>
              <h3 className="font-panchang" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                100% Solid Heartwood
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Zero particle boards or cheap veneers. Only authentic, dense-grained Nilambur teak and hardwood.
              </p>
            </div>

            {/* 2 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '16px' }}>
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-panchang" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                10-Year Warranty
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Complete structural guarantee against wood borer attacks, joint loosening, and seasoning defects.
              </p>
            </div>

            {/* 3 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '16px' }}>
                <Award size={20} />
              </div>
              <h3 className="font-panchang" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                Direct-To-Craftsman Pricing
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                By manufacturing in our own Kollam workshops, we eliminate middlemen markups and offer unbeatable prices.
              </p>
            </div>

            {/* 4 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '16px' }}>
                <Users size={20} />
              </div>
              <h3 className="font-panchang" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
                5 Kollam Showrooms
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                Visit our experience centers in Chandanathope, Pallimukku, Karunagappalli, Bharanikavu, and Thattamala.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Showrooms */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-warm)',
            borderRadius: 'var(--radius-hero)',
            padding: 'clamp(32px, 5vw, 48px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid var(--color-border)',
            gap: '24px',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <h3 className="font-teko" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 0.95, textTransform: 'uppercase', marginBottom: '8px' }}>
              Visit Our Flagship Experience Center
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)' }}>
              Bismi Tower, Kilikollur, Chandanathope, Kollam. Open 7 days a week from 09:00 AM to 09:00 PM.
            </p>
          </div>

          <button onClick={() => onNavigate('showrooms')} className="btn-pill-dark" style={{ fontSize: '11px', padding: '12px 26px' }}>
            <span>Find Nearest Showroom</span>
            <MapPin size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
