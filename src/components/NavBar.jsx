"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const { Button } = require("./ui/button");

export const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  return (
    <div className="flex gap-2 mt-2 mb-2">
      <Button variant="movieNavButton">Movies</Button>
      <Button variant="movieNavButton">TV Shows</Button>
      <Button variant="movieNavButton">Watchlist</Button>
      <Button variant="movieNavButton">SignIn</Button>
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
