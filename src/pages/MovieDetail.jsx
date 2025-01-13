import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import styles from "./MovieDetail.module.css";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching movie details");
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const renderStars = (vote) => {
    return "★".repeat(vote) + "☆".repeat(5 - vote);
  };

  if (loading) return <div className={styles.message}>Loading...</div>;
  if (error)
    return <div className={`${styles.message} ${styles.error}`}>{error}</div>;
  if (!movie) return <div className={styles.message}>Movie not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <h1 className={styles.title}>{movie.title}</h1>
          <img
            src={
              movie.image
                ? `http://localhost:3000/public/images/${movie.image}`
                : "https://via.placeholder.com/250x150?text=No+Image"
            }
            alt={movie.title}
            className={styles.image}
          />
          <p className={styles.detail}>
            <strong>Director:</strong> {movie.director}
          </p>
          <p className={styles.detail}>
            <strong>Release Year:</strong> {movie.release_year}
          </p>
          <p className={styles.detail}>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p className={styles.abstract}>{movie.abstract}</p>

          <h2 className={styles.reviewsTitle}>Reviews</h2>
          {movie.reviews && movie.reviews.length > 0 ? (
            movie.reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewBody}>
                  <p className={styles.reviewName}>{review.name}</p>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
                <p className={styles.reviewStars}>{renderStars(review.vote)}</p>
              </div>
            ))
          ) : (
            <p className={styles.noReviews}>No reviews yet</p>
          )}
        </div>
      </div>
      <ReviewForm movieId={id} />
    </div>
  );
}

export default MovieDetail;
