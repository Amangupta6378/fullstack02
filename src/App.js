import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Complex from "./components/Complex";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Complex />}> </Route> 
        <Route path="/addProduct" element={<AddProducts/>}></Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
