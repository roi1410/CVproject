import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/SignIn";
import MainPage from "./components/mainpage";
import { ContextProvider } from './components/Context.jsx'
import EditPDF from "./components/EditPDF";

export default function App() {
  return (
    <>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="PDFForms" element={<EditPDF/>}></Route>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/mainpage" element={<MainPage/>}></Route>

            </Route>
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </>
  );
}
