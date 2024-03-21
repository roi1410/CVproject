import React, { useContext, useState } from "react";
import { allContext } from "../../context/PDFContex";
import Context from "../../context/Context";

function SendDataBtn() {
  const { state } = useContext(allContext);
  const { sendPDFAPI } = useContext(Context);

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="font-bold pb-10">save the PDF sheet</h1>
          <p>
            when i am sitting hear and wonder what should i wright inside the
            dummy text box i am black out i have a difficult time to think what
            i should put here then i remember that dummy text is every thing its
            me and you even the room that we are in it just start writing but
            don't wright too long the space here is limited {" "}
          </p>
        </div>
        <button
          className=" p-3  text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
          onClick={() => sendPDFAPI(state)}
        >
          save PDF
        </button>
      </div>
    </>
  );
}

export default SendDataBtn;
