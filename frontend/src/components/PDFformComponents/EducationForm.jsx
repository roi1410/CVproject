import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import AppendBtn from "../../UI/AppendBtn";
import RemoveBtn from "../../UI/RemoveBtn";
function EducationForm({ register, control, index }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `education[${index}].awarded`,
  });
  return (
    <div className="  max-h-full ">
      <label className=" text-sm font-medium text-gray-900 ">
        haw mach time the titled went?
      </label>
      <input
        defaultValue={"period"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`education.${index}.period`)}
      />

      <label className="text-sm font-medium text-gray-900 ">
        titled name?
      </label>
      <input
        defaultValue={"titled`"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`education.${index}.titled`)}
      />

      <span>Add Awards</span>
      <AppendBtn append={append}/>
      <RemoveBtn remove={remove} fields={fields}/>
      
      
      <div className="flex gap-5 ">
        {fields.map((item, indexaword) => (
          <div key={item.id}>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              awarded
            </label>

            <input
              className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              {...register(`education.${index}.awarded.${indexaword}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationForm;
