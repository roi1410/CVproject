import {useState} from "react";

function ExperienceSummery({ register }) {

  return (
    <div className="flex h-fit flex-col justify-center gap-2  dark:bg-gray-800">
      <h3 className=" text-xl font-bold dark:text-white">Practical Experience</h3>
      <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
        <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
          Frontend
        </label>
        <div className="flex">
          <div className="relative w-full flex flex-col gap-5 ">
            <input
              className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
              id="Frontend"
              name="Frontend"
              placeholder=""
              required=""
              type="tel"
              {...register("summary")}
            />
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSummery;
