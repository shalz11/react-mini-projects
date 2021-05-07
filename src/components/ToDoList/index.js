import styles from "./ToDo.module.css";
import { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = JSON.parse(localStorage.getItem("list"));
  if (list.length > 0) {
    return [list];
  } else return [];
};

const ToDoIndex = () => {
  const [list, setList] = useState(getLocalStorage());
  const [input, setInput] = useState("");
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      showAlert(true, "Danger", "Please add item");
    } else if (input && editID) {
      const newList = list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: input };
        }
        return item;
      });
      setList(newList);
      setEditID(null);
      setInput("");
      showAlert(true, "Success", "Item changed");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: input };
      setList([...list, newItem]);
      showAlert(true, "Success", "Item added to the list");
      setInput("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearListHandler = () => {
    setList([]);
    showAlert(true, "Danger", "Empty list");
  };

  const removeItemHandler = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    showAlert(true, "Danger", "Item removed");
  };

  const editItemHandler = (id) => {
    inputRef.current.focus();
    const newItem = list.find((item) => item.id === id);
    setEditID(id);
    setInput(newItem.title);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className={styles.ToDoContainer}>
      <div className="title">
        <h1>To-do List</h1>
        <div className="underline"></div>
      </div>
      <div className={styles.todoWrapper}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form className={styles.formContainer}>
          <input
            type="text"
            ref={inputRef}
            placeholder="add item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={styles.btnSubmit} onClick={submitHandler}>
            Submit
          </button>
        </form>

        {list.length > 0 && (
          <>
            <List
              items={list}
              editItem={editItemHandler}
              removeItem={removeItemHandler}
              clearList={clearListHandler}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoIndex;
