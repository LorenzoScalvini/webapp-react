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
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching movie details");
        setLoading(false);
      });
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
        <div className={styles.header}>
          <img
            src={
              movie.image
                ? `http://localhost:3000/public/images/${movie.image}`
                : "https://via.placeholder.com/250x150?text=No+Image"
            }
            alt={movie.title}
            className={styles.image}
          />
          <div className={styles.details}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.detail}>
              <strong>Director:</strong> {movie.director}
            </p>
            <p className={styles.detail}>
              <strong>Release Year:</strong> {movie.release_year}
            </p>
            <p className={styles.detail}>
              <strong>Genre:</strong> {movie.genre}
            </p>
          </div>
        </div>
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
      <ReviewForm movieId={id} />
    </div>
  );
}

export default MovieDetail;
