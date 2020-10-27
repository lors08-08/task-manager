import React from "react";
import styles from "../../../../CSSmodules/MainBox/Tasks.module.css";
import { selectColor } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Colors({ task }) {
  const dispatch = useDispatch();
  const pink = "#DED3FF";
  const green = "#00BA88";
  const red = "#ED2E7E";
  const orange = "#F4B740";
  const purple = "#5F2EEA";
  const lightBlue = "#1CC8EE";
  return (
    <div className={styles.taskColorsOpened}>
      <div
        className={styles.colorPink}
        onClick={() => {
          dispatch(selectColor(task.id, pink));
        }}
      />
      <div
        className={styles.colorGreen}
        onClick={() => {
          dispatch(selectColor(task.id, green));
        }}
      />
      <div
        className={styles.colorRed}
        onClick={() => {
          dispatch(selectColor(task.id, red));
        }}
      />
      <div
        className={styles.colorOrange}
        onClick={() => {
          dispatch(selectColor(task.id, orange));
        }}
      />
      <div
        className={styles.colorPurple}
        onClick={() => {
          dispatch(selectColor(task.id, purple));
        }}
      />
      <div
        className={styles.colorLightBlue}
        onClick={() => {
          dispatch(selectColor(task.id, lightBlue));
        }}
      />
    </div>
  );
}

export default Colors;
