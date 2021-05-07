import styles from "./Layout.module.css";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className={styles.pageContent}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
