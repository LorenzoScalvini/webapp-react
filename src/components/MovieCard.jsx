import React from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const imageUrl = movie.image
    ? `http://localhost:3000/public/images/${movie.image}`
    : "https://via.placeholder.com/250x150?text=No+Image";

  return (
    <div className={styles.card}>
      <div
        className={styles.imageWrapper}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className={styles.body}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.abstract}>{movie.abstract}</p>
        <Link to={`/movies/${movie.id}`} className={styles.link}>
          View Details
        </Link>
        <button className={styles.watchNow}>Watch Now</button>
      </div>
    </div>
  );
}

export default MovieCard;
