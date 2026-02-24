import React from 'react';
import TypewriterText from './typewriter-text';

const AboutMe: React.FC = () => (
    <section className="p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-center mb-6">
            <span className="relative inline-block px-6 py-2 text-blue-700 font-mono font-semibold text-lg bg-blue-100 rounded-lg shadow">
            <span className="absolute left-0 top-0 w-full h-full bg-blue-200 rounded-lg blur-md opacity-60" aria-hidden="true"></span>
            <TypewriterText
                text="DevOps Engineer Expert at T-Systems · MSc in Software Development (UGR)"
            />
            </span>
        </div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base text-gray-700 text-justify">
            Hello! I'm Luis Miguel, a Senior Software Engineer with 4+ years of experience
            in backend development and DevOps, specializing in CI/CD automation, cloud-native
            architectures, and event-driven systems. I have a proven track record designing
            scalable pipelines, improving system reliability, and supporting high-throughput
            distributed services in AWS and Kubernetes environments. I am always willing to
            learn new things, individually and as a team, and I consider that my abilities to
            do so are quite good, thanks to my strong will and perseverance in those projects
            that I know will make me improve as an engineer.
        </p>
    </section>
);

export default AboutMe;