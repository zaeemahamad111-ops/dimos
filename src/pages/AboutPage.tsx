import React from 'react';
import { ShieldCheck, Award, Trees, Users, ArrowRight, MapPin } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: 'clamp(80px, 12vw, 110px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>About Dimos Furniture</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: 'clamp(36px, 6vw, 56px)', maxWidth: '840px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            Master Craftsmanship Since 2012 <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              lineHeight: 1.05,
              marginBottom: '14px',
            }}
          >
            The Art of Kerala Teakwood
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Established in 2012 in Kollam, Kerala, <strong>New Dimos Furniture Pvt Ltd</strong> has grown from a visionary local carpentry workshop into Kerala's most trusted bespoke furniture brand. We unite generational timber joinery with modern architectural aesthetics.
          </p>
        </div>

        {/* Narrative & Image Split Block */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(28px, 5vw, 48px)',
            alignItems: 'center',
            marginBottom: 'clamp(48px, 6vw, 72px)',
          }}
        >
          <div style={{ position: 'relative', borderRadius: 'var(--radius-card)', overflow: 'hidden', height: 'clamp(280px, 40vw, 420px)', boxShadow: 'var(--shadow-md)' }}>
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
            <h2 className="font-melfira" style={{ fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.1, marginBottom: '14px' }}>
              Furniture Built For Generations
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '14px' }}>
              In an age of mass-produced, short-lived synthetic boards, Dimos Furniture stands firmly for permanence. We work exclusively with seasoned solid timber — predominantly Grade-A Nilambur Teakwood and Kerala Rosewood.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--color-text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
              Every mortise and tenon joint is hand-fitted by master craftsmen who have honed their skills over decades. The result is furniture that doesn't just decorate a house — it becomes an heirloom cherished by your children and grandchildren.
            </p>

            <button onClick={() => onNavigate('shop')} className="btn-pill-dark" style={{ fontSize: '11px', padding: '12px 24px', gap: '8px' }}>
              <span>Explore Our Collections</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* 4 Brand Pillars */}
        <div style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          <div className="text-overline" style={{ textAlign: 'center', marginBottom: '6px', display: 'block' }}>
            Why Kerala Families Choose Dimos <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h2 className="font-melfira" style={{ textAlign: 'center', fontSize: 'clamp(26px, 4vw, 44px)', marginBottom: '32px' }}>
            Our Craftsmanship Pillars
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '20px',
            }}
          >
            {/* 1 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '14px' }}>
                <Trees size={18} />
              </div>
              <h3 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>
                100% Solid Heartwood
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Zero particle boards or cheap veneers. Only authentic, dense-grained Nilambur teak and hardwood.
              </p>
            </div>

            {/* 2 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '14px' }}>
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>
                10-Year Warranty
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Complete structural guarantee against wood borer attacks, joint loosening, and seasoning defects.
              </p>
            </div>

            {/* 3 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '14px' }}>
                <Award size={18} />
              </div>
              <h3 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>
                Direct Factory Showrooms
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
                By manufacturing in our own Kollam workshops, we preserve exacting standards from timber selection to final hand-polish.
              </p>
            </div>

            {/* 4 */}
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', marginBottom: '14px' }}>
                <Users size={18} />
              </div>
              <h3 className="font-melfira" style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>
                5 Kollam Showrooms
              </h3>
              <p style={{ fontSize: '12.5px', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>
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
            padding: 'clamp(24px, 4vw, 40px)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid var(--color-border)',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <h3 className="font-melfira" style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', lineHeight: 1.1, marginBottom: '6px' }}>
              Visit Our Flagship Experience Center
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-body)', margin: 0 }}>
              Bismi Tower, Kilikollur, Chandanathope, Kollam. Open 7 days a week from 09:00 AM to 09:00 PM.
            </p>
          </div>

          <button onClick={() => onNavigate('showrooms')} className="btn-pill-dark" style={{ fontSize: '11px', padding: '12px 24px', gap: '6px' }}>
            <span>Find Nearest Showroom</span>
            <MapPin size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
