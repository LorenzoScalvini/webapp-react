import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={movie.poster} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.description.slice(0, 100)}...</p>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
