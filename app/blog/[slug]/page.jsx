import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

// 1. Import the new plugins and highlighter
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export async function generateStaticParams() {
    const folder = path.join(process.cwd(), 'content', 'blogs');
    const files = fs.readdirSync(folder);
    return files.filter((f) => f.endsWith('.md')).map((f) => ({ slug: f.replace('.md', '') }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
    const { data } = matter(fs.readFileSync(filePath, 'utf8'));
    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            type: 'article',
            publishedTime: data.date,
            images: data.image ? [{ url: data.image }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: data.title,
            description: data.description,
            images: data.image ? [data.image] : [],
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'content', 'blogs', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
        <main className="mx-auto max-w-3xl px-6 py-12 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm mt-10 mb-20">
            <Link
                href="/blog"
                className="text-sm text-neutral-500 hover:text-black dark:hover:text-white mb-8 inline-block"
            >
                ← Back to Blog
            </Link>

            {/* {data.category && (
                <span className="px-2 py-0.5 bg-black text-white text-xs font-medium">
                    {data.category}
                </span>
            )} */}

            <h1 className="text-4xl font-bold mt-4 mb-2 dark:text-white">{data.title}</h1>

            {data.date && (
                <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-8">
                    {new Date(data.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            )}

            <article className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                    // 2. Add rehypeRaw to allow standard HTML (like <video> tags)
                    rehypePlugins={[rehypeRaw]}
                    // 3. Override how code blocks are rendered
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            // Check if it's a language block (e.g., ```javascript)
                            const match = /language-(\w+)/.exec(className || '');

                            return !inline && match ? (
                                // Render large code blocks with SyntaxHighlighter
                                <SyntaxHighlighter
                                    style={vscDarkPlus}
                                    language={match[1]}
                                    PreTag="div"
                                    className="rounded-xl my-6! text-sm overflow-hidden"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                // Render inline code (e.g., `const x = 1`) with Tailwind
                                <code
                                    className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200 px-1.5 py-0.5 rounded-md font-mono text-sm before:content-none after:content-none"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </main>
    );
}
