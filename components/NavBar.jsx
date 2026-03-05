'use client';

import React, { useState } from 'react';
import { Menu, X, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur z-999">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                {/* Logo / Brand */}
                <Link href="/">
                    <div className="flex items-center gap-2 cursor-pointer ">
                        <span className="text-3xl font-outfit font-bold tracking-tight">{'<'}</span>
                        <span className="text-3xl font-outfit font-semibold tracking-tight ">
                            Developer
                        </span>
                        <span className="text-3xl font-outfit font-bold tracking-tight">
                            {'/>'}
                        </span>
                    </div>
                </Link>

                {/* Desktop links */}
                <div className="hidden items-center gap-4 text-sm font-medium sm:flex">
                    <Link
                        href="/projects"
                        className="p-2 flex border bg-white dark:bg-transparent border-neutral-200 dark:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300 transition-all duration-300"
                    >
                        Projects <MoveRight size={16} className="ml-1 mt-0.5" />
                    </Link>
                    <Link
                        href="/blog"
                        className="p-2 flex border bg-white dark:bg-transparent border-neutral-200 dark:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300 transition-all duration-300"
                    >
                        Blogs <MoveRight size={16} className="ml-1 mt-0.5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="p-2 flex border bg-white dark:bg-transparent border-neutral-200 dark:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300 transition-all duration-300"
                    >
                        Connect <MoveRight size={16} className="ml-1 mt-0.5" />
                    </Link>

                    <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center gap-2 sm:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:hidden"
                        aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 sm:hidden">
                    <div className="mx-auto flex max-w-5xl flex-col space-y-2 text-sm font-medium">
                        <a
                            href="/projects"
                            className="p-2 hover:border dark:hover:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Projects
                        </a>
                        <a
                            href="/blog"
                            className="p-2 hover:border dark:hover:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Blogs
                        </a>
                        <a
                            href="/contact"
                            className="p-2 hover:border dark:hover:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:text-neutral-600 dark:hover:text-neutral-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
