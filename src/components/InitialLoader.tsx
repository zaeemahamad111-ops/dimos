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
    // Minimum 3.5s cinematic intro, dynamically scaling to actual network speed
    const MIN_DURATION = 3600; // 3.6 seconds smooth build-up
    let currentVal = 0;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      
      const framePercent = (framesLoadedRef.current / TOTAL_FRAMES) * 100;
      const timePercent = (elapsed / MIN_DURATION) * 100;

      // Target progress is governed by time and actual frame downloads
      // It smoothly climbs continuously without jumping to 100% early
      let target = Math.min(100, Math.min(framePercent + 15, timePercent));
      
      // If elapsed past min duration and at least 80% frames ready, smoothly push to 100
      if (elapsed >= MIN_DURATION && framesLoadedRef.current >= Math.min(TOTAL_FRAMES, 60)) {
        target = 100;
      }

      // Smooth lerp easing
      const diff = target - currentVal;
      if (diff > 0) {
        currentVal += Math.max(0.4, diff * 0.08);
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
        setStatusMessage('Showroom Canvas Ready');
      }

      // When reaching 100%, immediately trigger smooth cinematic fadeout with ZERO pause!
      if (rounded >= 100 && !finishedRef.current) {
        finishedRef.current = true;
        setIsFadingOut(true);
        setTimeout(() => {
          onFinish();
        }, 650); // Instant 650ms fade into hero
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
        padding: 'clamp(20px, 4vw, 48px)',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.05)' : 'scale(1)',
        filter: isFadingOut ? 'blur(10px)' : 'none',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
        userSelect: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Background Radial Glow & Ambient Ring */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(320px, 70vw, 700px)',
          height: 'clamp(320px, 70vw, 700px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 131, 78, 0.14) 0%, rgba(18, 17, 16, 0) 70%)',
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
          paddingBottom: '16px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.5)',
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
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 600,
          }}
        >
          Kollam, Kerala
        </div>
      </div>

      {/* Centerpiece: Luminous Brand Mark & Big Dynamic Counter */}
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
        }}
      >
        {/* Animated Brand Logo Container */}
        <div
          style={{
            position: 'relative',
            marginBottom: 'clamp(20px, 3.5vw, 32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src="/86.png"
            alt="Dimos Furniture"
            style={{
              height: 'clamp(56px, 10vw, 84px)',
              width: 'auto',
              maxWidth: 'clamp(220px, 60vw, 360px)',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.6))',
            }}
          />
        </div>

        {/* Unique Subtitle (Different from Hero) */}
        <div
          style={{
            fontSize: '11.5px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#c5834e',
            fontWeight: 700,
            marginBottom: 'clamp(14px, 2.5vw, 24px)',
          }}
        >
          The Timber Experience
        </div>

        {/* Huge Monumental Numerals Counter */}
        <div
          style={{
            fontSize: 'clamp(68px, 14vw, 130px)',
            fontFamily: 'var(--font-melfira), serif',
            fontWeight: 'bold',
            lineHeight: 0.9,
            color: 'transparent',
            backgroundImage: 'linear-gradient(180deg, #ffffff 30%, rgba(226, 170, 120, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            letterSpacing: '-0.03em',
            marginBottom: 'clamp(16px, 3vw, 28px)',
            display: 'flex',
            alignItems: 'baseline',
            gap: '4px',
          }}
        >
          <span>{String(displayProgress).padStart(2, '0')}</span>
          <span style={{ fontSize: 'clamp(20px, 4vw, 36px)', color: '#c5834e', fontWeight: 400 }}>%</span>
        </div>

        {/* Dynamic Dual-Layer Progress Bar */}
        <div
          style={{
            width: '100%',
            maxWidth: 'clamp(260px, 50vw, 380px)',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '16px',
          }}
        >
          <div
            style={{
              width: `${displayProgress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #8c6239 0%, #c5834e 50%, #f0c296 100%)',
              borderRadius: '999px',
              boxShadow: '0 0 16px rgba(197, 131, 78, 0.9)',
              transition: 'width 0.08s linear',
            }}
          />
        </div>

        {/* Real-time Status Text */}
        <div
          style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
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
          paddingTop: '16px',
          gap: '12px',
        }}
      >
        <div
          style={{
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.45)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          100% Solid Kiln-Seasoned Nilambur Teak
        </div>

        <div
          style={{
            fontSize: '11px',
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
