import React from "react";
import styles from "../../../CSSmodules/MainBox/Tasks.module.css";

function TasksDoneEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src="./iconsApp/FrameDone.svg" alt="img" className={styles.img} />
    </div>
  );
}

export default TasksDoneEmpty;
