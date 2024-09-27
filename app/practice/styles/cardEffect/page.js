'use client'
import React from 'react';
import styles from './card.module.css'
import { Tilt } from 'react-tilt';

const CardEffectPage = () => {

    const defaultOptions = {
        reverse:        true,  // reverse the tilt direction
        max:            55,     // max tilt rotation (degrees)
        perspective:    500,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.5,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className={styles.container}>
            <Tilt className ={styles.tilt} options = {defaultOptions} >
                <img src='/images/1.jpg'/>
            </Tilt>
        </div>
    );
};

export default CardEffectPage;