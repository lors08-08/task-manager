import React from "react";
import SideBar from "./components/SideBar/SideBar";
import MainBox from "./components/MainBox/MainBox";
import styles from "./components/MainBox/MainBox.module.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.box}>
      <Route path="/:id?">
        <SideBar />
        <MainBox />
      </Route>
    </div>
  );
}

export default App;
