import React from "react";
import styles from "../../../../CSSmodules/MainBox/Tasks.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToTrash } from "../../../../redux/actions";

function Done({ task }) {
  const color = task.color;
  const addingToTrash = useSelector((state) => state.tasks.addingToTrash);
  const dispatch = useDispatch();

  return (
    <div
      className={addingToTrash ? styles.taskBlockDeleting : styles.taskBlock}
    >
      <div className={styles.taskColors} style={{ backgroundColor: color }} />
      <div className={styles.taskContent}>{task.content}</div>
      <div className={styles.taskTail}>
        <div className={styles.time}>{task.time}</div>
        <div className={styles.iconsTask}>
          <img
            src="/iconsApp/DeleteTail.svg"
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
