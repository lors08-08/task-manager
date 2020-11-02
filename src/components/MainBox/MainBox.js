import React from "react";
import styles from "./MainBox.module.css";
import { useHistory } from "react-router-dom";
import MainBoxTop from "./MainBoxTop";
import MainBoxOperators from "./MainBoxOperators";

function MainBox() {
  const history = useHistory();
  history.replace("", null);
  return (
    <div className={styles.mainBox}>
      <MainBoxTop />
      <MainBoxOperators />
    </div>
  );
}

export default MainBox;
