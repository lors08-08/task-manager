import React from "react";
import styles from "./Tasks.module.css";

function TasksDeletedEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img
        src={require("../../../icons/iconsApp/FrameDeleted.svg")}
        alt="img"
        className={styles.img}
      />
    </div>
  );
}

export default TasksDeletedEmpty;
