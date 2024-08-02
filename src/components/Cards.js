import React, { useContext } from "react";
import { context } from "./Complex";

const Cards = () => {
  const { products } = useContext(context);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {products.map((item) => {
        return (
          <div className="flex mt-4" style={{ width: "300px" }}>
            <div>
              <div>
                <img width="300px" src={item.image}></img>
              </div>
              <div>
                <h5 className="mt-2">{item.title}</h5>
                <p>{item.disc}</p>
              </div>
              <div>
                <del>Rs 999</del>
                <h4>{item.price}</h4>
              </div>
              <div>
                {" "}
                <button className="border  px-2" style={{}}>
                  {item.type}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
