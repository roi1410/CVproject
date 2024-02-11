import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

function EducationForm({ register, control, index }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `education[${index}].awarded`,
  });
  return (
    <div className="  max-h-full ">
      <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
        haw mach time the titled went?
      </label>
      <input
        defaultValue={"period"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`education.${index}.period`)}
      />

      <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
        titled name?
      </label>
      <input
        defaultValue={"titled`"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`education.${index}.titled`)}
      />

      <span>Add Awards</span>
      <button
        onClick={() => append("")}
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
      <div className="flex overflow-scroll gap-5 ">
        {fields.map((item, indexaword) => (
          <div key={item.id}>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              awarded
            </label>

            <input
              className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              {...register(`education.${index}.awarded.${indexaword}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationForm;
