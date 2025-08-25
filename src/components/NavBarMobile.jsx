"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBarMobile = () => {
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
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden py-2 px-12">
      <div className="flex justify-around items-center w-full rounded-full bg-slate-700">
        <button className="py-3 px-2" onClick={gotoHome}>
          <Image src="/home.png" width={20} height={20} alt="home" />
        </button>
        <button className="py-3 px-2" onClick={gotoMovies}>
          <Image src="/movie.png" width={20} height={20} alt="movie" />
        </button>
        <button className="py-3 px-2" onClick={gotoSeries}>
          <Image src="/series.png" width={20} height={20} alt="series" />
        </button>
        <button className="py-3 px-2" onClick={gotoWatchList}>
          <Image src="/watchlist.png" width={20} height={20} alt="watchlist" />
        </button>
        <button className="py-3 px-2" onClick={gotoSignin}>
          <Image src="/signin.png" width={20} height={20} alt="signin" />
        </button>
        <button onClick={changeTheme} className="py-3 px-2">
          {isDarkMode ? (
            <Image src="/light.png" width={20} height={20} alt="light mode" />
          ) : (
            <Image src="/dark.png" width={20} height={20} alt="dark mode" />
          )}
        </button>
      </div>
    </div>
  );
};
