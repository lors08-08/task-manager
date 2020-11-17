import React from "react";
import SkeletonSideBar from "./SkeletonSideBar";
import styles from "./SkeletonBox.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import searchIcon from "../../icons/iconsSkeleton/Search.svg"
import bellIcon from "../../icons/iconsSkeleton/Vector.svg"
import settings from "../../icons/iconsApp/Settings.svg"
import group6 from "../../icons/iconsApp/Group6.svg"

function SkeletonBox() {
  return (
    <div className={styles.box}>
      <SkeletonSideBar />
      <div className={styles.mainBox}>
        <div className={styles.header}>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <img
                src={searchIcon}
                alt="img"
                width={20}
              />
            </div>
            <input type="search" className={styles.searchBar} />
          </div>
          <div className={styles.headerIcons}>
            <div>
              <img
                src={bellIcon}
                alt="img"
                className={styles.bellIcon}
              />
            </div>
            <div>
              <img
                src={settings}
                alt="img"
                className={styles.settingsIcon}
              />
            </div>
            <SkeletonTheme color="#d6d5d5">
              <Skeleton circle={true} height={30} width={30} />
            </SkeletonTheme>
          </div>
        </div>
        <div className={styles.tasksEmptyBox}>
          <div className={styles.tasksEmpty}>
            <img
              src={group6}
              alt="img"
              className={styles.img}
            />
            <div className={styles.tasksEmptyTitle}>В списке еще нет ни одной задачи.
              Воспользуйся формой выше, чтобы добавить
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonBox;
