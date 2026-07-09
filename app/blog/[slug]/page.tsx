import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getPostSlugs, formatDate } from '@/lib/blog';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { BlogCta } from '@/components/blog-cta';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main id="main-content" className="min-h-screen bg-ink pb-20">
        <article className="container-x pt-32">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-steel transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar para o blog
          </Link>

          <header className="mt-8 max-w-3xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-[1.55] text-steel text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-4 font-sans text-sm text-steel/80">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} min de leitura</span>
            </div>
          </header>

          <div className="prose-gold mt-10 max-w-3xl">
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            <BlogCta />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
