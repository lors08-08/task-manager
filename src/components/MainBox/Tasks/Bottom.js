import React from "react";
import styles from "./Tasks.module.css";
import {
  addToDone,
  addToImportant,
  addToTrash,
} from "../../../redux/actions";
import { useDispatch } from "react-redux";
import starTail from "../../../icons/iconsApp/StarTail.svg";
import checkTail from "../../../icons/iconsApp/CheckTail.svg";
import deleteTail from "../../../icons/iconsApp/DeleteTail.svg";
import { useParams } from "react-router-dom";

function Bottom({ task }) {
  const dispatch = useDispatch();
  const categoryId = useParams().id; ///params

  let myProps = {
    id: categoryId,
  };

  if (categoryId === "done") {
    myProps = {
      done: true,
    };
  }
  if (categoryId === "deleted") {
    myProps = {
      deleted: true,
    };
  }

  return (
    <div className={styles.taskTail}>
      <div className={styles.time}>
        {task.important && (
          <div className={styles.starImportant}>
            <img src={starTail} alt="star" />
          </div>
        )}
        {task.time}
      </div>
      <div className={styles.iconsTask}>
        {myProps.done === undefined && myProps.deleted === undefined && (
          <img
            src={checkTail}
            alt="check"
            className={styles.checkTail}
            onClick={() => {
              dispatch(addToDone(task.id));
            }}
          />
        )}
        {myProps.done === undefined && myProps.deleted === undefined && (
          <img
            src={starTail}
            alt="star"
            className={styles.starTail}
            onClick={() => {
              dispatch(addToImportant(task.id));
            }}
          />
        )}
        <img
          src={deleteTail}
          alt="delete"
          className={styles.deleteTail}
          onClick={() => {
            dispatch(addToTrash(task.id));
          }}
        />
      </div>
    </div>
  );
}

export default Bottom;
