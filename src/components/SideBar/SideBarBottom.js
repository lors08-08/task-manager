import React from "react";
import styles from "./AppSideBar.module.css";
import { openDeletedTasks, openDoneTasks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import classNames from "classnames"

function SideBarBottom() {
  const dispatch = useDispatch();
  const tasksDoneLoading = useSelector((state) => state.tasks.loadingDoneTasks);
  const tasksDeletedLoading = useSelector(
    (state) => state.tasks.loadingDeletedTasks
  );
  const idTask = useParams().id;
  const history = useHistory();
  const handleOpenDone = () => {
    if (idTask !== "done") {
      dispatch(openDoneTasks());
      history.push("done");
    }
  };
  const handleOpenDeleted = () => {
    if (idTask !== "deleted") {
      dispatch(openDeletedTasks());
      history.push("deleted");
    }
  };
  const trashWrapper = classNames(styles.trash, {
    [styles.trashSelected]: tasksDeletedLoading === false,
  });
  const doneWrapper = classNames(styles.done, {
    [styles.doneSelected]: tasksDoneLoading === false,
  });
  return (
    <div className={styles.bottom}>
      <div
        className={doneWrapper}
        onClick={() => {
          handleOpenDone();
        }}
      >
        <img
          src={require("../../icons/iconsApp/CheckBottom.svg")}
          alt="img"
          className={styles.checkIconBottom}
        />
        Завершенные
      </div>
      <div
        className={trashWrapper}
        onClick={() => {
          handleOpenDeleted();
        }}
      >
        <img
          src={require("../../icons/iconsApp/Delete.svg")}
          alt="img"
          className={styles.checkIconBottom}
        />
        Корзина
      </div>
    </div>
  );
}

export default SideBarBottom;
