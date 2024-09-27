
'use client'
import {motion} from 'framer-motion'
import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { childVariants, variantes } from './utils/variables'
function FramePage() {
    const [show , setShow] = useState(false)
  return (
    <motion.div className={styles.container} variantes ={variantes} >
            <motion.h1 transition={{delay:1}}
             animate={{fontSize:'20px' , color:"aqua" ,  x:"20px"}} exit="exit">
            hello framer motion
            </motion.h1>

            <motion.h2 initial={{rotate:-10 , opacity:0}} animate={{rotate:0, opacity:1 , x:50 }}>
                we are testing it now 
            </motion.h2>
            <motion.button onClick={()=>setShow(!show)} initial={{y:"-50vh"}} animate={{y:'0vh'}}
             transition={{duration:.5 , type:"spring" , stiffness:100}}
             href="">
                click here to see the button
            </motion.button>

            <motion.button initial={{opacity:0 , x:100}}
             animate ={show? {opacity:1 , x:50}: null}
            >
                hey there is a button
            </motion.button>

            <Link href={'framerMotion/childPage'}>
                <motion.p variants={childVariants} whileHover="hover">
                    go to child page                
                </motion.p>
            </Link>
    </motion.div>
  )
}

export default FramePage