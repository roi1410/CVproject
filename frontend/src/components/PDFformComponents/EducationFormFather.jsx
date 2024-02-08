import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";

function EducationFormFather({ register, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <>
    <h1 className=" text-white text-bold">We need no Education</h1>
    <span>press the btn to add your period</span>
      <button
        onClick={() => append()}
        className="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div className=" h-full box-border">
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

    </>
  );
}

export default EducationFormFather;
