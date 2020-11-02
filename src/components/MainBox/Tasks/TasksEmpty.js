import React from "react";
import styles from "./Tasks.module.css";

function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img
        src={require("../../../icons/iconsApp/Group6.svg")}
        alt="img"
        className={styles.img}
      />
    </div>
  );
}

export default TasksEmpty;
