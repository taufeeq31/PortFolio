import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const BlogItem = ({ title, description, category, image, slug }) => {
    return (
        <Link href={`/blog/${slug}`}>
            <div className="max-w-[330px] sm:max-w-[300px] bg-white dark:bg-neutral-900 border border-black dark:border-neutral-700 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] transition-all duration-300">
                <Image
                    src={image}
                    alt=""
                    width={400}
                    height={400}
                    className="border-b border-black dark:border-neutral-700"
                />
                <p className="ml-5 mt-5 px-1 inline-block bg-black dark:bg-white text-white dark:text-neutral-900 text-sm">
                    {category}
                </p>
                <div className="p-5">
                    <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="mb-3 text-sm tracking-tight text-gray-700 dark:text-neutral-400">
                        {description}
                    </p>
                    <div className="inline-flex items-center py-2 font-semibold text-center">
                        Read more
                        <MoveRight className="ml-2" size={12} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogItem;
