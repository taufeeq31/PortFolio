'use client';
import { motion } from 'framer-motion';
import { useState } from 'react'; // 1. Import useState

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Speed of typing
        },
    },
};

const childVariants = {
    hidden: { display: 'none' },
    visible: {
        display: 'inline-block',
        transition: { duration: 0 },
    },
};

const TypewriterText = ({ text }) => {
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    const characters = Array.from(text);

    return (
        <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex flex-wrap items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            // 3. Set state to true when the container's animation finishes
            onAnimationComplete={() => setIsTypingComplete(true)}
        >
            {characters.map((char, index) => (
                <motion.span key={index} variants={childVariants}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}

            {/* 4. Conditionally render the cursor based on the state */}
            {!isTypingComplete && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.8,
                    }}
                    className="inline-block w-4 h-[1em] bg-black ml-1"
                />
            )}
        </motion.h1>
    );
};

export default TypewriterText;
