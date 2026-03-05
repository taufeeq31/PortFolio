import fs from 'fs';
import path from 'path';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap() {
    const blogsFolder = path.join(process.cwd(), 'content', 'blogs');
    const blogs = fs
        .readdirSync(blogsFolder)
        .filter((f) => f.endsWith('.md'))
        .map((f) => ({
            url: `${siteUrl}/blog/${f.replace('.md', '')}`,
            lastModified: new Date(),
        }));

    const projectsFolder = path.join(process.cwd(), 'content', 'projects');
    const projects = fs
        .readdirSync(projectsFolder)
        .filter((f) => f.endsWith('.json'))
        .map((f) => ({
            url: `${siteUrl}/projects/${f.replace('.json', '')}`,
            lastModified: new Date(),
        }));

    return [
        { url: siteUrl, lastModified: new Date() },
        { url: `${siteUrl}/blog`, lastModified: new Date() },
        { url: `${siteUrl}/projects`, lastModified: new Date() },
        { url: `${siteUrl}/contact`, lastModified: new Date() },
        ...blogs,
        ...projects,
    ];
}
