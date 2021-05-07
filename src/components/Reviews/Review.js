import styles from "./Reviews.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import ReviewsData from "./data";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { image, name, job, text } = ReviewsData[index];

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        let newPointer = index + 1;
        return checkNumber(newPointer);
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const checkNumber = (number) => {
    if (number > ReviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return ReviewsData.length - 1;
    }
    return number;
  };

  const prevPersonHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPersonHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const randomPersonHandler = () => {
    let randomNumber = Math.floor(Math.random() * ReviewsData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className={styles.ReviewCard}>
      <div className={styles.ReviewImgDiv}>
        <div className={styles.quotes}>
          <FaQuoteRight />
        </div>
        <img src={image} alt={name} />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.job}>{job}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.btn}>
        <button onClick={prevPersonHandler}>
          <FaChevronLeft />
        </button>
        <button onClick={nextPersonHandler}>
          <FaChevronRight />
        </button>
      </div>
      <button className={styles.btnRandom} onClick={randomPersonHandler}>
        Surprise me!!
      </button>
    </div>
  );
};

export default Review;
