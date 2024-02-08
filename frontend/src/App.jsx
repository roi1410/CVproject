import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import MainPage from "./components/mainpage";
import EditPDF from "./components/EditPDF";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
export default function App() {

  return (
    <>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/PDFForms" element={<EditPDF/>}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/PDFForms" element={<EditPDF/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/mainpage" element={<MainPage/>}></Route>
            <Route path="/*" element={<HomePage/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
