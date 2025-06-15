import React from "react";

type Experience = {
    year: string;
    title: string;
    company: string;
    description: string;
};

const experiences: Experience[] = [
    {
        year: "2023",
        title: "Frontend Developer",
        company: "Tech Solutions",
        description: "Developed modern web applications using React and TypeScript.",
    },
    {
        year: "2021",
        title: "UI/UX Designer",
        company: "Creative Studio",
        description: "Designed user interfaces and improved user experience for mobile apps.",
    },
    {
        year: "2019",
        title: "Intern",
        company: "Startup Inc.",
        description: "Assisted in building MVPs and learned agile methodologies.",
    },
];

const ExperienceTimeline: React.FC = () => (
    <>
    <h2 className="text-2xl p-8 max-w-xl mx-auto font-bold mb-4">Professional experience</h2>
    <div className="relative py-8 max-w-xl mx-auto">
        <div className="absolute left-7 top-0 bottom-0 w-1 bg-gray-200 rounded z-0" />
        <ul className="list-none m-0 p-0">
            {experiences.map((exp, idx) => (
                <li key={idx} className="relative mb-12">
                    <div
                        className="absolute left-4.5 top-10 w-6 h-6 bg-blue-700 rounded-full border-4 border-white shadow-[0_0_0_2px_#1976d2] z-10 flex items-center justify-center text-white font-bold text-base"
                        title={exp.year}
                    >
                        <span role="img" aria-label="gear">
                            ⚙️
                        </span>
                    </div>
                    <div className="ml-16 bg-white rounded-lg shadow-md p-6 relative z-20">
                        <div className="font-bold text-lg">{exp.title}</div>
                        <div className="text-blue-700 font-medium">{exp.company}</div>
                        <div className="text-gray-700 text-base mt-2">{exp.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{exp.year}</div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    </>
);

export default ExperienceTimeline;
