import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://67bf2c9fb2320ee05012dbdb.mockapi.io/test/Movies")
      .then((response) => {
        setMovies(response.data);
        console.log("Movies fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map(({ id, MovieName, ReleaseDate, Poster }) => (
        <Card
          key={id}
          movieName={MovieName}
          releaseDate={ReleaseDate.split("-")[0]}
          poster={Poster}
        />
      ))}
    </div>
  );
};

export default MovieCard;
