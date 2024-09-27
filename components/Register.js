'use client'
import React, { useState } from 'react';

const Register = ({permission , remove}) => {
    const [value , setValue] = useState({
        email : "",
        password: "",
    })


    const signOutHanlder = async()=>{
       await remove()
       
    }

    const changeHandler = (e)=>{
        const {name} = e.target
        setValue({
            ...value , [name] : e.target.value 
        })
    }

    const sendHandler = async()=>{
      const res =  await fetch('/api/user', {
            method:"POST" , body :JSON.stringify(value) , headers : {'Content-Type' : "application/json"}
        })
         const {message} = await res.json()
         console.log(message);
   
    }


    return (
        <div>
         {!permission ? 
        <div>
            <label>email</label>
            <input name='email' onChange={changeHandler} />
            <label>password</label>
            <input  name='password'  onChange={changeHandler}/>
            <button  onClick={sendHandler}>SEND</button>
        </div> : 
             <button onClick={signOutHanlder}>SignOut</button>}
        </div>
    );
};

export default Register;