import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ThemeWrapper from "./components/ThemeWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <Home></Home>
      </ThemeWrapper>
    </Provider>
  </StrictMode>
);
