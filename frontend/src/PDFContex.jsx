import { StyleSheet } from "@react-pdf/renderer";
import { createContext, useState } from "react";

export const allContext = createContext({ PDFstyles: {} });

const PDFContext = ({ children }) => {
  const PDFstyles = StyleSheet.create({
    container: {
      display: "flex",
      width: "100%",
    },

    pdfViewer: {
      width: "100%",
      height: "100%",
    },
    page: {
      top: "0px",
      height: "841px",
      width: "100%",
      backgroundColor: "#606060",
    },
    headingPrimary: {
      fontSize: 20,
      fontWeight: "700",
      textAlign: "center",
      fontFamily: "TitilliumWeb-Black",
    },
    whiteText: {
      color: "#fff",
    },
    containerDiv: {
      height: "70vh",
      width: "60vh",
    },
  });
  const test = "test";

  
  return <allContext.Provider value={{ PDFstyles }}>{children}</allContext.Provider>;
};
export default PDFContext;