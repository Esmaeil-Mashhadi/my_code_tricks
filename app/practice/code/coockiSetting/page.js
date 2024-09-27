import Register from '@/components/Register';
import React from 'react';
import {cookies} from 'next/headers'
import { decode } from 'jsonwebtoken';

const CookiTest = () => {
    const permission = cookies().get('jwt') // returns boolean
    const remove = async()=>{
        'use server'
        return cookies().delete('jwt') // delete jwt
    }
    return (
        <div>
            <Register permission = {permission} remove = {remove} />
        </div>
    );
};

export default CookiTest;