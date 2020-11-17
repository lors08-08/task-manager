import React, { useState } from "react";
import styles from "./Tasks.module.css";
import { saveTask, setTaskValue } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import plus from "../../../icons/iconsApp/Plus.svg";
import starIcon from "../../../icons/iconsApp/Star.svg";
import starredIcon from "../../../icons/iconsApp/StarTail.svg";

function TasksHeader(props) {
  const [show, setShow] = useState(false);
  const underInputWrapper = classNames(styles.underInput, {
    [styles.underInputShow]: show,
  });
  const dispatch = useDispatch();
  const addTaskValue = useSelector((state) => state.tasks.addTaskValue);
  const idCategory = useParams().id;
  const time = moment().calendar();
  const [starred, setStarred] = useState(false);
  const handleChange = (e) => {
    dispatch(setTaskValue(e.target.value));
  };
  const handleSend = () => {
    addTaskValue.length >= 1 &&
      dispatch(saveTask(addTaskValue, idCategory, time, starred));
    setStarred(false);
  };
  const handleSendStarred = () => {
    setStarred(!starred);
  };
  if (props.done === undefined && props.deleted === undefined)
    return (
      <>
        <div className={styles.inputHeader}>
          <div className={styles.inputBlock}>
            <img
              src={plus}
              alt="img"
              className={styles.plus}
              onClick={() => handleSend()}
            />
            <input
              type="search"
              onChange={handleChange}
              onFocus={() => {
                setShow(true);
              }}
              onBlur={() => {
                setShow(false);
              }}
              className={styles.input}
              value={addTaskValue}
              placeholder={"Что нужно сделать?"}
            />
          </div>
          <img
            src={starred ? starredIcon : starIcon}
            alt="img"
            className={styles.star}
            onClick={() => handleSendStarred()}
          />
        </div>
        <div className={underInputWrapper}>Нажмите Enter, чтобы сохранить</div>
      </>
    );
  else return null;
}

export default TasksHeader;
