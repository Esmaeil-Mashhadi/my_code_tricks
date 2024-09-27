'use client'
import React from 'react';
import { useSelector } from 'react-redux';

const profile = () => {
    const data = useSelector((state)=> state.addReducer)
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default profile;