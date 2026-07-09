import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  published: boolean;
  content: string;
  readTime: number;
};

export type PostMeta = Omit<Post, 'content'>;

function parsePost(fileName: string): Post | null {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  if (data.published === false) return null;
  if (!data.title || !data.date) return null;

  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug,
    title: String(data.title),
    description: String(data.description ?? ''),
    date: String(data.date),
    tag: String(data.tag ?? 'Blog'),
    published: data.published !== false,
    content,
    readTime,
  };
}

function readPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map(parsePost)
    .filter((p): p is Post => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostSlugs(): string[] {
  return readPosts().map((post) => post.slug);
}

export function getAllPosts(): PostMeta[] {
  return readPosts().map(({ content, ...meta }) => meta);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  return parsePost(`${slug}.md`);
}

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
