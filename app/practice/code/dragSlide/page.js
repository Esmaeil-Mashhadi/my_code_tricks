'use client'

import { useEffect, useRef } from "react";
import styles from './drag.module.css'

export default function MyComponent() {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const scrollToRight = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
        }
      };
  
      window.addEventListener('mousemove', scrollToRight);
  
      return () => {
        window.removeEventListener('mousemove', scrollToRight);
      };
    }, []);
  
    return (
      <div>
        <div className={styles.container} ref={containerRef}>
          {/* Content */}
        </div>
      </div>
    );
  }