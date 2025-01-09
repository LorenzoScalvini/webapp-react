import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="container my-4">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} className="img-fluid" />
      <p>{movie.description}</p>
      <h2>Reviews</h2>
      <ul>
        {movie.reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
