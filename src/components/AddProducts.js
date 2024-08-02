import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPassword] = useState("");

  

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
    console.log(setImage);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(setPassword);
  };

  const handleClick = async (e) => {
    // e.preventDefault();

    let data = {
      name: name,
      image: image,
      price: price,
    };

    await axios
      .post("http://localhost:9027", data)
      .then((response) => {
        console.log(response, "Yes, axios is working");
      })
      .catch((error) => alert("Error in sign up"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => handleName(e)}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Image</strong>
            </label>
            <input
              type="text"
              placeholder="image Url"
              autoComplete="off"
              name="image"
              value={image}
              onChange={(e) => handleImage(e)}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Price</strong>
            </label>
            <input
              type="price"
              placeholder="Enter Password"
              autoComplete="off"
              name="price"
              value={price}
              onChange={(e) => handlePassword(e)}
              className="form-control rounded-0"
            />
          </div>

          <div className="d-flex">
            <Link to="/">
            <button
              className="btn btn-border border-1 bg-danger text-white"
              onClick={handleClick}
            >
              Add product
            </button>
            </Link>

            <div className="bg-white ms-4 rounded w-50">
              {/* <h2>Login</h2> */}
              {/* Use Link to wrap around the button */}
              {/* <Link to="/dashboard" className="btn btn-danger text-white">
                Dashboard
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
