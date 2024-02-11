import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import MainPage from "./components/mainpage";
import { ContextProvider } from "./components/Context.jsx";
import EditPDF from "./components/EditPDF";
import AboutMe from "./components/PDFformComponents/AboutMeForm.jsx";
import ContactsForm from "./components/PDFformComponents/ComtactsForm.jsx";
import ExperienceSummery from "./components/PDFformComponents/ExperienceSummery.jsx";
import EducationFormFather from "./components/PDFformComponents/EducationFormFather.jsx";
import CertificatesForm from "./components/PDFformComponents/CertificatesForm.jsx";
import SendDataBtn from "./components/PDFformComponents/SendDataBtn.jsx";

export default function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
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
                  element={<CertificatesForm />}
                ></Route>
                <Route path="SendData" element={<SendDataBtn />}></Route>
              </Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/mainpage" element={<MainPage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
