'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './child.module.css';
import { useRouter } from 'next/navigation';
import { backDrop, childVariants, modalButton, variantes } from '../utils/variables';



function Child() {
  const router = useRouter();
  const [showModal , setShowModal] = useState(false)

  return (
    <motion.div  style={{display:"flex" , flexDirection:"column" , border:"solid"}} 
    variants={variantes} initial="hidden" animate='visible' exit="exit">
      parent
      <motion.p style={{width:"100px"}} variants={childVariants}>
        child
      </motion.p>

      <motion.button onClick={()=> router.back()}>
          back
      </motion.button>

      <AnimatePresence>
        {showModal && 
          <motion.div exit="exit" variants={backDrop} initial="hidden" animate="visible" className={styles.backDrop}>
              <motion.p>
                this is modal
              </motion.p>

              <motion.button onClick={()=>setShowModal(false)}>
                exit modal
              </motion.button>

          </motion.div>
        }
        </AnimatePresence>

        <motion.button  onClick={()=>setShowModal(true)}>
          show modal
        </motion.button>

        <motion.div style={{width:"fit-content"}}
        drag
      >
        draggable element
      </motion.div>
    
    </motion.div>
  );
}
//dragConstraints={{left:0 , top:0 , right:0 , bottom:0}}
export default Child;
