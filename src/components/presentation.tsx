import React from "react";
import Image from "next/image";

function Presentation () {
    return (
        <>
        <aside className="flex flex-col items-center gap-4 px-4 py-8 sticky top-24 h-fit">
          <Image
            src="/profile.jpg" 
            alt="Luis miguel Aguilar"
            width={200}
            height={200}
            className="rounded-full border"
          />
          <div className="font-semibold text-md">Luis Miguel Aguilar</div>
          <div className="text-xs text-gray-500 text-center">Senior DevOps / Backend Engineer</div>
          <a
            href="https://cal.com/luis-miguel-aguilar-gonzalez-xbokby/quick-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs text-gray-700 mt-2 transition-transform duration-200 hover:scale-105"
            style={{ textDecoration: "none" }}
          >
            <Image
              src="/call.png"
              alt="Schedule Call"
              width={16}
              height={16}
              className="rounded-full border"
            />
            Schedule a Call
          </a>
        </aside>

        </>
    )
}

export default Presentation;