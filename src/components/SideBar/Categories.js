import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { openTasks } from "../../redux/actions";
import { useHistory, useParams } from "react-router-dom";
import classNames from "classnames";

function Categories() {
  const categories = useSelector((state) => state.categories.items);
  const opened = useSelector((state) => state.tasks.closed);
  const idTask = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenTask = (category) => {
    if (parseInt(idTask) !== category.id) {
      dispatch(openTasks(idTask));
      history.push(category.id.toString());
    }
  };
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        const boxWrapper = classNames(styles.box, {
          [styles.boxOpened]:
            opened === false && category.id === parseInt(idTask),
        });
        return (
          <div
            className={boxWrapper}
            key={category.id}
            onClick={() => {
              handleOpenTask(category);
            }}
          >
            <img src={require("../../icons/iconsApp/Folder.svg")} alt="img" />
            <div className={styles.categoryName}>{category.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
