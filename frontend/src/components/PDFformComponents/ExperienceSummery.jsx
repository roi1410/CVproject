import { useContext, useState } from "react";
import EducationForm from "./EducationForm";
import ExprienceForms from "./ExprienceForms";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import { allContext } from "../../context/PDFContex";
import AppendBtn from "../../UI/AppendBtn";
import RemoveBtn from "../../UI/RemoveBtn";

function ExperienceSummery() {
  const {register,control}=useContext(allContext)
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <div className="  box-border  h-full ">
      <h1 className=" text-white text-bold">practical Experience </h1>
      <span>press the btn to add your Experience</span>
      <AppendBtn append={append}/>
      <RemoveBtn remove={remove} fields={fields}/>
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
