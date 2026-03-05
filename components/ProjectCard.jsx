import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StackIcon from 'tech-stack-icons';
import techs from '@/lib/techs';

const techMeta = Object.fromEntries(techs.map((t) => [t.name, t]));

const ProjectCard = ({ title, description, image, techStack = [], slug }) => {
    const card = (
        <div className="group flex flex-col justify-between overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] hover:-translate-y-1 transition-all duration-300 w-full h-full">
            {/* Photo Container */}
            <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="text-neutral-400 dark:text-neutral-500 font-medium">
                        Image Placeholder
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col grow p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 grow line-clamp-3">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Tech Stack
                    </h4>
                    <div className="flex flex-row gap-3 items-center">
                        {techStack.map((tech) => {
                            return (
                                <div
                                    key={tech}
                                    className="w-10 h-10 flex items-center justify-center"
                                >
                                    <StackIcon
                                        name={tech}
                                        className={`w-full h-full transition-[filter]${
                                            techMeta[tech]?.darkInvert ? ' dark:invert' : ''
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );

    return slug ? (
        <Link href={`/projects/${slug}`} className="block h-full">
            {card}
        </Link>
    ) : (
        card
    );
};

export default ProjectCard;
