import React from "react";

function PDFName({ register }) {
  return (
    <div className="w-96">
      <h1 className=""> PDF name</h1>
      <div className="relative w-full min-w-[200px]">
      <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="PDFName"
                  name="PDFName"
                  placeholder="Enter the PDF name"
                  required=""
                  {...register("PDFName")}
                />
      </div>
    </div>
  );
}

export default PDFName;
