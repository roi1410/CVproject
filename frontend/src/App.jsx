import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SingUp from "./components/SingUp";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<SingUp />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
