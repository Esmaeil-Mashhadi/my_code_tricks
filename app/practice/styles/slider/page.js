'use client'

import { useEffect, useState, useRef } from 'react';
import styles from './slider.module.css'

import { AiOutlineDoubleRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft } from 'react-icons/ai'

const Slider = () => {

const [translate , setTranslate] = useState(0)
const [coordinate , setCordinate] =useState({
    start:null , end:null
})
  const images = [
    '/images/0.jpg',
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg'
  ]


 const rightHandler = ()=>{
    setCordinate({})
    setTranslate((prev)=>{
       return prev -= 100
    })
 }

 const leftHandler = ()=>{
     setCordinate({})
    setTranslate((prev)=>{
        return prev += 100
     })
 }

 const handleMove = (e)=>{
    console.log(e.clientX);
 }

 useEffect(()=>{
    if(coordinate.start && coordinate.end){
        if( coordinate.start > coordinate.end){
            rightHandler()
        }else{
            leftHandler()
        }

    }

 },[coordinate])

 const handleDragEnd = (e)=>{
    setCordinate({...coordinate , end : e.clientX })
 }

 const handlDragStart = (e)=>{
    setCordinate({...coordinate , start : e.clientX })
    // const {width} = e.target.getBoundingClientRect();
 }

 console.log(coordinate);
 const transFormStyle = {
    '--translateX': `${translate}%`
 }

  return (
    <div
     oncli={handleMove}
      className={styles.container}
      onDragStart={handlDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.imageContainer} draggable ="true" style={transFormStyle}>
        {images.map((image, index) => (
          <img  style={{userSelect:'none'}} key={index} src={image}  />
        ))}
      </div>
      <button onClick={rightHandler} className={styles.right}><AiOutlineDoubleRight /></button>
      <button onClick={leftHandler} className={styles.left}><AiOutlineDoubleLeft /></button>
    </div>
  );
};

export default Slider;