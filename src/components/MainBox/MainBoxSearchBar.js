import React, { useState } from "react";
import styles from "./MainBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/actions";
import classNames from "classnames";
import searchIcon from "../../icons/iconsApp/Search.svg";

function MainBoxSearchBar() {
  const searchValue = useSelector((state) => state.tasks.searchValue);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  const [show, setShow] = useState(false);
  const searchBarWrapper = classNames(styles.searchBar, {
    [styles.searchBarActive]: show,
  });
  const searchValueWrapper = classNames(styles.search, {
    [styles.searchActive]: show,
  });

  return (
    <>
      <div className={searchValueWrapper}>
        <div className={styles.searchIcon}>
          <img
            src={searchIcon}
            alt="img"
            width={20}
            className={styles.searchIconIn}
          />
        </div>
        <input
          type="search"
          onChange={handleChange}
          onFocus={() => {
            setShow(true);
          }}
          onBlur={() => {
            setShow(false);
          }}
          placeholder="Фильтр"
          className={searchBarWrapper}
          value={searchValue}
        />
      </div>
    </>
  );
}

export default MainBoxSearchBar;
