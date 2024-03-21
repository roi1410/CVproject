import React, { useContext, useEffect, useState } from "react";
import { BlobProvider, PDFViewer, pdf, usePDF } from "@react-pdf/renderer";
import MyDoc from "../../PDFComponents/MyDoc";
import { allContext } from "../../context/PDFContex";
import Context from "../../context/Context";
import ControlGallerytPDF from "./ControlGalleyrtPDF";
import EditPDF from "../EditPDF";
export default function Gallery() {
  const { getUserCv, UserCv } = useContext(Context);
  const [indexCv, setIndexCv] = useState(0);
  useEffect(() => {
    getUserCv();
  }, []);

  const { state, PDFstyles } = useContext(allContext);

  function nextPdf() {
    if (indexCv <= UserCv.length - 1) {
      setIndexCv((prev) => prev + 1);
      console.log(indexCv);
    }
  }
  function prePdf() {
    if (indexCv > 0) {
      setIndexCv((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="h-full  bg-backgrownd flex flex-col  gap-40   ">
        <div className="flex flex-col items-center gap-10">
          <h1 className="headLine">Your PDF Galery</h1>
          <span>
            i have a hole in my hart that only dummy text can fill it not other text 
          </span>
        </div>
        <div
          id="default-carousel"
          className="relative m-4"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="overflow-hidden relative h-[56] rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
              ther are no PDF in your repository
            </span>
            {UserCv[0] && (
              <PDFViewer className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 size-full ">
                {UserCv[indexCv] && (
                  <MyDoc
                    state={UserCv[indexCv] ? UserCv[indexCv] : state}
                    PDFstyles={PDFstyles}
                  />
                )}
              </PDFViewer>
            )}
          </div>

          {/* Slider controls */}

          <button
            onClick={() => nextPdf()}
            type="button"
            className="flex absolute top-0 right-3 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-200 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-200/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={() => prePdf()}
          >
            <span className=" inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-200 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-200/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
        </div>
        {/* EDit deleate panel */}
        <ControlGallerytPDF
          currentCV={UserCv[indexCv]}
          setIndexCv={setIndexCv}
          indexCv={indexCv}
        />
      </div>
    </>
  );
}
