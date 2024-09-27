'use client'

import { useQueries, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function page() {


    const fetchFucntion = async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      return await res.json()
    }


 const {data , isLoading } = useQuery({queryKey:["test"] , queryFn :fetchFucntion })

 
 console.log(isLoading);  
  return (
    <div> 
    {isLoading && <h1>...loading</h1>}
        {data?.map((item , index)=>(
            <p key={index}>{item.name}</p>
        ))}
    </div>
  )
}

export default page