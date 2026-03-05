import Script from 'next/script';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Mesh from '@/components/Mesh';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';

const playfairDisplay = Playfair_Display({
    variable: '--font-playfair-display',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
    variable: '--font-outfit',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Muhammad Taufeeq — Developer & Designer',
        template: '%s | Muhammad Taufeeq',
    },
    description:
        'Portfolio of Muhammad Taufeeq — full-stack developer and designer building clean, thoughtful web experiences.',
    openGraph: {
        type: 'website',
        url: siteUrl,
        title: 'Muhammad Taufeeq — Developer & Designer',
        description:
            'Portfolio of Muhammad Taufeeq — full-stack developer and designer building clean, thoughtful web experiences.',
        siteName: 'Muhammad Taufeeq',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Muhammad Taufeeq Portfolio' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Muhammad Taufeeq — Developer & Designer',
        description:
            'Portfolio of Muhammad Taufeeq — full-stack developer and designer building clean, thoughtful web experiences.',
        images: ['/og-image.png'],
    },
    robots: { index: true, follow: true },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Taufeeq',
    url: siteUrl,
    email: 'dev.taufeeq@gmail.com',
    sameAs: [
        'https://github.com/taufeeq31',
        'https://linkedin.com/in/taufeeq31',
        'https://instagram.com/_taufeeq31_',
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${outfit.variable} ${playfairDisplay.variable} flex flex-col min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300`}
            >
                <ThemeProvider>
                    <NavBar />
                    <Mesh />
                    <main className="flex-1 ">{children}</main>
                    <SpeedInsights />
                    <Script src="/oneko.js" strategy="lazyOnload" />
                    <Script
                        id="json-ld"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    />
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
