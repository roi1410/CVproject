import { useState, useEffect, useContext } from "react";
import { allContext } from "../../context/PDFContex";
import axios from "axios";
import { uploadImg } from "../../util/utils";

function ImgInput() {
  const { register, url, setUrl } = useContext(allContext);


  
   async function call_uploadIng(img) {
    console.log("call uplodad");
    const res= await uploadImg(img)
    setUrl(res)
    

    
  }

  return (
    <div>
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-gray-500 dark:text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
          Click to upload or drag and drop
        </h2>
        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 512x512px)
        </p>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(event) => call_uploadIng(event.target.files[0])}
        />
     
      </label>
  
    </div>
  );
}

export default ImgInput;
