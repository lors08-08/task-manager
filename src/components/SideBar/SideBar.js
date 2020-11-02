import React from "react";
import styles from "./AppSideBar.module.css";
import Categories from "./Categories";
import SideBarTop from "./SideBarTop";
import SideBarBody from "./SideBarBody";
import SideBarBottom from "./SideBarBottom";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <SideBarTop />
      <Categories />
      <SideBarBody />
      <SideBarBottom />
    </div>
  );
}

export default SideBar;
