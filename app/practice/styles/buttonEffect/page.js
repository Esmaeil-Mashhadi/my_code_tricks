"use client"
import Link from 'next/link';
import styles from './Ref.module.css'
import { createElement, useState } from 'react';
import { useEffect, useRef } from "react";
import React from 'react';

const RefPage = () => {

     const [elements, setElements] = useState([]);
     const [btnclick , setBtnclick] = useState({x:0 , y:0})

    const clickHandler=(e)=>{

     const {clientX , clientY} = e
       const rect = e.target.getBoundingClientRect()
       const xResult = clientX - rect.left;
       const yResult = clientY - rect.top;

    setBtnclick({
        x:xResult , y:yResult
    })
    
    
}

     const {x , y} = btnclick

    useEffect(()=>{
        if(x && y){
            const newElement = createElement("span", {className:`${styles.show}`, style:{left:`${x}px` , top:`${y}px`}}) 
    setElements([...elements, newElement]); 
        }
       
    },[btnclick])
    

    return (
        <div>
            <button onClick={clickHandler}  className={styles.btn}>click Me
              {elements.map((item , index)=>{
                return <React.Fragment key={index}>{item}</React.Fragment>
              })}
            </button>


        </div>
    );
};

export default RefPage;