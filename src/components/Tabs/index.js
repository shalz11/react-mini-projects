import styles from "./Tabs.module.css";
import Tabs from "./Tabs";

const TabsIndex = () => {
  return (
    <div className={styles.TabContainer}>
      <div className="title">
        <h1>Tabs</h1>
        <div className="underline"></div>
      </div>
      <Tabs />
    </div>
  );
};

export default TabsIndex;
