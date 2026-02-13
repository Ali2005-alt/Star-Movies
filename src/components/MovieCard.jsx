import React from "react";

const MovieCard = ({ movie, onToggleFavorite, isFavorite, onViewDetails }) => {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-lg">
      <img
        className="w-full h-96 object-cover group-hover:scale-110 duration-300"
        src={posterUrl}
        alt={movie.Title}
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-xl font-bold text-white mb-2">{movie.Title}</h2>
        <p className="text-gray-300 mb-4">{movie.Year || "N/A"}</p>
        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => onViewDetails(movie.imdbID)}
          >
            Details
          </button>
          <button
            onClick={() => onToggleFavorite(movie)}
            className={`btn btn-sm ${
              isFavorite ? "btn-error" : "btn-secondary"
            }`}
          >
            {isFavorite ? "Remove" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
