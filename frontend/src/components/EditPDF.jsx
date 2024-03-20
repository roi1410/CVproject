import React, { useContext, useEffect, useState } from "react";
import PDF from "../PDFComponents/PDF";
import PDFforms from "./PDFforms";
import { Link, useNavigate } from "react-router-dom";
import Context from "./../context/Context";

function EditPDF() {
  const nav = useNavigate();
  const { checkUserRole, isAuthorize } = useContext(Context);

  useEffect(() => {
    if (!isAuthorize) {
      return nav("/");
    }
  }, []);

  const pathArray = [
    "",
    "ContactsForm",
    "ExperienceSummery",
    "EducationFormFather",
    "CertificatesForm",
    "SendData",
  ];
  const [index, setIndex] = useState(1);

  function NextStepHandler() {
    if (index < 5) {
      setIndex(index + 1);

    }
    
  }
  function GoBackHandler() {
    if (index > 0) {
      setIndex( index - 1);
    }
    
  }
  return (
    <div className="   bg-backgrownd  grid  grid-cols-6">
      <div className=" border-8 p-10 h-full flex items-center flex-col gap-5 col-span-2">
        <h1 className=" text-white">PDF</h1>
        <PDF />
      </div>
      <div className="flex h-full flex-col justify-center gap-2  border-8 overflow-scroll col-span-4">
        <PDFforms />
        <div className="flex justify-between box-border p-4">
          <Link onClick={() => GoBackHandler()} to={pathArray[index]}>
            <button
              onClick={() => {}}
              className=" p-3  text-secondary dark:text-white border-sebg-secondary dark:border-indigo-400 hover:bg-secondary hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
            >
              GoBack
            </button>
          </Link>
          <Link onClick={() => NextStepHandler()} to={pathArray[index]}>
            <button
              onClick={() => {}}
              className=" p-3  text-secondary dark:text-white border-sebg-secondary dark:border-indigo-400 hover:bg-secondary hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
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
