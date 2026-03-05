import React from 'react';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | Taufeeq',
    description: "Privacy policy for Muhammad Taufeeq's portfolio website.",
};

const PrivacyPolicy = () => {
    return (
        <div className="w-full min-h-[calc(100vh-75px)] px-6 py-16 font-outfit text-neutral-600 dark:text-neutral-300 flex items-start justify-center">
            <main className="w-full max-w-3xl">
                <div className="flex flex-col gap-4">
                    {/* Header Card */}
                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 shadow-sm">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-2 transition-colors w-fit"
                        >
                            <MoveLeft size={14} /> Back to Home
                        </Link>
                        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-neutral-400 dark:text-neutral-500">
                            Effective Date: March 1, 2026
                        </p>
                    </div>

                    {/* Section Cards */}
                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            1. Information I Collect
                        </h2>
                        <p className="text-sm">
                            This website is primarily a static portfolio. The only personal
                            information I collect is what you voluntarily provide through the
                            contact form, which includes:
                        </p>
                        <ul className="list-disc list-inside mt-1 space-y-1 ml-1 text-sm">
                            <li>Your Name</li>
                            <li>Your Email Address</li>
                            <li>Any information you choose to include in your message</li>
                        </ul>
                    </div>

                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            2. How I Use Your Information
                        </h2>
                        <p className="text-sm">
                            I use the information you provide solely to read and respond to your
                            inquiries.{' '}
                            <strong className="text-neutral-800 dark:text-neutral-200">
                                I do not sell, rent, or share your personal information with third
                                parties for marketing purposes.
                            </strong>
                        </p>
                    </div>

                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            3. Third-Party Services
                        </h2>
                        <p className="text-sm">
                            The contact form on this website uses{' '}
                            <strong className="text-neutral-800 dark:text-neutral-200">
                                Web3Forms
                            </strong>{' '}
                            to route your message to my personal email inbox. When you submit a
                            form, your data is securely processed by Web3Forms in accordance with
                            their own privacy policies before reaching me.
                        </p>
                    </div>

                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            4. Cookies and Tracking
                        </h2>
                        <p className="text-sm">
                            This website does not use intrusive tracking cookies, advertising
                            pixels, or invasive analytics. I respect your privacy and prefer to keep
                            my portfolio fast and tracker-free.
                        </p>
                    </div>

                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            5. Data Retention & Your Rights
                        </h2>
                        <p className="text-sm">
                            I retain your emails in my personal inbox only as long as necessary to
                            communicate with you. If you would like me to delete any previous
                            correspondence we've had, simply reach out and let me know, and I will
                            permanently delete your emails.
                        </p>
                    </div>

                    <div className="border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 flex flex-col gap-2 leading-relaxed shadow-sm">
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">
                            6. Contact Me
                        </h2>
                        <p className="text-sm">
                            If you have any questions or concerns about this privacy policy, please
                            feel free to reach out to me directly at:
                        </p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.taufeeq@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-neutral-900 dark:text-white underline underline-offset-4 font-medium hover:text-neutral-500 transition-colors w-fit"
                        >
                            dev.taufeeq@gmail.com
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PrivacyPolicy;
