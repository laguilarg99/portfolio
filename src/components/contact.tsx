import React from "react";

const contacts = [
    {
        href: "www.linkedin.com/in/luis-miguel-aguilar-gonzález-219b6b194",
        label: "LinkedIn",
        icon: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="8" fill="#fff"/>
                <path d="M14 19h5v15h-5V19zm2.5-7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm7.5 7h4.8v2.1h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V34h-5v-7c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.7V34h-5V19z" fill="#0A66C2"/>
            </svg>
        ),
    },
    {
        href: "https://github.com/laguilarg99",
        label: "GitHub",
        icon: (
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="8" fill="#fff"/>
                <path d="M24 8C14.1 8 6 16.1 6 26c0 7.1 4.6 13.1 11 15.2.8.1 1-.3 1-.7v-2.7c-4.5 1-5.5-2.2-5.5-2.2-.7-1.8-1.7-2.3-1.7-2.3-1.4-1 .1-1 .1-1 1.5.1 2.3 1.6 2.3 1.6 1.4 2.3 3.7 1.7 4.6 1.3.1-1 .5-1.7.9-2.1-3.6-.4-7.4-1.8-7.4-8 0-1.8.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.1 0 0 1.3-.4 4.3 1.6a14.7 14.7 0 017.8 0c3-2 4.3-1.6 4.3-1.6.9 2.1.4 3.7.2 4.1 1 1.1 1.6 2.5 1.6 4.3 0 6.2-3.8 7.6-7.4 8 .5.4 1 1.3 1 2.7v4c0 .4.2.8 1 .7C37.4 39.1 42 33.1 42 26c0-9.9-8.1-18-18-18z" fill="#181717"/>
            </svg>
        ),
    },
];

const Contact: React.FC = () => (
    <section className="flex flex-col items-center py-8">
        <h2 className="text-2xl p-8 max-w-xl mx-auto font-bold mb-4">Contact</h2>
        <div className="flex flex-wrap justify-center gap-10">
            {contacts.map(({ href, label, icon }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex flex-col items-center group transition-transform duration-200 hover:-translate-y-2"
                >
                    <span className="w-16 h-16 flex items-center justify-center rounded-lg shadow-md bg-white group-hover:shadow-xl transition-shadow">
                        {icon}
                    </span>
                    <span className="text-sm mt-3 text-gray-700 group-hover:text-blue-600 transition-colors">{label}</span>
                </a>
            ))}
        </div>
    </section>
);

export default Contact;