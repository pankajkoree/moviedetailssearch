"use client";
import { useState } from "react";

export const VideoComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const videos = [
    "https://www.youtube.com/watch?v=PJLAoYYocsI",
    "https://www.youtube.com/watch?v=ClWFuntWmy0",
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };
  return (
    <div className="relative flex p-4">
      <video
        key={videos[currentIndex]}
        className="rounded-xl shadow-lg"
        width="600"
        controls
      >
        <source src={videos[currentIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex gap-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300"
        >
          ⬅️ Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};
