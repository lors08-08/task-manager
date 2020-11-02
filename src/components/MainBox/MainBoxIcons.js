import React from "react";
import styles from "./MainBox.module.css";

function MainBoxIcons() {
  return (
    <div className={styles.headerIcons}>
      <div>
        <img
          src={require("../../icons/iconsApp/Vector.svg")}
          alt="img"
          className={styles.bellIcon}
        />
      </div>
      <div>
        <img
          src={require("../../icons/iconsApp/Settings.svg")}
          alt="img"
          className={styles.settingsIcon}
        />
      </div>
      <div className={styles.profileIcon} />
    </div>
  );
}

export default MainBoxIcons;
