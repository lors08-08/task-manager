import React from "react";
import styles from "./Tasks.module.css";
import group6 from "../../../icons/iconsApp/Group6.svg";

function TasksDeletedEmpty() {
  return (
    <div className={styles.tasksEmptyBox}>
      <div className={styles.tasksEmpty}>
        <img src={group6} alt="img" className={styles.img} />
        <div className={styles.tasksEmptyTitle}>Корзина пуста</div>
      </div>
    </div>
  );
}

export default TasksDeletedEmpty;
