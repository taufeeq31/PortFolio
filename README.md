# Muhammad Taufeeq Portfolio

A personal portfolio built with Next.js App Router, featuring project case studies, markdown-based blogs, contact form integration, dark mode, and SEO-friendly metadata.

## Highlights

- Modern portfolio UI with animated interactions and responsive layout
- Project showcase driven by local JSON content files
- Blog system powered by Markdown + frontmatter
- Dynamic project and blog detail pages with static params generation
- Syntax-highlighted code blocks in blog posts
- Theme switching with `next-themes`
- SEO basics included:
    - route-level metadata
    - Open Graph / Twitter tags
    - `robots.txt` and `sitemap.xml`
    - JSON-LD person schema
- Vercel Analytics + Speed Insights integration

## Tech Stack

- Framework: Next.js 16 (App Router)o
- Language: JavaScript / JSX
- UI: Tailwind CSS v4, custom components, Framer Motion
- Content parsing: `gray-matter`, `react-markdown`, `rehype-raw`
- Code highlighting: `react-syntax-highlighter`
- Theming: `next-themes`
- Icons: `lucide-react`, `tech-stack-icons`

## Routes

- `/` - Home
- `/projects` - Project listing
- `/projects/[slug]` - Project detail page
- `/blog` - Blog listing
- `/blog/[slug]` - Blog detail page
- `/contact` - Contact page
- `/privacy` - Privacy policy

## Project Structure

```text
app/                 # Next.js routes and layouts
components/          # Reusable UI components
content/blogs/       # Markdown blog posts
content/projects/    # JSON project case studies
lib/                 # Utilities and tech metadata
public/              # Static assets
```

## THANKS FOR VISITING!
