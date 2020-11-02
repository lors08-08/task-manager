import React from "react";
import styles from "./MainBox.module.css";
import MainBoxIcons from "./MainBoxIcons";
import MainBoxSearchBar from "./MainBoxSearchBar";

function MainBoxTop() {
  return (
    <div className={styles.header}>
      <MainBoxSearchBar />
      <MainBoxIcons />
    </div>
  );
}

export default MainBoxTop;
