'use client'
import { useState } from 'react'
import styles from './page.module.css'

function page() {


    const [direction , setDirection] = useState({
        x:"0",
        y:"0"
    })
    const moveHandler = (e)=>{
        const clientX = e.clientX
        const clientY = e.clientY
        const {width , height} = e.currentTarget.getBoundingClientRect()
        console.log(width);
        const x = (clientX / width - 0.5) * 150
        const y = (clientY /height - 0.5) * 150
        setDirection({x , y})

    }

    const positionStyle = {
        '--x': `${direction.x}px`,
        '--y': `${direction.y}px`
    }

    console.log(positionStyle);

  return (
    <div style={positionStyle}  onMouseMove={moveHandler} className={styles.container}>
        <button onClick={()=>console.log("say hi")}>Just a Button</button>
    </div>
  )
}

export default page