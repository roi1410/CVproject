import {useState} from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
function ExperienceForm({ register }) {
  
    const [addFrontendInput,setAddFrontendInput]=useState(['1'])
    const [addBackendInput,setAddBackendInput]=useState(['1'])
    const [addManagementInput,setAddManagementInput]=useState(['1'])
    const pushArry="hi"
  
  return (
    <div className="flex h-fit flex-col justify-center gap-2  dark:bg-gray-800">
      <h3 className=" text-xl font-bold dark:text-white">
      Experience
      </h3>

      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
          period
          </label>
          <div className="flex">
            <div className="relative w-full">
              <input
                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                id="period"
                name="period"
                placeholder=""
                required=""
               
                {...register("period")}
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
          company
          </label>
          <div className="flex">
            <div className="relative w-full">
              <input
                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                id="company"
                name="company"
                placeholder="e.g., +(12)3456 789"
                required=""
               
                {...register("company")}
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
          company
          </label>
          <div className="flex">
            <div className="relative w-full">
              <input
                className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                id="company"
                name="company"
                placeholder=""
                required=""
               
                {...register("company")}
              />
            </div>
          </div>
        </div>
      

      </div>
    </div>
  );
}

export default ExperienceForm;
