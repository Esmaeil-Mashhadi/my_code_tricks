'use client'
import { useEffect, useState } from "react"
import styles from './pag.styles.css'
import { useRouter } from "next/navigation"


function Pagination({searchParams}) {
    const [images , setImages] = useState([])
    const router = useRouter()
    const [page , setPage] = useState(()=>{
        if(searchParams?.page){
            return searchParams.page
        }else{
            return 1
        }
    })

    useEffect(()=>{
        const getPhotos = async()=>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
            const data = await res.json()
            console.log(data);
             setImages(data) 
        }
        router.push(`/practice/pagination/button?page=${page}`)
        getPhotos()
    },[page])


    const nextHandler = ()=>{
         setPage(+page + 1)
            router.push(`/practice/pagination/button?page=${page}`)

    }

    const prevHandler = ()=>{
        setPage(+page - 1)
        router.push(`/practice/pagination/button?page=${page.page}`)
    }

  return (
    <div style={{display:"flex" , flexDirection:"column" , width:"400px" , margin:"auto"}}>
            {images.map(item => (
                <img src={item.url} />
            ))}

            <div style={{marginBottom:"50px" , display:"flex" , gap:'20px' , borderRadius:"5px"}}>
                <button onClick={nextHandler}>
                        next
                </button>

                <button onClick={prevHandler}>
                        prev
                </button>
            </div>
    </div>
  )
}

export default Pagination

