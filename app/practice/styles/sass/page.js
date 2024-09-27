import React from 'react'
import './style.scss'
import Link from 'next/link'

function SassPage() {
  return (
    <div className='container'>
        <ul>
            <div className='topContainer'>
                <p>text sample</p>
                <p>text sample</p>
                <p>text sample</p>
            </div>
            <li>
                    <Link href="">go there</Link>
            </li>
            <li>
                    <Link href="">go there</Link>
            </li>
            <li>
                    <Link href="">go there</Link>
            </li>
            <li>
                    <Link href="">go there</Link>
            </li>
            <li>
                    <Link href="">go there</Link>
            </li>
            <li>
                    <Link href="">go there</Link>
            </li>
        </ul>
    
        <p className="loop-1">loop text</p>
        <p className="loop-2">loop text</p>
        <p className="loop-3">loop text</p>
        <p className="loop-4">loop text</p>
        <p className="loop-5">loop text</p>
    </div>
  )
}

export default SassPage