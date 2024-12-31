import { useState, useEffect } from "react";


import React from 'react'





const Useeffect = () => {

    

  const [setProData] = useEffect([]);



    async function API() {

       

        let res = await fetch("htps://jsonplaceholder.tyicode.com/post");
        let data = await res.json();    
        setProData(data);
      }
  
      useEffect(() => {
        API();
      }, []);
  

  return (
    <div>

    </div>
  )
}

export default Useeffect