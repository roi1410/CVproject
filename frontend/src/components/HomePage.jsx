import React from "react";
import HomeImg from "../assets/image/PDFform.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="overflow-hidden bg-backgrownd min-h-full ">
        <header className="   bg-gradient-to-t from-primary via-secondary  ">
          <div className="lg:px-28 lg:py-4 px-2 py-2 transform ">
            <div className="lg:grid lg:grid-cols-2 block lg:px-30 lg:py-16 px-2 py-2">
              <Link to={"Premium"} className="">
                <button
                  href="#"
                  className="flex bg-black mt-4 py-1 px-4 mb-4 bg-opacity-20 text-xs text-white rounded lg:rounded-full"
                >
                  premium 
                  <svg
                    xmlns={HomeImg}
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <h1 className="pt-10 mt-10 lg:text-7xl text-6xl py-10 lg:py-0 font-extralight text-opacity-80 text-gray-900">
                  Create your CV
                </h1>
              </Link>
              <div className="lg:visible invisible">
                <img
                  className="absolute ml-40"
                  width="850"
                  src={HomeImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>
        <main className="px-2 py-2 mt-4 lg:mt-12 ml-8 bg-primary">
       
            <div className="px-2 py-2 lg:px-28 lg:py-2 ">
              <div className="lg:grid lg:grid-cols-2 block">
                <div className="">
                  <p className="pt-20 pr-20 text-gray-600">
                    Millions of businesses of all sizes - from startups to large
                    enterprises - use Stripe's software and APIs to accept
                    payments, send payouts, and manage their businesses online.
                  </p>
                  <div className="pt-10 flex">
                    <Link
                      to={"Premium"}
                      className="flex bg-gray-800 py-2 px-4 text-sm font-semibold text-white rounded-full"
                    >
                      Start now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 mt-20 lg:2 grid grid-cols-2 gap-x-32 gap-y-3 lg:px-20 lg:py-16">
              {/* Render your images here */}
            </div>
         
        </main>
      </div>
    </>
  );
}

export default HomePage;
