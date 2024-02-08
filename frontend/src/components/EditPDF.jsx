import React from "react";
import PDF from "../PDFComponents/PDF";
import PDFforms from "./PDFforms";
import "../styles/app.css";
import SendDataBtn from "./PDFformComponents/SendDataBtn";

function EditPDF() {
  return (
    <div className=" mt-1 justify-between items-center bg-black  grid h-screen grid-cols-2">
      <div className=" border-8 p-10 h-screen flex items-center flex-col gap-5">
        <h1 className=" text-white">PDF</h1>
        <PDF />
      </div>
      <div className="flex h-screen flex-col justify-center gap-2 bg-gray-800 border-8">
        <PDFforms />
        <div className="flex justify-between box-border p-4">
          <button className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:">
            Go back
          </button>
          <button className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:">
            Next Step
          </button>
          <SendDataBtn></SendDataBtn>
        </div>
      </div>
    </div>
  );
}

export default EditPDF;
