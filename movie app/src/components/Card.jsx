import React from "react";

const Card = ({ movieName, releaseDate, poster }) => {
  return (
    <div className="rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        src={poster}
        alt={movieName}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{movieName}</h2>
        <p className="text-white-600">{releaseDate} • 4.5 ★</p>
      </div>
    </div>
  );
};

export default Card;
