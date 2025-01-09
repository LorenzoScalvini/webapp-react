import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4 text-danger">{error}</div>;
  if (!movie) return <div className="container mt-4">Movie not found</div>;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{movie.title}</h1>
          <p className="card-text">{movie.description}</p>

          <h2 className="mt-4">Reviews</h2>
          {movie.reviews && movie.reviews.length > 0 ? (
            movie.reviews.map((review, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <p>{review.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
