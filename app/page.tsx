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

export default function HomePage() {
  return (
    <>
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
