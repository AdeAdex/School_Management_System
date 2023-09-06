import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './pages/Student/tailwind.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import portalReducer from "./redux/portalSlice"
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";


import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

i18n.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // default language
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
});


const store = configureStore({
    reducer: {
        portalReducer
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
  <Provider store = {store}>
    <App />
  </Provider>
  </I18nextProvider>
);
