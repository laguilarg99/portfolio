import React from "react";
import TypewriterText from "./typewriter-text";

const skillGroups = [
    {
        title: "Cloud & infrastructure",
        skills: ["AWS", "ECS", "EKS", "Kubernetes", "Terraform", "AWS CDK", "Helm", "Docker"],
    },
    {
        title: "CI/CD & GitOps",
        skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "GitOps"],
    },
    {
        title: "Observability",
        skills: ["Grafana", "Prometheus", "CloudWatch", "New Relic", "Centralised logging"],
    },
    {
        title: "Languages & data",
        skills: ["Go", "Kotlin", "Java", "Python", "Bash", "Kafka", "Redpanda", "MySQL", "DynamoDB", "Elasticsearch"],
    },
];

const AboutMe: React.FC = () => (
    <section className="p-8 max-w-xl mx-auto">
        <div className="flex items-center justify-center mb-6">
            <span className="relative inline-block px-6 py-2 text-blue-700 font-mono font-semibold text-lg bg-blue-100 rounded-lg shadow">
                <span className="absolute left-0 top-0 w-full h-full bg-blue-200 rounded-lg blur-md opacity-60" aria-hidden="true"></span>
                <TypewriterText text="CloudOps · DevOps · Platform Engineering" />
            </span>
        </div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-base text-gray-700">
            I&apos;m Luis Miguel, a cloud and platform engineer with 5+ years of experience
            running AWS workloads on ECS and Kubernetes. I build infrastructure as code,
            reliable CI/CD pipelines, and observability that help teams ship faster while
            keeping cloud costs under control. With a software engineering background in
            Java and Go, I&apos;ve also worked on event-driven systems and Kubernetes operators.
        </p>

        <h3 className="text-lg font-semibold mt-8 mb-3">Technical skills</h3>
        <div className="space-y-3">
            {skillGroups.map((group) => (
                <div key={group.title} className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3">
                    <h4 className="font-medium text-sm mb-2">{group.title}</h4>
                    <ul className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                            <li key={skill} className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-3">Education</h3>
        <ul className="space-y-2">
            <li className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3">
                <div className="font-medium text-sm">MSc Software Development</div>
                <div className="text-xs text-gray-500">University of Granada · 2022–2024 · 9.05/10</div>
            </li>
            <li className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3">
                <div className="font-medium text-sm">BSc Computer Science</div>
                <div className="text-xs text-gray-500">University of Granada · 2017–2021</div>
            </li>
        </ul>

        <h3 className="text-lg font-semibold mt-8 mb-3">Certifications</h3>
        <ul className="space-y-2">
            <li className="flex items-center gap-3 bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-3">
                <span className="text-purple-700 text-xl" aria-hidden="true">🏅</span>
                <div>
                    <div className="font-medium text-sm">HashiCorp Certified: Terraform Associate (004)</div>
                    <div className="text-xs text-gray-500">CKA training completed; exam not yet taken</div>
                </div>
            </li>
        </ul>
    </section>
);

export default AboutMe;
