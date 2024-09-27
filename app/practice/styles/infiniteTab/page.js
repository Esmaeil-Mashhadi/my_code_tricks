"use client"

import { useEffect, useRef } from 'react';
import styles from './infinite.module.css'

const InfiniteTabPage = () => {


    const containerRef = useRef(null);

    useEffect(() => {
      const containerWidth = containerRef.current.offsetWidth;
      const listItems = containerRef.current.querySelectorAll('li');
  
      const animateItems = () => {
        listItems.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const itemWidth = rect.width;
          if (rect.right < 0) {
            item.style.transform = `translateX(${containerWidth}px)`;
          } else if (rect.left > containerWidth) {
            item.style.transform = `translateX(-${itemWidth}px)`;
          }
        });
  
        requestAnimationFrame(animateItems);
      };
  
      animateItems();
    }, []);



    return (
        <div className={styles.container} ref={containerRef}>
            <ul className={styles.lists}>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
            </ul>
        </div>
    );
};

export default InfiniteTabPage;