import React from 'react';

type Project = {
    title: string;
    description: string;
    technologies: string[];
    link: string;
};

const projects: Project[] = [
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        technologies: ['React', 'TypeScript', 'CSS Modules'],
        link: 'https://your-portfolio.com',
    },
    {
        title: 'Task Manager App',
        description: 'A simple task manager to organize daily activities.',
        technologies: ['React', 'Redux', 'Material-UI'],
        link: 'https://github.com/yourusername/task-manager',
    },
    {
        title: 'Blog Platform',
        description: 'A blogging platform with markdown support and user authentication.',
        technologies: ['Next.js', 'Node.js', 'MongoDB'],
        link: 'https://github.com/yourusername/blog-platform',
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
