import React from "react";
import styles from "../../CSSmodules/MainBox/MainBox.module.css";

function MainBoxIcons() {
  return (
    <div className={styles.headerIcons}>
      <div>
        <img src="/iconsApp/Vector.svg" alt="img" className={styles.bellIcon} />
      </div>
      <div>
        <img
          src="/iconsApp/Settings.svg"
          alt="img"
          className={styles.settingsIcon}
        />
      </div>
      <div className={styles.profileIcon}></div>
    </div>
  );
}

export default MainBoxIcons;
