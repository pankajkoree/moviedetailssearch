"use client";
import { useState } from "react";

export const VideoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    "fsQgc9pCyDU",
    "dK1W-AViQ-M",
    "5lY5NJgJMBs",
    "X38mG7IW4mo",
    "CnEOLuCojY0",
    "r-7g08INMSI",
    "y35F2nMfVwY",
    "YShVEXb7-ic",
    "8SKJvLEnwkI",
    "tA1s65o_kYM",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };
  return (
    <div className="relative flex p-4 gap-4">
      <div className="flex z-10 items-center mr-[-60px] dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="40"
          height="60"
          onClick={handlePrev}
          className="border p-2 hover:cursor-pointer bg-slate-400"
        >
          <path
            d="M15 6 L9 12 L15 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <iframe
          key={videos[currentIndex]}
          width="840"
          height="516"
          src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex items-center ml-[-60px] dark:text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="60"
          onClick={handleNext}
          className="border p-2 hover:cursor-pointer bg-slate-400"
        >
          <path
            d="M9 6 L15 12 L9 18"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
