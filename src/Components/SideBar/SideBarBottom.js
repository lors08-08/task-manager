import React from "react";
import styles from "../../CSSmodules/SideBar/AppSideBar.module.css";
import {
  openDeletedTasks,
  openDoneTasks,
  openTasks,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

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

  return (
    <div className={styles.bottom}>
      <div
        className={
          tasksDoneLoading === false ? styles.doneSelected : styles.done
        }
        onClick={() => {
          handleOpenDone();
        }}
      >
        <img
          src="/iconsApp/CheckBottom.svg"
          alt="img"
          className={styles.checkIconBottom}
        />
        Завершенные
      </div>
      <div
        className={
          tasksDeletedLoading === false ? styles.trashSelected : styles.trash
        }
        onClick={() => {
          handleOpenDeleted();
        }}
      >
        <img
          src="/iconsApp/Delete.svg"
          alt="img"
          className={styles.checkIconBottom}
        />
        Корзина
      </div>
    </div>
  );
}

export default SideBarBottom;
