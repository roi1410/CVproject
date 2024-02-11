import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import FrontendInput from "./FrontendInput";
import BackendInput from "./BackendInput";
import ManegmentInput from "./ManegmentInput";

function ExprienceForms({ register, control, index }) {
 
  return (
    <>
   

   <div className=" w-full  max-h-full box-border border-10 p-10 border">
      <label className=" text-sm font-medium text-gray-900 dark:text-gray-300">
        haw mach time the titled went?
      </label>
      <input
        defaultValue={"period"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`experiences.${index}.period`)}
      />

      <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
        titled name?
      </label>
      <input
        defaultValue={"company`"}
        className="block w-20 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
        {...register(`experiences.${index}.company`)}
      />

      <div className="grid grid-cols-3 border  ">
        
            <FrontendInput register={register} index={index} control={control}  />
            <BackendInput register={register} index={index} control={control} />
            <ManegmentInput register={register} index={index} control={control} />
     
          
    
      </div>
    </div>
    </>
  );
}

export default ExprienceForms;
