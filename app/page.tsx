import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Services } from '@/components/services';
import { Differentials } from '@/components/differentials';
import { Founders } from '@/components/founders';
import { Cases } from '@/components/cases';
import { Clients } from '@/components/clients';
import { Process } from '@/components/process';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Nav />

      <main id="main-content">
        <Hero />
        <Problem />
        <Services />
        <Differentials />
        <Founders />
        <Cases />
        <Clients />
        <Process />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
