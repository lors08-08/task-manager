import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../CSSmodules/SideBar/Categories.module.css";
import { openTasks } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";

function Categories() {
  const categories = useSelector((state) => state.categories.items);
  const opened = useSelector((state) => state.tasks.loading);
  const idTask = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenTask = (category) => {
    if (idTask !== category.id.toString()) {
      dispatch(openTasks(idTask));
      history.push(category.id.toString());
    }
  };
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <div
            className={
              opened === false && category.id === idTask
                ? styles.boxOpened
                : styles.box
            }
            key={category.id}
            onClick={() => {
              handleOpenTask(category);
            }}
          >
            <img src="/iconsApp/Folder.svg" alt="img" />
            <div className={styles.categoryName}>{category.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
