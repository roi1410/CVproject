import React, { useContext, useState } from "react";
import { allContext } from "../../PDFContex";

function SendDataBtn() {
  const { state } = useContext(allContext);
  const [allPDF, setAllPDF] = useState([state]);
  function PDFArray() {
    setAllPDF((prev) => [...prev, state]);
  }

  return (
    <>
      <div className="flex flex-col content-around h-full">
        <h1 className="font-bold">save the PDF sheet</h1>
        <button
          className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
          onClick={() => PDFArray()}
        >
          SendData
        </button>
      </div>
    </>
  );
}

export default SendDataBtn;
