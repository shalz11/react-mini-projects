import styles from "./menu.module.css";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.searchContainer}>
      <h4>Search Your Favorite Cocktail</h4>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
