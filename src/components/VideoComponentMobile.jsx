"use client";
import { useEffect, useState } from "react";

export const VideoComponentMobile = () => {
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

     useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
      }, 10000);
  
      return () => clearInterval(interval);
    }, [videos.length]);
    
  return (
    <div className="relative flex p-2">
      <div className="flex z-10 items-center mr-[-20px] dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="36"
          height="36"
          onClick={handlePrev}
          className="bg-slate-500 text-white rounded-full p-2 shadow-md active:scale-95 hover:bg-slate-600 transition"
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
          width="360"
          height="240"
          src={`https://www.youtube.com/embed/${videos[currentIndex]}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex z-10 items-center ml-[-20px] dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          width="36"
          height="36"
          onClick={handleNext}
          className="bg-slate-500 text-white rounded-full p-2 shadow-md active:scale-95 hover:bg-slate-600 transition"
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
