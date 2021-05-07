import styles from "./menu.module.css";

const MenuItems = ({ items }) => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}></div>
      {items.map((item, index) => (
        <p key={index}>{item.title}</p>
      ))}
      <div></div>
    </div>
  );
};

export default MenuItems;
