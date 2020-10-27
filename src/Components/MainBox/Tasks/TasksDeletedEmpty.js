import React from "react";
import styles from "../../../CSSmodules/MainBox/Tasks.module.css";

function TasksDeletedEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src="./iconsApp/FrameDeleted.svg" alt="img" className={styles.img} />
    </div>
  );
}

export default TasksDeletedEmpty;
