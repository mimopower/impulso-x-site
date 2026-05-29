import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Services } from '@/components/services';
import { Differentials } from '@/components/differentials';
import { Founders } from '@/components/founders';
import { Cases } from '@/components/cases';
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
        <Process />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
