import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
    title: `${post.title} | Impulso X`,
    description: post.description,
    openGraph: { title: post.title, description: post.description },
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
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-steel transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar ao blog
          </Link>

          <header className="mt-8 max-w-3xl">
            <span className="inline-flex rounded-full border border-gold/40 px-3 py-1 font-display text-xs font-semibold tracking-[0.08em] text-gold">
              {post.tag}
            </span>
            <h1 className="mt-6 font-display text-3xl font-bold leading-tight text-cream md:text-5xl text-balance">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-[1.55] text-steel text-pretty">
              {post.description}
            </p>
            <div className="mt-6 flex items-center gap-4 font-sans text-sm text-steel/80">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} min de leitura</span>
            </div>
          </header>

          <div className="prose-gold mt-10 max-w-3xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            <BlogCta />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
