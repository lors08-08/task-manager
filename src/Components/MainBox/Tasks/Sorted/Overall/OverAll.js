import React, {useEffect} from "react";
import styles from "../../../../../CSSmodules/MainBox/Tasks.module.css";
import {useDispatch, useSelector} from "react-redux";
import Bottom from "./Bottom";
import Body from "./Body";
import {loadTasks, openTasks} from "../../../../../redux/actions";
import {useParams} from "react-router-dom";

function Overall({ task }) {
  const addingToTrash = useSelector((state) => state.tasks.addingToTrash);
  const addingToDone = useSelector((state) => state.tasks.addingToDone);
  const addingToImportant = useSelector((state) => state.tasks.addingToImportant);
  const taskBlock = addingToTrash && addingToDone & addingToImportant ? styles.taskBlockInactive : styles.taskBlock;

  return (
    <div className={taskBlock}>
      <Body task={task} />
      <div className={styles.taskContent}>{task.content}</div>
      <Bottom task={task} />
    </div>
  );
}

export default Overall;
