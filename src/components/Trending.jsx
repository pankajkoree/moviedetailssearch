import Image from "next/image";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/day`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPIKEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        setTrendingList(data.results || []);
      } catch (error) {
        console.log("Error fetching trending movies : ", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <div>
        <h1>Trending</h1>
      </div>
      <div className="flex gap-2 p-2">
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
          {trendingList.map((movie) => (
            <div key={movie.id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                width={300}
                height={200}
              />
            </div>
          ))}
        </div>

        <div className="flex z-10 items-center ml-[-60px] dark:text-white">
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
    </div>
  );
};
