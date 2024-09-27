'use client'

import { useEffect, useState } from "react";

const LocalPage = () => {

    const name = {name:"esi" , lastName:"mashhadi"}
    const [data ,setData] = useState()
  
    localStorage.setItem("data" , JSON.stringify(name))
    const result2 = localStorage.getItem("data")
    const parsedData = JSON.parse(result2)

    useEffect(()=>{
        
        setData(parsedData.name) 
        
     
    },[])

    const removeHandler = ()=>{
        localStorage.removeItem("data")
        setData("")
    }
    

    return (
        <div>
        <button onClick={removeHandler}>Remove</button>       
        {data} 

        </div>
    );
};

export default LocalPage;