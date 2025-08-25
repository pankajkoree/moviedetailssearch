"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const { Button } = require("./ui/button");

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter();

  const changeTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const gotoHome = () => {
    router.push("/");
  };

  const gotoMovies = () => {
    router.push("/movies");
  };

  const gotoSeries = () => {
    router.push("/series");
  };

  const gotoWatchList = () => {
    router.push("/watchlist");
  };

  const gotoSignin = () => {
    router.push("/signin");
  };
  return (
    <div className="flex gap-2 mt-2 mb-2">
      <Button variant="movieNavButton" onClick={gotoHome}>
        <Image src="/home.png" width={20} height={20} alt="home" />
        Home
      </Button>
      <Button variant="movieNavButton" onClick={gotoMovies}>
        <Image src="/movie.png" width={20} height={20} alt="movie" />
        Movies
      </Button>
      <Button variant="movieNavButton" onClick={gotoSeries}>
        <Image src="/series.png" width={20} height={20} alt="series" />
        TV Shows
      </Button>
      <Button variant="movieNavButton" onClick={gotoWatchList}>
        {" "}
        <Image src="/watchlist.png" width={20} height={20} alt="watchlist" />
        Watchlist
      </Button>
      <Button variant="movieNavButton" onClick={gotoSignin}>
        {" "}
        <Image src="/signin.png" width={20} height={20} alt="signin" />
        SignIn
      </Button>
      <Button variant="movieNavButtonTheme" onClick={changeTheme}>
        {isDarkMode ? (
          <Image src="/light.png" width={20} height={20} alt="light mode" />
        ) : (
          <Image src="/dark.png" width={20} height={20} alt="dark mode" />
        )}
      </Button>
    </div>
  );
};
