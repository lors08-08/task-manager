import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonBox from "./components/SkeletonLoading/SkeletonBox";
import { loadCategories } from "./redux/actions";
import styles from "./components/MainBox/MainBox.module.css";
import SideBar from "./components/SideBar/SideBar";
import TasksBox from "./components/MainBox/TasksBox";

function App() {
  const dispatch = useDispatch();
  const loadingCategories = useSelector((state) => state.categories.loading);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if(loadingCategories) {
    return <SkeletonBox />
  }

  return(
    <div className={styles.box}>
      <SideBar />
      <TasksBox />
    </div>
  )
}

export default App;
