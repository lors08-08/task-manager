import React from "react";
import styles from "./MainBox.module.css";
import bell from "../../icons/iconsApp/Vector.svg";
import settings from "../../icons/iconsApp/Settings.svg";
import github from "../../icons/iconsApp/Github.svg";

function MainBoxIcons() {
  return (
    <div className={styles.headerIcons}>
      <div>
        <a href="https://github.com/lors08-08/to-do-app"><img src={github} alt="img" className={styles.githubIcon} /></a>
      </div>
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
