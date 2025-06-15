import React, { useState } from "react";

type Experience = {
    year: string;
    title: string;
    company: string;
    description: string;
    details: string[];
};

const experiences: Experience[] = [
    {
        year: "2023",
        title: "Frontend Developer",
        company: "Tech Solutions",
        description: "Developed modern web applications using React and TypeScript.",
        details: [
            "Built reusable UI components",
            "Collaborated with backend team",
            "Implemented responsive design",
        ],
    },
    {
        year: "2021",
        title: "UI/UX Designer",
        company: "Creative Studio",
        description: "Designed user interfaces and improved user experience for mobile apps.",
        details: [
            "Conducted user research",
            "Created wireframes and prototypes",
            "Worked closely with developers",
        ],
    },
    {
        year: "2019",
        title: "Intern",
        company: "Startup Inc.",
        description: "Assisted in building MVPs and learned agile methodologies.",
        details: [
            "Participated in daily standups",
            "Tested new features",
            "Documented project progress",
        ],
    },
];

const ExperienceTimeline: React.FC = () => {
    const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

    const handleToggle = (idx: number) => {
        setExpandedIdx(expandedIdx === idx ? null : idx);
    };

    return (
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
                                <button
                                    className="w-full text-left focus:outline-none"
                                    onClick={() => handleToggle(idx)}
                                    aria-expanded={expandedIdx === idx}
                                    aria-controls={`exp-details-${idx}`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="font-bold text-lg">{exp.title}</div>
                                            <div className="text-blue-700 font-medium">{exp.company}</div>
                                            <div className="text-gray-700 text-base mt-1">{exp.description}</div>
                                        </div>
                                        <span className="ml-2 text-gray-500">
                                            {expandedIdx === idx ? "▲" : "▼"}
                                        </span>
                                    </div>
                                </button>
                                <div
                                    id={`exp-details-${idx}`}
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIdx === idx ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
                                    style={{
                                        transitionProperty: "max-height, opacity, margin-top",
                                    }}
                                >
                                    <ul className={`list-disc pl-5 text-gray-600 text-sm transition-opacity duration-700 ${expandedIdx === idx ? "opacity-100 delay-200" : "opacity-0 delay-0"}`}>
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                    <div className={`text-gray-400 text-sm mt-2 transition-opacity duration-700 ${expandedIdx === idx ? "opacity-100 delay-300" : "opacity-0 delay-0"}`}>
                                        {exp.year}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ExperienceTimeline;
