'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const GitHubCalendar = dynamic(
    () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
    { ssr: false }
);

const GithubActivity = () => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="flex flex-col items-center justify-center w-full py-0 px-6">
            <h2 className="text-3xl font-playfair-display font-semibold mb-8 text-center">
                My GitHub Contributions
            </h2>

            <div className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900 shadow-sm overflow-x-auto max-w-full">
                {mounted && (
                    <GitHubCalendar
                        username="taufeeq31"
                        blockSize={14}
                        blockMargin={5}
                        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                        fontSize={14}
                    />
                )}
            </div>
        </div>
    );
};

export default GithubActivity;
