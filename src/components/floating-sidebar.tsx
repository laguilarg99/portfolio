import React from "react";

const FloatingSidebar: React.FC = () => {
    return (
        <aside className="fixed top-1/2 left-2 -translate-y-1/2 bg-white shadow-2xl shadow-black/30 p-4 rounded-full z-[1000] border border-gray-200">
            <nav>
                <ul className="list-none m-0 p-0 flex flex-col gap-4">
                    <li>
                        <a href="#About" aria-label="About" className="text-xl">
                            <img src="/about.png" alt="About" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#Experience" aria-label="Experience" className="text-xl">
                            <img src="/experience.png" alt="Experience" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#Projects" aria-label="Projects" className="text-xl">
                            <img src="/projects.png" alt="Projects" className="w-6 h-6" />
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" aria-label="Contact" className="text-xl">
                            <img src="/contact.png" alt="Contact" className="w-6 h-6" />
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default FloatingSidebar;