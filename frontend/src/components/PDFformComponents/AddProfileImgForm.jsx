import React, { useContext, useState } from "react";
import ImgInput from "./ImgInput";
import Certificates from "../../PDFComponents/Certificates";
import { allContext } from "../../context/PDFContex";

export default function AddProfileImgForm() {
  const [ImgArray, setImgArray] = useState([]);

  return (
    <div className="flex flex-col h-full items-center gap-8">

  
      <h1>Add Your profile img</h1>
      <span> dummy text is for u and for me because something need to take this place. i am not going to seat here all day ,for that the dummy text is hear. <br /> tnx dummy text i dont know  what i would do without you </span>

      <ImgInput setImgArray={setImgArray} /> 
       </div>
  );
}
