import React, { useContext } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import { allContext } from "../../PDFContex";

function EducationFormFather() {
  const {register,control}=useContext(allContext)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <div className="  box-border  h-full">
      <h1 className=" text-white text-bold">We need no Education</h1>
      <button
        onClick={() => append()}
        className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => remove(fields.length - 1)}
        className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 15">
          <path
            d="M3 6h10a1 1 0 010 2H3a1 1 0 010-2z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className=" overflow-scroll">
        {fields.map((item, index) => (
          <EducationForm
            register={register}
            control={control}
            remove={remove}
            key={item.id}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default EducationFormFather;
