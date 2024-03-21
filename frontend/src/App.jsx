import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";

import Context, { ContextProvider } from "./context/Context.jsx"
import EditPDF from "./components/EditPDF";
import AboutMe from "./components/PDFformComponents/AboutMeForm.jsx";
import ContactsForm from "./components/PDFformComponents/ComtactsForm.jsx";
import ExperienceSummery from "./components/PDFformComponents/ExperienceSummery.jsx";
import EducationFormFather from "./components/PDFformComponents/EducationFormFather.jsx";
import  AddProfileImgForm from "./components/PDFformComponents/AddProfileImgForm.jsx";
import SendDataBtn from "./components/PDFformComponents/SendDataBtn.jsx";
import SignUp from "./components/SingUp.jsx";
import HomePage from "./components/HomePage.jsx";
import PremiumPage from "./components/PremiumPage.jsx";
import { useContext, useEffect } from "react";
import Gallery from "./components/galleryComponents/Gallery.jsx";

export default function App() {
  const {checkUserRole}=useContext(Context)
  useEffect(() => {
    checkUserRole()

  }, [])

  return (
    <>
      <ContextProvider>
 
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<HomePage/>} ></Route>
              <Route path="Premium" element={<PremiumPage/>}></Route>
              <Route path="PDFForms" element={<EditPDF />}>
                <Route path="" element={<AboutMe />}></Route>
                <Route path="ContactsForm" element={<ContactsForm />}></Route>
                <Route
                  path="ExperienceSummery"
                  element={<ExperienceSummery />}
                ></Route>
                <Route
                  path="EducationFormFather"
                  element={<EducationFormFather />}
                ></Route>
                <Route
                  path="CertificatesForm"
                  element={<AddProfileImgForm />}
                ></Route>
                <Route path="SendData" element={<SendDataBtn />}></Route>
              </Route>
              <Route path="Gallery" element={<Gallery />}></Route>
              <Route path="signing" element={<SignIn />}></Route>
              <Route path="singUp" element={<SignUp />}></Route>
           
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
