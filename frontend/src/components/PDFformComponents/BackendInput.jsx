import React from "react";
import { useFieldArray } from "react-hook-form";
import AppendBtn from "../../UI/AppendBtn";
import RemoveBtn from "../../UI/RemoveBtn";

function BackendInput({ register, index, control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `experiences[${index}].summary.Backend`,
  });

  return (
    <div className="">
      <span className="font-extralight text-sm">BackEnd experiences</span>
      <AppendBtn append={append} passTofunc={""} />
      <RemoveBtn remove={remove} fields={fields} />
      <div className="flex  gap-5 flex-col flex-wrap">
        {fields.map((item, indexBackend) => (
          <div key={item.id}>
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Backend
            </label>

            <input
              className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              {...register(
                `experiences[${index}].summary.Backend.${indexBackend}`
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackendInput;
