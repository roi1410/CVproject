import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SingUp from "./components/SingUp";
import PDF from "./PDFComponents/PDF"
import EditPDF from "./components/EditPDF";

import SignIn from "./components/SignIn";
import MainPage from "./components/mainpage";
import { ContextProvider } from './components/Context.jsx'
export default function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<SingUp/>}></Route>
            <Route path="PDFForms" element={<EditPDF/>}></Route>
          </Route>
            <Route path="/signup" element={<SingUp />}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/mainpage" element={<MainPage/>}></Route>

            </Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}
