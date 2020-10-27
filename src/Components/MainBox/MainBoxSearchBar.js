import React from "react";
import styles from "../../CSSmodules/MainBox/MainBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions";

function MainBoxSearchBar() {
  const searchValue = useSelector((state) => state.tasks.searchValue);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <>
      <div
        className={
          searchValue.length >= 1 ? styles.searchActive : styles.search
        }
      >
        <div className={styles.searchIcon}>
          <img
            src="/iconsApp/Search.svg"
            alt="img"
            width={20}
            className={styles.searchIconIn}
          />
        </div>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Фильтр"
          className={
            searchValue.length >= 1 ? styles.searchBarActive : styles.searchBar
          }
          value={searchValue}
        />
      </div>
    </>
  );
}

export default MainBoxSearchBar;
