import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import ApplicationProvider from "./context/ApplicationContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <ApplicationProvider>

      <App />

    </ApplicationProvider>

  </BrowserRouter>

);