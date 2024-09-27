'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './circle.module.css'

const CirclePage = () => {
   
    let [number , setNumber] = useState(1)
    
   useEffect(()=>{
    const interval =  setInterval(() => {
        setNumber(number += 1)  
    },10 );
 
      if (number === 100){
        clearInterval(interval)
      }

      return ()=>{
        clearInterval(interval)
      }
  
  
   },[number])       
  

    return (
        <div className={styles.container}>
            <div className={styles.circle} style={{background:`conic-gradient(aqua  ${number * 3.6}deg , blue ${0}deg) `}}>
                <span>{`${number}%`}</span>
            </div>
        </div>
    );
};

export default CirclePage;