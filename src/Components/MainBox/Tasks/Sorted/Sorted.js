import React from "react";
import styles from "../../../../CSSmodules/MainBox/Tasks.module.css";
import { useSelector } from "react-redux";
import Body from "./Overall/Body";
import Bottom from "./Overall/Bottom";

function Sorted({ task }) {
  const addingToTrash = useSelector((state) => state.tasks.addingToTrash);
  const addingToDone = useSelector((state) => state.tasks.addingToDone);
  const addingToImportant = useSelector(
    (state) => state.tasks.addingToImportant
  );

  return (
    <div
      className={
        addingToTrash && addingToDone & addingToImportant
          ? styles.taskBlockInactive
          : styles.taskBlock
      }
    >
      <Body task={task} />
      <div className={styles.taskContent}>{task.content}</div>
      <Bottom task={task} />
    </div>
  );
}

export default Sorted;
