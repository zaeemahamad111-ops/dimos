import React, { useEffect, useState, useRef } from 'react';

interface InitialLoaderProps {
  onFinish: () => void;
}

const TOTAL_FRAMES = 221;
export const globalPreloadedFrames: HTMLImageElement[] = [];

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onFinish }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const [loadedFrameCount, setLoadedFrameCount] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Seasoning Nilambur Teakwood');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const framesLoadedRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const finishedRef = useRef<boolean>(false);

  useEffect(() => {
    // 1. Preload 221 Frames into global memory
    if (globalPreloadedFrames.length === 0) {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const padded = String(i + 1).padStart(3, '0');
        const img = new Image();
        img.src = `/frames/frame_${padded}.jpg`;
        img.onload = () => {
          framesLoadedRef.current += 1;
        };
        img.onerror = () => {
          framesLoadedRef.current += 1;
        };
        globalPreloadedFrames[i] = img;
      }
    }

    // 2. Smooth Continuous RequestAnimationFrame Animation Loop
    const MIN_DURATION = 3500; // 3.5 seconds smooth build-up
    let currentVal = 0;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      
      const framePercent = (framesLoadedRef.current / TOTAL_FRAMES) * 100;
      const timePercent = (elapsed / MIN_DURATION) * 100;

      // Target progress climbs smoothly without getting stuck
      let target = Math.min(100, Math.min(framePercent + 15, timePercent));
      
      if (elapsed >= MIN_DURATION && framesLoadedRef.current >= Math.min(TOTAL_FRAMES, 50)) {
        target = 100;
      }

      const diff = target - currentVal;
      if (diff > 0) {
        currentVal += Math.max(0.45, diff * 0.09);
      }

      const rounded = Math.min(100, Math.floor(currentVal));
      setDisplayProgress(rounded);
      setLoadedFrameCount(Math.min(TOTAL_FRAMES, framesLoadedRef.current));

      // Dynamic phase status
      if (rounded < 25) {
        setStatusMessage('Selecting Grade-A Nilambur Teak Heartwood');
      } else if (rounded < 50) {
        setStatusMessage('Kiln-Drying & Moisture Calibration (10-12%)');
      } else if (rounded < 75) {
        setStatusMessage('Assembling Generational Mortise & Tenon Joinery');
      } else if (rounded < 95) {
        setStatusMessage('Buffing Artisanal Organic Beeswax Sealants');
      } else {
        setStatusMessage('Showroom Experience Ready');
      }

      // When reaching 100%, trigger smooth cinematic fadeout with ZERO pause!
      if (rounded >= 100 && !finishedRef.current) {
        finishedRef.current = true;
        setIsFadingOut(true);
        setTimeout(() => {
          onFinish();
        }, 650);
        return;
      }

      animationFrameIdRef.current = requestAnimationFrame(tick);
    };

    animationFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#121110',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(24px, 4vw, 48px)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.04)' : 'scale(1)',
        filter: isFadingOut ? 'blur(8px)' : 'none',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(340px, 75vw, 750px)',
          height: 'clamp(340px, 75vw, 750px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 131, 78, 0.18) 0%, rgba(18, 17, 16, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Top Header Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          zIndex: 2,
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '14px',
        }}
      >
        <div
          style={{
            fontSize: '10.5px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.55)',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c5834e' }} />
          <span>Dimos Architectural Studio</span>
        </div>

        <div
          style={{
            fontSize: '10.5px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.55)',
            fontWeight: 600,
          }}
        >
          Kollam, Kerala
        </div>
      </div>

      {/* Centerpiece: Larger Brand Logo with Refined & Smaller Sub-Text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          zIndex: 2,
          position: 'relative',
          marginTop: 'auto',
          marginBottom: 'auto',
          width: '100%',
          maxWidth: '560px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Much Larger Logo (as requested) */}
        <div
          style={{
            position: 'relative',
            marginBottom: 'clamp(24px, 4vw, 36px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/86.png"
            alt="Dimos Furniture"
            style={{
              height: 'clamp(72px, 14vw, 115px)', // Significantly larger logo
              width: 'auto',
              maxWidth: 'clamp(260px, 70vw, 440px)',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 14px 36px rgba(0,0,0,0.65))',
            }}
          />
        </div>

        {/* Refined Small Tagline */}
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#c5834e',
            fontWeight: 600,
            marginBottom: 'clamp(12px, 2vw, 18px)',
          }}
        >
          The Timber Experience
        </div>

        {/* Refined, Elegant Percentage Counter (Smaller & Sleek) */}
        <div
          style={{
            fontSize: 'clamp(32px, 6vw, 48px)', // Refined smaller percentage text
            fontFamily: 'var(--font-sans), sans-serif',
            fontWeight: 700,
            lineHeight: 1,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: 'clamp(14px, 2.5vw, 20px)',
            display: 'flex',
            alignItems: 'baseline',
            gap: '3px',
          }}
        >
          <span>{String(displayProgress).padStart(2, '0')}</span>
          <span style={{ fontSize: '18px', color: '#c5834e', fontWeight: 600 }}>%</span>
        </div>

        {/* Sleek Dual-Layer Progress Bar */}
        <div
          style={{
            width: '100%',
            maxWidth: 'clamp(240px, 45vw, 340px)',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '14px',
          }}
        >
          <div
            style={{
              width: `${displayProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #8c6239 0%, #c5834e 50%, #f0c296 100%)',
              borderRadius: '999px',
              boxShadow: '0 0 14px rgba(197, 131, 78, 0.9)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        {/* Refined Status Text */}
        <div
          style={{
            fontSize: '11.5px',
            color: 'rgba(255, 255, 255, 0.65)',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#c5834e' }} />
          <span>{statusMessage}</span>
        </div>
      </div>

      {/* Bottom Footer Metadata */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          zIndex: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '14px',
          gap: '10px',
        }}
      >
        <div
          style={{
            fontSize: '10.5px',
            color: 'rgba(255, 255, 255, 0.45)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          100% Solid Kiln-Seasoned Nilambur Teak
        </div>

        <div
          style={{
            fontSize: '10.5px',
            color: '#c5834e',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            fontFamily: 'monospace',
          }}
        >
          {loadedFrameCount} / {TOTAL_FRAMES} Frames Loaded
        </div>
      </div>
    </div>
  );
};
