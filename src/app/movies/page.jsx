"use client";

import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchMovieData, setSearchedMovieData] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [moreMovieDetails, setMoreMovieDetails] = useState([]);

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

  const searchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchedMovie}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPIKEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setSearchedMovieData(data.results);
      if (data.results.length > 0) {
        setMovieId(data.results[0].id);
      }
    } catch (error) {
      console.log("Error fetching searched movie details : ", error);
    }
  };

  useEffect(() => {
    if (!movieId) return;

    const searchEvenMoreMovieDataWithID = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDBAPIKEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setMoreMovieDetails(data);
      } catch (error) {
        console.log("Error searching movie details with ID : ", error);
      }
    };
    searchEvenMoreMovieDataWithID();
  }, [movieId]);

  const movieDetails = searchMovieData.map((movie) => {
    if (movie.id === moreMovieDetails?.id) {
      return { ...movie, ...moreMovieDetails };
    }
    return movie;
  });

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
          <Input
            id="movieSearch"
            type="text"
            placeholder="search movie"
            value={searchedMovie}
            onChange={(e) => setSearchedMovie(e.target.value)}
          />
          <Button onClick={searchMovieDetails} className="hover:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-label="Search"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Button>
        </div>
        {/* end search bar */}

        {/* movie to show as default and get changed when its searched */}
        <div>
          {movieDetails.length > 0
            ? movieDetails.map((movie) => (
                <div key={movie.title}>
                  <div>
                    {/* movie title  */}
                    <p>{movie.title}</p>
                    {/* end movie title  */}
                    <p>{movie.release_date}</p>

                    <p>
                      {movie.runtime > 60
                        ? `${Math.floor(movie.runtime / 60)}h ${
                            movie.runtime % 60
                          }m`
                        : movie.runtime}
                    </p>
                  </div>
                  {/* imdb rating */}
                  <div>
                    <div>
                      <p>IMDB RATING</p>
                    </div>
                    <div>
                      <div>
                        <p>⭐</p>
                      </div>
                      <div>
                        <p>{`${
                          Math.floor(movie.vote_average * 10) / 10
                        }/10`}</p>
                        <p>{`(${movie.vote_count})`}</p>
                      </div>
                    </div>
                  </div>
                  {/* end imdb rating */}
                </div>
              ))
            : ""}
        </div>
        {/* movie to show as default and get changed when its searched */}

        {/* movie lists */}
        <div className="flex flex-col gap-2 pt-4">
          {movieData.map((movie) => (
            <div key={movie.id} className="flex gap-2 border p-2">
              <div className="flex justify-center items-center w-[15%]">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={60}
                  height={40}
                  className="object-cover"
                />
              </div>

              <div className="w-[75%]">
                <p className="text-xl font-semibold hover:cursor-pointer hover:text-slate-400">
                  {movie.title}
                </p>
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

              <div className="flex items-center text-blue-600">
                <div className="w-[36] h-[36] hover:bg-blue-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:cursor-pointer hover:bg-blue-100"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="8" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* end movie lists */}
      </div>
    </div>
  );
};

export default Movies;
