'use client'
import React, { useEffect } from 'react';

const page = () => {

    useEffect(()=>{
            const request = indexedDB.open('myDataBaseName' , 1)
    
    request.onerror = (e)=>{
        console.error("something went wrong on indexDB")
        console.log(e);
    }
    
    request.onupgradeneeded = function (){
        const db = request.result;
        const store = db.createObjectStore('cars' , {keyPath:"id"}) // objectStore is look like collection in mongo db
        store.createIndex('cars_color' , ['color'] ,{unique : false})
        store.createIndex('color_and_make' , ['color' , 'make']) ,{unique: false}
    }

    request.onsuccess = ()=>{ // request.success is where you can start interacting with data base
        const db = request.result
        const transaction  = db.transaction('cars' , 'readwrite') // transaction let you perform operation on data base
        // cars is the name of  the collection ,  and readwrite tells that you do both operation read and write on the cars


        const store = transaction.objectStore('cars') // here we say create object sotre on the transaction we created to do our adding updating or deleting operation
        const colorIndex = store.index('cars_color')
        const ModelIndex = store.index('color_and_make')

        store.put({id: 1 , color:'red' , make:"benz"}) 
        store.put({id: 2 , color:'blue' , make:"benz"}) 
        store.put({id: 3, color:'black' , make:"benz"}) // store.put is similar with model.create in mongoose
        store.put({id: 4, color:'red' , make:"benz"}) 
        const idQuery = store.get(4)
        const colorQuery = colorIndex.getAll(['red'])
        const colorMakeQuery= ModelIndex.get(['blue' , 'benz'])

        idQuery.onsuccess = ()=>{
            console.log('idQuery' , idQuery.result);
        }
        colorQuery.onsuccess = ()=>{
            console.log("colorQuery" , colorQuery.result);
        }

        colorMakeQuery.onsuccess = ()=>{
            console.log('make&color' , colorMakeQuery.result);
        }

        transaction.oncomplete = ()=>{
            db.close()
        }
    }
    },[])
    return (
        <div>
            
        </div>
    );
};

export default page;