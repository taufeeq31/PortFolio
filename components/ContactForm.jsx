'use client';

import React, { useState } from 'react';
import { User, Mail, MoveRight } from 'lucide-react';
import Link from 'next/link';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        agree: false,
    });

    // Add status state for handling the form submission UI
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    const MAX_CHARS = 300;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'message' && value.length > MAX_CHARS) return;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // The new Web3Forms submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure they agreed to the privacy policy before sending
        if (!form.agree) return;

        setStatus('submitting');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    // ⚠️ PASTE YOUR WEB3FORMS ACCESS KEY HERE
                    access_key: 'c36d4ef5-4865-43e4-8225-3dab0af64184',
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });

            if (response.ok) {
                setStatus('success');
                // Clear the form after a successful send
                setForm({ name: '', email: '', message: '', agree: false });

                // Hide the success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className="w-full min-h-[calc(100vh-75px)] flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left Side Details */}
                <div className="flex flex-col gap-5">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 font-outfit">
                        Contact Me
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold font-outfit leading-tight tracking-tight text-neutral-900 dark:text-white">
                        Let's Get In Touch.
                    </h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-outfit">
                        Or just reach out manually to{' '}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=dev.taufeeq@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-900 dark:text-white underline underline-offset-4 font-medium hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                        >
                            dev.taufeeq@gmail.com
                        </a>
                        .
                    </p>
                </div>

                {/* Right Side Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5 shadow-sm">
                        <label
                            className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-outfit"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <div className="flex items-center border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 hover:border-neutral-500 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] focus-within:border-neutral-900 dark:focus-within:border-neutral-400 transition-colors">
                            <span className="pl-3 pr-2 text-neutral-400">
                                <User size={15} />
                            </span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name..."
                                className="flex-1 py-3 pr-3 text-sm bg-transparent outline-none placeholder:text-neutral-400 font-outfit text-neutral-900 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5 shadow-sm">
                        <label
                            className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-outfit"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <div className="flex items-center border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 hover:border-neutral-500 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] focus-within:border-neutral-900 dark:focus-within:border-neutral-400 transition-colors">
                            <span className="pl-3 pr-2 text-neutral-400">
                                <Mail size={15} />
                            </span>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email address..."
                                className="flex-1 py-3 pr-3 text-sm bg-transparent outline-none placeholder:text-neutral-400 font-outfit text-neutral-900 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 shadow-sm">
                        <label
                            className="text-xs font-medium text-neutral-700 dark:text-neutral-300 font-outfit"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <div className="relative border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 hover:border-neutral-500 hover:shadow-[-7px_7px_0px_#000] dark:hover:shadow-[-7px_7px_0px_#fff] focus-within:border-neutral-900 dark:focus-within:border-neutral-400 transition-colors">
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project or just say hey..."
                                rows={5}
                                className="w-full px-3 pt-3 pb-7 text-sm bg-transparent outline-none placeholder:text-neutral-400 resize-none font-outfit text-neutral-900 dark:text-white"
                            />
                            <span className="absolute bottom-2 left-3 text-xs text-neutral-400 font-outfit">
                                {form.message.length}/{MAX_CHARS}
                            </span>
                        </div>
                    </div>

                    {/* Privacy Policy */}
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="w-4 h-4 accent-neutral-900 cursor-pointer"
                        />
                        <span className="text-sm text-neutral-600 dark:text-neutral-300 font-outfit">
                            I hereby agree to our{' '}
                            <Link
                                href="/privacy"
                                className="text-neutral-900 underline underline-offset-4 font-medium hover:text-neutral-600 transition-colors
                                dark:text-white dark:hover:text-neutral-300"
                            >
                                Privacy Policy
                            </Link>{' '}
                            terms.
                        </span>
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!form.agree || status === 'submitting'}
                        className="group flex items-center justify-center gap-2 w-full py-3 px-6 bg-neutral-900 text-white text-sm font-medium font-outfit border border-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all
                        dark:bg-white dark:text-neutral-900 dark:border-white"
                    >
                        {status === 'submitting' ? 'Sending...' : 'Submit Form'}
                        {status !== 'submitting' && (
                            <MoveRight
                                size={16}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        )}
                    </button>

                    {/* Feedback Messages */}
                    {status === 'success' && (
                        <p className="text-sm text-green-600 font-medium font-outfit text-center">
                            Message sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-sm text-red-600 font-medium font-outfit text-center">
                            Something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
