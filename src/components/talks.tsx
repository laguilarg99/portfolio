import React from "react";

type Talk = {
    title: string;
    event: string;
    location: string;
    date: string;
    description: string;
    image: string;
};

const talks: Talk[] = [
    {
        title: "De 0 a 1.0 — DevOps: Building for the Future",
        event: "Tech Talk at UTH",
        location: "Universidad Tecnológica de Honduras (UTH)",
        date: "2025",
        description:
            "Delivered a talk on DevOps fundamentals and practices to university students, covering topics from CI/CD pipelines and cloud-native development to real-world deployment strategies. The session aimed to inspire the next generation of engineers to embrace DevOps culture and modern software delivery.",
        image: "/uth-devops-talk.jpg",
    },
];

const Talks: React.FC = () => (
    <>
        <h2 className="text-2xl p-8 max-w-xl mx-auto font-bold mb-4">
            Talks & Expositions
        </h2>
        <div className="max-w-xl mx-auto space-y-8">
            {talks.map((talk, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                    <div className="relative w-full h-64 overflow-hidden">
                        <img
                            src={talk.image}
                            alt={talk.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded-full mb-2">
                                🎤 Speaker
                            </span>
                            <h3 className="text-white font-bold text-lg leading-tight drop-shadow">
                                {talk.title}
                            </h3>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 text-blue-700 font-medium text-sm mb-1">
                            <span>📍 {talk.location}</span>
                            <span className="text-gray-400">·</span>
                            <span>{talk.date}</span>
                        </div>
                        <p className="text-gray-700 text-base mt-2 text-justify">
                            {talk.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default Talks;
