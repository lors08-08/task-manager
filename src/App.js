import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import MainBox from "./Components/MainBox/MainBox";
import styles from "./CSSmodules/MainBox/MainBox.module.css";
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
