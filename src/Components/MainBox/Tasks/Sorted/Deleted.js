import React from "react";
import styles from "../../../../CSSmodules/MainBox/Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { colorsOpen, deleteTask } from "../../../../redux/actions";

function Deleted({ task }) {
  const color = task.color;
  const deletingTask = useSelector((state) => state.tasks.deletingTask);
  const dispatch = useDispatch();

  return (
    <div className={deletingTask ? styles.taskBlockDeleting : styles.taskBlock}>
      <div
        className={styles.taskColors}
        style={{ backgroundColor: color }}
        onClick={() => {
          dispatch(colorsOpen(task.id));
        }}
      />
      <div className={styles.taskContent}>{task.content}</div>
      <div className={styles.taskTail}>
        <div className={styles.time}>{task.time}</div>
        <div className={styles.iconsTask}>
          <img
            src="/iconsApp/DeleteTail.svg"
            alt="delete"
            className={styles.deleteTail}
            onClick={() => {
              dispatch(deleteTask(task.id));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Deleted;
