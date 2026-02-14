import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import MovieCard from "./components/MovieCard";
import MovieDetailsModal from "./components/MovieDetailsModal";
import Pagination from "./components/Pagination";

function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [view, setView] = useState("search");

  const API_KEY = "f05a0730";

  // =============================
  // Favorites localStorage
  // =============================
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, initialized]);

  // =============================
  // Main Movies Fetch
  // =============================
  useEffect(() => {
    if (view === "favorites") {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        let url;
        if (searchTerm) {
          url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}&page=${page}`;
        } else {
          url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=Avengers&page=${page}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "False") {
          setMovies([]);
          setTotalPages(0);
          setError(data.Error || "No movies found.");
        } else {
          setMovies(data.Search || []);
          const totalResults = parseInt(data.totalResults || "0", 10);
          setTotalPages(Math.ceil(totalResults / 10));
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page, view]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const openModal = async (movieId) => {
    setError(null);
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}&plot=full`
      );
      const data = await res.json();
      if (data.Response === "False") {
        setError(data.Error || "Failed to fetch movie details.");
      } else {
        setSelectedMovie(data);
      }
    } catch (err) {
      setError("Failed to fetch movie details.");
    }
  };

  const closeModal = () => setSelectedMovie(null);

 const toggleFavorite = (movie) => {
  const exists = favorites.some((f) => f.id === (movie.imdbID || movie.id));
  if (exists) {
    setFavorites(favorites.filter((f) => f.id !== (movie.imdbID || movie.id)));
  } else {
    const favMovie = {
      id: movie.imdbID || movie.id,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
      Plot: movie.Plot,
      imdbRating: movie.imdbRating,
    };
    setFavorites([...favorites, favMovie]);
  }
};

const isFavorite = (movieId) => favorites.some((f) => f.id === movieId);

  const displayedMovies = view === "search" ? movies : favorites;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center text-center">
     <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/">Homepage</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-4xl font-bold">Star Movies</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
    </button>
    <button className="btn btn-ghost btn-circle"> 
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>

      {/* Carousel ثابت */}
      <div className="carousel w-full h-119">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src="/Disney.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/UNIVERSAL.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/WB.png" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/1.jpg" className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs mb-6">
        <a
          className={`tab text-lg ${view === "search" ? "tab-active" : ""}`}
          onClick={() => setView("search")}
        >
          Search / Popular
        </a>
        <a
          className={`tab text-lg ${view === "favorites" ? "tab-active" : ""}`}
          onClick={() => setView("favorites")}
        >
          Favorites ({favorites.length})
        </a>
      </div>

      {view === "search" && (
        <div className="w-full max-w-md mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && displayedMovies.length === 0 && (
        <div>
          No movies found.{" "}
          {view === "favorites"
            ? "Add some to your favorites!"
            : "Try a different search."}
        </div>
      )}

      {!loading && !error && displayedMovies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {displayedMovies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite(movie.imdbID)}
              onViewDetails={openModal}
            />
          ))}
        </div>
      )}

      {view === "search" && totalPages > 1 && !loading && !error && (
        <div className="mt-6">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={closeModal}
          isFavorite={isFavorite(selectedMovie.imdbID)}
          onToggleFavorite={() => toggleFavorite(selectedMovie)}
        />
      )}
    </div>
  );
}

export default Home;
