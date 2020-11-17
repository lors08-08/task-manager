import React from "react";
import styles from "./MainBox.module.css";
import bell from "../../icons/iconsApp/Vector.svg";
import settings from "../../icons/iconsApp/Settings.svg";

function MainBoxIcons() {
  return (
    <div className={styles.headerIcons}>
      <div>
        <img src={bell} alt="img" className={styles.bellIcon} />
      </div>
      <div>
        <img src={settings} alt="img" className={styles.settingsIcon} />
      </div>
      <div className={styles.profileIcon} />
    </div>
  );
}

export default MainBoxIcons;
