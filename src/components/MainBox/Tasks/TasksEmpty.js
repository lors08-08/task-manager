import React from "react";
import styles from "./Tasks.module.css";
import group6 from "../../../icons/iconsApp/Group6.svg";

function TasksEmpty() {
  return (
    <div className={styles.tasksEmptyBox}>
      <div className={styles.tasksEmpty}>
        <img src={group6} alt="img" className={styles.img} />
        <div className={styles.tasksEmptyTitle}>
          В списке еще нет ни одной задачи. Воспользуйся формой выше, чтобы
          добавить
        </div>
      </div>
    </div>
  );
}

export default TasksEmpty;
