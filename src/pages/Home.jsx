import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error)
    return <div className={`${styles.container} ${styles.error}`}>{error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movies List</h1>
      <div className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
