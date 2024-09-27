'use client'
import React from 'react';

const page = () => {
     const getDuration = (e)=>{
        const file = e.target.files[0]
        const video = document.createElement('video') //creates <video src=""></video> tag
        video.preload = 'metadata' // meta data specefiy that only duration dimension and suhc information should be uploaded not entire video

        video.onloadeddata = ()=>{
            console.log('duration is' , video.duration);
        }

        video.src = URL.createObjectURL(file)
    }
    return (
        <div>
            <form action="" method='post'>
                <input type='file' accept='video/*' onChange={getDuration} />
                
            </form>


        </div>
    );
};

export default page;


/**
 * Overall, the process of using URL.createObjectURL()
 *  with videos is similar to using readAsDataURL() with images, providing 
 * a temporary URL that represents the file for easy integration with HTML elements like <video>.
 */