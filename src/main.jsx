import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './pages/Student/tailwind.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import portalReducer from "./redux/portalSlice"
const store = configureStore({
    reducer: {
        portalReducer
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <App />
  </Provider>
);
