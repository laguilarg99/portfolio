"use client";
import React from "react";

const sections = [
    { id: "About", icon: "/about.png", label: "About" },
    { id: "Experience", icon: "/experience.png", label: "Experience" },
    { id: "Projects", icon: "/projects.png", label: "Projects" },
    { id: "Contact", icon: "/contact.png", label: "Contact" },
];

const FloatingSidebar: React.FC = () => {
    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        id: string
    ) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <aside className="fixed top-1/2 left-2 -translate-y-1/2 bg-white shadow-2xl shadow-black/30 p-4 rounded-full z-[1000] border border-gray-200">
            <nav>
                <ul className="list-none m-0 p-0 flex flex-col gap-4">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                aria-label={section.label}
                                className="text-xl"
                                onClick={(e) => handleClick(e, section.id)}
                            >
                                <img
                                    src={section.icon}
                                    alt={section.label}
                                    className="w-6 h-6"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default FloatingSidebar;
