import React, { useState } from "react";
import PDF from "../PDFComponents/PDF";
import PDFforms from "./PDFforms";
import { Link } from "react-router-dom";

function EditPDF() {
  const pathArray = [
    "",
    "ContactsForm",
    "ExperienceSummery",
    "EducationFormFather",
    "CertificatesForm",
    "SendData"
  ];
  const [index, setIndex] = useState(0);

  function NextStepHandler() {
    if (index <5) {
   
      setIndex((prev) => prev + 1);
    }
    console.log(index);
  }
  function GoBackHandler() {
    if (index > 0) {
     
      setIndex((prev) => prev - 1);
    }
    console.log(index);
  }
  return (
    <div className=" mt-1  bg-black  grid h-90% grid-cols-2">
      <div className=" border-8 p-10 h-full flex items-center flex-col gap-5">
        <h1 className=" text-white">PDF</h1>
        <PDF />
      </div>
      <div className="flex h-full flex-col justify-center gap-2 bg-gray-800 border-8 overflow-scroll">
        <PDFforms />
        <div className="flex justify-between box-border p-4">
          <Link onClick={() => GoBackHandler()} to={pathArray[index]}>
            <button
              onClick={() => {}}
              className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
            >
              GoBack
            </button>
          </Link>
          <Link onClick={() => NextStepHandler()} to={pathArray[index]}>
            <button
              onClick={() => {}}
              className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
            >
              Next Step
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditPDF;
