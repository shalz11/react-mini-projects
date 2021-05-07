import Accordion from "./Accordion";
import { useState } from "react";
import data from "../Tabs/data";
import styles from "./Accordion.module.css";

const AccordionIndex = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div className={styles.accordionContainer}>
      <div className="title">
        <h1>Accordion</h1>
        <div className="underline"></div>
      </div>
      {questions.map((question) => (
        <Accordion key={question.id} {...question} />
      ))}
    </div>
  );
};

export default AccordionIndex;
