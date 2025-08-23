import Image from "next/image";
import { useEffect, useState } from "react";

export const PopularCeleb = () => {
  const [popularCeleb, setPopularCeleb] = useState([]);
  const [start, setStart] = useState(0);
  const maxCeleb = 5;

  useEffect(() => {
    const fetchPopularCeleb = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/person/popular`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPIKEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setPopularCeleb(data.results || []);
      } catch (error) {
        console.log("Error fetching popular celebrities : ", error);
      }
    };
    fetchPopularCeleb();
  }, []);

  const handlePrev = () => {
    setStart((prev) => (prev - maxCeleb >= 0 ? prev - maxCeleb : 0));
  };
  const handleNext = () => {
    setStart((prev) =>
      prev + maxCeleb < popularCeleb.length ? prev + maxCeleb : prev
    );
  };

  const celebToShow = popularCeleb.slice(start, start + maxCeleb);

  return (
    <div>
      <div className="md:text-3xl mb-2">
        <h1>Popular Celebrities</h1>
      </div>
      <div className="flex gap-2">
        <div className="flex z-10 items-center dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="40"
            height="60"
            className="border p-2 hover:cursor-pointer bg-slate-400"
            onClick={handlePrev}
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

        <div className="flex gap-2">
          {celebToShow.map((celeb) => (
            <div key={celeb.id}>
              <div className="w-50 h-50 rounded-full overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${celeb.profile_path}`}
                  alt={celeb.name}
                  width={160}
                  height={160}
                  className="object-fit w-full h-full"
                />
              </div>
              <div className="text-center text-xl md:text-2xl">
                <p>{celeb.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex z-10 items-center dark:text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="60"
            className="border p-2 hover:cursor-pointer bg-slate-400"
            onClick={handleNext}
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
    </div>
  );
};
