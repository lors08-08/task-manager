import React from "react";
import styles from "./Tasks.module.css";

function TasksDoneEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img
        src={require("../../../icons/iconsApp/FrameDone.svg")}
        alt="img"
        className={styles.img}
      />
    </div>
  );
}

export default TasksDoneEmpty;
