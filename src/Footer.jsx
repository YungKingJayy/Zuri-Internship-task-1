import React from 'react'
import zuriLogo from './assets/zuri intern logo.png'
import I4G from './assets/I4G.png'


export default function Footer() {
    return (
        <footer>
            <img src={zuriLogo} alt="logo" />
            <div className="dot"></div>
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt="logo" />
        </footer>
    )
}