import React from "react";
import SkeletonSideBar from "./SkeletonSideBar";
import styles from "../../CSSmodules/Skeleton/SkeletonBox.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonBox() {
  return (
    <div className={styles.box}>
      <SkeletonSideBar />
      <div className={styles.mainBox}>
        <div className={styles.header}>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <img src="/iconsSkeleton/Search.svg" alt="img" width={20} />
            </div>
            <input type="search" className={styles.searchBar} />
          </div>
          <div className={styles.headerIcons}>
            <div>
              <img
                src="/iconsSkeleton/Vector.svg"
                alt="img"
                className={styles.bellIcon}
              />
            </div>
            <div>
              <img
                src="/iconsApp/Settings.svg"
                alt="img"
                className={styles.settingsIcon}
              />
            </div>
            <SkeletonTheme color="#d6d5d5">
              <Skeleton circle={true} height={30} width={30} />
            </SkeletonTheme>
          </div>
        </div>
        <div className={styles.tasks}>
          <img
            src="./iconsSkeleton/Group%206.svg"
            alt="img"
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
}

export default SkeletonBox;
