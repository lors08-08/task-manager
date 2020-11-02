import React from "react";
import styles from "../Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { colorsOpen, deleteTask } from "../../../../redux/actions";
import classNames from "classnames";

function Deleted({ task }) {
  const color = task.color;
  const deletingTask = useSelector((state) => state.tasks.deletingTask);
  const dispatch = useDispatch();
  const taskBlockWrapper = classNames(styles.taskBlock, {
    [styles.taskBlockInactive]: deletingTask,
  });
  return (
    <div className={taskBlockWrapper}>
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
            src={require("../../../../icons/iconsApp/DeleteTail.svg")}
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
