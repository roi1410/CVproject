import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PDFContext from "./PDFContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PDFContext>
      <App />
    </PDFContext>
  </React.StrictMode>
);
