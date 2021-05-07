import { useEffect } from "react";
import "./ToDo.module.css";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  });

  return <p className={type}>{msg}</p>;
};

export default Alert;
