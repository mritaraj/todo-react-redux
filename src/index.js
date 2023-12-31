import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const store = createStore(reducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
