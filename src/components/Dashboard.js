import React, { useEffect, useState } from "react";
// import "../style/DashBoard.css";
import axios from "axios";
import './Dashboard.css'

function Dashboard() {
 
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9027/getProducts")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setGetData(response.data); // Update state only if response.data is an array
          console.log(setGetData)
        } else {
          console.log("Invalid data format received from the server");
        }
      })
      .catch((error) => {
        console.log(
          error,
          "error in getting the data from the server in file dashboard"
        );
      });
  }, []);

  const removeHandler = async (id) => {
    try {
      // Send DELETE request to the server
      await axios.delete(`http://localhost:9027/delete/${id}`);
  
      // Update state to reflect the deletion
      const updatedData = getData.filter((item) => item.id !== id);
      setGetData(updatedData);
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };
  
  

  return (
    <>
      <div className="board mb-5 border-bottom">
        <div className="second">
          {getData.map((ev) => (
            <div className="main" key={ev.id}>
              <img
                width="50px"
                height="50px"
                className=""
                src={ev.image}
                alt="image"
              />
              <div className="three">{ev.name}</div>
              <div className=" me-5 fw-bold fs-5"> Rs {ev.price}</div>
              <div> <button className="btn btn-success">Edit</button></div>
              <div> <button className="btn btn-danger" onClick={()=>{removeHandler(ev.id)}}>Delete</button></div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
