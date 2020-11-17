import React from "react";
import styles from "./AppSideBar.module.css";
import { openDeletedTasks, openDoneTasks } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import classNames from "classnames";
import checkBottom from "../../icons/iconsApp/CheckBottom.svg";
import deleteBottom from "../../icons/iconsApp/Delete.svg";

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
      dispatch(openDoneTasks("done"));
      history.push("done");
    }
  };
  const handleOpenDeleted = () => {
    if (idTask !== "deleted") {
      dispatch(openDeletedTasks("deleted"));
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
        <img src={checkBottom} alt="img" className={styles.checkIconBottom} />
        Завершенные
      </div>
      <div
        className={trashWrapper}
        onClick={() => {
          handleOpenDeleted();
        }}
      >
        <img src={deleteBottom} alt="img" className={styles.checkIconBottom} />
        Корзина
      </div>
    </div>
  );
}

export default SideBarBottom;
