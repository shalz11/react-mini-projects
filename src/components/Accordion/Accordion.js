import styles from "./Accordion.module.css";
import { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Accordion = ({ title, duties }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.card}>
          <div className={styles.title}>{title}</div>
          <div>
            <button className={styles.btn} onClick={() => setInfo(!info)}>
              {info ? <FaMinusCircle /> : <FaPlusCircle />}
            </button>
          </div>
        </div>
        <div className={styles.info}>{info && duties}</div>
      </div>
    </>
  );
};

export default Accordion;
