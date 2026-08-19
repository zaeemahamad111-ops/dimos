import React, { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onOpenVideo?: () => void;
}

const TOTAL_FRAMES = 192;

export const Hero: React.FC<HeroProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  
  const [scrollProgress, setScrollProgress] = useState(0);

  // Helper to get formatted frame path (.webp)
  const getFramePath = (index: number) => {
    const padded = String(index + 1).padStart(3, '0');
    return `/frames/frame_${padded}.webp`;
  };

  // Draw specific frame onto canvas with seamless nearest-frame fallback
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    
    // If targeted frame is still loading, seamlessly fallback to nearest loaded frame
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate "cover" scale and centering
    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const drawX = (canvasWidth - drawWidth) / 2;
    const drawY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    currentFrameRef.current = frameIndex;
  };

  // Setup canvas resolution with DPR scaling
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    drawFrame(currentFrameRef.current);
  };

  // Progressive high-performance preloading
  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    // 1. Load First Frame with top priority and render immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    const onFirstLoad = () => {
      images[0] = firstImg;
      resizeCanvas();
      drawFrame(0);
    };

    if (firstImg.complete && firstImg.naturalWidth > 0) {
      onFirstLoad();
    } else {
      firstImg.onload = onFirstLoad;
    }
    images[0] = firstImg;

    // 2. Load all remaining frames progressively in background
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        if (currentFrameRef.current === i) {
          drawFrame(i);
        }
      };
      images[i] = img;
    }

    imagesRef.current = images;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Smooth scroll scrubbing loop with 60-120fps inertial interpolation
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let smoothProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const raw = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgress = raw;
    };

    const renderLoop = () => {
      const diff = targetProgress - smoothProgress;
      if (Math.abs(diff) > 0.0001) {
        smoothProgress += diff * 0.22;
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(smoothProgress * (TOTAL_FRAMES - 1)))
        );
        if (frameIndex !== currentFrameRef.current) {
          drawFrame(frameIndex);
        }
        setScrollProgress(smoothProgress);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(160vh, 200vh, 240vh)', // Responsive scroll depth
        margin: 0,
        padding: 0,
        backgroundColor: '#1c1b1a',
      }}
    >
      {/* 100vw Edge-to-Edge Sticky Fullscreen Viewport */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#1c1b1a',
        }}
      >
        {/* Full-Bleed Hardware Accelerated Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            filter: 'brightness(0.97) contrast(1.02)',
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        />

        {/* Clean Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(28, 27, 26, 0.4) 0%, rgba(28, 27, 26, 0.0) 40%, rgba(28, 27, 26, 0.65) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Left Bottom Statement in Professional Architectural Sans */}
        <div
          className="container"
          style={{
            position: 'absolute',
            bottom: 'clamp(28px, 6vh, 60px)',
            left: 0,
            right: 0,
            zIndex: 10,
            pointerEvents: 'none',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            opacity: Math.max(0.7, 1 - scrollProgress * 0.4),
            transform: `translateY(${(1 - scrollProgress) * -8}px)`,
            transition: 'transform 0.2s ease, opacity 0.2s ease',
          }}
        >
          <div style={{ maxWidth: '800px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(34px, 8.5vw, 116px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                textShadow: 'none',
                margin: 0,
              }}
            >
              Crafted for Generations
            </h1>
          </div>

          {/* Minimal Vertical Scroll Cue on the right */}
          <div
            className="d-none-mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              opacity: Math.max(0, 1 - scrollProgress * 3),
              transition: 'opacity 0.3s ease',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.75)',
                fontWeight: 600,
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: '1px',
                height: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.35)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  backgroundColor: '#ffffff',
                  animation: 'scrollCue 1.8s infinite ease-in-out',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
