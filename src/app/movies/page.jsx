"use client";

import { NavBar } from "@/components/NavBar";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie",
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPIKEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setMovieData(data.results || []);
      } catch (error) {
        console.log("Error fetching movies : ", error);
      }
    };
    fetchMovieData();
  }, []);

  console.log(movieData);
  return (
    <div className="relative flex justify-center w-full h-full">
      {/* Top Nav (for tab + laptop view) */}
      <div className="relative hidden md:flex md:flex-col justify-center md:items-center w-full md:w-[80%] lg:w-[60%]">
        {/* navbar */}
        <NavBar />
        {/* end navbar */}

{/* search bar */}
        <div>
          
        </div>

        {/* end search bar */}
      </div>
    </div>
  );
};

export default Movies;
