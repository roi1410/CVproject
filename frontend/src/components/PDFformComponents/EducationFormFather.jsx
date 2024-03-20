import React, { useContext } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import { allContext } from "../../context/PDFContex";
import AppendBtn from "../../UI/AppendBtn";
import RemoveBtn from "../../UI/RemoveBtn";

function EducationFormFather() {
  const { register, control } = useContext(allContext);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  return (
    <div className="  box-border  h-full">
      <h1 className=" text-white text-bold">We need no Education</h1>
      <AppendBtn append={append} />
      <RemoveBtn remove={remove} fields={fields} />
      <div className=" ">
        {fields.map((item, index) => (
          <EducationForm
            register={register}
            control={control}
            remove={remove}
            key={item.id}
            index={index}
          />
        ))}
      <br className="h-19 w-10 bg-black" />
      </div>
    </div>
  );
}

export default EducationFormFather;
