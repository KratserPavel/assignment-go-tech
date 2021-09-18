import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { formReducer } from "./reducers/form/reducer";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

let rootReducer = combineReducers({
  form: formReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
