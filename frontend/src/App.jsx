import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SingUp from "./components/SingUp";
import PDF from "./PDFComponents/PDF"
import EditPDF from "./components/EditPDF";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<SingUp/>}></Route>
            <Route path="PDFForms" element={<EditPDF/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
