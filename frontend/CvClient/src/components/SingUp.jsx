import { useState } from "react";

import { useForm } from "react-hook-form";

function SingUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Username: "",
      password: "",
      email: "",
      Degree: [],
    },
  });
  function validateEmail(email) {
    // Regular expression for a basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
  }
  function validatePassword(password) {
    // Regular expressions for password validation
    const lowercasePattern = /[a-z]/;
    const uppercasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;

    // Check if the password meets the criteria
    return (
      lowercasePattern.test(password) &&
      uppercasePattern.test(password) &&
      numberPattern.test(password)
    );
  }
  function containsLettersAndNumbers(username) {
    const letterPattern = /[a-zA-Z]/;
    const numberPattern = /[0-9]/;

    return letterPattern.test(username) && numberPattern.test(username);
  }

  return (
    <>
      <div className="relative flex flex-col rounded-xl bg-primary  bg-clip-border text-gray-700 shadow-none items-center ">
        <h4 className="text-blue-gray-900 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
          Sign Up
        </h4>

        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to register.
        </p>
        <form
          onSubmit={handleSubmit((data) => setInput(data))}
          className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            {/* username */}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                {...register("Username", {
                  required: "Username is required",
                  validate: {
                    maxLength: (v) =>
                      v.length < 20 ||
                      "the Username shold be lower than 20 chars",
                    minLength: (v) =>
                      v.length > 4 ||
                      "the username need to be higher than 4 chars",
                    pattern: (v) =>
                      containsLettersAndNumbers(v) ||
                      "the username need to contain letters and numbers",
                    exsistingUser: (v) =>
                      !UserLocalStorege?.some(
                        (element) => element.Username === v
                      ) || "this Username is alrady taken",
                  },
                })}
              />
              {errors.Username?.message && (
                <span className="text-red-500">{errors.Username.message}</span>
              )}
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                Username
              </label>
            </div>
            {/* email */}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
                {...register("email", {
                  required: "email is required",
                  validate: {
                    minLength: (v) => v.length < 50 || "too many chars",
                    pattern: (v) => validateEmail(v) || "this is not an email ",
                  },
                })}
              />
              {errors.email?.message && (
                <span className="text-red-500">{errors.email.message}</span>
              )}

              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent">
                Email
              </label>
            </div>
            {/* password */}
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                {...register("password", {
                  required: "passowrd is required",
                  validate: {
                    pattern: (v) =>
                      validatePassword(v) ||
                      "the password shold contain capital letters numbers and regular letters",
                  },
                })}
               
                type="password"
                className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full w-full rounded-md border border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
              />
              {errors.password?.message && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <label className="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
                Password
              </label>
            </div>
            {/* degree */}
            <h1>choose your title</h1>
          </div>

          <button
            className="mt-6 block w-full select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Register
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
            {/*Link  */}
            <span
              className="cursor-pointer font-medium text-blue-500 transition-colors hover:text-blue-700"
              onClick={() => {
                LogIn_nav("#");
              }}
            >
              LogIn
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SingUp;
