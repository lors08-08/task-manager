import React from "react";
import styles from "../../../CSSmodules/MainBox/Tasks.module.css";

function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src="./iconsApp/Group%206.svg" alt="img" className={styles.img} />
    </div>
  );
}

export default TasksEmpty;
