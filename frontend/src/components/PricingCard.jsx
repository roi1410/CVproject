import React from "react";

function PricingCard({price, kind,packegeBenfits, onClickFunc}) {
  return (
    <div className="flex-1 w-full mb-6 bg-popUp rounded-xl shadow-xl lg:scale-95">
      <div className="text-center p-12">
        <p className="text-3xl lg:text-2xl xl:text-3xl pb-4">{kind}</p>
        <div className="flex justify justify-center items-center">
          <span className="font-extrabold text-5xl lg:text-4xl xl:text-6xl align-text-middle px-3">
            $ {price}
          </span>
          <span className="font-normal text-xl text-gray-500 inline-block align-text-middle">
            /month
          </span>
        </div>
      </div>
      <div className="bg-secondary rounded-b-xl border-t-2 border-gray-200/20 p-10">
        <ul className="space-y-4">
          {packegeBenfits.map((Benfit,index)=>{
            return(

          <li key={index} className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-500">
              {Benfit}
            </span>
          </li>
            )
          })}
         
        </ul>
        <button
        onClick={onClickFunc}
          type="button"
          className="w-full text-center bg-popUp text-lg text-indigo-600 mt-8 p-3 rounded shadow-xl transition hover:text-white hover:bg-indigo-600"
        >
          Start your trial
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
