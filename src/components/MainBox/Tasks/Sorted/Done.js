import React from "react";
import styles from "../Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToTrash } from "../../../../redux/actions";
import classNames from "classnames";

function Done({ task }) {
  const color = task.color;
  const addingToTrash = useSelector((state) => state.tasks.addingToTrash);
  const dispatch = useDispatch();
  const taskBlockWrapper = classNames(styles.taskBlock, {
    [styles.taskBlockInactive]: addingToTrash,
  });
  return (
    <div className={taskBlockWrapper}>
      <div className={styles.taskColors} style={{ backgroundColor: color }} />
      <div className={styles.taskContent}>{task.content}</div>
      <div className={styles.taskTail}>
        <div className={styles.time}>{task.time}</div>
        <div className={styles.iconsTask}>
          <img
            src={require("../../../../icons/iconsApp/DeleteTail.svg")}
            alt="delete"
            className={styles.deleteTail}
            onClick={() => {
              dispatch(addToTrash(task.id));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Done;
