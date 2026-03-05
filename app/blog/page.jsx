import BlogItem from '@/components/BlogItems';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getBlogMetadata() {
    const folder = path.join(process.cwd(), 'content', 'blogs');
    const files = fs.readdirSync(folder);

    return files
        .filter((file) => file.endsWith('.md'))
        .map((filename) => {
            const fileContents = fs.readFileSync(path.join(folder, filename), 'utf8');
            const { data } = matter(fileContents);
            return {
                title: data.title,
                description: data.description,
                category: data.category,
                image: data.image,
                slug: filename.replace('.md', ''),
            };
        });
}

export const metadata = {
    title: 'Blog',
    description:
        "A collection of things I've learnt and built — web development, programming, and random thoughts.",
};

export default function BlogListPage() {
    const blogPosts = getBlogMetadata();

    return (
        <div className="min-h-screen">
            <main className="relative mx-auto max-w-6xl my-10 px-6 sm:px-10 p-10 bg-white dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-700">
                <div className="mb-14 ">
                    {/* <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-3">
                        Blogs
                    </p> */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Blogs
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
                        A collection of things I've learnt and built. I write about web development,
                        programming, and sometimes random thoughts.
                    </p>
                    <div className="mt-6 h-px w-full bg-neutral-200 dark:bg-neutral-700" />
                </div>
                <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
                    {blogPosts.length === 0 ? (
                        <p className="text-neutral-500">No posts yet. Check back soon!</p>
                    ) : (
                        blogPosts.map((post) => (
                            <BlogItem
                                key={post.slug}
                                title={post.title}
                                description={post.description}
                                category={post.category}
                                image={post.image}
                                slug={post.slug}
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
