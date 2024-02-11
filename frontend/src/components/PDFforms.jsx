import { useContext, useReducer, useEffect, useState } from "react";
import AboutMeForm from "./PDFformComponents/AboutMeForm";
import { useForm } from "react-hook-form";
import ContactsForm from "./PDFformComponents/ComtactsForm";
import ExperienceForm from "./PDFformComponents/ExperienceForm";
import ExperienceSummery from "./PDFformComponents/ExperienceSummery";
import EducationFormFather from "./PDFformComponents/EducationFormFather";
import { PDFredocer } from "../PDFredocer";
import { allContext } from "../PDFContex";
import { useDebounceValue, useInterval } from "usehooks-ts";
import CertificatesForm from "./PDFformComponents/CertificatesForm";
import { Outlet } from "react-router-dom";

function PDFforms() {
  const { dispatch, state, setValue ,handleSubmit,watch,trigger} = useContext(allContext);


  useEffect(() => {
    const formData = watch();

    setValue(formData);
  }, [watch()]);

  return (
    <>
      <form
        className="h-full box-border "
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <Outlet/>
        {/* <AboutMeForm  />  */}
        {/* <ContactsForm/> */}
        {/* <ExperienceSummery/> */}
        {/* <EducationFormFather /> */}
        {/* <CertificatesForm /> */}
        
      </form>
    </>
  );
}

export default PDFforms;
