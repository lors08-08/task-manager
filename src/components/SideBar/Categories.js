import React from "react";
import { useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { useHistory, useParams } from "react-router-dom";
import classNames from "classnames";
import folder from "../../icons/iconsApp/Folder.svg";

function Categories() {
  const categories = useSelector((state) => state.categories.items);
  const idTask = useParams().id;
  const history = useHistory();

  const handleOpenTask = (category) => {
    if (parseInt(idTask) !== category.id) {
      history.push(category.id.toString());
    }
  };
  const handleOpenAllTasks = () => {
    history.push("/");
  };

  return (
    <div className={styles.categories}>
      <div
        className={!idTask ? styles.boxOpened : styles.box}
        onClick={handleOpenAllTasks}
      >
        <img src={folder} alt="img" />
        <div className={styles.categoryName}>Все</div>
      </div>
      {categories.map((category) => {
        const boxWrapper = classNames(styles.box, {
          [styles.boxOpened]: category.id === parseInt(idTask),
        });

        return (
          <div
            className={boxWrapper}
            key={category.id}
            onClick={() => {
              handleOpenTask(category);
            }}
          >
            <img src={folder} alt="img" />
            <div className={styles.categoryName}>{category.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
