"use client"
import Link from 'next/link';
import styles from './scroll.module.css'
import { useEffect, useRef } from "react";


const ScrollPage = () => {
  
    // const observer = useRef(null)
  
    useEffect(()=>{
       const  observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.classList.add(styles.show)
                }
                 else{
                    entry.target.classList.remove(styles.show)
                }
              
            })
        
        })
        
        const elements = document.querySelectorAll(`.${styles.scrollElement}`);
        elements.forEach((element) =>  observer.observe(element));

   
    },[])


    return (

        <div className={styles.container} >
            <div id='top' className={styles.scrollElement}>Nullam sed ipsum eu nisi venenatis condimentum.</div>
            <div className={styles.scrollElement}>Quisque vitae ex volutpat, facilisis ligula eget, ornare arcu.</div>
            <div className={styles.scrollElement}>Integer bibendum turpis et neque semper, nec venenatis urna condimentum.</div>
            <div className={styles.scrollElement}>Sed eu mauris eleifend, consequat sapien id, ultrices nunc.</div>
            <div className={styles.scrollElement}>Donec tristique purus in tellus dignissim, sed pellentesque nisi pellentesque.</div>
            <div className={styles.scrollElement}>Nullam sed ipsum eu nisi venenatis condimentum.</div>
            <div className={styles.scrollElement}>Quisque vitae ex volutpat, facilisis ligula eget, ornare arcu.</div>
            <div className={styles.scrollElement}>Integer bibendum turpis et neque semper, nec venenatis urna condimentum.</div>
            <div className={styles.scrollElement}>Sed eu mauris eleifend, consequat sapien id, ultrices nunc.</div>
            <div className={styles.scrollElement}>Donec tristique purus in tellus dignissim, sed pellentesque nisi pellentesque.</div>            <div className={styles.scrollElement}>Nullam sed ipsum eu nisi venenatis condimentum.</div>
            <div className={styles.scrollElement}>Quisque vitae ex volutpat, facilisis ligula eget, ornare arcu.</div>
            <div className={styles.scrollElement}>Integer bibendum turpis et neque semper, nec venenatis urna condimentum.</div>
            <div className={styles.scrollElement}>Sed eu mauris eleifend, consequat sapien id, ultrices nunc.</div>
            <div className={styles.scrollElement}>Donec tristique purus in tellus dignissim, sed pellentesque nisi pellentesque.</div>            <div className={styles.scrollElement}>Nullam sed ipsum eu nisi venenatis condimentum.</div>
            <div className={styles.scrollElement}>Quisque vitae ex volutpat, facilisis ligula eget, ornare arcu.</div>
            <div className={styles.scrollElement}>Integer bibendum turpis et neque semper, nec venenatis urna condimentum.</div>
            <div className={styles.scrollElement}>Sed eu mauris eleifend, consequat sapien id, ultrices nunc.</div>
            <div className={styles.scrollElement}>Donec tristique purus in tellus dignissim, sed pellentesque nisi pellentesque.</div>            <div className={styles.scrollElement}>Nullam sed ipsum eu nisi venenatis condimentum.</div>
            <div className={styles.scrollElement}>Quisque vitae ex volutpat, facilisis ligula eget, ornare arcu.</div>
            <div className={styles.scrollElement}>Integer bibendum turpis et neque semper, nec venenatis urna condimentum.</div>
            <div className={styles.scrollElement}>Sed eu mauris eleifend, consequat sapien id, ultrices nunc.</div>
            <div className={styles.scrollElement}>Donec tristique purus in tellus dignissim, sed pellentesque nisi pellentesque.</div>
            <Link href="#top">go to top</Link>

        </div>

    );
};

export default ScrollPage;