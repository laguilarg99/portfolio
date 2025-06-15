"use client"
import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        setDisplayedText('');
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    useEffect(() => {
        if (displayedText.length === text.length) {
            const cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);
            return () => clearInterval(cursorInterval);
        } else {
            setShowCursor(true);
        }
    }, [displayedText, text.length]);

    return (
        <span>
            {displayedText}
            {displayedText.length === text.length && (
                <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            )}
        </span>
    );
};

export default TypewriterText;