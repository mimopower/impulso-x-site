import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog | Impulso X — IA aplicada a PMEs',
  description:
    'Casos práticos, guias por dor e bastidores de como PMEs usam IA no atendimento, na operação e nos dados — sem jargão.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen bg-ink pb-20 pt-32">
        <div className="container-x">
          <header className="max-w-3xl">
            <p className="section-kicker">Blog</p>
            <h1 className="mt-6 font-display text-display font-bold text-cream text-balance">
              IA aplicada a PMEs, sem jargão
            </h1>
            <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
              Casos práticos, guias por dor e bastidores da nossa própria operação. Tudo que
              publicamos fecha no mesmo lugar: descobrir o gargalo antes de escolher ferramenta.
            </p>
          </header>

          <div className="mt-14 border-t border-cream/12">
            {posts.map((post) => (
              <article key={post.slug} className="group relative border-b border-cream/12">
                <Link
                  href={`/blog/${post.slug}`}
                  className="grid gap-3 py-9 transition-colors md:grid-cols-[160px_1fr] md:gap-10 md:py-11"
                >
                  <div className="flex flex-row items-center gap-3 md:flex-col md:items-start">
                    <span className="inline-flex w-fit rounded-full border border-gold/40 px-3 py-1 font-display text-xs font-semibold tracking-[0.08em] text-gold">
                      {post.tag}
                    </span>
                    <time dateTime={post.date} className="font-sans text-sm text-steel/80">
                      {formatDate(post.date)}
                    </time>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-cream transition-colors group-hover:text-gold md:text-3xl text-balance">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-prose font-sans text-base leading-[1.6] text-steel text-pretty">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-semibold text-gold">
                      Ler artigo <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
