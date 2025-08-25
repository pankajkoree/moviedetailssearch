"use client";

import { NavBar } from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
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

  return (
    <div className="relative flex justify-center w-full h-full">
      {/* Top Nav (for tab + laptop view) */}
      <div className="relative hidden md:flex md:flex-col justify-center md:items-center w-full md:w-[80%] lg:w-[60%] border pb-2">
        {/* navbar */}
        <NavBar />
        {/* end navbar */}

        {/* search bar */}
        <div className="flex gap-2">
          <Label htmlFor="movieSearch">Movie: </Label>
          <Input id="movieSearch" type="text" placeholder="search movie" />
        </div>

        {/* movie to show as default and get changed when its searched */}
        <div>{}</div>
        {/* end movie to show as default and get changed when its searched */}

        {/* movie lists */}
        <div className="flex flex-col gap-2 pt-4">
          {movieData.map((movie) => (
            <div key={movie.id} className="flex gap-2 border p-2">
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={60}
                height={40}
                className="object-cover"
              />
              <div>
                <p className="text-xl font-semibold">{movie.title}</p>
                <div className="flex gap-2">
                  <p>{movie.original_language}</p>
                  <p>{movie.release_date}</p>
                </div>
                <p>{movie.popularity}</p>
                <div className="flex gap-2">
                  <p>⭐{Math.floor(movie.vote_average * 10) / 10}/10</p>
                  <p>{`(${movie.vote_count})`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end movie lists */}

        {/* end search bar */}
      </div>
    </div>
  );
};

export default Movies;
