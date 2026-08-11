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
      particleCount: 60,
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
      a: 'Yes! We provide white-glove doorstep delivery and in-home assembly across all 14 districts in Kerala.',
    },
    {
      q: 'What type of wood do you use for your furniture?',
      a: 'We specialize in 100% seasoned Grade-A Nilambur Teakwood and Kerala Rosewood (Eetti). All wood is kiln-dried to optimal moisture levels to resist swelling or cracking during Kerala monsoons.',
    },
    {
      q: 'Can I customize dimensions or wood finishes?',
      a: 'Absolutely. We operate our own woodworking facility in Kollam where you can tailor lengths, wood finishes (natural matte, warm honey, satin teak, walnut), and premium fabrics.',
    },
    {
      q: 'What is the warranty coverage on Dimos furniture?',
      a: 'Every piece of solid teakwood furniture comes with a comprehensive 10-Year Warranty covering joinery integrity and wood borer/termite resistance.',
    },
    {
      q: 'How can I visit your showrooms?',
      a: 'We have 5 dedicated experience centers in Kollam (Chandanathope HQ, Pallimukku, Karunagappalli, Bharanikavu, and Thattamala) open 7 days a week from 9:00 AM to 9:00 PM.',
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', paddingTop: 'clamp(80px, 12vw, 110px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
          <button onClick={() => onNavigate('home')} className="hover-underline" style={{ color: 'var(--color-text-muted)' }}>
            Home
          </button>
          <span>/</span>
          <span style={{ color: 'var(--color-text-main)', fontWeight: 600 }}>Contact Us</span>
        </div>

        {/* Hero Header */}
        <div style={{ marginBottom: 'clamp(32px, 5vw, 48px)', maxWidth: '800px' }}>
          <div className="text-overline" style={{ marginBottom: '8px' }}>
            We're Here To Help <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h1
            className="font-melfira"
            style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 'bold',
              lineHeight: 1.05,
              marginBottom: '12px',
            }}
          >
            Get In Touch With Dimos
          </h1>
          <p style={{ fontSize: '14.5px', color: 'var(--color-text-body)', lineHeight: 1.65 }}>
            Have a question about a dining table, custom wardrobe, or showroom visit? Our Kollam furniture consultants are ready to assist you via call, WhatsApp, or email.
          </p>
        </div>

        {/* Grid: Contact Form & Info Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
            alignItems: 'flex-start',
            marginBottom: '64px',
          }}
        >
          {/* Left: Contact Form */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              borderRadius: '20px',
              padding: 'clamp(20px, 4vw, 32px)',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <h3 className="font-melfira" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>
              Send An Inquiry
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Menon"
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 70259 36662"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                  Inquiry Type
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg)', fontSize: '13px', outline: 'none' }}
                >
                  <option>Home Furniture Consultation</option>
                  <option>Custom Architectural Timber Blueprint</option>
                  <option>Showroom Visit Booking</option>
                  <option>Interior Designer / Architect Partnership</option>
                  <option>Warranty & After-Sales Service</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px', fontWeight: 600 }}>
                  Your Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what pieces you are interested in or your room specifications..."
                  style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1px solid var(--color-border)', fontSize: '13px', outline: 'none', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-pill-dark" style={{ width: '100%', padding: '14px', fontSize: '11.5px', gap: '8px' }}>
                <Send size={14} />
                <span>Send WhatsApp Inquiry</span>
              </button>
            </form>
          </div>

          {/* Right: Direct Contacts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ backgroundColor: 'var(--color-surface)', borderRadius: '20px', padding: 'clamp(20px, 4vw, 28px)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 className="font-melfira" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
                Direct Contact Lines
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', flexShrink: 0 }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Customer Care & Helpline</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>+91 70259 36662 / +91 92880 98981</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', flexShrink: 0 }}>
                    <Mail size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Email Address</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>info@dimosfurniture.in</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', flexShrink: 0 }}>
                    <Clock size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Showroom Timings</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--color-text-main)' }}>Mon – Sun: 09:00 AM – 09:00 PM</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: 'var(--color-surface-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-teak)', flexShrink: 0, marginTop: '2px' }}>
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>Headquarters & Main Studio</div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-main)', lineHeight: 1.4 }}>Bismi Tower, Kilikollur, Chandanathope, Kollam - 691004</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Support Card */}
            <div style={{ backgroundColor: '#23382c', borderRadius: '20px', padding: 'clamp(20px, 4vw, 28px)', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MessageSquare size={16} color="#88bf82" />
                <span style={{ fontSize: '10.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a2d69c' }}>
                  WhatsApp Quick Chat
                </span>
              </div>
              <h4 className="font-melfira" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '6px' }}>
                Chat Directly With Our Team
              </h4>
              <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', marginBottom: '14px', lineHeight: 1.5 }}>
                Get instant product catalogs, high-resolution wood grain photos, and live consultations.
              </p>
              <a
                href="https://wa.me/917025936662?text=Hello%20Dimos%20Furniture%2C%20I%20would%20like%20to%20inquire%20about%20your%20teakwood%20collections."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-glass-light"
                style={{ fontSize: '11px', padding: '10px 18px', display: 'inline-flex' }}
              >
                <span>Open WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="text-overline" style={{ textAlign: 'center', marginBottom: '6px', display: 'block' }}>
            Frequently Asked Questions <span style={{ opacity: 0.5 }}>—</span>
          </div>
          <h2 className="font-melfira" style={{ textAlign: 'center', fontSize: 'clamp(26px, 4vw, 42px)', marginBottom: '28px' }}>
            Common Queries & Answers
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '12px',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                    minHeight: '44px',
                  }}
                >
                  <span style={{ paddingRight: '12px' }}>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={16} style={{ flexShrink: 0 }} /> : <ChevronDown size={16} style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 16px 20px', fontSize: '13px', color: 'var(--color-text-body)', lineHeight: 1.6 }}>
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
