import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import application from "./redux/application";
import categories from "./redux/categories";
import tasks from "./redux/tasks";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {BrowserRouter, Route} from "react-router-dom";

const rootReducer = combineReducers({
  application,
  categories,
  tasks,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:id?">
          <App/>
        </Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
