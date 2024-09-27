"use client"

import { useEffect, useState } from "react";

const Search = () => {
    
    const [data , setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(()=>{
        const fetching = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const result = await res.json()
            if(result){
                setData(result)
            }
        }


        fetching()
    },[])

    const searchHanlder = (e)=>{
       setSearchTerm(e.target.value)
    }

  
    return (
        <div>
            <input onChange={searchHanlder}  value={searchTerm}/>
            <div>
              {data.map((item , index) => {
                const RegSearch = new RegExp(searchTerm, 'gi')
                if(!searchTerm){
                    return null
                }
               
                return <p key={index}>{item.name.match(RegSearch) ? <span>{item.name}</span> : null}</p>
              })}
            </div>
        </div>
    );
};

export default Search;