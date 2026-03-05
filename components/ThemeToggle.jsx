'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => setMounted(true), []);
    if (!mounted) return <div className="w-9 h-9" />;

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark mode"
            className="flex items-center justify-center w-9 h-9 border border-neutral-200 dark:border-neutral-700 hover:shadow-[-4px_4px_0px_#000] dark:hover:shadow-[-4px_4px_0px_#fff] transition-all text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-900"
        >
            {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}
