import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/blog';
import { SITE } from '@/lib/site';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artigos sobre IA para PMEs, atendimento inteligente, operação e dados.',
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen bg-ink pt-32 pb-20">
        <div className="container-x">
          <header className="max-w-3xl">
            <p className="section-kicker">Conteúdo</p>
            <h1 className="mt-6 font-display text-display font-bold text-cream text-balance">
              Blog
            </h1>
            <p className="mt-5 max-w-[56ch] text-lg leading-[1.55] text-steel text-pretty">
              Ideias práticas sobre IA para PMEs, atendimento inteligente, operação e dados.
            </p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-card border border-cream/12 bg-ink2/60 p-6 transition-colors duration-300 hover:border-cream/25 md:p-8"
              >
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
                  {post.category}
                </span>
                <h2 className="mt-4 flex-grow font-display text-xl font-bold leading-tight text-cream md:text-2xl">
                  <Link href={`/blog/${post.slug}/`} className="hover:text-gold focus-visible:text-gold">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 font-sans text-sm leading-[1.55] text-steel text-pretty line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4">
                  <span className="font-sans text-xs text-steel/80">{formatDate(post.date)}</span>
                  <span className="font-sans text-xs text-steel/80">{post.readTime} min de leitura</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
