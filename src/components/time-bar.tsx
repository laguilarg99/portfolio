import React, { useEffect, useState } from "react";

function TimeBar() {
    function getSpainTime() {
        const now = new Date();
        const spainTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Madrid",
        });
        return spainTime;
    }

    // Define your time range
    const TIME_RANGE = "Central European Time (CET)";

    const [spainTime, setSpainTime] = useState(getSpainTime());

    useEffect(() => {
        const interval = setInterval(() => {
        setSpainTime(getSpainTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex items-center justify-center px-0 py-3">
            <div className="w-full max-w-3xl flex items-center justify-between px-10">
            <div className="text-sm font-semibold">{TIME_RANGE}</div>
            <div className="text-sm font-mono">{spainTime}</div>
            </div>
        </nav>
        </>
    )
}

export default TimeBar;