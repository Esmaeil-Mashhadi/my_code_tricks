'use client'
import React from 'react';
import {AnimatePresence,motion} from 'framer-motion'
const MotionContainer = ({children}) => {
    return (
        <AnimatePresence>
                {children}
        </AnimatePresence>
    );
};

export default MotionContainer;