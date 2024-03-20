import React, { useContext } from "react";
import { allContext } from "../../context/PDFContex";

function ContactsForm() {
  const {register}=useContext(allContext)
  return (

    <>
        <h3 className=" text-xl font-bold dark:text-white">
        Contacts
        </h3>

          {/* <!-- First Name --> */}
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              First Name
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                  required=""
                  {...register("fullName")}
                />
              </div>
            </div>
          </div>
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
            primaryPosition
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                  required=""
                  {...register("primaryPosition")}
                />
              </div>
            </div>
          </div>

          {/* <!-- Last Name --> */}

          {/* <!-- Address --> */}
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Address
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="address"
                  name="address"
                  placeholder="California"
                  {...register("address")}
                  required=""
                />
              </div>
            </div>
          </div>

          {/* <!-- Email --> */}
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Email
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="email"
                  name="email"
                  placeholder="example@company.com"
                  required=""
                  {...register("email")}
                  type="email"
                />
              </div>
            </div>
          </div>

          {/* <!-- Phone Number --> */}
          <div className="col-span-6 grid grid-cols-1 gap-y-2 sm:col-span-3">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Phone Number
            </label>
            <div className="flex">
              <div className="relative w-full">
                <input
                  className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-secondary dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                  id="phone-number"
                  name="phone-number"
                  placeholder="e.g., +(12)3456 789"
                  required=""
                  type="tel"
                  {...register("tel")}
                />
              </div>
            </div>
          </div>
    </>
  );
}

export default ContactsForm;
