"use client"
import {BsStarFill} from 'react-icons/bs'
import styles from './start.module.css'
import { useState } from 'react';

const StarRatePage = () => {

    const [rating , setRating] = useState()
    const [hover , setHover] = useState()
    return (
        <div className={styles.container}>
            <div className={styles.widget}>
            


                {[...Array(5)].map((_ , index)=>{

                   const currentValue = index + 1
                    return <div onMouseEnter={()=>setHover(currentValue)} key={index}>
                        <input  id={currentValue} type='radio' value={currentValue}
                         onClick={()=> setRating(currentValue)} />
                        <label className={styles.stars} htmlFor={currentValue}>

                         <BsStarFill color={( hover|| rating ) >= currentValue  ? "yellow" :""}/>
                         </label>
                    </div>
                })}
            </div>            
                    {rating == 1 && <p className={styles.message}>😥 sorry for the unsatisfaction the respond will goes to the owner</p>}
                    {rating == 2 && <p className={styles.message}>😟 sorry if the product did'nt satisfy you , the response will be seen with owner</p>}
                    {rating == 3 && <p className={styles.message}>🙂 i hope in near future we could satisfy you more with our product , the respond will be seen by owner</p>}
                    {rating == 4 && <p className={styles.message}>😊 we glad you liked it </p>}
                    {rating == 5 && <p className={styles.message}>🤩 you Start give us and the producer energy </p>}
        </div>
    );
};

export default StarRatePage;