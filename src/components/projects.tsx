import React from 'react';

type Project = {
    title: string;
    description: string;
    technologies: string[];
    link: string;
};

const projects: Project[] = [
    {
        title: 'Real-time monitoring task scheduling service for IoT nodes.',
        description: 'RITA (Real-time IoT Tasks Administrator) is an application created to manage real time monitoring tasks within a pool of devices that are collecting data from a pool of sensors and sending that data to our app, which will enable the user to see it over time.',
        technologies: ['C', 'React', 'CSS', 'HTML', 'Docker', 'Java', 'MongoDB'],
        link: 'https://github.com/laguilarg99/RITA.git',
    },
    {
        title: 'Motor Adaptation System in Virtual Reality Environments',
        description: 'SAMRV (ES: Sistema de Adaptación motora en entorno de realidad virtual) In collaboration with IFMIF-DONES, the particle accelerator facility in Granada, this project tried to measure and evaluate the precision of eye-tracking sensors in the HTC VIVE PRO 2 VR headset.',
        technologies: ['C', 'Unity 3D'],
        link: 'https://github.com/laguilarg99/SAMRV.git',
    },
    {
        title: 'Occupancy Control and Mask Detection System',
        description: 'A project addressing two critical COVID-19 safety challenges: managing indoor occupancy and ensuring mask compliance when distancing isn’t feasible. Integrated into a single system, it provides effective health measure enforcement for any indoor public or private space.',
        technologies: ['Python', 'Numpy', 'Tensorflow'],
        link: 'https://github.com/laguilarg99/Sistema-de-control-de-aforos-y-deteccion-de-mascarillas-.git',
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio website to showcase my projects, skills, and experience. Built with modern web technologies, it features a responsive design and interactive UI to provide visitors with an overview of my work and background.',
        technologies: ['Next js', 'TypeScript', 'Tailwind CSS'],
        link: 'https://github.com/laguilarg99/portfolio.git',
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="border border-gray-200 rounded-lg p-6 m-2 shadow-md w-lg bg-white flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
                <li
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                >
                    {tech}
                </li>
            ))}
        </ul>
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center bg-white text-blue-600 border border-blue-600 px-4 py-2 w-50 rounded-full hover:bg-blue-50 transition"
        >
            <span className="flex-1">View Project</span>
            <span className="ml-2" aria-hidden="true">→</span>
        </a>
    </div>
);

const Projects: React.FC = () => (
    <>
    <h2 className="text-2xl p-8 max-w-xl mx-auto font-bold mb-4">Projects</h2>
    <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
    </div>
    </>
);

export default Projects;
