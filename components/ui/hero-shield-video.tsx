'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ASSETS } from '@/lib/assets';

type ShieldVariant = 'desktop' | 'mobile';

type NavigatorWithConnection = Navigator & {
  connection?: EventTarget & {
    saveData?: boolean;
  };
};

type HeroShieldVideoProps = {
  enabled: boolean;
};

export function HeroShieldVideo({ enabled }: HeroShieldVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [variant, setVariant] = useState<ShieldVariant | null>(null);
  const [canAnimate, setCanAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as NavigatorWithConnection).connection;

    const syncPlaybackProfile = () => {
      setVariant(desktopQuery.matches ? 'desktop' : 'mobile');
      setCanAnimate(!reducedQuery.matches && !connection?.saveData);
      setIsReady(false);
      setHasFailed(false);
    };

    syncPlaybackProfile();
    desktopQuery.addEventListener('change', syncPlaybackProfile);
    reducedQuery.addEventListener('change', syncPlaybackProfile);
    connection?.addEventListener('change', syncPlaybackProfile);

    return () => {
      desktopQuery.removeEventListener('change', syncPlaybackProfile);
      reducedQuery.removeEventListener('change', syncPlaybackProfile);
      connection?.removeEventListener('change', syncPlaybackProfile);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: '120px 0px', threshold: 0.05 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      const shouldPlay = enabled && isVisible && document.visibilityState === 'visible';

      if (!shouldPlay) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Poster remains visible when autoplay is unavailable (for example, Low Power Mode).
      });
    };

    syncPlayback();
    document.addEventListener('visibilitychange', syncPlayback);
    return () => document.removeEventListener('visibilitychange', syncPlayback);
  }, [enabled, isVisible, variant]);

  const activeAsset = variant ? ASSETS.markVideo[variant] : null;
  const shouldMountVideo = Boolean(enabled && canAnimate && activeAsset && !hasFailed);

  return (
    <div ref={containerRef} className="hero-shield-media" aria-hidden="true">
      <picture className="hero-shield-media__poster">
        <source media="(max-width: 767px)" srcSet={ASSETS.markVideo.mobile.poster} />
        <img
          src={ASSETS.markVideo.desktop.poster}
          alt=""
          width={ASSETS.markVideo.desktop.width}
          height={ASSETS.markVideo.desktop.height}
          decoding="async"
        />
      </picture>

      {shouldMountVideo && activeAsset ? (
        <video
          key={variant}
          ref={videoRef}
          className={`hero-shield-media__video${isReady ? ' is-ready' : ''}`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={activeAsset.poster}
          tabIndex={-1}
          disablePictureInPicture
          onCanPlay={() => setIsReady(true)}
          onError={() => setHasFailed(true)}
        >
          <source src={activeAsset.webm} type="video/webm" />
          <source src={activeAsset.mp4} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
