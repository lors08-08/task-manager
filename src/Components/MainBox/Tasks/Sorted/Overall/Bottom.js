import React from "react";
import styles from "../../../../../CSSmodules/MainBox/Tasks.module.css";
import {
  addToDone,
  addToImportant,
  addToTrash,
} from "../../../../../redux/actions";
import { useDispatch } from "react-redux";

function Bottom({ task }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.taskTail}>
      <div className={styles.time}>
        {task.important && (
          <div className={styles.starImportant}>
            <img src="/iconsApp/StarTail.svg" alt="star" />
          </div>
        )}
        {task.time}
      </div>
      <div className={styles.iconsTask}>
        <img src="/iconsApp/CheckTail.svg" alt="check" className={styles.checkTail} onClick={() => {dispatch(addToDone(task.id))}} />
        <img src="/iconsApp/StarTail.svg" alt="star" className={styles.starTail} onClick={() => {dispatch(addToImportant(task.id))}} />
        <img src="/iconsApp/DeleteTail.svg" alt="delete" className={styles.deleteTail} onClick={() => {dispatch(addToTrash(task.id))}} />
      </div>
    </div>
  );
}

export default Bottom;
