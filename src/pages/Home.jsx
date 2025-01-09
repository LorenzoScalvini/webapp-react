import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Movie List</h1>
      <div className="row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
