import React from "react";
import TasksEmpty from "./Tasks/TasksEmpty";
import Tasks from "./Tasks/Tasks";
import TasksDoneEmpty from "./Tasks/TasksDoneEmpty";
import Task from "./Tasks/Task";
import TasksDeletedEmpty from "./Tasks/TasksDeletedEmpty";
import { useSelector } from "react-redux";

function MainBoxOperators() {
  const tasksLoading = useSelector((state) => state.tasks.loading);
  const tasksDoneLoading = useSelector((state) => state.tasks.loadingDoneTasks);
  const tasksDeletedLoading = useSelector(
    (state) => state.tasks.loadingDeletedTasks
  );
  return (
    <>
      {tasksLoading && <TasksEmpty />}
      {tasksLoading === false && <Tasks />}
      {tasksDoneLoading && <TasksDoneEmpty />}
      {tasksDoneLoading === false && <Task />}
      {tasksDeletedLoading && <TasksDeletedEmpty />}
      {tasksDeletedLoading === false && <Task />}
    </>
  );
}

export default MainBoxOperators;
