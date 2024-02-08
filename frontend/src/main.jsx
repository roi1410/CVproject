import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PDFContext from "./PDFContex.jsx";
import { ContextProvider } from "./components/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ContextProvider>
    <PDFContext>
      <App />
    </PDFContext>
    </ContextProvider>
  </React.StrictMode>
);
