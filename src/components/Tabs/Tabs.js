import styles from "./Tabs.module.css";
import TabsData from "./data";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Tabs = () => {
  const [value, setValue] = useState(0);
  const { title, company, dates, duties } = TabsData[value];
  return (
    <div className={styles.Tabs}>
      <div className={styles.TabsName}>
        {TabsData.map((item, index) => (
          <button
            key={index}
            onClick={() => setValue(index)}
            className={`${index === value && styles.activeBtn}`}
          >
            {item.company}
          </button>
        ))}
      </div>
      <div className={styles.TabsInfo}>
        <h3>{title}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.dates}>{dates}</p>
        <div>
          {duties.map((duty, index) => (
            <div key={index}>
              <p>
                <FaAngleDoubleRight className={styles.arrow} />
                {duty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
