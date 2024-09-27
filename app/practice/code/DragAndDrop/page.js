'use client'

import React, { useEffect, useState } from 'react';
import styles from './Drag.module.css';

const DragAndDropPage = () => {

  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
     e.dataTransfer.setData("myElement", widgetType);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const widgetType = e.dataTransfer.getData("myElement");
    
    setWidgets([...widgets , widgetType]);
  }

  useEffect(()=>{
    const store = localStorage.getItem("widget")
    const storedWidget = JSON.parse(store)
    if(storedWidget){
      setWidgets([...storedWidget])
    }
  },[])


  useEffect(()=>{
    localStorage.setItem("widget" , JSON.stringify(widgets))
  },[widgets])

  return (
    <div className={styles.app}>
      <div className={styles.widgets}>
        <div
          className={styles.widget}
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget A")}
             >Widget A</div>

        <div
          className={styles.widget}
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget B")}
        >Widget B</div>

        <div
          className={styles.widget}
          draggable
          onDragStart={(e) => handleOnDrag(e, "Widget C")}
        >Widget C</div>
      </div>

      <div className={styles.page} onDrop={handleDrop} onDragOver={handleDragOver}>
        {widgets.map((widgetType, index) => (
          <div className={styles.droppedWidget} key={index}>
            {widgetType}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragAndDropPage;