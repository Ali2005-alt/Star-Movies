import React from "react";

const MovieDetailsModal = ({
  movie,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-2xl sm:max-w-3xl bg-base-100 shadow-xl">
        <h3 className="font-bold text-xl sm:text-2xl mb-4">{movie.Title}</h3>
        <img
          src={posterUrl}
          alt={movie.Title}
          className="rounded-lg mb-4 w-full object-contain max-h-96"
        />
        <div className="text-left space-y-2">
          <p className="leading-relaxed">{movie.Plot || "No description"}</p>
          <p className="font-semibold">
            <span>Release Year:</span> {movie.Year || "N/A"}
          </p>
          <p className="font-semibold">
            <span>Rating:</span> {movie.imdbRating || "N/A"}
          </p>
          <p>
            <span>Genre:</span> {movie.Genre || "N/A"}
          </p>
          <p>
            <span>Actors:</span> {movie.Actors || "N/A"}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-end mt-6">
          <button
            onClick={onToggleFavorite}
            className={`btn ${isFavorite ? "btn-error" : "btn-secondary"}`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default MovieDetailsModal;
