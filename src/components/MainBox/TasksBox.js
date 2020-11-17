import React from "react";
import styles from "./MainBox.module.css";
import TasksBoxHeader from "./TasksBoxHeader";
import TasksBlock from "./TasksBlock";

function TasksBox() {
  return (
    <div className={styles.mainBox}>
      <TasksBoxHeader />
      <TasksBlock />
    </div>
  );
}

export default TasksBox;
