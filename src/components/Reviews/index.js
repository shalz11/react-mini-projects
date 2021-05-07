import styles from "./Reviews.module.css";
import Review from "./Review";

const Reviews = () => {
  return (
    <div className={styles.ReviewContainer}>
      <div className="title">
        <h1>Reviews</h1>
        <div className="underline"></div>
      </div>

      <Review />
    </div>
  );
};

export default Reviews;
