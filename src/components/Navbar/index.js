import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const NavIndex = () => {
  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/Carousel">Carousel</Link>
      </div>
      <div>
        <Link to="/Tabs">Tabs</Link>
      </div>
      <div>
        <Link to="/Trips">Trips</Link>
      </div>
      <div>
        <Link to="/TodoList">TodoList</Link>
      </div>
      <div>
        <Link to="/Accordion">Accordion</Link>
      </div>
      <div>
        <Link to="/Reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default NavIndex;
