import React, { useContext } from "react";
import { allContext } from "../../context/PDFContex";

function AboutMe() {
  const { register } = useContext(allContext);
  return (
    <div className="h-full flex justify-center items-center flex-col">
      <h1 className="p-20 font-bold text-white"> About Me Section</h1>
      <p className="font-mono">dummy text it not just any text. dummy text is kind of a joker of all text, read it feel it and make the most out of it <br />winston cherchil once said "dummy text is wonderfull and if you are good you also can see the smerf (dardasim)"</p>

    
      <textarea
        className="h-[40vh] w-[50vw] resize-none rounded-3xl border border-secondary  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-blue-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-blue-200 placeholder-shown:border-t-blue-blue-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-blue-50"
        placeholder=" "
        rows={5}
        cols={40}
        {...register("aboutDescription")}
      ></textarea>
    </div>
  );
}

export default AboutMe;
