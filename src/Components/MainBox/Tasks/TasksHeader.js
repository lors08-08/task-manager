import React from "react";
import styles from "../../../CSSmodules/MainBox/Tasks.module.css";
import {
  saveTask,
  saveTaskWithStar,
  setTaskValue,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";

function TasksHeader() {
  const dispatch = useDispatch();
  const addTaskValue = useSelector((state) => state.tasks.addTaskValue);
  const idCategory = useParams().id;
  const time = moment().calendar();
  const handleChange = (e) => {
    dispatch(setTaskValue(e.target.value));
  };
  const handleSend = () => {
    addTaskValue.length >= 1 &&
      dispatch(saveTask(addTaskValue, idCategory, time));
  };
  const handleSendStarred = () => {
    addTaskValue.length >= 1 &&
      dispatch(saveTaskWithStar(addTaskValue, idCategory, time));
  };
  return (
    <>
      <div className={styles.inputHeader}>
        <div className={styles.inputBlock}>
          <img
            src="/iconsApp/Plus.svg"
            alt="img"
            className={styles.plus}
            onClick={() => handleSend()}
          />
          <input
            type="search"
            onChange={handleChange}
            className={styles.input}
            value={addTaskValue}
            placeholder={"Что нужно сделать?"}
          />
        </div>
        <img
          src="/iconsApp/Star.svg"
          alt="img"
          className={styles.star}
          onClick={() => handleSendStarred()}
        />
      </div>
      <div className={styles.underInput}>Нажмите Enter, чтобы сохранить</div>
    </>
  );
}

export default TasksHeader;
