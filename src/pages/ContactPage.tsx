import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Home Furniture Order');
  const [message, setMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
    });

    const text = encodeURIComponent(
      `*Contact Inquiry - Dimos Furniture Website*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📧 *Email:* ${email}\n` +
      `📋 *Subject:* ${inquiryType}\n` +
      `💬 *Message:* ${message}\n`
    );
    window.open(`https://wa.me/917025936662?text=${text}`, '_blank');
  };

  const FAQS = [
    {
      q: 'Do you deliver across all districts in Kerala?',
      a: 'Yes! We provide white-glove doorstep delivery and free in-home assembly across all 14 districts in Kerala. Free delivery applies to orders above ₹25,000.',
    },
    {
      q: 'What type of wood do you use for your furniture?',
      a: 'We specialize in 100% seasoned Grade-A Nilambur Teakwood and Kerala Rosewood (Eetti). All wood is kiln-dried to optimal moisture levels to resist swelling or cracking during Kerala monsoons.',
    },
    {
      q: 'Can I customize dimensions or fabric colors?',
      a: 'Absolutely. We operate a full bespoke furniture studio in Kollam where you can choose custom lengths, wood finishes (natural, smoked, driftwood), and upholstery fabrics (Belgian linen, full-grain leather, velvet).',
    },
    {
      q: 'What is the warranty coverage on Dimos furniture?',
      a: 'Every piece of solid teakwood furniture comes with a comprehensive 10-Year Warranty covering joinery integrity and wood borer/termite resistance.',
    },
    {
      q: 'How long does a customized furniture order take to craft?',
      a: 'Standard ready-stock items are dispatched within 2 to 5 business days. Custom bespoke orders typically take 15 to 25 days depending on carving complexity.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>Contact Us</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: '48px', maxWidth: '800px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            We're Here To Help <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-teko"
            style={{
              fontSize: 'clamp(44px, 7vw, 84px)',
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            Get In Touch With Dimos
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
            Have a question about a dining table, custom wardrobe, or showroom visit? Our Kollam furniture consultants are ready to assist you via call, WhatsApp, or email.
          </p>
        </div>

        {/* Grid: Contact Form & Info Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'flex-start',
            marginBottom: '72px',
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: 'var(--radius-card)',
              padding: 'clamp(24px, 4vw, 36px)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h3 className="font-teko" style={{ fontSize: '32px', textTransform: 'uppercase', marginBottom: '16px' }}>
              Send An Inquiry
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Menon"
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-card-sm)', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-card-sm)', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-card-sm)', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Inquiry Type
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-card-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', fontSize: '13px', outline: 'none' }}
                >
                  <option>Home Furniture Order & Delivery</option>
                  <option>Custom Bespoke Furniture Quote</option>
                  <option>Showroom Visit Consultation</option>
                  <option>Interior Designer / Architect Partnership</option>
                  <option>Warranty & After-Sales Support</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what pieces you are interested in or your room specifications..."
                  style={{ width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-card-sm)', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-pill-dark" style={{ width: '100%', padding: '14px', fontSize: '12px', gap: '8px' }}>
                <Send size={15} />
                <span>Send WhatsApp Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-card)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-panchang" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '16px' }}>
                Direct Contact Lines
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Customer Care & Sales</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>+91 70259 36662 / +91 92880 98981</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Email Address</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>info@dimosfurniture.in</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Showroom Timings</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>Mon – Sun: 09:00 AM – 09:00 PM</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Head Office</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-main)' }}>Bismi Tower, Kilikollur, Chandanathope, Kollam - 691004</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Support Card */}
            <div style={{ backgroundColor: '#2c4c3b', borderRadius: 'var(--radius-card)', padding: '28px', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <MessageSquare size={18} color="#88bf82" />
                <span className="font-panchang" style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>
                  WhatsApp Quick Chat
                </span>
              </div>
              <h4 className="font-teko" style={{ fontSize: '30px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Chat Directly With A Furniture Specialist
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '16px' }}>
                Get instant product catalogs, high-resolution wood finish photos, and live price quotations.
              </p>
              <a
                href="https://wa.me/917025936662?text=Hello%20Dimos%20Furniture%2C%20I%20would%20like%20to%20inquire%20about%20your%20teakwood%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-glass-light"
                style={{ fontSize: '11px', padding: '10px 20px', display: 'inline-flex' }}
              >
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="text-overline" style={{ textAlign: 'center', marginBottom: '6px' }}>
            Frequently Asked Questions <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h2 className="text-section-title" style={{ textAlign: 'center', fontSize: 'clamp(32px, 4.5vw, 48px)', marginBottom: '32px' }}>
            Common Queries & Answers
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-card-sm)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '14.5px',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                  }}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 20px 24px', fontSize: '13.5px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
