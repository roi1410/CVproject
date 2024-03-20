import { useContext, useReducer, useEffect, useState } from "react";

import { allContext } from "../context/PDFContex";

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
        className="h-full box-border p-7 "
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
