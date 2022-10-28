import React from 'react'
import profileImg from './assets/profile__img.png'
import shareImg from './assets/share.png'
import moreImg from './assets/dots.png'


export default function Header() {
    return (
        <div className='header'>
            <img src={profileImg} id="profile__img" alt="profile image" />
            <h1>Mcjethro Kalu</h1>
            <img src={shareImg} className="share" alt="share" />
            <img src={moreImg} className="more" alt="more" />
        </div>
    )
}