import React from "react";
import styles from "./Tasks.module.css";
import { colorsOpen } from "../../../redux/actions";
import Colors from "./Colors";
import { useDispatch, useSelector } from "react-redux";

function Body({ task }) {
  const colorsOpened = useSelector((state) => state.tasks.closed);
  const color = task.color;
  const selectedColorSwitcher = useSelector(
    (state) => state.tasks.selectedColorSwitcher
  );
  const dispatch = useDispatch();
  return (
    <>
      {colorsOpened ? (
        task.id === selectedColorSwitcher ? (
          <div
            className={styles.taskColors}
            style={{ backgroundColor: color }}
            onClick={() => {
              dispatch(colorsOpen(task.id));
            }}
          />
        ) : (
          <div
            className={styles.taskColors}
            style={{ backgroundColor: color }}
            onClick={() => {
              dispatch(colorsOpen(task.id));
            }}
          />
        )
      ) : task.id === selectedColorSwitcher ? (
        <div className={styles.taskColorsOpened}>
          <Colors task={task} />
        </div>
      ) : (
        <div
          className={styles.taskColors}
          style={{ backgroundColor: color }}
          onClick={() => {
            dispatch(colorsOpen(task.id));
          }}
        />
      )}
    </>
  );
}

export default Body;
