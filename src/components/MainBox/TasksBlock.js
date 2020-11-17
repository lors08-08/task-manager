import React from "react";
import TasksSelection from "./Tasks/TasksSelection";
import { useParams } from "react-router-dom";
import TasksHeader from "./Tasks/TasksHeader";
import styles from "./Tasks/Tasks.module.css";
import { useDispatch } from "react-redux";
import { openAllTasks, openTasks } from "../../redux/actions";

function TasksBlock() {
  const categoryId = useParams().id; ///params
  const dispatch = useDispatch();

  if (!categoryId) {
    dispatch(openAllTasks());
  } else {
    dispatch(openTasks(categoryId));
  }

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
    <div className={styles.box}>
      <TasksHeader {...myProps} />
      <TasksSelection {...myProps} />
    </div>
  );
}

export default TasksBlock;

// function TasksBlock() {
//   const myProps = {
//     deleted: true
//   };
//
//   const myProps = {
//     id: idTask
//   }
//
//   let Component = <Empty />;
//
//   if(idTask) {
//     Component = <Tasks />
//   }
//
//   return(
//     <Component {...myProps}/>
//   )
// }
