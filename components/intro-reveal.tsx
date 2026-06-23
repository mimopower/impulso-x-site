'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ASSETS } from '@/lib/assets';
import { LogoShine } from './ui/logo-shine';

const INTRO_COMPLETE_EVENT = 'ix:intro-complete';

export function useIntroReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      if (document.documentElement.dataset.intro !== 'play') setReady(true);
    };
    const complete = () => setReady(true);

    sync();
    window.addEventListener(INTRO_COMPLETE_EVENT, complete);
    window.addEventListener('pageshow', sync);

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, complete);
      window.removeEventListener('pageshow', sync);
    };
  }, []);

  return ready;
}

export function IntroReveal() {
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    const root = document.documentElement;
    const siteShell = document.getElementById('site-shell');
    if (siteShell) siteShell.inert = false;

    root.removeAttribute('data-intro');
    try {
      sessionStorage.setItem('ix_intro_seen', '1');
    } catch {
      // Storage can be unavailable in strict privacy modes. The site still opens.
    }

    window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
    setDone(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== 'play') {
      setDone(true);
      return;
    }

    const siteShell = document.getElementById('site-shell');
    if (siteShell) siteShell.inert = true;

    try {
      sessionStorage.setItem('ix_intro_seen', '1');
    } catch {
      // The animation may run without storage; its fallback still releases the page.
    }

    const fallbackMs = window.matchMedia('(max-width: 767px)').matches ? 1150 : 1450;
    const fallback = window.setTimeout(finish, fallbackMs);
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) finish();
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener('pageshow', handlePageShow);
      if (siteShell) siteShell.inert = false;
    };
  }, [finish]);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="intro-reveal"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget) finish();
      }}
    >
      <div className="intro-reveal__brand">
        <Image
          src={ASSETS.wordmark.src}
          alt=""
          width={ASSETS.wordmark.width}
          height={ASSETS.wordmark.height}
          priority
          sizes="(max-width: 767px) 180px, 300px"
          className="h-auto w-full"
        />
        <span className="intro-reveal__shine">
          <LogoShine variant="intro" />
        </span>
      </div>
    </div>
  );
}
