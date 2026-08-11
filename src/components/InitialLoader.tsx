import React, { useEffect, useState, useRef } from 'react';

interface InitialLoaderProps {
  onFinish: () => void;
}

const TOTAL_FRAMES = 221;
export const globalPreloadedFrames: HTMLImageElement[] = [];

export const InitialLoader: React.FC<InitialLoaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Kiln-Seasoning Grade-A Nilambur Teakwood...');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const startTimeRef = useRef<number>(Date.now());
  const framesLoadedRef = useRef<number>(0);

  useEffect(() => {
    // 1. Preload 221 Frames in background into global cache
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

    // 2. 5-Second (5000ms) Progress & Narrative Animation Loop
    const TOTAL_DURATION = 5000; // 5 seconds
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const rawProgress = Math.min(100, Math.round((elapsed / TOTAL_DURATION) * 100));

      // Calculate actual frames loaded percentage vs time progress
      const frameLoadPercent = Math.round((framesLoadedRef.current / TOTAL_FRAMES) * 100);
      const combinedProgress = Math.max(rawProgress, Math.min(100, frameLoadPercent));
      setProgress(combinedProgress);

      // Dynamic Storytelling Status Messages
      if (elapsed < 1200) {
        setStatusText('Kiln-Seasoning Grade-A Nilambur Teakwood...');
      } else if (elapsed < 2400) {
        setStatusText('Hand-Fitting Mortise & Tenon Interlocking Joinery...');
      } else if (elapsed < 3600) {
        setStatusText('Finishing with Zero-VOC Organic Beeswax Polish...');
      } else if (elapsed < 4600) {
        setStatusText('Initializing 3D Interactive Teak Showroom...');
      } else {
        setStatusText('Welcome to Dimos Furniture');
      }

      // Once 5 seconds have elapsed
      if (elapsed >= TOTAL_DURATION) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          onFinish();
        }, 800); // 800ms fade transition
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#141312',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isFadingOut ? 0 : 1,
        transform: isFadingOut ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: isFadingOut ? 'none' : 'auto',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        userSelect: 'none',
      }}
    >
      {/* Subtle Warm Amber Ambient Glow in Background */}
      <div
        style={{
          position: 'absolute',
          width: 'clamp(300px, 60vw, 600px)',
          height: 'clamp(300px, 60vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 131, 78, 0.16) 0%, rgba(20, 19, 18, 0) 70%)',
          pointerEvents: 'none',
          animation: 'pulseGlow 3.5s ease-in-out infinite alternate',
        }}
      />

      {/* Main Brand Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '520px',
          width: '100%',
        }}
      >
        {/* Brand Logo 86.png */}
        <div style={{ marginBottom: 'clamp(20px, 4vw, 32px)', position: 'relative' }}>
          <img
            src="/86.png"
            alt="Dimos Furniture"
            style={{
              height: 'clamp(52px, 10vw, 76px)',
              width: 'auto',
              maxWidth: 'clamp(240px, 60vw, 340px)',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.45))',
            }}
          />
        </div>

        {/* Brand Tagline in Melfira */}
        <h2
          className="font-melfira"
          style={{
            fontSize: 'clamp(22px, 4.5vw, 34px)',
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: 'clamp(24px, 5vw, 36px)',
            letterSpacing: '-0.01em',
          }}
        >
          Crafted for Generations
        </h2>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '100%',
            maxWidth: '360px',
            marginBottom: '16px',
          }}
        >
          {/* Progress Track */}
          <div
            style={{
              width: '100%',
              height: '3px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '999px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Progress Fill with Glowing Teak Gradient */}
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #8c6239 0%, #c5834e 50%, #e2aa78 100%)',
                borderRadius: '999px',
                transition: 'width 0.1s linear',
                boxShadow: '0 0 12px rgba(197, 131, 78, 0.75)',
              }}
            />
          </div>

          {/* Numerical Counter & Status */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.65)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            <span>{statusText}</span>
            <span style={{ fontWeight: 700, color: '#e2aa78', fontFamily: 'monospace', fontSize: '12px' }}>
              {progress}%
            </span>
          </div>
        </div>

        {/* Sub-badge: Kerala Timber Heritage */}
        <div
          style={{
            marginTop: 'clamp(16px, 3vw, 24px)',
            fontSize: '10.5px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.4)',
            fontWeight: 600,
          }}
        >
          100% Solid Seasoned Nilambur Teak • 5 Kollam Showrooms
        </div>
      </div>
    </div>
  );
};
