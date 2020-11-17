import React from "react";
import { useSelector } from "react-redux";
import TasksList from "./TasksList";
import styles from "./Tasks.module.css";

function TasksSelection(props) {
  const tasks = useSelector((state) => {
    const searchValue = state.tasks.searchValue;

    return state.tasks.items.filter((task) => {
      const lowerCase = task.content.toLowerCase();
      const lowerCaseSearch = searchValue.toLowerCase();

      return lowerCase.indexOf(lowerCaseSearch) !== -1;
    });
  });

  return (
    <div
      className={
        props.done === undefined && props.deleted === undefined
          ? styles.body
          : styles.bodyDoneDeleted
      }
    >
      <TasksList tasks={tasks} />
    </div>
  );
}

export default TasksSelection;
