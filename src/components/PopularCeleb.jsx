import { useEffect, useState } from "react";

export const PopularCeleb = () => {
  const [popularCeleb, setPopularCeleb] = useState([]);

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

  console.log(popularCeleb);
  return (
    <div>
      <div>
        <h1>Popular Celebrities</h1>
      </div>
      <div></div>
    </div>
  );
};
