import React from "react";
import { useFieldArray } from "react-hook-form";

function ManegmentInput({ register, index, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `experiences[${index}].summary.Management`,
  });

  return (
    <div>
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
      <div className="flex items-start gap-5 flex-col" >
        {fields.map((item, indexManagement) => (
          <div key={item.id}>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Management
            </label>
            <button onClick={() => remove(indexManagement)}>Management</button>
            <input
              className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              {...register(
                `experiences[${index}].summary.Management.${indexManagement}`
              )}
            />
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default ManegmentInput;
