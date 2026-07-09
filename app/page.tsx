import Script from 'next/script';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { OfferSnapshot } from '@/components/offer-snapshot';
import { Problem } from '@/components/problem';
import { Operation } from '@/components/operation';
import { Services } from '@/components/services';
import { Differentials } from '@/components/differentials';
import { Founders } from '@/components/founders';
import { Cases } from '@/components/cases';
import { Clients } from '@/components/clients';
import { Process } from '@/components/process';
import { Governance } from '@/components/governance';
import { Faq } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { IntroReveal } from '@/components/intro-reveal';
import { INTRO_DESKTOP_TOTAL_MS, INTRO_MOBILE_TOTAL_MS } from '@/lib/intro-timeline';

const introGateScript = `(function(){
  var root=document.documentElement;
  var release=function(){
    root.removeAttribute('data-intro');
    var shell=document.getElementById('site-shell');
    if(shell) shell.inert=false;
  };
  try {
    var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var seen=sessionStorage.getItem('ix_intro_seen')==='1';
    var forced=new URLSearchParams(window.location.search).get('intro')==='1';
    if(forced){
      try { sessionStorage.removeItem('ix_intro_seen'); } catch(error) {}
    }
    if(!reduced&&(!seen||forced)){
      root.dataset.intro='play';
      window.setTimeout(function(){
        release();
        window.dispatchEvent(new Event('ix:intro-complete'));
      },window.matchMedia('(max-width: 767px)').matches?${INTRO_MOBILE_TOTAL_MS}:${INTRO_DESKTOP_TOTAL_MS});
    }
  } catch(error) {
    release();
  }
  window.addEventListener('pageshow',function(event){
    if(event.persisted) release();
  });
})();`;

export default function HomePage() {
  return (
    <>
      <Script id="ix-intro-gate" strategy="beforeInteractive">
        {introGateScript}
      </Script>
      <IntroReveal />
      <Nav />

      <main id="main-content">
        <Hero />
        <OfferSnapshot />
        <Problem />
        <Operation />
        <Services />
        <Governance />
        <Differentials />
        <Founders />
        <Cases />
        <Clients />
        <Process />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
