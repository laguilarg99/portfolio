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
        year: "Aug 2026 - Present",
        title: "Senior DevOps Engineer",
        company: "Knowmad Mood (Volkswagen account)",
        description: "Building ephemeral AWS E2E environments with AWS CDK and GitHub Actions, cutting monthly account costs by about 75%.",
        details: [
            "Migrated an E2E testing AWS account to ephemeral environments, reducing cost from about €4,000 to €1,000 per month",
            "Defined infrastructure in AWS CDK (Kotlin), running about 120 ECS tasks across 50 services",
            "Automated environment creation and teardown with GitHub Actions for about 25 developers and 75 E2E runs per day",
            "Created and configured IAM roles for the AWS account",
            "Migrating service dashboards and alerts from New Relic to Grafana",
        ]
    },
    {
        year: "Sep 2025 - Aug 2026",
        title: "DevOps Engineer Expert",
        company: "T-Systems",
        description: "Operated AWS EKS infrastructure and CI/CD for event-driven Go microservices, contributing to Kubernetes platform tooling and SRE observability.",
        details: [
            "Automated GitLab CI pipelines and optimized test frameworks for Go microservices",
            "Maintained unit, integration, and E2E test suites gating every release",
            "Managed AWS EKS infrastructure with Kubernetes, Helm, and Terraform",
            "Contributed features to a custom Go Kubernetes operator managing state and dependencies for IoT applications",
            "Worked with Prometheus Operator and cert-manager on EKS",
            "Built Grafana dashboards and alerting for SRE practices",
        ]
    },
    {
        year: "Mar 2023 - Sep 2025",
        title: "Specialist Software Engineer",
        company: "Vodafone Innovation Hub",
        description: "Built CI/CD pipelines and QA automation, operated Kubernetes workloads, and improved monitoring across cloud and on-premise environments.",
        details: [
            "Designed and implemented Jenkins (Groovy) CI/CD pipelines for AWS and on-premise environments",
            "Built custom QA tooling in Go and Selenium to automate manual testing",
            "Ran containerised workloads on Kubernetes (EKS) with Helm",
            "Integrated monitoring, logging, and alerting across infrastructure and application layers",
            "Tuned performance and troubleshot infrastructure and application issues",
        ]
    },
    {
        year: "May 2021 - Mar 2023",
        title: "Software Engineer",
        company: "ELCA Spain",
        description: "Delivered Java backend APIs and DevOps work, including breaking apart a monolith and migrating a service to AWS.",
        details: [
            "Delivered Java backend APIs with Spring Boot and Maven, and supported Angular, JSP, and DevOps work",
            "Split a monolith into services and migrated one service to AWS using Terraform and Docker",
            "Automated workflows with Bash and MySQL; worked with DynamoDB, ActiveMQ, and Elasticsearch",
            "Monitored performance with CloudWatch and diagnosed memory issues with Eclipse MAT",
            "Mentored junior engineers, led code reviews, and supported Agile/Scrum practices",
            "Promoted from Associate to senior engineer",
        ]
    },
    {
        year: "Jul 2020 - Oct 2020",
        title: "System Administrator (Internship)",
        company: "Albolote Town Hall",
        description: "Managed Windows systems and supported IT operations in a municipal environment, gaining hands-on experience in system maintenance, network administration, and technical support.",
        details: [
            "Maintained Windows desktop systems and legacy Windows Server 98 environments",
            "Handled routine maintenance, basic network administration, and end-user support",
            "Documented technical procedures to improve system reliability",
        ]
    },
    {
        year: "2018 - 2019",
        title: "Web Developer and Co-founder",
        company: "Reddelsur, University of Granada",
        description: "Co-founded a student initiative building low-cost websites for local businesses in Granada.",
        details: [
            "Built responsive sites with HTML, CSS, Bootstrap, and WordPress",
            "Deployed sites on a LAMP stack and used GitHub for version control",
            "Worked directly with clients on requirements and delivery",
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
                                            <div className="text-blue-700 font-medium">{exp.company} ({exp.year})</div>
                                            <div className="text-gray-700 text-base mt-1">{exp.description}</div>
                                        </div>
                                        <span className="ml-2 text-gray-500">
                                            {expandedIdx === idx ? "▲" : "▼"}
                                        </span>
                                    </div>
                                </button>
                                <div
                                    id={`exp-details-${idx}`}
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIdx === idx ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
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
