import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import StackIcon from 'tech-stack-icons';
import { notFound } from 'next/navigation';
import techs from '@/lib/techs';

export async function generateStaticParams() {
    const folder = path.join(process.cwd(), 'content', 'projects');
    if (!fs.existsSync(folder)) return [];
    const files = fs.readdirSync(folder);
    return files
        .filter((f) => f.endsWith('.json'))
        .map((f) => ({ slug: f.replace('.json', '') }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.json`);
    if (!fs.existsSync(filePath)) return {};
    const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [{ url: project.image }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: project.image ? [project.image] : [],
        },
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'content', 'projects', `${slug}.json`);
    if (!fs.existsSync(filePath)) notFound();

    const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const techMeta = Object.fromEntries(techs.map((t) => [t.name, t]));

    const formatDate = (dateStr) => {
        if (!dateStr) return null;
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
        });
    };

    const startLabel = formatDate(project.startDate);
    const endLabel = project.endDate ? formatDate(project.endDate) : 'Present';

    return (
        <main className="mx-auto max-w-4xl px-8 py-8  mb-20 bg-white rounded-2xl border border-neutral-200 dark:border-neutral-700 mt-20 shadow-md">
            {/* Back */}
            <Link
                href="/projects"
                className="text-sm text-neutral-500 hover:text-black dark:hover:text-white mb-10 inline-flex items-center gap-1.5 transition-colors"
            >
                ← Back to Projects
            </Link>

            {/* Header */}
            <div className="mt-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                        className={`px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full ${
                            project.status === 'active'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
                        }`}
                    >
                        {project.status === 'active' ? 'Active' : 'Completed'}
                    </span>
                    {startLabel && (
                        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                            {startLabel} — {endLabel}
                        </span>
                    )}
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                    {project.title}
                </h1>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8 leading-relaxed">
                    {project.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-semibold hover:opacity-80 transition-opacity"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Live Preview
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>

            {/* Cover Image */}
            {project.image && (
                <div className="relative w-full h-64 sm:h-96 overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-16">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 mb-16" />

            {/* The Idea */}
            {project.idea && (
                <section className="mb-16">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                        The Idea
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-5">
                        Why this was built
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base max-w-3xl">
                        {project.idea}
                    </p>
                </section>
            )}

            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 mb-16" />

            {/* Timeline */}
            {project.timeline && project.timeline.length > 0 && (
                <section className="mb-16">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                        Journey
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-10">
                        Development Timeline
                    </h2>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-4.5 top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-700" />
                        <div className="space-y-10">
                            {project.timeline.map((item, index) => (
                                <div key={index} className="relative flex gap-8 pl-12">
                                    {/* Dot */}
                                    <div className="absolute left-0 top-0.5 w-9 h-9 flex items-center justify-center">
                                        <div className="w-3.5 h-3.5 rounded-full bg-neutral-900 dark:bg-white border-2 border-white dark:border-neutral-950 ring-2 ring-neutral-300 dark:ring-neutral-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                                            {item.date}
                                        </span>
                                        <h3 className="text-base font-bold text-neutral-900 dark:text-white mt-1 mb-1.5">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 mb-16" />

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
                <section>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                        Built With
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                        Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech) => (
                            <div
                                key={tech}
                                className="flex flex-col items-center gap-2 p-4 border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-24 hover:shadow-[-3px_3px_0px_#000] dark:hover:shadow-[-3px_3px_0px_#fff] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <StackIcon
                                    name={tech}
                                    className={`w-10 h-10 transition-[filter]${
                                        techMeta[tech]?.darkInvert ? ' dark:invert' : ''
                                    }`}
                                />
                                <span className="text-xs text-neutral-600 dark:text-neutral-400 text-center font-medium">
                                    {techMeta[tech]?.label || tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
