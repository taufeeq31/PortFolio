import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-8 px-6">
            <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    © 2026 Taufeeq. All rights reserved.
                </p>
                <div className="flex items-center gap-5">
                    <a
                        href="https://github.com/taufeeq31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/taufeeq31"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href="https://instagram.com/_taufeeq31_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Twitter size={18} />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.taufeeq@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
