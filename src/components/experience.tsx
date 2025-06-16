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
        year: "2023 - now",
        title: "Specialist Software Engineer",
        company: "Vodafone",
        description: "Specialist Software Engineer focused on DevOps and backend development, building CI/CD pipelines, custom monitoring tools, and deploying scalable applications across cloud and on-premise environments.",
        details:[
            "Design and implementation of CI/CD pipelines",
            "Development and maintenance of Jenkins pipelines using Groovy",
            "Custom tool development using Go and Selenium",
            "Creation of Helm charts for Kubernetes deployments",
            "Deployment of services to AWS using Kubernetes (EKS)",
            "Integration of monitoring and logging tools",
            "Development of custom observability logic",
            "Integration with alerting systems",
            "Collaboration with development, QA, and infrastructure teams",
            "Support and modernization of on-premise applications",
            "Performance tuning and system optimization",
            "Troubleshooting across infrastructure and application layers",
        ]
    },
    {
        year: "2021-2023",
        title: "Java Backend Engineer",
        company: "ELCA Spain",
        description: "Progressed from Associate Engineer to a leadership role, delivering full-stack solutions and infrastructure migrations while mentoring team members. Worked across backend, frontend, and DevOps tasks in an Agile/Scrum environment, enhancing both technical execution and team collaboration.",
        details: [
            "Developed API services using Maven and Spring Boot",
            "Implemented frontend features with Angular and JSP",
            "Led migration of applications to AWS using Terraform",
            "Containerized applications using Docker",
            "Wrote automation scripts with MySQL and Bash",
            "Mentored junior engineers and new team members",
            "Performed code reviews to maintain quality standards",
            "Participated in sprint planning and release management",
            "Contributed to task estimation and workload distribution",
            "Worked with Java 8+, SQL, DynamoDB, and Spring ecosystem",
            "Used ActiveMQ for messaging and Elasticsearch for search/logs",
            "Monitored systems with AWS CloudWatch",
            "Used Eclipse Memory Analyzer (MAT) for performance tuning",
            "Utilized tools like Bitbucket and Jira in Agile workflows",
        ]
    },
    {
        year: "july 2020 - october 2020",
        title: "System Administrator - Intern",
        company: "Albolote's townhall",
        description: "Managed Windows systems and supported IT operations in a municipal environment, gaining hands-on experience in system maintenance, network administration, and technical support.",
        details: [
            "Managed Windows desktop systems and Windows Server 98 environments",
            "Performed routine system maintenance and troubleshooting",
            "Assisted with network administration tasks",
            "Provided IT support to municipal staff",
            "Documented technical procedures and configurations",
        ]
    },
    {
        year: "2018 - 2019",
        title: "Web developer - Student-Led Web Development Initiative",
        company: "Reddelsur",
        description: "Co-founded a student-run company to design and build affordable web applications for small businesses in Granada, gaining practical experience while learning modern web development tools and workflows.",
        details: [
            "Co-founded and managed a student-led web development company",
            "Designed and developed websites using HTML, CSS, and Bootstrap",
            "Built and customized sites with WordPress",
            "Collaborated using GitHub for version control",
            "Deployed web applications on LAMP stack (Linux, Apache, MySQL, PHP)",
            "Worked directly with clients to gather requirements and deliver solutions",
            "Balanced hands-on learning with delivering real-world projects",
        ]
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
                                            <div className="text-blue-700 font-medium">{exp.company} - {exp.year}</div>
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
