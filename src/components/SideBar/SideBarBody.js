import React from "react";
import styles from "./AppSideBar.module.css";
import { saveCategory, setAddCategoryValue } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function SideBarBody() {
  const dispatch = useDispatch();
  const addCategoryValue = useSelector(
    (state) => state.categories.addCategoryValue
  );
  const addingCategory = useSelector(
    (state) => state.categories.addingCategory
  );
  const handleChange = (e) => {
    dispatch(setAddCategoryValue(e.target.value));
  };

  return (
    <div className={styles.addCategory}>
      <img
        src={require("../../icons/iconsApp/PlusSideBar.svg")}
        alt="img"
        className={styles.plus}
        onClick={() =>
          addCategoryValue.length >= 1 &&
          dispatch(saveCategory(addCategoryValue))
        }
      />
      <div className={styles.addCategoryName}>
        <input
          type="search"
          disabled={addingCategory}
          className={styles.addCategoryInput}
          placeholder="Добавить категорию"
          value={addCategoryValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SideBarBody;
