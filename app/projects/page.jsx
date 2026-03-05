import fs from 'fs';
import path from 'path';
import ProjectCard from '@/components/ProjectCard';

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const getProjectDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months =
        (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let duration = '';
    if (years > 0) {
        duration += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (remainingMonths > 0) {
        if (duration) duration += ' ';
        duration += `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
    }
    return duration || 'Less than a month';
};

export const metadata = {
    title: 'Projects',
    description: "A collection of things I've built — from experiments to production apps.",
};

export default async function page() {
    const folder = path.join(process.cwd(), 'content', 'projects');
    const files = fs.readdirSync(folder).filter((f) => f.endsWith('.json'));
    const projects = files.map((file) => {
        const slug = file.replace('.json', '');
        const data = JSON.parse(fs.readFileSync(path.join(folder, file), 'utf8'));
        return { slug, ...data };
    });

    return (
        <div className="min-h-screen">
            <main className="relative mx-auto max-w-6xl px-6 sm:px-10 py-20">
                {/* Header */}
                <div className="mb-14">
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                        Work
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Projects
                    </h1>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-xl">
                        A collection of things I've built — from experiments to production apps.
                    </p>
                    <div className="mt-6 h-px w-full bg-neutral-200 dark:bg-neutral-700" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            techStack={project.techStack}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
