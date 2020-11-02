import React from "react";
import styles from "./MainBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions";
import classNames from "classnames";

function MainBoxSearchBar() {
  const searchValue = useSelector((state) => state.tasks.searchValue);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  const searchBarWrapper = classNames(styles.searchBar, {
    [styles.searchBarActive]: searchValue.length >= 1,
  });
  const searchValueWrapper = classNames(styles.search, {
    [styles.searchActive]: searchValue.length >= 1,
  });
  return (
    <>
      <div className={searchValueWrapper}>
        <div className={styles.searchIcon}>
          <img
            src={require("../../icons/iconsApp/Search.svg")}
            alt="img"
            width={20}
            className={styles.searchIconIn}
          />
        </div>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Фильтр"
          className={searchBarWrapper}
          value={searchValue}
        />
      </div>
    </>
  );
}

export default MainBoxSearchBar;
