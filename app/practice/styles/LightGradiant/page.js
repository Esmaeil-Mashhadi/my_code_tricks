'use client'
import { useState } from 'react';
import styles from './light.module.css'
const LightPage = () => {
    const [position , setPosition] = useState({x:0 , y:0})
    const {x , y} = position

    const moveHandler =(e)=> {
        setPosition({
            x:e.clientX ,
            y:e.clientY
        })
    }

    const lightStyle = {
        '--x': `${x}px`,
        '--y': `${y}px`,
    }

    return (
        <div>
            <section onMouseMove={moveHandler}  className={styles.section}>
                <h2>Light</h2>
                <div
                 className={styles.light} style={lightStyle}></div>
            </section>
        </div>
    );
};

export default LightPage;