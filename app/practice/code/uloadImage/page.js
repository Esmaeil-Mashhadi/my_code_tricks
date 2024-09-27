'use client'
import createHttpError from 'http-errors'
import React, { useEffect, useState } from 'react'
const path = require('path')

function page() {

  const [images, setImages] =useState([]) // files got from typed file input 
  const [clientImage , setClientImage] = useState([]) //'image got from file reader'
  const [DBdata , setDBData] = useState([])//url  image came from data base

  const dbImage = DBdata.image || []

  const uploadHandler=(index)=>{

    const fileInput = document.createElement("input")
    fileInput.type = "file"
    fileInput.addEventListener('change' , (e)=>{
      const file = e.target.files[0]
      const allowedTypes = ['.jpg' , 'jpeg' , '.png']
      const ext = path.extname(file.name)
    if(!allowedTypes.includes(ext)){
      try {
        throw new Error("format is not supported")
      } catch (error) {
        return console.log(error)
      }
      
    }
     
      const reader = new FileReader()
      

      reader.onload =(e)=>{
        const dataURL = e.target.result;
        setClientImage((prevImages) => {
          const updatedImages = [...prevImages];
          
          updatedImages[index] = dataURL;
          return updatedImages;
        })

        
      }
      reader.readAsDataURL(file)

      setImages((prevImage)=>{
        return [...prevImage , file]
      })
      
    })
    fileInput.click(); 
  }



  const sendHandler = async()=>{
    const formData = new FormData()
    images.forEach((image)=>{
      formData.append('images' , image)
    })
   const res  = await fetch("http://localhost:4000/upload/image" , {
    method:"POST" , body:formData
   })

   const data = await res.json()
  }

  useEffect(()=>{
    const gettingImages = async()=>{
      const res = await fetch('http://localhost:4000/upload/image')
      const data = await res.json()
      setDBData(data)
      
    }
    gettingImages()
  },[])



 return (
    <div className='container'>
      {[...Array(3)].map((item , index) => (<div  onClick={()=>uploadHandler(index)} key={index} className='uploadContainer'>
          {dbImage[index] ? <img className='imageDown' src={dbImage[index].image}/> :clientImage[index] ? <img className='imageDown' src={clientImage[index]} /> :<p>+</p>} 
        

    </div>))}

    <button onClick={sendHandler}>send file</button>


    </div>
  )
}

export default page


