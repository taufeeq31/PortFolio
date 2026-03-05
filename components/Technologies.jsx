import React from 'react';
import StackIcon from 'tech-stack-icons';
import techs from '@/lib/techs';

const Technologies = () => {
    return (
        <section className="w-full py-16 px-6">
            <div className="max-w-5xl mx-auto flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col gap-1">
                    <span className="inline-flex w-fit items-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 font-outfit">
                        Tech Stack
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-outfit tracking-tight text-neutral-900 dark:text-white">
                        Technologies I Work With
                    </h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-outfit">
                        Tools and languages I use day-to-day to build products.
                    </p>
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4 sm:p-6 shadow-sm">
                    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 gap-2 sm:gap-4">
                        {techs.map(({ name, label, darkInvert }) => (
                            <div
                                key={name}
                                className="group flex flex-col items-center gap-2 p-2 sm:p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-default"
                            >
                                <StackIcon
                                    name={name}
                                    className={`w-7 h-7 sm:w-9 sm:h-9 transition-[filter]${
                                        darkInvert ? ' dark:invert' : ''
                                    }`}
                                />
                                <span className="text-[9px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 font-outfit text-center leading-none group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-outfit text-right">
                    {techs.length} technologies
                </p>
            </div>
        </section>
    );
};

export default Technologies;
