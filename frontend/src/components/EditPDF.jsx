import React from "react";
import PDF from "../PDFComponents/PDF";
import PDFforms from "./PDFforms";

function EditPDF() {
  return (
    <div className="flex">
      <PDF />
      <PDFforms />
    </div>
  );
}

export default EditPDF;
