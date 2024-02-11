import { useContext, useState } from "react";
import EducationForm from "./EducationForm";
import ExprienceForms from "./ExprienceForms";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { allContext } from "../../PDFContex";

function ExperienceSummery() {
  const {register,control}=useContext(allContext)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <div className="  box-border overflow-scroll h-full ">
      <h1 className=" text-white text-bold">practical Experience </h1>
      <span>press the btn to add your Experience</span>
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
      {fields.map((item, index) => (
        <ExprienceForms
          register={register}
          control={control}
          remove={remove}
          key={item.id}
          index={index}
        />
      ))}
    </div>
  );
}

export default ExperienceSummery;
// experiences: [
//   {
//     period: "4",
//     company: "Microsoft",
//     summary: {
//       Frontend: ["Figma", "reactjsx"],
//       Backend: ["node.js", "Technology"],
//       management: ["head of  a fullstack team ", "head of cyber"],
//     },
//   },
// ],
