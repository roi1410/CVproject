import {useContext, useReducer,useEffect, useState} from "react";
import AboutMeForm from "./PDFformComponents/AboutMeForm";
import { useForm } from "react-hook-form";
import ContactsForm from "./PDFformComponents/ComtactsForm";
import ExperienceForm from "./PDFformComponents/ExperienceForm";
import ExperienceSummery from "./PDFformComponents/ExperienceSummery";
import EducationFormFather from "./PDFformComponents/EducationFormFather";
import { PDFredocer } from "../PDFredocer";
import { allContext } from "../PDFContex";
import { useDebounceValue, useInterval } from "usehooks-ts";

function PDFforms() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      AboutMe: "",
    },
  });
  const {dispatch,state,setValue}=useContext(allContext)
  
  
  useEffect(() => {

    const formData = watch()
  
      setValue(formData)
  }, [watch()])

 


  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {/* <AboutMeForm register={register} dispatch={dispatch} /> */}
        {/* <ContactsForm register={register} trigger={trigger}/> */}
        {/* <ExperienceForm register={register} />
        <ExperienceSummery register={register} /> */}
      <EducationFormFather  register={register} control={control}/>

        <button onClick={() => trigger()}>test</button>
      </form>
    </>
  );
}

export default PDFforms;
