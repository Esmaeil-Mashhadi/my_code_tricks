'use client'
import React, { createElement, useEffect, useRef, useState } from 'react';
import styles from './uploadVideo.module.css'
//icons
import {FaPause} from 'react-icons/fa'
import {FaPlay} from 'react-icons/fa'


const page = () => {

  const [elements , setElements]= useState([])
  const [clicked , setClicked] = useState({x:0 , y:0})
  const [video , setVideo] = useState("")
  const [isPlaying , setIsPlaying] = useState(false)

  const {x , y} = clicked

  const inputRef = useRef()
  const videoRef = useRef();

  const effectHandler = (e)=>{
    
    const {clientX , clientY} = e
    const edge = e.target.getBoundingClientRect()
    const {left , top} = edge

    const x =clientX - left
    const y = clientY - top
    setClicked({x ,y})

    inputRef.current.addEventListener('change', (e)=>{
      const file = e.target.files[0]
      const video = URL.createObjectURL(file)
      setVideo(video)
      
    })
    
    inputRef.current.click()
  }


  useEffect(()=>{
    
    if(x && y){
      const span = createElement('span' , {
        className:styles.spanElement,
        style:{left:`${x}px` , top:`${y}px`}
      })
  
      setElements([...elements , span])
    }

    
  },[clicked]) 

  
  useEffect(()=>{
      if(isPlaying){
          videoRef?.current?.play()
        }else{
      videoRef?.current?.pause()
    }
  },[isPlaying])
  
  const pauseHandler = ()=>{
    setIsPlaying(false)
    
  }
  
  const playHandler = ()=>{
    setIsPlaying(true)
 }

  return (
    <div className={styles.container}>
       <div className={styles.form}>
        <button onClick={effectHandler} className={styles.button}> 
        {elements.map((element , index)=> { 
          return <React.Fragment key={index}>{element}</React.Fragment>
        })
        }
       <p>upload +</p> </button>
        <div className={styles.videoContainer}>
         {video && (
          <video ref={videoRef} src={video} className={styles.video}  onPlay={playHandler} onPause={pauseHandler}>
          
          </video>)}
        <input type="file" ref={inputRef} style={{ display: 'none' }}  />
        {isPlaying ? <button onClick={pauseHandler} className={styles.pause}><FaPause/></button> : 
        <button onClick={playHandler} className={styles.play}><FaPlay/></button>
        }
        
        </div>
        
      </div>
    </div>
  );
};

export default page;