import React from 'react';
import TypewriterText from './typewriter-text';

const AboutMe: React.FC = () => (
    <section className="p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-center mb-6">
            <span className="relative inline-block px-6 py-2 text-blue-700 font-mono font-semibold text-lg bg-blue-100 rounded-lg shadow">
            <span className="absolute left-0 top-0 w-full h-full bg-blue-200 rounded-lg blur-md opacity-60" aria-hidden="true"></span>
            <TypewriterText
                text="Specialist Software Engineer at Vodafone · MSc in Software Development (UGR)"
            />
            </span>
        </div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base text-gray-700">
            Hello! I'm Luis Miguel, a passionate software developer with a love for building web applications.
            I enjoy learning new technologies and solving challenging problems. In my free time, I like to read,
            explore new places, and contribute to open source projects.
        </p>
    </section>
);

export default AboutMe;