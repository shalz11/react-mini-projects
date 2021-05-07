import styles from "./ToDo.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, editItem, removeItem, clearList }) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <div className={styles.listItem}>
          <div key={item.id}>{item.title}</div>
          <div>
            <button
              className={styles.listEditBtn}
              onClick={() => editItem(item.id)}
            >
              <FaEdit />
            </button>
            <button
              className={styles.listDeleteBtn}
              onClick={() => removeItem(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <button className={styles.btnClear} onClick={clearList}>
        Clear list
      </button>
    </div>
  );
};

export default List;
