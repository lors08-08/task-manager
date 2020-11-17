import React from "react";
import Task from "./Task";
import TasksEmpty from "./TasksEmpty";

function TasksList(props) {
  const tasks = props.tasks;

  if (tasks.length === 0) {
    return <TasksEmpty />;
  } else {
    return (
      <>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </>
    );
  }
}

export default TasksList;
