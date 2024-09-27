'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './slider2.module.css';

const SliderPage = () => {
  const [next, setNext] = useState(false);
  let [counter, setCounter] = useState(1);
  const imagePack =[
     '/images/0.jpg', 
     '/images/1.jpg',
     '/images/2.jpg',
     '/images/3.jpg'  
  ]

  const [images , setImages]=useState(imagePack)
   
    
const nextHandler = () => {
    if(counter  === images.length - 1){
      setImages([...images , ...images])
      setCounter(counter +=1)
    }
    if(counter < images.length - 1){
        setCounter(counter += 1);
        setNext(true);
    } 

  };

const prevHandler = () => {
     if(counter <= 0){
      const newImages = [...images]
      newImages.unshift(...images)
       setImages(newImages)
     } else{
        setCounter(counter - 1)
     }
  };


  return (
    <div className={styles.container}>
      <div 
        style={next ? { transform: `translateX(${-600 * counter}px)` } :null}
        className={styles.imageContainer}
      >
        {images.map((item , index)=> {
        return  <img key={index} src={item} />
        })}
      </div>
      <button onClick={nextHandler}>Next</button>
      <button onClick={prevHandler}>Prev</button>
    </div>
  );
};

export default SliderPage;