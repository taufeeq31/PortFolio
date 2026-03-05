import React from 'react';
import { FileText, Download, MoveRight } from 'lucide-react';
import { GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material';

const socials = [
    {
        label: 'GitHub',
        handle: '@taufeeq',
        href: 'https://github.com/taufeeq31',
        icon: GitHub,
        description: 'Open-source projects & contributions',
    },
    {
        label: 'LinkedIn',
        handle: 'Muhammad Taufeeq',
        href: 'https://linkedin.com/in/taufeeq31',
        icon: LinkedIn,
        description: 'Professional network & experience',
    },
    {
        label: 'Instagram',
        handle: '@taufeeq',
        href: 'https://instagram.com/_taufeeq31_',
        icon: Instagram,
        description: 'Thoughts on dev & design',
    },
    {
        label: 'Email',
        handle: 'dev.taufeeq@gmail.com',
        href: 'https://mail.google.com/mail/?view=cm&fs=1&to=dev.taufeeq@gmail.com',
        icon: Mail,
        description: 'Direct inbox — fastest way to reach me',
    },
];

const Social = () => {
    return (
        <section className="w-full min-h-[calc(100vh-75px)] flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Resume Card */}
                <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-5 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                            <FileText
                                size={18}
                                className="text-neutral-700 dark:text-neutral-300"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 font-outfit">
                                Document
                            </p>
                            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white font-outfit">
                                My Resume
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-outfit leading-relaxed">
                            A full overview of my skills, experience, and projects — updated as of
                            March 2026.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 mt-auto">
                        <a
                            href="/resume.pdf"
                            download
                            className="group flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-neutral-900 text-white text-sm font-medium font-outfit border border-neutral-900 hover:shadow-[-5px_5px_0px_#000] transition-all dark:bg-white dark:text-neutral-900 dark:border-white"
                        >
                            <Download size={14} />
                            Download PDF
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium font-outfit border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-400 hover:shadow-[-5px_5px_0px_#000] dark:hover:shadow-[-5px_5px_0px_#fff] transition-all"
                        >
                            View Online
                            <MoveRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </div>
                </div>

                {/* Socials Card */}
                <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-4 shadow-sm">
                    <div>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-outfit mb-0.5">
                            Find me on
                        </p>
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white font-outfit">
                            Social Accounts
                        </h3>
                    </div>

                    <div className="flex flex-col gap-2">
                        {socials.map(({ label, handle, href, icon: Icon, description }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 p-3 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-400 hover:shadow-[-4px_4px_0px_#000] dark:hover:shadow-[-4px_4px_0px_#fff] transition-all"
                            >
                                <div className="flex items-center justify-center w-8 h-8 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 shrink-0 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                                    <Icon
                                        style={{ fontSize: '16px' }}
                                        className="text-neutral-600 group-hover:text-white transition-colors"
                                    />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs font-semibold text-neutral-900 dark:text-white font-outfit">
                                        {label}
                                    </span>
                                    <span className="text-xs text-neutral-400 font-outfit truncate">
                                        {description}
                                    </span>
                                </div>
                                <MoveRight
                                    size={14}
                                    className="ml-auto text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all shrink-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Social;
