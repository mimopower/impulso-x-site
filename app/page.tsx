import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { Differentials } from '@/components/differentials';
import { Cases } from '@/components/cases';
import { Founders } from '@/components/founders';
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
        <Process />
        <Differentials />
        <Cases />
        <Founders />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
