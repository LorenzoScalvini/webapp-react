import { useState } from "react";
import axios from "axios";
import styles from "./ReviewForm.module.css";

function ReviewForm({ movieId }) {
  const [reviewForm, setReviewForm] = useState({
    name: "",
    text: "",
    vote: 1,
  });
  const [formMessage, setFormMessage] = useState(null);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/movies/${movieId}/reviews`,
        reviewForm
      );
      if (response.status === 201) {
        setFormMessage("Review added successfully!");
        setReviewForm({ name: "", text: "", vote: 1 });
      } else {
        setFormMessage("Error adding review.");
      }
    } catch (err) {
      setFormMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.reviewsTitle}>Add a Review</h2>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <label className={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={reviewForm.name}
            onChange={handleFormChange}
            className={styles.input}
            maxLength={255}
            required
          />
        </label>
        <label className={styles.label}>
          Review Text:
          <textarea
            name="text"
            value={reviewForm.text}
            onChange={handleFormChange}
            className={styles.textarea}
            required
          />
        </label>
        <label className={styles.label}>
          Vote:
          <select
            name="vote"
            value={reviewForm.vote}
            onChange={handleFormChange}
            className={styles.select}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles.button}>
          Submit Review
        </button>
      </form>
      {formMessage && <p className={styles.message}>{formMessage}</p>}
    </div>
  );
}

export default ReviewForm;
