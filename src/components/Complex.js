import React, { useState, useEffect, createContext } from "react";
// import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Dashboard from "./Dashboard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from 'axios'


export const context = createContext();
function Complex() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9027/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []); // Empty dependency array means this effect runs only once after the first render

  // const menuItems = [...new Set(products.map((val) => val.color))];

  // const menuItemSize = [...new Set(products.map((val) => val.size))];

  const filterData = (cat) => {
    const newData = products.filter((newVal) => newVal.color === cat);
    setProducts(newData);
  };


  const filterDataSize = (cat) => {
    const newData = products.filter((newVal) => newVal.size === cat);
    setProducts(newData);
  };

  return (
    <div>
      <context.Provider value={{products:products,filterDataSize}}>
        <Navbar />
        <Dashboard/>
        <Main products={products} filterDataSize={filterDataSize} filterData={filterData}/>
        
      </context.Provider>

      
    </div>
    
  );
}

export default Complex;
