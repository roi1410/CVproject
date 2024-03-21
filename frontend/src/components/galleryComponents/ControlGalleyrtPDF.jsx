import React, { useContext } from "react";
import Context from "../../context/Context";


function ControlGallerytPDF({ currentCV, setIndexCv, indexCv }) {
  const { setUserCv, UserCv ,deleteUserCv} = useContext(Context);

  function deleteCV() {
    if (currentCV) {
      indexCv > 0 && setIndexCv(indexCv - 1);
      setUserCv(UserCv.filter((elm) => elm._id !== currentCV._id));
      deleteUserCv(currentCV._id)

      

    }
  }
  return (
    <div className=" container  rounded w-full flex  gap-3 justify-center bg-gradient-to-t from-backgrownd to-green-600 ring-4 ring-popUp  ">
      <button className=" m-2 p-3 w-20   text-secondary  bg-popUp border-setext-secondary dark:border-setext-secondary hover:bg-setext-secondary hover:border-setext-secondary inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:">
        Edit
      </button>
      <button
        onClick={() => deleteCV()}
        className=" m-2 p-3 w-20  text-secondary  bg-popUp border-setext-secondary dark:border-setext-secondary hover:bg-setext-secondary hover:border-setext-secondary inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
      >
        Delete
      </button>
      <button
        onClick={() => console.log(currentCV)}
        className=" m-2 p-3 w-20  text-secondary  bg-popUp border-setext-secondary dark:border-setext-secondary hover:bg-setext-secondary hover:border-setext-secondary inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
      >
        currentCV
      </button>
      <button
        onClick={() => console.log(UserCv)}
        className=" m-2 p-3 w-20  text-secondary  bg-popUp border-setext-secondary dark:border-setext-secondary hover:bg-setext-secondary hover:border-setext-secondary inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
      >
        (UserCv)
      </button>
      <button
        onClick={() => console.log(indexCv)}
        className=" m-2 p-3 w-20  text-secondary  bg-popUp border-setext-secondary dark:border-setext-secondary hover:bg-setext-secondary hover:border-setext-secondary inline-flex items-center justify-center rounded-md border  text-center text-base transition hover:text-white lg:"
      >
        (indexCv)
      </button>
    </div>
  );
}

export default ControlGallerytPDF;
