import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverAll from "./Sorted/Overall/OverAll";
import Sorted from "./Sorted/Sorted";
import styles from "../../../CSSmodules/MainBox/Tasks.module.css";
import Deleted from "./Sorted/Deleted";
import Done from "./Sorted/Done";
import { useParams } from "react-router-dom";
import {loadTasks, openTasks} from "../../../redux/actions";

function Task() {
  const task = useSelector((state) => state.tasks.items);
  const idTask = useParams().id.toString(); ///params
  const searchValue = useSelector((state) => state.tasks.searchValue);
  const filterTasks = task.filter((task) => {
    let text = task.content;
    let lowerCase = text.toLowerCase();
    let lowerCaseSearch = searchValue.toLowerCase();
    return lowerCase.indexOf(lowerCaseSearch) !== -1;
  });
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(openTasks());
  // }, [idTask]);
  return (
    <div className={styles.body}>
      <div className={styles.miniBody}>
        <div className={styles.box}>
          {filterTasks.map((task) => {
            if (task.deleted === false && task.done === false) {
              if (
                task.category_id.toString() === idTask.toString() &&
                task.category_id !== "1"
              ) {
                return <Sorted key={task.id} task={task} />;
              }
              if (idTask === "1") {
                return <OverAll key={task.id} task={task} />;
              }
            }
            if (task.done === true && idTask === "done") {
              return <Done key={task.id} task={task} />;
            }
            if (task.deleted === true && idTask === "deleted") {
              return <Deleted key={task.id} task={task} />;
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default Task;
