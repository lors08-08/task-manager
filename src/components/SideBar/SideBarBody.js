import React, { useState } from "react";
import styles from "./AppSideBar.module.css";
import { saveCategory, setAddCategoryValue } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import plusSideBar from "../../icons/iconsApp/PlusSideBar.svg";
import { useHotkeys } from "react-hotkeys-hook";

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
  const [show, setShow] = useState(false);
  const addCategoryWrapper = classNames(styles.addCategoryUnderText, {
    [styles.addCategoryUnderTextShow]: show,
  });

  const send = (value) => {
    if (value.length !== 0) {
      dispatch(saveCategory(value));
    }
  };

  useHotkeys(
    "enter",
    () => {
      dispatch(saveCategory(addCategoryValue))
    },
    {
      filter: () => true,
    }
  );
  return (
    <div>
      <div className={styles.addCategory}>
        <img
          src={plusSideBar}
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
            onFocus={() => {
              setShow(true);
            }}
            onBlur={() => {
              setShow(false);
            }}
          />
        </div>
      </div>
      <div className={addCategoryWrapper}>Нажми Enter, чтобы сохранить</div>
    </div>
  );
}

export default SideBarBody;
