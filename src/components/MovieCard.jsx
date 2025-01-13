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
        <button className={styles.watchNow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
          Watch Now
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
