



import React from "react";
import { useLoaderData , Link } from "react-router-dom";

const Career = () => {
    
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>This is Career Page</h1>
      <ul className="grid grid-cols-3 gap-3">
        {data.map((item) => {
          return (
            <>
              <li>
                
                <h1>{item.title}</h1>
                <img className="h-80 flex center" src={item.image} alt="" />
                <h1>{item.description}</h1>
                


              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export const CareerLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default Career;