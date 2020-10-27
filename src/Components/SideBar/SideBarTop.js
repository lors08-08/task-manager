import React from "react";
import styles from "../../CSSmodules/SideBar/AppSideBar.module.css";

function SideBarTop() {
  return (
    <>
      <div className={styles.title}>
        <img src="/iconsApp/Check.svg" alt="img" className={styles.checkIcon} />
        TodoLors
      </div>
      <div className={styles.underTitle}>КАТЕГОРИИ</div>
    </>
  );
}

export default SideBarTop;
