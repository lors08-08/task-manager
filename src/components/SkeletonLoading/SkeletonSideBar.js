import React from "react";
import styles from "./SkeletonSideBar.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import check from "../../icons/iconsSkeleton/Check.svg"
import checkBottom from "../../icons/iconsSkeleton/CheckBottom.svg"
import deleteIcon from "../../icons/iconsSkeleton/Delete.svg"
function SkeletonSideBar() {
  const skeleton = [1, 2, 3, 4, 5, 6];
  const width = "100%";
  return (
    <div className={styles.sideBar}>
      <div className={styles.title}>
        <img
          src={check}
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
            src={checkBottom}
            alt="img"
            className={styles.checkIconBottom}
          />
          Завершенные
        </div>
        <div>
          <img
            src={deleteIcon}
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
