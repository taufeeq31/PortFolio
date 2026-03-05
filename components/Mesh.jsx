import React from 'react';

const Mesh = () => {
    return (
        <div className="absolute inset-x-0 top-0 -z-10 h-[120vh] w-full bg-transparent">
            {/* Light mode grid */}
            <div
                className="absolute inset-0 dark:hidden"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    maskImage:
                        'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
                    WebkitMaskImage:
                        'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
                }}
            />
            {/* Dark mode grid */}
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                    maskImage:
                        'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
                    WebkitMaskImage:
                        'linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)',
                }}
            />
        </div>
    );
};

export default Mesh;
