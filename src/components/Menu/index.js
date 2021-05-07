import data from "./data";
import Menu from "./MenuItems";
import Categories from "./Categories";
import styles from "./menu.module.css";
import { useState } from "react";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const MenuIndex = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(data);
  //console.log("All categories --", allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = menuItems.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className={styles.container}>
      <h2>Cocktails</h2>
      <Categories categories={categories} filterItems={filterItems} />

      <Menu items={menuItems} />
    </div>
  );
};

export default MenuIndex;
