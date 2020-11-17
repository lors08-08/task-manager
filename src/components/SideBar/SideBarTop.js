import React from "react";
import styles from "./AppSideBar.module.css";
import check from "../../icons/iconsApp/Check.svg";
function SideBarTop() {
  return (
    <>
      <div className={styles.title}>
        <img src={check} alt="img" className={styles.checkIcon} />
        TodoLors
      </div>
      <div className={styles.underTitle}>КАТЕГОРИИ</div>
    </>
  );
}

export default SideBarTop;
