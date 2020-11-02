import React from "react";
import styles from "./SkeletonSideBar.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonSideBar() {
  const skeleton = [1, 2, 3, 4, 5, 6];
  const width = "100%";
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}>
        <img
          src={require("../../icons/iconsSkeleton/Check.svg")}
          alt="img"
          className={styles.checkIcon}
        />
        TodoLors
      </div>
      <div className={styles.underTitle}>КАТЕГОРИИ</div>
      <div className={styles.categories}>
        {skeleton.map((item) => {
          return (
            <div key={item} className={styles.catalog}>
              <SkeletonTheme color="#e6e3e3">
                <Skeleton count={1} height={40} width={width} />
              </SkeletonTheme>
            </div>
          );
        })}
      </div>
      <div className={styles.bottom}>
        <div>
          <img
            src={require("../../icons/iconsSkeleton/CheckBottom.svg")}
            alt="img"
            className={styles.checkIconBottom}
          />
          Завершенные
        </div>
        <div>
          <img
            src={require("../../icons/iconsSkeleton/Delete.svg")}
            alt="img"
            className={styles.checkIconBottom}
          />
          Корзина
        </div>
      </div>
    </div>
  );
}

export default SkeletonSideBar;
